import ProductMarketCard from "@/components/ProductMarketCard";

const products = [
  {
    id: "#882-A",
    name: "Void-Tech Tee",
    price: "$180",
    rarity: "Legendary",
    rarityColor: "cyan" as const,
    grade: "MINT",
    gradeNumber: "10",
    image:
      "/images/a_premium_collectible_graphic_tee_displayed_inside_a_graded_trading_card_style/screen.png",
  },
  {
    id: "#114-B",
    name: "Ghost Dragon Cap",
    price: "$120",
    rarity: "Rare",
    rarityColor: "purple" as const,
    grade: "MINT",
    gradeNumber: "9.5",
    image:
      "/images/a_limited_edition_streetwear_accessory_or_cap_displayed_inside_a_graded_trading/screen.png",
  },
  {
    id: "#990-S",
    name: "Chrono Syndicate Snkrs",
    price: "$450",
    rarity: "Ultra",
    rarityColor: "cyan" as const,
    grade: "GEM",
    gradeNumber: "10",
    image:
      "/images/a_professional_cinematic_shot_of_a_physical_metallic_token_or_medallion/screen.png",
  },
];

export default function MarketLiveFeed() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24">
      {/* HEADER */}
      <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
                MARKET LIVE FEED
            </h2>   
        </div>

        <div className="flex items-center gap-3 font-mono text-sm text-zinc-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span>SYNCED: 0.02ms</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductMarketCard
            key={product.id}
            name={product.name}
            serial={product.id}
            price={product.price}
            image={product.image}
            rarity={product.rarity}
            rarityColor={product.rarityColor}
            grade={product.grade}
            gradeNumber={product.gradeNumber}
          />
        ))}
      </div>
    </section>
  );
}
