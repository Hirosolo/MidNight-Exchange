"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];

const specs = [
  {
    title: "THE FABRIC",
    description:
      "CHRONO-WEAVE: 4-way stretch, water-resistant, electromagnetic shielding.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "THE TECH",
    description:
      "INTEGRATED NFC TAG: Scan for digital provenance and ownership history.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "THE FIT",
    description:
      "MODULAR DESIGN: Detachable hood and internal thermal cooling vents.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
];

const relatedProducts = [
  {
    name: "Ghost Dragon Cap",
    code: "APPAREL_08",
    price: "$120.00",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Chrono Sneakers",
    code: "FOOTWEAR_12",
    price: "$450.00",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Technical Joggers",
    code: "APPAREL_09",
    price: "$310.00",
    image:
      "https://images.unsplash.com/photo-1506629905607-d9d7d0acaf0f?q=80&w=1200&auto=format&fit=crop",
  },
];

function MaterialIcon({ children }: { children: string }) {
  return <span className="material-symbols-outlined text-[18px]">{children}</span>;
}

export default function ProductDetailsPage() {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0A0C] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 md:pt-32">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-600">
          <Link href="/products" className="text-zinc-300 transition hover:text-cyan-300">
            Market
          </Link>
          <span>/</span>
          <span>Technical Apparel</span>
          <span>/</span>
          <span className="text-zinc-300">Void-Tech Overcoat</span>
        </div>

        <section className="mb-32 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="group relative aspect-square overflow-hidden border border-zinc-800 bg-zinc-950">
            <Image
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1400&auto=format&fit=crop"
              alt="Void-Tech Overcoat"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-105 grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
              priority
            />

            <div className="absolute left-6 top-6 border-l-2 border-cyan-400 bg-black/40 px-4 py-3 backdrop-blur">
              <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-300">
                CAM_RECV_01 // STABLE
              </p>
            </div>

            <button className="absolute bottom-6 right-6 flex items-center gap-2 border border-white/10 bg-black/50 px-4 py-3 text-xs font-bold tracking-[0.2em] text-white backdrop-blur transition hover:border-cyan-400 hover:text-cyan-300">
              <MaterialIcon>zoom_in</MaterialIcon>
              ZOOM TO TEXTURE
            </button>
          </div>

          <div className="flex flex-col border border-zinc-800 bg-zinc-950 p-10">
            <div className="mb-10 flex items-start justify-between gap-6">
              <div>
                <h1 className="mb-3 text-5xl font-black leading-none tracking-tight text-white">
                  VOID-TECH OVERCOAT // GEN 1
                </h1>

                <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">
                  ASSET_ID: #004/300
                </p>
              </div>

              <div className="border border-yellow-500 bg-zinc-900 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white">
                GEM MINT 10
              </div>
            </div>

            <div className="border-y border-white/10 py-8">
              <div className="flex flex-wrap items-end gap-4">
                <span className="text-5xl font-black text-white">$850.00</span>

                <span className="font-mono text-xs tracking-[0.2em] text-cyan-300">
                  ETH EQUIVALENT: 0.28
                </span>
              </div>
            </div>

            <div className="mt-10">
              <label className="mb-5 block text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                Select Size Cluster
              </label>

              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-14 w-14 border text-sm font-bold transition ${
                      selectedSize === size
                        ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        : "border-zinc-700 bg-zinc-900 text-white hover:border-cyan-400 hover:text-cyan-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <button className="bg-cyan-300 py-5 text-sm font-black uppercase tracking-[0.3em] text-black transition hover:brightness-110 active:scale-[0.99]">
                Add To Cart
              </button>

              <button className="border border-zinc-700 py-5 text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-white/5">
                Reserve In Physical Vault
              </button>
            </div>

            <div className="mt-auto border-l border-cyan-400/30 bg-black/30 p-6">
              <p className="font-mono text-xs leading-7 text-zinc-500">
                {"// SECURE PROTOCOL ACTIVE: All items authenticated at Midnight HQ."}
                Transaction secured by Ethereum blockchain. Physical delivery
                includes NFC provenance chip.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-10 border-l-4 border-cyan-400 pl-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {specs.map((spec) => (
              <div key={spec.title} className="group border border-zinc-800 bg-zinc-950 p-5">
                <div className="mb-5 aspect-square overflow-hidden border border-zinc-800">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    width={1200}
                    height={1200}
                    className="h-full w-full object-cover grayscale opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <h3 className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                  {spec.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-500">{spec.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mb-32 overflow-hidden border border-zinc-800 bg-zinc-950 p-10">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3 text-cyan-300">
                <MaterialIcon>shield</MaterialIcon>

                <span className="text-xs font-bold uppercase tracking-[0.3em]">
                  Asset Security Protocol
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white">
                Every Void-Tech Overcoat is physically graded, serialized, and can
                be shipped immediately or stored in our high-security
                climate-controlled vault.
              </h2>

              <div className="mt-10 flex gap-10">
                <div>
                  <div className="font-mono text-2xl text-cyan-300">99.9%</div>

                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                    UPTIME SECURE STORAGE
                  </div>
                </div>

                <div>
                  <div className="font-mono text-2xl text-cyan-300">ISO-27001</div>

                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                    CERTIFIED VAULTING
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[350px] overflow-hidden border border-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt="Vault security protocol"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale opacity-50"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400">
              Related Allocations
            </h2>

            <div className="flex gap-2">
              <button className="border border-zinc-800 bg-zinc-950 p-3 text-zinc-400 transition hover:text-cyan-300">
                <MaterialIcon>arrow_back</MaterialIcon>
              </button>

              <button className="border border-zinc-800 bg-zinc-950 p-3 text-zinc-400 transition hover:text-cyan-300">
                <MaterialIcon>arrow_forward</MaterialIcon>
              </button>
            </div>
          </div>

          <div className="no-scrollbar flex gap-8 overflow-x-auto pb-4">
            {relatedProducts.map((product) => (
              <div
                key={product.code}
                className="group min-w-[320px] cursor-pointer border border-zinc-800 bg-zinc-950"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="320px"
                    className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <span className="border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.3em] text-white">
                      View Asset
                    </span>
                  </div>
                </div>

                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                      {product.code}
                    </span>

                    <span className="font-mono text-sm text-cyan-300">{product.price}</span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
