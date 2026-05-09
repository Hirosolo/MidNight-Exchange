"use client";

import HeroBannerSlideshow from "@/components/HeroBannerSlideshow";
import MarketLiveFeed from "@/components/MarketLiveFeed";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));

    if (prefersReduced) {
      items.forEach((it) => it.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );

    items.forEach((it) => obs.observe(it));

    return () => obs.disconnect();
  }, []);
  const featureTiles = [
    {
      title: "AUTHENTICITY CHAIN",
      icon: "memory",
      description:
        "Every physical item is embedded with a cryptographic microchip. Scanning the NFC tag verifies its unique signature against the immutable ledger.",
      image: null,
    },
    {
      title: "PHYSICAL GRADING",
      icon: "verified",
      description:
        "Assets are rigorously inspected by independent experts. We employ machine learning optics and structural analysis to guarantee GEM MINT status before encasement.",
      image: "/images/magnifier-inspection.png",
    },
    {
      title: "PHYSICAL STORAGE",
      icon: "lock",
      description:
        "Items are held in a climate-controlled, Class-3 audited vault. Real-time telemetry ensures optimal preservation of physical assets until redemption.",
      image: "/images/vault-door-tech.png",
    },
    {
      title: "DIGITAL PROVENANCE",
      icon: "database",
      description:
        "A dynamic digital twin is minted upon successful physical vaulting. Ownership history, grading reports, and high-resolution scans are permanently accessible.",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <main className="relative flex-grow overflow-hidden pt-[70px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_bottom,rgba(217,70,239,0.06),transparent_28%)] opacity-70 animate-surface-drift" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_18%,rgba(255,255,255,0.04)_40%,transparent_62%)] opacity-25 animate-surface-scan" />
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative w-full h-[calc(100vh-80px)] min-h-[760px] flex items-center justify-center overflow-hidden animate-surface-drift"
        >
          <HeroBannerSlideshow />
          <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
            <div className="hero-grid-overlay" />
            <div className="hero-orb hero-orb-cyan" />
            <div className="hero-orb hero-orb-fuchsia" />
            <div className="hero-scanline" />
          </div>
          <div className="relative z-10 w-full max-w-[1440px] px-margin flex flex-col items-center text-center space-y-lg -translate-y-14 md:-translate-y-20 animate-hero-content-loop">
            <div className="flex flex-col items-center space-y-md reveal-up reveal-delay-1">
              <span className="font-data-mono text-[10px] md:text-[11px] text-white/80 tracking-widest uppercase animate-pulse-glow">
                I[WADE] Drop Set - 001/300, Multi-color]
              </span>
            </div>
            <h1 className="font-display-lg text-[52px] md:text-[68px] text-white leading-[1.08] tracking-tighter text-flow reveal-up reveal-delay-2 animate-glitch-hero">
              THE NEW ESSENTIALS DROP IS HERE
            </h1>
            <p className="font-body-base text-[14px] md:text-[16px] text-white/90 max-w-2xl mx-auto tracking-[0.02em] reveal-up reveal-delay-3 animate-shimmer-wave">
              Exclusive, authenticated physical assets bridged to digital
              provenance. Secure your allocation before the vault seals.
            </p>
            <div className="pt-[56px] md:pt-[72px] reveal-up reveal-delay-3">
              <button className="relative overflow-hidden bg-primary-container/70 text-on-primary-container font-label-caps text-[14px] md:text-[15px] font-bold tracking-widest px-16 py-4 rounded-sm shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:shadow-[0_0_34px_rgba(250,204,21,0.85)] transition-all duration-300 flex items-center justify-center group">
                <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_10%,rgba(255,255,255,0.18)_38%,transparent_62%)] -translate-x-[120%] transition-transform duration-1000 group-hover:translate-x-[120%]" />
                <span className="relative z-10 flex items-center animate-button-glitch">
                  SHOP THE DROP NOW
                  <span className="material-symbols-outlined ml-1.5 text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <MarketLiveFeed />

        {/* ========================================= */}
        {/* AUTHENTICATED ASSET PROTOCOL */}
        {/* ========================================= */}

        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.06),transparent_38%)] opacity-80 animate-surface-drift" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-20 animate-surface-grid" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_55%)] opacity-60 animate-surface-breathe" />
          <div className="pointer-events-none absolute inset-x-6 top-10 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-surface-scan" />
          <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl animate-surface-orb" />
          <div
            className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl animate-surface-orb"
            style={{ animationDelay: "-4s" }}
          />

          <h2 className="relative z-10 mb-14 text-center text-3xl font-bold tracking-tight text-white reveal-up animate-surface-breathe">
            AUTHENTICATED ASSET PROTOCOL
          </h2>

          <div className="relative z-10 grid gap-px overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-400/20 to-transparent p-px md:grid-cols-2 animate-surface-frame">
            {featureTiles.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-zinc-950 p-10 reveal-up animate-surface-card"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-10 transition duration-500 group-hover:opacity-30 group-hover:scale-105"
                  />
                )}

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-black/40 backdrop-blur">
                    <span className="material-symbols-outlined text-[28px] text-cyan-300">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-bold tracking-wide text-white">
                    {item.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* COMMUNITY VERIFIED DROPS */}
        {/* ========================================= */}

        <section className="relative overflow-hidden border-y border-zinc-800 bg-zinc-950/60 py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.08),transparent_38%)] opacity-80 animate-surface-drift" />
          <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-surface-orb" />
          <div
            className="pointer-events-none absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl animate-surface-orb"
            style={{ animationDelay: "-4s" }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-surface-scan" />

          {/* ticker */}

          <div className="relative z-10 mb-14 whitespace-nowrap overflow-hidden">
            <div className="animate-marquee flex w-max gap-8 text-sm uppercase tracking-[0.3em] text-cyan-300/70">
              <span>{">"} USER 0x7A... BOUGHT VOID-TEE</span>
              <span>|</span>
              <span>{">"} VAULT DEPOSIT: CHRONO-SNKRS #001</span>
              <span>|</span>
              <span>{">"} GRADE CONFIRMED: MINT 9.5</span>
              <span>|</span>
              <span>{">"} TRANSFER COMPLETE: BLOCK #882190</span>
              <span>|</span>
              <span>{">"} USER 0x2B... LISTED GHOST CAP</span>
              <span>|</span>
              <span>{">"} USER 0x7A... BOUGHT VOID-TEE</span>
              <span>|</span>
              <span>{">"} VAULT DEPOSIT: CHRONO-SNKRS #001</span>
            </div>
          </div>

          {/* masonry */}

          <div className="relative z-10 mx-auto columns-1 gap-6 space-y-6 px-6 md:columns-2 lg:max-w-7xl lg:columns-3">
            <div className="break-inside-avoid overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop"
                className="w-full object-cover transition duration-500 hover:scale-105"
                alt=""
              />
            </div>

            <div className="break-inside-avoid rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                SYSTEM LOG
              </span>

              <p className="mt-8 text-2xl font-semibold leading-relaxed text-white">
                “The fit is exact. Materials are unlike anything else.”
              </p>

              <div className="mt-10 text-sm tracking-[0.2em] text-cyan-300">
                @NEO_RUNNER
              </div>
            </div>

            <div className="break-inside-avoid flex aspect-video items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900">
              <div className="text-6xl text-zinc-700">◈</div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* DESIGN INNOVATION */}
        {/* ========================================= */}

        <section className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 md:grid-cols-2 reveal-up reveal-delay-2 animate-surface-frame">
            <div className="relative min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 h-full w-full object-cover animate-surface-drift"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/15" />
            </div>

            <div className="flex flex-col justify-center bg-black/50 p-12 backdrop-blur">
              <div className="mb-10">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
                  CHRONO WEAVE
                </h2>

                <span className="rounded-md border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 text-xs font-bold tracking-[0.3em] text-fuchsia-300">
                  MATERIAL SPEC
                </span>
              </div>

              <div className="space-y-5 border-l border-cyan-500/30 pl-6 font-mono text-sm text-zinc-400">
                <p>
                  {">"} COMPOSITION: 80% SYNTH-POLY / 20% TITANIUM THREAD
                </p>

                <p>{">"} TENSILE STRENGTH: 1200 MPa</p>

                <p>{">"} THERMAL RESISTANCE: UP TO 400°C</p>

                <p>{">"} OPTICAL: LIGHT ABSORBING / LOW-REFLECTANCE</p>

                <p className="border-t border-zinc-800 pt-6 text-cyan-300">
                  {">"} STATUS: PRODUCTION READY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* FINAL CTA */}
        {/* ========================================= */}

        <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">
          <h2 className="max-w-4xl text-5xl font-black uppercase tracking-tight text-white md:text-7xl reveal-up animate-surface-breathe">
            Reserve Your Allocated Supply
          </h2>

          <div className="relative my-16 h-56 w-56 reveal-up reveal-delay-1 animate-surface-card">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-surface-orb" />

            <img
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop"
              alt=""
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />
          </div>

          <div className="mb-8 text-5xl font-bold text-white reveal-up reveal-delay-2">
            $1,200{" "}
            <span className="text-xl font-medium text-zinc-500">
              (Reservation Fee)
            </span>
          </div>

          <button className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-300 px-14 py-6 text-sm font-black uppercase tracking-[0.3em] text-black transition hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] reveal-up reveal-delay-3 animate-surface-breathe">
            <span className="relative z-10 flex items-center gap-3">
              Reserve Now
              <span className="material-symbols-outlined text-[20px] transition group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>

            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute inset-0 bg-white/20" />
            </div>
          </button>

          <p className="mt-10 max-w-md text-xs uppercase tracking-[0.2em] text-zinc-600">
            * Reservation grants exclusive access to the vaulted inventory.
            Non-refundable.
          </p>
        </section>

        {/* ========================================= */}
        {/* FOOTER */}
        {/* ========================================= */}

        <footer className="border-t border-zinc-800 bg-black">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              MIDNIGHT STORE
            </div>

            <p className="max-w-xl text-center text-xs uppercase tracking-[0.15em] text-zinc-500 md:text-left">
              © 2026 Midnight Collectible Exchange. Machined luxury for
              high-stakes collectors.
            </p>

            <div className="flex gap-6 text-xs uppercase tracking-[0.25em] text-zinc-400">
              <a href="#" className="transition hover:text-cyan-300">
                Terminal
              </a>

              <a href="#" className="transition hover:text-cyan-300">
                Protocol
              </a>

              <a href="#" className="transition hover:text-cyan-300">
                Security
              </a>

              <a href="#" className="transition hover:text-cyan-300">
                Support
              </a>
            </div>
          </div>
        </footer>

        {/* ========================================= */}
        {/* LOCAL CSS */}
        {/* ========================================= */}

        <style jsx global>{`\n          @keyframes marquee {\n            0% {\n              transform: translateX(0%);\n            }\n\n            100% {\n              transform: translateX(-50%);\n            }\n          }\n\n          .animate-marquee {\n            animation: marquee 20s linear infinite;\n          }\n        `}</style>
      </main>
    </div>
  );
}
