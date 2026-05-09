"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FuzzyText from "@/components/FuzzyText";

const tabs = [
  { id: "home", label: "HOME", href: "/", kind: "route" as const },
  { id: "categories", label: "CATEGORIES", href: "/products", kind: "route" as const },
  { id: "brands", label: "BRANDS", href: "/products", kind: "route" as const },
  { id: "aboutus", label: "ABOUT US", href: "/about", kind: "route" as const },
  { id: "contactus", label: "CONTACT US", href: "/#contactus", kind: "route" as const },
];

export default function HeaderNav() {
  const [activeHash, setActiveHash] = useState("");
  const [hoverTab, setHoverTab] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash.replace("#", ""));
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const activeTab =
    pathname === "/about"
      ? "aboutus"
      : pathname === "/products"
        ? hoverTab === "brands"
          ? "brands"
          : "categories"
        : activeHash === "contactus"
          ? "contactus"
          : "home";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
    setMobileBrandsOpen(false);
  };

  const renderTab = (tab: (typeof tabs)[number], mobile = false) => {
    const isActive = activeTab === tab.id;

    const tabClassName = mobile
      ? `inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 font-label-caps text-[10px] tracking-[0.18em] transition-colors duration-300 active:scale-95 ${
          isActive
            ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100"
            : "border-white/10 bg-white/5 text-zinc-400"
        }`
      : `group inline-flex items-center gap-2 font-label-caps text-xs tracking-[0.24em] transition-colors duration-300 active:scale-95 ${
          isActive
            ? "text-cyan-100"
            : "text-zinc-400 hover:text-cyan-100"
        }`;

    const commonProps = {
      onMouseEnter: () => setHoverTab(tab.id),
      onFocus: () => setHoverTab(tab.id),
      onMouseLeave: () => setHoverTab(""),
    };

    const content = (
      <>
        {!mobile && (
          <span
            className={`inline-block h-4 w-[2px] ${
              isActive
                ? "bg-cyan-200 animate-terminal-bar-breathe"
                : "bg-zinc-500/80 group-hover:bg-cyan-200/90 group-hover:animate-terminal-bar-breathe"
            }`}
          />
        )}
        <span className="terminal-tab-text">{tab.label}</span>
      </>
    );

    return tab.kind === "route" ? (
      <Link key={tab.id} data-tab={tab.id} className={tabClassName} href={tab.href} {...commonProps}>
        {content}
      </Link>
    ) : (
      <a key={tab.id} data-tab={tab.id} className={tabClassName} href={tab.href} {...commonProps}>
        {content}
      </a>
    );
  };

  return (
    <header className="relative fixed top-0 z-50 w-full bg-surface/90 py-2 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] animate-surface-frame">
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center gap-4 px-4 py-2 md:gap-10 md:px-margin md:py-4">
        <button
          type="button"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-label="Open mobile navigation"
          aria-expanded={mobileMenuOpen}
          className="relative z-20 inline-flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/5 text-zinc-100 transition md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>

        <FuzzyText
          baseIntensity={0.18}
          hoverIntensity={0.55}
          enableHover
          fontSize="1rem"
          fontWeight={700}
          color="#00FFFF"
          className="absolute left-1/2 z-10 block -translate-x-1/2 shrink-0 text-sm leading-none animate-surface-breathe md:static md:translate-x-0 md:text-[1.5rem]"
        >
          MIDNIGHT STORE
        </FuzzyText>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-5 border border-cyan-300/15 bg-[linear-gradient(90deg,rgba(8,12,16,0.95),rgba(13,14,22,0.92),rgba(11,16,20,0.95))] px-5 py-2 backdrop-blur-md">
          {tabs.map((tab) => renderTab(tab))}
        </nav>

        <div className="ml-auto flex items-center">
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded border border-cyan-300/30 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-100 transition-all duration-300 placeholder-zinc-500 hover:border-cyan-300/50 focus:border-cyan-300/60 focus:bg-zinc-900/70 focus:outline-none focus:shadow-[0_0_8px_rgba(0,255,255,0.2)] md:px-4 md:py-2 md:text-sm"
            />
            <svg
              className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-zinc-500 transition-colors group-hover:text-cyan-300/70 md:right-3 md:h-4 md:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <svg
            className="sm:hidden h-4 w-4 cursor-pointer text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/20 bg-surface/95 px-4 pb-4 pt-3">
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded border border-cyan-300/30 bg-zinc-900/60 px-4 py-3 pr-10 text-sm text-zinc-100 transition placeholder-zinc-500 focus:border-cyan-300/60 focus:bg-zinc-900/80 focus:outline-none"
              />
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <button
              type="button"
              onClick={() => setMobileCategoriesOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded border border-white/10 bg-white/5 px-4 py-3 text-left font-label-caps text-xs tracking-[0.2em] text-zinc-100"
            >
              <span>CATEGORIES</span>
              <span className={`transition-transform ${mobileCategoriesOpen ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>

            {mobileCategoriesOpen && (
              <div className="space-y-2 rounded border border-white/10 bg-zinc-950/70 p-3">
                {[
                  "Accessories",
                  "Clothing",
                  "Footwear",
                  "Home Decor",
                  "Sale",
                ].map((item) => (
                  <a
                    key={item}
                    href="/products"
                    className="block rounded px-2 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-cyan-300"
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileBrandsOpen((value) => !value)}
              className="flex w-full items-center justify-between rounded border border-white/10 bg-white/5 px-4 py-3 text-left font-label-caps text-xs tracking-[0.2em] text-zinc-100"
            >
              <span>BRANDS</span>
              <span className={`transition-transform ${mobileBrandsOpen ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>

            {mobileBrandsOpen && (
              <div className="space-y-2 rounded border border-white/10 bg-zinc-950/70 p-3">
                {[
                  "Budweiser",
                  "Chevrolet",
                  "Coca-Cola",
                  "Ducati",
                  "Grey Goose",
                  "Guinness",
                  "Harley-Davidson",
                  "Indian Motorcycle",
                  "Jack Daniel's",
                  "Jeep",
                ].map((item) => (
                  <a
                    key={item}
                    href="/products"
                    className="block rounded px-2 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-cyan-300"
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div
        onMouseEnter={() => {}}
        className="absolute left-1/2 top-[74%] z-50 hidden -translate-x-1/2 md:block"
      >
        {hoverTab === "categories" && (
          <div
            onMouseEnter={() => setHoverTab("categories")}
            onMouseLeave={() => setHoverTab("")}
            className="w-[300px] rounded border border-white/10 bg-zinc-950/80 p-4 shadow-xl backdrop-blur md:w-[360px]"
          >
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Categories</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Accessories",
                "Clothing",
                "Footwear",
                "Home Decor",
                "Sale",
              ].map((c) => (
                <a key={c} href="/products" className="block rounded px-2 py-1 text-sm text-zinc-300 hover:bg-white/5">
                  {c}
                </a>
              ))}
            </div>
          </div>
        )}

        {hoverTab === "brands" && (
          <div
            onMouseEnter={() => setHoverTab("brands")}
            onMouseLeave={() => setHoverTab("")}
            className="max-h-[500px] w-[1000px] overflow-y-auto rounded border border-white/10 bg-zinc-950/80 p-4 shadow-xl backdrop-blur"
          >
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Brands</div>
            <div className="grid grid-cols-5 gap-6 text-sm text-zinc-300">
              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Business</div>
                <ul className="space-y-1">
                  {["Budweiser","Chevrolet","Coca-Cola","Ducati","Grey Goose","Guinness","Harley-Davidson","Indian Motorcycle","Jack Daniel's","Jeep","Marlboro","Monster Energy","Starbucks","The Famous Grouse","The Kraken"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Culture</div>
                <ul className="space-y-1">
                  {["Alpha Kappa Alpha","America","Bob Kevoian","Calvin and Hobbes","Captain Morgan","Father's Day","Independence Hall","Mother's Day","Peanuts","Route 66","Royal Navy","Smokey Bear","US Marine Corps","US Navy","USA","Veteran Day"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">K-Pop</div>
                <ul className="space-y-1">
                  {["Aespa","BTS","G-Dragon"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
                <div className="mb-2 mt-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Movie</div>
                <ul className="space-y-1">
                  {["Avatar","Batman","Dragon Ball","Godzilla","Harry Potter","James Bond 007","Marty Supreme","Naruto","One Piece","Peanut","Pokémon","Scream","Star Trek","Star Wars","Stranger Things","The Lord of the Rings","The Muppet Show","The Simpsons","Top Gun","Winnie the Pooh","Zootopia"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Music</div>
                <ul className="space-y-1">
                  {["Bruce Springsteen","Clint Black","Dolly Parton","Elvis Presley","Freddie Mercury","Jimmy Buffett","Kenny Chesney","Michael Jackson","Prince","Rock the Country","Westlife","Willie Nelson"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
                <div className="mb-2 mt-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Other</div>
                <ul className="space-y-1">
                  {["DC","Friday The 13th","La La Land","Marvel","Mission Impossible","Pirates of the Caribbean","Taxi Driver","The Texas Chainsaw Massacre"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Rock Band</div>
                <ul className="space-y-1">
                  {["AC/DC","Aerosmith","Black Stone Cherry","Guns N' Roses","Iron Maiden","KISS","Led Zeppelin","Megadeth","Metallica","Pink Floyd","Queen","RUSH","Sleep Token","The Beatles","The Eagles","The Rolling Stones","Thirty Seconds to Mars","Van Halen","Wu-Tang Clan"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6 border-t border-white/5 pt-6 text-sm text-zinc-300">
              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Sport</div>
                <ul className="space-y-1">
                  {["MLB","NBA","NCAA","NFL","NHL","Other Sport","Soccer"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Tabletop</div>
                <ul className="space-y-1">
                  {["Dungeons & Dragons"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Video Game</div>
                <ul className="space-y-1">
                  {["Fallout","Sonic The Hedgehog","World of Warcraft","Zelda"].map((b) => (
                    <li key={b}><a className="text-xs hover:text-cyan-300" href="/products">{b}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes terminal-bar-breathe {
          0% {
            opacity: 0.42;
            transform: scaleY(0.72);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
          100% {
            opacity: 0.42;
            transform: scaleY(0.72);
          }
        }

        @keyframes terminal-text-flicker {
          0% {
            opacity: 0.86;
          }
          45% {
            opacity: 1;
          }
          55% {
            opacity: 0.78;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-terminal-bar-breathe {
          animation: terminal-bar-breathe 1.35s ease-in-out infinite;
          transform-origin: center;
        }

        .terminal-tab-text {
          animation: terminal-text-flicker 2.2s steps(2, end) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-terminal-bar-breathe,
          .terminal-tab-text {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
