import Image from "next/image";

const products = [
  {
    id: "#882-A",
    name: "Void-Tech Tee",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "#114-B",
    name: "Ghost Dragon Cap",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "#990-S",
    name: "Chrono Syndicate Snkrs",
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
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
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
          >
            {/* TOP */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="font-mono text-sm text-zinc-200">
                {product.name}
              </span>

              <span className="font-mono text-xs text-cyan-400">
                {product.id}
              </span>
            </div>

            {/* IMAGE */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* badge */}
              <div className="absolute bottom-4 left-4">
                <span className="rounded-md border border-cyan-400/20 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-300 backdrop-blur">
                  Gem Mint 10
                </span>
              </div>

              {/* glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-cyan-400/5" />
              </div>
            </div>

            {/* BOTTOM */}
            <div className="flex items-center justify-between px-5 py-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Current Price
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  {product.price}
                </h3>
              </div>

              <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300">
                Add To Cart
              </button>
            </div>

            {/* corner accent */}
            <div className="absolute right-0 top-0 h-20 w-20 bg-cyan-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
