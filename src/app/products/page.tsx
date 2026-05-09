import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "VOID-TECH OVERCOAT",
    serial: "#MX-0442-V",
    price: "1.85 ETH",
    rarity: "LEGENDARY",
    rarityColor: "purple",
    grade: "GEM MINT",
    gradeNumber: "10",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "GHOST DRAGON CAP",
    serial: "#MX-8109-G",
    price: "0.42 ETH",
    rarity: "RARE",
    rarityColor: "cyan",
    grade: "MINT",
    gradeNumber: "9",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "CHRONO SNKRS",
    serial: "#MX-0012-C",
    price: "2.10 ETH",
    rarity: "LIMITED",
    rarityColor: "purple",
    grade: "GEM MINT",
    gradeNumber: "10",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "TECH JOGGERS",
    serial: "#MX-9921-T",
    price: "0.15 ETH",
    rarity: "UNCOMMON",
    rarityColor: "cyan",
    grade: "PRISTINE",
    gradeNumber: "10",
    image:
      "https://images.unsplash.com/photo-1506629905607-d9c297d6f2f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "VAULT TEE",
    serial: "#MX-5561-B",
    price: "0.05 ETH",
    rarity: "COMMON",
    rarityColor: "cyan",
    grade: "NEAR MINT",
    gradeNumber: "8",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "MODULAR CARRIER",
    serial: "#MX-0001-M",
    price: "3.50 ETH",
    rarity: "LEGENDARY",
    rarityColor: "purple",
    grade: "PRISTINE",
    gradeNumber: "10",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
];

interface ProductCardProps {
  name: string;
  serial: string;
  price: string;
  image: string;
  rarity: string;
  rarityColor: string;
  grade: string;
  gradeNumber: string;
}

function ProductCard({
  name,
  serial,
  price,
  image,
  rarity,
  rarityColor,
  grade,
  gradeNumber,
}: ProductCardProps) {
  return (
    <Link
      href="/products/details"
      className="group relative block overflow-hidden border border-white/20 bg-[#161618] p-[10px] shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-cyan-400/5" />
        <div className="absolute right-0 top-0 h-40 w-40 bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mb-2 bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 p-[2px]">
        <div className="flex items-center justify-between bg-zinc-100 px-3 py-2">
          <div className="font-mono text-[9px] font-bold leading-tight text-black">
            MIDNIGHT
            <br />
            EXCHANGE
          </div>

          <div className="text-center text-black">
            <div className="font-mono text-[10px] font-extrabold uppercase">
              {grade}
            </div>

            <div className="-mt-1 text-2xl font-black">{gradeNumber}</div>
          </div>
        </div>
      </div>

      <div className="relative aspect-[3/4] overflow-hidden bg-black">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

        <div className="absolute bottom-5 left-5 z-10">
          <span
            className={`mb-2 inline-flex border px-2 py-1 font-mono text-[9px] uppercase tracking-widest ${
              rarityColor === "purple"
                ? "border-fuchsia-400 bg-fuchsia-400/10 text-fuchsia-300"
                : "border-cyan-400 bg-cyan-400/10 text-cyan-300"
            }`}
          >
            {rarity}
          </span>

          <h3 className="max-w-[220px] text-2xl font-bold uppercase leading-none tracking-tight text-white">
            {name}
          </h3>
        </div>
      </div>

      <div className="mt-2 flex items-end justify-between border-t border-white/10 bg-white/[0.03] p-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Serial
          </p>

          <p className="mt-1 font-mono text-sm text-white">{serial}</p>
        </div>

        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Price
          </p>

          <p className="mt-1 font-mono text-sm text-cyan-300">{price}</p>
        </div>
      </div>
    </Link>
  );
}

function FilterSidebar() {
  return (
    <aside className="sticky top-24 hidden h-fit w-[280px] flex-col gap-6 lg:flex">
      <div className="border border-cyan-400/20 bg-zinc-950/60 p-6 backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            Market Filters
          </h2>

          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Category
            </p>

            <div className="space-y-2">
              {["Outerwear", "Accessories", "Footwear", "Techwear"].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-zinc-700 bg-black accent-cyan-400"
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Grade
            </p>

            <div className="space-y-2">
              {["Gem Mint 10", "Mint 9", "Near Mint 8"].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-zinc-700 bg-black accent-cyan-400"
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Price Range
              </p>

              <span className="font-mono text-xs text-cyan-300">0.00 - 12 ETH</span>
            </div>

            <div className="relative h-1 w-full bg-zinc-800">
              <div className="absolute left-0 h-full w-2/3 bg-cyan-400" />

              <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-cyan-400 bg-black shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

              <div className="absolute left-2/3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-cyan-400 bg-black shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </div>
          </div>

          <button className="w-full border border-white/10 py-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300">
            Clear All
          </button>
        </div>
      </div>
    </aside>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0C] text-white">
      <main className="flex-grow pt-[80px]">
        <div className="overflow-hidden border-b border-white/10 bg-black/40 py-3">
          <div className="animate-[ticker_30s_linear_infinite] whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
            TOTAL ASSETS SECURED: 14,202 • 24H VOLUME: 1.2M USD • FLOOR PRICE: 4.8 ETH • VERIFIED TRANSACTIONS: 88,412 • TOTAL ASSETS SECURED: 14,202 • 24H VOLUME: 1.2M USD • FLOOR PRICE: 4.8 ETH • VERIFIED TRANSACTIONS: 88,412
          </div>
        </div>

        <section className="mx-auto flex max-w-7xl gap-8 px-6 py-12">
          <FilterSidebar />

          <div className="flex-1">
            <div className="mb-8 flex flex-col gap-4 border border-white/10 bg-zinc-950/50 px-6 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Displaying 24 of 142 Assets
              </span>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Sort By
                </span>

                <button className="border-b border-cyan-400/30 pb-1 font-mono text-sm text-cyan-300">
                  Latest Drops
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.serial} {...product} />
              ))}
            </div>

            <div className="mt-14 flex items-center justify-center gap-3 border-t border-white/10 pt-10">
              <button className="flex h-11 w-11 items-center justify-center border border-cyan-400/30 text-zinc-300 transition hover:bg-cyan-400 hover:text-black">
                ←
              </button>

              <button className="flex h-11 w-11 items-center justify-center border border-cyan-400 bg-cyan-400 font-mono text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                1
              </button>

              <button className="flex h-11 w-11 items-center justify-center border border-white/10 font-mono text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300">
                2
              </button>

              <button className="flex h-11 w-11 items-center justify-center border border-white/10 font-mono text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300">
                3
              </button>

              <span className="px-2 text-zinc-500">...</span>

              <button className="flex h-11 w-11 items-center justify-center border border-white/10 font-mono text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300">
                12
              </button>

              <button className="flex h-11 w-11 items-center justify-center border border-cyan-400/30 text-zinc-300 transition hover:bg-cyan-400 hover:text-black">
                →
              </button>
            </div>
          </div>

        </section>
      </main>

      <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin py-lg w-full max-w-[1440px] mx-auto gap-gutter">
          <div className="font-label-caps text-label-caps text-primary dark:text-primary-fixed">
            MIDNIGHT STORE
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
