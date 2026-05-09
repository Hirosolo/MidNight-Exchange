import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      href?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  activeId?: number | null;
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, activeId = null, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const closeTimerRef = React.useRef<number | null>(null);

    const openSubMenu = (menuLabel: string | null) => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }

      setOpenMenu(menuLabel);
    };

    const closeSubMenu = () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }

      closeTimerRef.current = window.setTimeout(() => {
        setOpenMenu(null);
        closeTimerRef.current = null;
      }, 120);
    };

    React.useEffect(() => {
      return () => {
        if (closeTimerRef.current) {
          window.clearTimeout(closeTimerRef.current);
        }
      };
    }, []);

    return (
      <ul
        ref={ref}
        className={`relative flex items-center gap-1 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => {
          const isActive = activeId === navItem.id;
          const isOpen = openMenu === navItem.label;
          const triggerClassName = `inline-flex items-center justify-center gap-1 border px-2 py-2 font-label-caps text-xs tracking-[0.18em] transition-none ${
            isActive
              ? "border-cyan-300/80 bg-gradient-to-b from-cyan-400/20 to-cyan-500/5 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(0,251,251,0.25)]"
              : "border-fuchsia-300/20 bg-black/20 text-zinc-300 hover:border-cyan-300/60 hover:bg-cyan-500/10 hover:text-cyan-100"
          }`;

          return (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => openSubMenu(navItem.subMenus ? navItem.label : null)}
              onMouseLeave={closeSubMenu}
            >
              {navItem.link ? (
                <Link
                  className={triggerClassName}
                  href={navItem.link}
                  data-tab={navItem.label}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{navItem.label}</span>
                  {navItem.subMenus && <ChevronDown className="h-4 w-4" />}
                </Link>
              ) : (
                <button
                  type="button"
                  className={`${triggerClassName} cursor-default`}
                  aria-expanded={Boolean(isOpen)}
                  aria-haspopup={Boolean(navItem.subMenus)}
                >
                  <span>{navItem.label}</span>
                  {navItem.subMenus && <ChevronDown className="h-4 w-4" />}
                </button>
              )}

              {isOpen && navItem.subMenus && (
                <div className="absolute left-1/2 top-full z-10 mt-2 w-[80vw] -translate-x-1/2">
                  <div className="rounded-[16px] border border-white/10 bg-[#0A0A0A] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                    <div className="max-h-[min(70vh,48rem)] overflow-y-scroll overscroll-y-contain pr-2 [scrollbar-gutter:stable_both-edges] [scroll-behavior:auto]">
                      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
                        {navItem.subMenus.map((sub) => (
                          <div key={sub.title} className="min-w-0">
                            <h3 className="mb-3 text-sm font-medium capitalize text-white/60">
                              {sub.title}
                            </h3>
                            <ul className="space-y-2">
                              {sub.items.map((item) => {
                                const itemHref = item.href ?? "/products";

                                return (
                                  <li key={item.label}>
                                    <Link
                                      href={itemHref}
                                      className="block text-sm text-white/80 hover:text-cyan-300"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;