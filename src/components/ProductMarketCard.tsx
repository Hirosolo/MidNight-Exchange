import Link from "next/link";
import Image from "next/image";

interface ProductMarketCardProps {
  name: string;
  serial: string;
  price: string;
  image: string;
  rarity: string;
  rarityColor?: "cyan" | "purple";
  grade: string;
  gradeNumber: string;
  href?: string;
}

export default function ProductMarketCard({
  name,
  serial,
  price,
  image,
  rarity,
  rarityColor = "cyan",
  grade,
  gradeNumber,
  href = "/products/details",
}: ProductMarketCardProps) {
  const CardShell = href ? Link : "div";

  return (
    <CardShell
      href={href}
      className="group relative block overflow-hidden border border-white/20 bg-[#161618] p-[10px] shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-cyan-400/5" />
        <div
          className="absolute right-0 top-0 h-40 w-40 rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.22), rgba(34,211,238,0.06) 40%, transparent 60%)",
            willChange: "opacity, transform",
            transform: "translate3d(0, 0, 0)",
          }}
        />
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

            <div className="-mt-1 text-2xl font-black">
              {gradeNumber}
            </div>
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

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

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

          <p className="mt-1 font-mono text-sm text-white">
            {serial}
          </p>
        </div>

        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Price
          </p>

          <p className="mt-1 font-mono text-sm text-cyan-300">
            {price}
          </p>
        </div>
      </div>
    </CardShell>
  );
}
