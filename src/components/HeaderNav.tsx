"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";

const tabs = [
  { id: "home", label: "HOME", href: "/", kind: "route" as const },
  { id: "products", label: "PRODUCTS", href: "/products", kind: "route" as const },
  { id: "market", label: "MARKET", href: "/#market", kind: "route" as const },
];

export default function HeaderNav() {
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash.replace("#", ""));
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const activeTab = pathname === "/products" ? "products" : activeHash === "market" ? "market" : "home";

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
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 border border-cyan-300/35 bg-gradient-to-r from-[#0a1014]/95 via-[#111118]/95 to-[#140d1d]/95 p-1 shadow-[0_0_26px_rgba(0,251,251,0.18),0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            const tabClassName = `inline-flex items-center justify-center border px-4 py-2 font-label-caps text-label-caps tracking-[0.18em] transition-all duration-300 active:scale-95 ${
              isActive
                ? "border-cyan-300/80 bg-gradient-to-b from-cyan-400/20 to-cyan-500/5 text-cyan-100 [text-shadow:0_0_14px_rgba(0,251,251,0.9)] shadow-[inset_0_0_0_1px_rgba(0,251,251,0.25),0_0_22px_rgba(0,251,251,0.35)]"
                : "border-fuchsia-300/20 bg-black/20 text-zinc-300 hover:border-cyan-300/60 hover:bg-cyan-500/10 hover:text-cyan-100 hover:[text-shadow:0_0_10px_rgba(0,251,251,0.7)]"
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
                >
                  {tab.label}
                </a>
              )
            );
          })}
        </nav>
      </div>
    </header>
  );
}
