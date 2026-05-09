"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";

const tabs = [
  { id: "home", label: "HOME", href: "/", kind: "hash" as const },
  { id: "products", label: "PRODUCTS", href: "/products", kind: "route" as const },
  { id: "market", label: "MARKET", href: "#market", kind: "hash" as const },
  { id: "vault", label: "VAULT", href: "#vault", kind: "hash" as const },
  { id: "grading", label: "GRADING", href: "#grading", kind: "hash" as const },
  { id: "auctions", label: "AUCTIONS", href: "#auctions", kind: "hash" as const },
];

export default function HeaderNav() {
  const [activeTab, setActiveTab] = useState("home");
  const navRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateFromHash = () => {
      if (pathname === "/products") {
        setActiveTab("products");
        return;
      }

      const hash = window.location.hash.replace("#", "");
      setActiveTab(hash || "home");
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => window.removeEventListener("hashchange", updateFromHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/products") {
      setActiveTab("products");
    }
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      const indicator = indicatorRef.current;
      if (!nav || !indicator) return;

      const el = nav.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement | null;
      if (!el) {
        indicator.style.width = "0px";
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      const left = rect.left - navRect.left;
      const width = rect.width;

      indicator.style.transform = `translateX(${left}px)`;
      indicator.style.width = `${width}px`;
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 dark:bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_0_0_rgba(255,255,255,0.05)]">
      <div className="relative flex items-center px-margin py-4 w-full max-w-[1440px] mx-auto gap-10">
        <FuzzyText
          baseIntensity={0.18}
          hoverIntensity={0.55}
          enableHover
          fontSize="1.5rem"
          fontWeight={700}
          color="#00FFFF"
          className="block shrink-0 leading-none"
        >
          MIDNIGHT EXCHANGE
        </FuzzyText>
        <nav
          ref={navRef}
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-end gap-10 lg:gap-14"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            const tabClassName = `flex flex-col items-start gap-1 pb-2 font-label-caps text-label-caps transition-colors duration-300 active:scale-95 hover:text-primary dark:hover:text-primary-fixed ${
              isActive
                ? "text-primary dark:text-primary-fixed"
                : "text-on-surface-variant dark:text-on-surface-variant"
            }`;

            return (
              tab.kind === "route" ? (
                <Link key={tab.id} data-tab={tab.id} className={tabClassName} href={tab.href}>
                  {tab.label}
                </Link>
              ) : (
                <a
                  key={tab.id}
                  data-tab={tab.id}
                  className={tabClassName}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </a>
              )
            );
          })}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-[4px] rounded-full bg-[#00fbfb] shadow-[0_0_16px_0_rgba(0,251,251,1)] ring-1 ring-[#00fbfb]/40 transition-all duration-300"
            style={{ transform: "translateX(0px)", width: 0 }}
          />
        </nav>
      </div>
    </header>
  );
}
