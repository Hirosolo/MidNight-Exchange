"use client";

import ProductMarketCard from "@/components/ProductMarketCard";
import HeaderNav from "@/components/HeaderNav";
import HeroBannerSlideshow from "@/components/HeroBannerSlideshow";
import MarketLiveFeed from "@/components/MarketLiveFeed";

export default function Home() {
  const products = [
    {
      name: "Void-Tech Tee",
      id: "#882-A",
      price: "$180",
      image:
        "/images/a_premium_collectible_graphic_tee_displayed_inside_a_graded_trading_card_style/screen.png",
      description:
        "A sleek, minimalist tech-wear t-shirt presented in a premium acrylic slab.",
    },
    {
      name: "Ghost Dragon Cap",
      id: "#114-B",
      price: "$120",
      image:
        "/images/a_limited_edition_streetwear_accessory_or_cap_displayed_inside_a_graded_trading/screen.png",
      description:
        "A dark, futuristic baseball cap featuring an intricate dragon embroidery.",
    },
    {
      name: "Chrono-Syndicate Snkrs",
      id: "#990-S",
      price: "$450",
      image:
        "/images/a_professional_cinematic_shot_of_a_physical_metallic_token_or_medallion/screen.png",
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
      image:
        "/images/a_professional_high_fidelity_macro_photograph_of_a_magnifying_glass_inspecting/screen.png",
    },
    {
      title: "PHYSICAL STORAGE",
      icon: "lock",
      description:
        "Items are held in a climate-controlled, Class-3 audited vault. Real-time telemetry ensures optimal preservation of physical assets until redemption.",
      image:
        "/images/a_professional_high_fidelity_photo_of_a_heavy_duty_high_tech_vault_door_with_a/screen.png",
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
      <HeaderNav />

      <main className="flex-grow pt-[80px]">
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

        {/* AUTHENTICATED ASSET PROTOCOL */}
        <section className="max-w-[1440px] mx-auto px-margin py-xl">
          <h2 className="font-headline-md text-headline-md text-primary tracking-tight mb-lg text-center">
            AUTHENTICATED ASSET PROTOCOL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gradient-to-br from-primary-fixed/20 to-transparent p-px rounded-xl overflow-hidden">
            {featureTiles.map((tile, index) => (
              <div
                key={index}
                className={`bg-surface-container p-xl flex flex-col gap-md rim-light ${
                  tile.image ? "relative overflow-hidden group" : ""
                }`}
              >
                {tile.image && (
                  <img
                    alt={tile.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-luminosity"
                    src={tile.image}
                  />
                )}
                <div className={tile.image ? "relative z-10" : ""}>
                  <div className="text-primary-fixed w-12 h-12 flex items-center justify-center border border-primary-fixed/30 rounded-lg bg-surface">
                    <span className="material-symbols-outlined text-3xl">
                      {tile.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[20px] text-primary mt-md">
                    {tile.title}
                  </h3>
                  <p className="font-data-mono text-data-mono text-on-surface-variant leading-relaxed mt-md">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMMUNITY VERIFIED DROPS */}
        <section className="py-xl overflow-hidden border-y border-outline-variant/20 bg-surface/50">
          <div className="flex whitespace-nowrap opacity-60 mb-lg">
            <div className="font-data-mono text-data-mono text-primary-fixed flex items-center gap-8 px-4 animate-slide">
              <span>&gt; USER 0x7A... BOUGHT VOID-TEE</span>
              <span>|</span>
              <span>&gt; VAULT DEPOSIT: CHRONO-SNKRS #001</span>
              <span>|</span>
              <span>&gt; GRADE CONFIRMED: MINT 9.5</span>
              <span>|</span>
              <span>&gt; TRANSFER COMPLETE: BLOCK #882190</span>
              <span>|</span>
              <span>&gt; USER 0x2B... LISTED GHOST CAP</span>
              <span>|</span>
              <span>&gt; USER 0x7A... BOUGHT VOID-TEE</span>
              <span>|</span>
              <span>&gt; VAULT DEPOSIT: CHRONO-SNKRS #001</span>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-margin">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  alt="TOKYO SECTOR 4"
                  className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  src="/images/a_masonry_grid_of_3_4_high_quality_moody_lifestyle_photos_of_people_wearing/screen.png"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-data-mono text-[10px] text-primary-fixed">
                    TOKYO SECTOR 4
                  </span>
                </div>
              </div>

              <div className="bg-surface-container rounded-lg p-md rim-light flex flex-col justify-between gap-sm">
                <span className="font-data-mono text-outline-variant">
                  SYSTEM LOG
                </span>
                <div className="font-headline-md text-primary leading-relaxed tracking-[0.01em]">
                  &quot;The fit is exact. Materials are unlike anything
                  else.&quot;
                </div>
                <span className="font-data-mono text-xs text-primary-fixed">
                  @NEO_RUNNER
                </span>
              </div>

              <div className="bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/30">
                <span className="material-symbols-outlined text-4xl text-outline-variant">
                  sensors
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN INNOVATION */}
        <section className="max-w-[1440px] mx-auto px-margin py-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container rounded-xl overflow-hidden rim-light border border-outline-variant/20">
            <div className="h-full min-h-[400px] relative">
              <img
                alt="CHRONO WEAVE"
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/a_macro_close_up_photograph_of_a_high_tech_woven_fabric_texture_with_a/screen.png"
              />
            </div>
            <div className="p-xl flex flex-col justify-center space-y-lg bg-background/50 backdrop-blur-md">
              <div>
                <h2 className="font-headline-md text-[32px] text-primary mb-2">
                  CHRONO WEAVE
                </h2>
                <span className="cyber-purple-bg text-secondary-container border border-secondary-container px-2 py-1 font-label-caps text-label-caps rounded-sm inline-block">
                  MATERIAL SPEC
                </span>
              </div>
              <div className="font-data-mono text-data-mono text-on-surface-variant space-y-4 border-l-2 border-primary-fixed/30 pl-md">
                <p>&gt; COMPOSITION: 80% SYNTH-POLY / 20% TITANIUM THREAD</p>
                <p>&gt; TENSILE STRENGTH: 1200 MPa</p>
                <p>&gt; THERMAL RESISTANCE: UP TO 400°C</p>
                <p>&gt; OPTICAL PROPERTIES: LIGHT ABSORBING, LOW-REFLECTANCE</p>
                <p className="text-primary-fixed mt-4 pt-4 border-t border-outline-variant/20">
                  &gt; STATUS: PRODUCTION READY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-[1024px] mx-auto px-margin py-24 text-center flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg text-primary mb-lg reveal-up">
            RESERVE YOUR ALLOCATED SUPPLY
          </h2>
          <div className="relative w-48 h-48 mb-lg mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary-fixed/20 blur-3xl mix-blend-screen"></div>
            <img
              alt="Collectible Token"
              className="relative z-10 object-contain w-full h-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
              src="/images/a_professional_cinematic_shot_of_a_physical_metallic_token_or_medallion/screen.png"
            />
          </div>
          <div className="font-headline-md text-[32px] text-on-surface mb-md">
            $1,200
            <span className="text-outline-variant text-xl">
              {" "}
              (Reservation Fee)
            </span>
          </div>
          <button className="bg-primary-container text-on-primary-container font-label-caps text-[16px] font-bold tracking-widest px-16 py-6 rounded-sm hover:glow-cyan transition-all duration-300 flex items-center justify-center gap-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <span className="relative z-10 flex items-center">
              RESERVE NOW
              <span className="material-symbols-outlined ml-2">
                arrow_forward
              </span>
            </span>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/50"></div>
          </button>
          <p className="font-data-mono text-xs text-outline-variant mt-8 max-w-sm">
            * RESERVATION GRANTS EXCLUSIVE ACCESS TO THE VAULTED INVENTORY.
            NON-REFUNDABLE.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin py-lg w-full max-w-[1440px] mx-auto gap-gutter">
          <div className="font-label-caps text-label-caps text-primary dark:text-primary-fixed">
            MIDNIGHT EXCHANGE
          </div>
          <div className="text-on-surface-variant dark:text-on-surface-variant font-data-mono text-data-mono text-center md:text-left text-xs opacity-60">
            © 2024 MIDNIGHT COLLECTIBLE EXCHANGE. MACHINED LUXURY FOR
            HIGH-STAKES COLLECTORS.
          </div>
          <nav className="flex gap-md">
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
              href="#"
            >
              TERMINAL
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
              href="#"
            >
              PROTOCOL
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
              href="#"
            >
              SECURITY
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
              href="#"
            >
              SUPPORT
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
