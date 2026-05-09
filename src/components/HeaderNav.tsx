"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";

const tabs = [
  { id: "home", label: "HOME", href: "/", kind: "route" as const },
  { id: "categories", label: "CATEGORIES", href: "/products", kind: "route" as const },
  { id: "brands", label: "BRANDS", href: "/products", kind: "route" as const },
  { id: "aboutus", label: "ABOUT US", href: "/#aboutus", kind: "route" as const },
  { id: "contactus", label: "CONTACT US", href: "/#contactus", kind: "route" as const },

];

export default function HeaderNav() {
  const [activeHash, setActiveHash] = useState("");
  const [hoverTab, setHoverTab] = useState("");
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
    <header className="fixed top-0 z-50 w-full py-2 bg-surface/90 dark:bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_0_0_rgba(255,255,255,0.05)]">
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
          MIDNIGHT STORE
        </FuzzyText>
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 border border-cyan-300/35 bg-gradient-to-r from-[#0a1014]/95 via-[#111118]/95 to-[#140d1d]/95 p-1 shadow-[0_0_26px_rgba(0,251,251,0.18),0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            const tabClassName = `inline-flex items-center justify-center border px-2 py-2 font-label-caps text-xs tracking-[0.18em] transition-all duration-300 active:scale-95 ${
              isActive
                ? "border-cyan-300/80 bg-gradient-to-b from-cyan-400/20 to-cyan-500/5 text-cyan-100 [text-shadow:0_0_14px_rgba(0,251,251,0.9)] shadow-[inset_0_0_0_1px_rgba(0,251,251,0.25),0_0_22px_rgba(0,251,251,0.35)] animate-navbar-beep-slow"
                : "border-fuchsia-300/20 bg-black/20 text-zinc-300 hover:border-cyan-300/60 hover:bg-cyan-500/10 hover:text-cyan-100 hover:[text-shadow:0_0_10px_rgba(0,251,251,0.7)]"
            }`;

            const commonProps = {
              onMouseEnter: () => setHoverTab(tab.id),
              onFocus: () => setHoverTab(tab.id),
              onMouseLeave: () => setHoverTab("") as any,
            };

            return (
              tab.kind === "route" ? (
                <Link key={tab.id} data-tab={tab.id} className={tabClassName} href={tab.href} {...commonProps}>
                  {tab.label}
                </Link>
              ) : (
                <a
                  key={tab.id}
                  data-tab={tab.id}
                  className={tabClassName}
                  href={tab.href}
                  {...commonProps}
                >
                  {tab.label}
                </a>
              )
            );
          })}
        </nav>

        {/* Hover dropdown (categories / brands) */}
        <div
          onMouseEnter={() => {}}
          className="absolute left-1/2 top-[74%] -translate-x-1/2 z-50"
        >
          {hoverTab === "categories" && (
            <div
              onMouseEnter={() => setHoverTab("categories")}
              onMouseLeave={() => setHoverTab("")}
              className="w-[360px] rounded border border-white/10 bg-zinc-950/80 p-4 shadow-xl backdrop-blur"
            >
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 mb-3">Categories</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Accessories",
                  "Clothing",
                  "Footwear",
                  "Home Decor",
                  "Sale",
                ].map((c) => (
                  <a key={c} href="/products" className="block rounded px-2 py-1 text-sm text-zinc-300 hover:bg-white/5">{c}</a>
                ))}
              </div>
            </div>
          )}

          {hoverTab === "brands" && (
            <div
              onMouseEnter={() => setHoverTab("brands")}
              onMouseLeave={() => setHoverTab("")}
              className="w-[1000px] max-h-[500px] rounded border border-white/10 bg-zinc-950/80 p-4 shadow-xl backdrop-blur overflow-y-auto"
            >
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 mb-3">Brands</div>
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
                  <div className="mt-4 mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Movie</div>
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
                  <div className="mt-4 mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Other</div>
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

              <div className="grid grid-cols-3 gap-6 text-sm text-zinc-300 mt-6 border-t border-white/5 pt-6">
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
      </div>
      <style jsx global>{`
        @keyframes navbar-beep-slow {
          0% {
            opacity: 1;
          }
          83.333% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-navbar-beep-slow {
          animation: navbar-beep-slow 1s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-navbar-beep-slow {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
