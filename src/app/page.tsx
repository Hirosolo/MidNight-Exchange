"use client";

import ProductMarketCard from "@/components/ProductMarketCard";
import HeroBannerSlideshow from "@/components/HeroBannerSlideshow";
import MarketLiveFeed from "@/components/MarketLiveFeed";

export default function Home() {
  const products = [
    {
      name: "Void-Tech Tee",
      id: "#882-A",
      price: "$180",
      image: "/images/tee-graded.png",
      description:
        "A sleek, minimalist tech-wear t-shirt presented in a premium acrylic slab.",
    },
    {
      name: "Ghost Dragon Cap",
      id: "#114-B",
      price: "$120",
      image: "/images/cap-graded.png",
      description:
        "A dark, futuristic baseball cap featuring an intricate dragon embroidery.",
    },
    {
      name: "Chrono-Syndicate Snkrs",
      id: "#990-S",
      price: "$450",
      image: "/images/token-medallion.png",
      description:
        "High-top, cyberpunk-inspired sneakers in matte black with subtle neon accents.",
    },
  ];

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
      <main className="flex-grow pt-[70px]">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative w-full h-[calc(100vh-80px)] min-h-[760px] flex items-center justify-center overflow-hidden"
        >
          <HeroBannerSlideshow />
          <div className="relative z-10 w-full max-w-[1440px] px-margin flex flex-col items-center text-center space-y-lg -translate-y-14 md:-translate-y-20">
            <div className="flex flex-col items-center space-y-md reveal-up reveal-delay-1">
              <div className="flex items-center gap-base flex-wrap justify-center">
                <span className="bg-[#facc15] text-black px-3 py-1 mr-2 font-label-caps text-[10px] md:text-[11px] rounded-sm">
                  NEW COLLECTION
                </span>
                <span className="bg-white/90 text-black border border-white px-2 py-1 ml-2 font-label-caps text-[10px] md:text-[11px] rounded-sm">
                  GEM MINT 10
                </span>
              </div>
              <span className="font-data-mono text-[10px] md:text-[11px] text-white/80 tracking-widest uppercase">
                I[WADE] Drop Set - 001/300, Multi-color]
              </span>
            </div>
            <h1 className="font-display-lg text-[52px] md:text-[68px] text-white leading-[1.08] tracking-tighter text-flow reveal-up reveal-delay-2">
              THE NEW ESSENTIALS DROP IS HERE
            </h1>
            <p className="font-body-base text-[14px] md:text-[16px] text-white/90 max-w-2xl mx-auto tracking-[0.02em] reveal-up reveal-delay-3">
              Exclusive, authenticated physical assets bridged to digital
              provenance. Secure your allocation before the vault seals.
            </p>
            <div className="pt-[56px] md:pt-[72px] reveal-up reveal-delay-3">
              <button className="relative overflow-hidden bg-primary-container/70 text-on-primary-container font-label-caps text-[14px] md:text-[15px] font-bold tracking-widest px-16 py-4 rounded-sm shadow-[0_0_20px_rgba(250,204,21,6)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] transition-all duration-300 flex items-center justify-center group">
                <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
                <span className="relative z-10 flex items-center">
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

        <section className="mx-auto max-w-7xl px-6 py-28">
          <h2 className="mb-14 text-center text-3xl font-bold tracking-tight text-white">
            AUTHENTICATED ASSET PROTOCOL
          </h2>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-400/20 to-transparent p-px md:grid-cols-2">
            {featureTiles.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-zinc-950 p-10"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-10 transition duration-500 group-hover:opacity-30"
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

        <section className="overflow-hidden border-y border-zinc-800 bg-zinc-950/60 py-24">
          {/* ticker */}

          <div className="mb-14 whitespace-nowrap overflow-hidden">
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

          <div className="mx-auto columns-1 gap-6 space-y-6 px-6 md:columns-2 lg:max-w-7xl lg:columns-3">
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
          <div className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 md:grid-cols-2">
            <div className="relative min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
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
          <h2 className="max-w-4xl text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Reserve Your Allocated Supply
          </h2>

          <div className="relative my-16 h-56 w-56">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop"
              alt=""
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />
          </div>

          <div className="mb-8 text-5xl font-bold text-white">
            $1,200{" "}
            <span className="text-xl font-medium text-zinc-500">
              (Reservation Fee)
            </span>
          </div>

          <button className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-300 px-14 py-6 text-sm font-black uppercase tracking-[0.3em] text-black transition hover:shadow-[0_0_50px_rgba(34,211,238,0.4)]">
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
              MIDNIGHT EXCHANGE
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
