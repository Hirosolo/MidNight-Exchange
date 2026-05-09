"use client";

import Image from "next/image";
import HeaderNav from "@/components/HeaderNav";

export default function ProtocolPage() {
  const architects = [
    {
      id: "001_ARCH",
      role: "FOUNDER / CTO",
      name: "K. VORHEES",
      desc: "Former Lead of Distributed Ledger Research at Chronos Defense. Specialist in hyper-localized asset bonding protocols.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBnKQdvuGJz7d-UfV6QFTK8jn4dvkd9JSnOIAukZlj2xdEtYquE-Nl4adqHykxF94L5QcK1M5RlYjFTk7QPvy5w6etaX1xC97GS8iNHTOcSWfN6EjSI_J7mY2g7ceCJw7bQuj2bhk5-pWn-VU-uA5XXZxpIYCACV9qZCOkIhwofOsUuC0ICfZSWR700gmFcy3r8O3toLsdMowx_9MMTqUEgfZIZ4s845YCdB2QpE5MBFuY9en_NEwl9DIds6gVBh0bh-sXVxdrqmI8",
    },
    {
      id: "002_VAL",
      role: "CHIEF ARBITER",
      name: "M. CHEN",
      desc: "Expert in physical provenance systems and high-density material verification. Oversees the Midnight Grading standard.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCYnQQcsyFIWSOLrGTraP1YEy0AbTxLb4bQXD8zgbD5HONGrAjNJZkjhMELRz_SEqFP7-OysgC1LypkhKjn7RIFIy5gRsfmCpdfpmOVqjI0ZznXEh_e1ghL1C9oHkuH54t9Vgm6UHEJdCfp0FmmUXKYPHfLtB1caZR1Q-fmdnGG8X9oGZ4ssMYIBz1xNTQuU9Yhjg9NKZOxgCxKoSG83sDgga3WE1i4M6JUTuenNKeiLMKGiarUzADSKc4o1Hv6EjsGbzVOshCWviI",
    },
    {
      id: "003_CORE",
      role: "SYSTEMS ARCHITECT",
      name: "J. STERLING",
      desc: "Designer of the core Midnight exchange engine. Specializes in low-latency transaction routing and vault security.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCT1j5YPzBeWE5PrHfr5c8CcOM-7UgYVLIApe8nwu0Ta1hla2Xza7gMnQQd2skvl5bRD5mzF25dgu6zzAFoyMn9KqboEXN4sAY2Qz2Msknj7Pt1r-Qg2CXZYy9IIhA2HGUMLTcacdZPOxlY8SWK8d__bFTdQun83Gy5w-04IRS0PMB6kKZwkzD4t6O89iLci9VcOu8046Y3x9Q9PwX6S5lzzqjYe3AMSnhxgL6ljKUKpXm5DNKQ1D0reeURk_5fhzU8jJOmYF2o-I0",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080809] text-[#e5e2e3] selection:bg-cyan-300 selection:text-black">
      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .machined-border {
          border: 1px solid #3a4a49;
          position: relative;
        }

        .machined-border::before {
          content: "";
          position: absolute;
          inset: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #4a4e57,
            #e2e8f0,
            #4a4e57,
            transparent
          );
        }

        .scanline {
          background: linear-gradient(
              to bottom,
              rgba(18, 16, 16, 0) 50%,
              rgba(0, 0, 0, 0.25) 50%
            ),
            linear-gradient(
              90deg,
              rgba(255, 0, 0, 0.06),
              rgba(0, 255, 0, 0.02),
              rgba(0, 0, 255, 0.06)
            );
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }

        .glow-cyan {
          box-shadow: 0 0 15px -2px rgba(0, 251, 251, 0.35);
        }

        .rim-light {
          box-shadow: inset 1px 1px 0px 0px rgba(226, 232, 240, 0.1);
        }
      `}</style>

      <HeaderNav />

      <main className="pt-[70px]">
        {/* HERO */}
        <section className="relative flex h-[500px] md:h-[820px] items-end overflow-hidden border-b border-white/10 px-4 md:px-8 pb-12 md:pb-24">
          <div className="absolute inset-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_TlNBkC2WqwZNQB7lC9uwW3nBBaiZQVVDQjR4F2c91oZ3AIGUOvO8Cgiejh-_Gu7BUswP5LjNp1IZHXkBaLy-8ALcsGyA19V2gWoqyHey9P2hyGNxOQuX4B_XVk_F7SH1XqvY1lrYbhyDrdnni0aaekYleABnXEWvkhChdZYz3-ZnUuHaAa0L3jDCJ8CoA4gFbI_sW7tugUQjiSUbbqJ33jEHV0Eb7hb9BnIwT-M-jIw1sYaFfoxdE4PFUfgJhIqvR6vnGRAwad8"
              alt="Hero"
              fill
              className="object-cover grayscale brightness-50"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-transparent" />
            <div className="scanline absolute inset-0 opacity-20" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px]">
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-cyan-300">
                System_Manifesto // Confidential
              </span>

              <h1 className="max-w-2xl text-4xl md:text-6xl lg:text-8xl font-bold uppercase leading-none tracking-tight text-white">
                PROTOCOL_
                <span className="text-cyan-300">V2.4</span>
              </h1>

              <div className="glow-cyan mt-2 md:mt-4 h-1 w-16 md:w-20 bg-cyan-300" />
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-12">
            <div className="machined-border rim-light bg-[#1c1b1d] p-6 md:p-10 md:col-span-7">
              <div className="mb-4 md:mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-cyan-300">
                  Core Philosophy
                </h2>

                <span className="font-mono text-[9px] md:text-[10px] text-zinc-500 mt-2 md:mt-0">
                  SEC_NODE: 0x8823
                </span>
              </div>

              <p className="mb-6 md:mb-10 max-w-2xl text-sm md:text-lg leading-relaxed text-zinc-400">
                Midnight Exchange was engineered at the intersection of extreme
                high-stakes collecting and decentralized infrastructure. We do
                not just trade; we secure. Our protocol ensures that every
                asset, whether digital or physically bonded, exists within a
                verified Machined Luxury ecosystem.
              </p>

              <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2">
                <div className="border border-white/10 bg-[#080809] p-4 md:p-6">
                  <div className="mb-2 font-mono text-xs text-cyan-300">
                    01_AUTHENTICITY
                  </div>

                  <p className="text-xs md:text-sm text-zinc-300">
                    Automated grading via proprietary visual analysis clusters.
                  </p>
                </div>

                <div className="border border-white/10 bg-[#080809] p-4 md:p-6">
                  <div className="mb-2 font-mono text-xs text-cyan-300">
                    02_LIQUIDITY
                  </div>

                  <p className="text-xs md:text-sm text-zinc-300">
                    Deep institutional-grade market making for high-value
                    collectibles.
                  </p>
                </div>
              </div>
            </div>

            <div className="machined-border rim-light relative min-h-[320px] md:min-h-[420px] overflow-hidden md:col-span-5">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_s5TYlQqEXfbkRVGnCfT0ZfGz9tkq34HCAm5sUjtxJTQ2w3J3vX3rlo6MeKB_ATj5vvKzLQodaYLc5KU4CCmU0qERkkzAI3mVL84eco9Rv84KhPgsvlRRyWNaAthzmp-akWsI-qJnHP-UPeXx4RD5ll-QwpJwKPEgOuLeOTszvI7fp1f2W69M2F8APALctXtg_Ud1nHtfqmhCkbnxyV3sd9RlVky9-g_Otn78SKhYvoMtuJUcr3KYElkExLuLycfMs-ugANLfioc"
                alt="Tech texture"
                fill
                className="object-cover grayscale transition duration-700 hover:scale-105"
              />

              <div className="absolute right-3 md:right-4 top-3 md:top-4 border border-cyan-300/40 bg-black/70 p-2 backdrop-blur">
                <span className="font-mono text-[8px] md:text-[10px] text-cyan-300">
                  SCAN_STATUS: COMPLETE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="border-y border-white/10 bg-[#0e0e0f] py-12 md:py-24">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8">
            <div className="mb-6 md:mb-10 flex flex-col gap-3 md:gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-white">
                  Global Infrastructure
                </h3>

                <p className="mt-1 md:mt-2 font-mono text-xs text-zinc-500">
                  VAULT_NETWORK_TOPOLOGY v4.0
                </p>
              </div>

              <div className="flex gap-3 md:gap-6 font-mono text-[8px] md:text-[10px] text-zinc-400">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="glow-cyan h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-cyan-300" />
                  <span>ACTIVE NODE</span>
                </div>

                <div className="flex items-center gap-1 md:gap-2">
                  <div className="h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-zinc-600" />
                  <span>COLD STORAGE</span>
                </div>
              </div>
            </div>

            <div className="machined-border relative aspect-[21/9] overflow-hidden bg-black">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3a4a49_1px,transparent_1px)] [background-size:20px_20px]" />

              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjWXmg2mRFgrtWYK3-VmmkknLzFzQdXQwwcx6JqjCE8kE7LKQ774LNAKI6aAUnEbZq3bL9EXjunOVP0SYA-99bU5IucDAnPX26gedgpG3GQGK615q4YKWTd9Jz0M8N0Wm_vfgwmYduEXjupm0NyyXS9QPeT2YUYop6NPlFlL7iB8rWwMLECZokc8JXjhogWCHRf9l269RptM4GAyOM4yBZDkqJRhj5vdRjPo_rZFa8xQUJ_qG8T6qgRg2P4acQnKemT4R_P5xnH8Y"
                alt="Map"
                fill
                className="object-cover opacity-40 mix-blend-screen"
              />

              {[
                {
                  top: "20%",
                  left: "15%",
                  text: "NODE_01: GENEVA_STORAGE",
                },
                {
                  top: "40%",
                  left: "45%",
                  text: "NODE_02: SINGAPORE_CLUSTER",
                },
                {
                  bottom: "30%",
                  right: "20%",
                  text: "NODE_03: NY_FED_PROXY",
                },
              ].map((node, i) => (
                <div
                  key={i}
                  className="group absolute"
                  style={node}
                >
                  <div className="glow-cyan h-3 w-3 animate-pulse rounded-full bg-cyan-300" />

                  <div className="absolute left-0 top-6 whitespace-nowrap border border-white/10 bg-[#131314] p-2 md:p-3 font-mono text-[8px] md:text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                    {node.text}
                    <br />
                    STATUS: ACTIVE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTS */}
        <section className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24">
          <h3 className="mb-6 md:mb-12 text-2xl md:text-3xl font-bold uppercase text-white">
            System Architects
          </h3>

          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
            {architects.map((person) => (
              <div
                key={person.id}
                className="machined-border group bg-[#1c1b1d] transition hover:border-cyan-300/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden grayscale transition duration-500 group-hover:grayscale-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-cyan-300/10 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,251,251,0.05)_50%,transparent_100%)] bg-[length:100%_4px] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="p-4 md:p-6">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
                    <span className="font-mono text-xs tracking-[0.15em] text-cyan-300">
                      {person.role}
                    </span>

                    <span className="font-mono text-[8px] md:text-[10px] text-zinc-500">
                      ID: {person.id}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold uppercase text-white">
                    {person.name}
                  </h4>

                  <div className="mt-4 md:mt-6 h-px w-full bg-white/10" />

                  <p className="mt-4 md:mt-6 font-mono text-[10px] md:text-[11px] leading-relaxed text-zinc-400">
                    {person.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:gap-8 px-4 md:px-6 py-6 md:py-10 md:flex-row">
          <div className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            MIDNIGHT STORE
          </div>

          <p className="max-w-xl text-center text-[10px] md:text-xs uppercase tracking-[0.15em] text-zinc-500 md:text-left">
            © 2026 Midnight Collectible Exchange. Machined luxury for
            high-stakes collectors.
          </p>

          <div className="flex gap-3 md:gap-6 text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-400">
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

      {/* FLOATING BUTTON */}
      <button className="machined-border rim-light glow-cyan fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50 flex h-12 md:h-14 w-12 md:w-14 items-center justify-center bg-cyan-300 text-black transition active:scale-90">
        <span className="material-symbols-outlined text-base md:text-lg">terminal</span>
      </button>
    </div>
  );
}
