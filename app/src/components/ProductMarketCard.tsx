type MarketProduct = {
  name: string;
  id: string;
  price: string;
  image: string;
  description: string;
};

type ProductMarketCardProps = {
  product: MarketProduct;
};

export default function ProductMarketCard({ product }: ProductMarketCardProps) {
  return (
    <article className="group border border-outline-variant/60 bg-surface-container-high transition-all duration-200 hover:border-primary-fixed/70 hover:shadow-[0_0_14px_-8px_rgba(0,251,251,0.55)]">
      <div className="flex items-center justify-between border-b border-outline-variant/50 px-sm py-xs">
        <span className="font-data-mono text-[12px] text-on-surface">{product.name}</span>
        <span className="font-data-mono text-[12px] text-primary-fixed">{product.id}</span>
      </div>

      <div className="relative aspect-square overflow-hidden border border-outline-variant/60 bg-surface">
        <img
          alt={product.description}
          className="h-full w-full object-cover brightness-[0.92] contrast-[1.15] transition-transform duration-500 group-hover:scale-[1.03]"
          src={product.image}
        />
        <span className="absolute bottom-2 left-2 border border-outline-variant/70 bg-surface/90 px-2 py-[2px] font-label-caps text-[10px] text-primary backdrop-blur-sm">
          GEM MINT 10
        </span>
      </div>

      <div className="flex items-center justify-between px-sm py-xs">
        <span className="font-headline-md text-[34px] leading-none text-primary">
          {product.price}
        </span>
        <button className="border border-outline-variant/70 bg-surface px-sm py-[2px] font-label-caps text-[10px] text-primary transition-colors hover:border-primary-fixed hover:text-primary-fixed">
          ADD TO CART
        </button>
      </div>
    </article>
  );
}
