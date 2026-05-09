"use client";

import Link from "next/link";
import HeaderNav from "@/components/HeaderNav";
import ProductMarketCard from "@/components/ProductMarketCard";

const allProducts = [
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
  {
    name: "Midnight Access Pass",
    id: "#204-P",
    price: "$95",
    image:
      "/images/a_limited_edition_black_hoodie_suspended_in_a_dark_moody_environment._focused/screen.png",
    description:
      "A graded access pass with layered security markers and collectible packaging.",
  },
  {
    name: "Vault Runner Jacket",
    id: "#311-V",
    price: "$260",
    image:
      "/images/a_high_fidelity_panoramic_wide_close-up_photograph_of_multiple_folded_technical_garments_(jackets_and_hoodies)_lined_up_side-by-side._the_color_palette_is_monochromatic_and_cool-toned_deep_obsidian,_slate_charcoal,_and_metallic/screen.png",
    description:
      "Technical outerwear built for cold storage, with a dense shell and reflective trim.",
  },
  {
    name: "Archive Token",
    id: "#001-T",
    price: "$42",
    image:
      "/images/a_professional_high_fidelity_macro_photograph_of_a_magnifying_glass_inspecting/screen.png",
    description:
      "A compact authentication token that unlocks provenance and grading records.",
  },
];

const filters = ["All", "Apparel", "Accessories", "Footwear", "Vaulted"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <HeaderNav />

      <main className="flex-grow pt-[80px]">
        <section className="relative overflow-hidden border-b border-outline-variant/20 bg-surface/60">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary-fixed/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary-container/10 blur-3xl" />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-margin py-16 md:py-20 flex flex-col gap-8">
            <div className="flex flex-col gap-4 max-w-3xl">
              <span className="font-label-caps text-label-caps text-primary-fixed tracking-[0.2em]">
                PRODUCT CATALOG
              </span>
              <h1 className="font-display-lg text-[44px] md:text-[64px] leading-[1.02] text-primary tracking-tighter">
                ALL PRODUCTS
              </h1>
              <p className="font-body-base text-[15px] md:text-[17px] text-on-surface-variant max-w-2xl">
                Browse every vaulted drop in the Midnight Exchange collection.
                Each item is authenticated, graded, and presented as part of the
                all-products catalog.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container text-[10px] md:text-[11px] font-label-caps tracking-[0.12em] text-on-surface-variant hover:text-primary hover:border-primary-fixed transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-data-mono text-on-surface-variant">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
                6 ITEMS LIVE
              </span>
              <span>•</span>
              <span>UPDATED: 0.02ms</span>
              <span>•</span>
              <Link href="/" className="text-primary-fixed hover:text-primary transition-colors">
                BACK TO HOME
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-margin py-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md">
            {allProducts.map((product) => (
              <ProductMarketCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
