"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FuzzyText from "@/components/FuzzyText";
import MegaMenu, { type MegaMenuItem } from "@/components/ui/mega-menu";

const navItems: MegaMenuItem[] = [
  { id: 1, label: "HOME", link: "/" },
  { id: 2, label: "PRODUCTS", link: "/products" },
  {
    id: 3,
    label: "CATEGORIES",
    link: "/products",
    subMenus: [
      {
        title: "Categories",
        items: [
          { label: "Accessories", href: "/products" },
          { label: "Clothing", href: "/products" },
          { label: "Footwear", href: "/products" },
          { label: "Home Decor", href: "/products" },
          { label: "Sale", href: "/products" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "BRANDS",
    link: "/products",
    subMenus: [
      {
        title: "Business",
        items: [
          { label: "Budweiser", href: "/products" },
          { label: "Chevrolet", href: "/products" },
          { label: "Coca-Cola", href: "/products" },
          { label: "Ducati", href: "/products" },
          { label: "Grey Goose", href: "/products" },
          { label: "Guinness", href: "/products" },
          { label: "Harley-Davidson", href: "/products" },
          { label: "Indian Motorcycle", href: "/products" },
          { label: "Jack Daniel's", href: "/products" },
          { label: "Jeep", href: "/products" },
          { label: "Marlboro", href: "/products" },
          { label: "Monster Energy", href: "/products" },
          { label: "Starbucks", href: "/products" },
          { label: "The Famous Grouse", href: "/products" },
          { label: "The Kraken", href: "/products" },
        ],
      },
      {
        title: "Culture",
        items: [
          { label: "Alpha Kappa Alpha", href: "/products" },
          { label: "America", href: "/products" },
          { label: "Bob Kevoian", href: "/products" },
          { label: "Calvin and Hobbes", href: "/products" },
          { label: "Captain Morgan", href: "/products" },
          { label: "Father's Day", href: "/products" },
          { label: "Independence Hall", href: "/products" },
          { label: "Mother's Day", href: "/products" },
          { label: "Peanuts", href: "/products" },
          { label: "Route 66", href: "/products" },
          { label: "Royal Navy", href: "/products" },
          { label: "Smokey Bear", href: "/products" },
          { label: "US Marine Corps", href: "/products" },
          { label: "US Navy", href: "/products" },
          { label: "USA", href: "/products" },
          { label: "Veteran Day", href: "/products" },
        ],
      },
      {
        title: "K-Pop",
        items: [
          { label: "Aespa", href: "/products" },
          { label: "BTS", href: "/products" },
          { label: "G-Dragon", href: "/products" },
        ],
      },
      {
        title: "Movie",
        items: [
          { label: "Avatar", href: "/products" },
          { label: "Batman", href: "/products" },
          { label: "Dragon Ball", href: "/products" },
          { label: "Godzilla", href: "/products" },
          { label: "Harry Potter", href: "/products" },
          { label: "James Bond 007", href: "/products" },
          { label: "Marty Supreme", href: "/products" },
          { label: "Naruto", href: "/products" },
          { label: "One Piece", href: "/products" },
          { label: "Peanut", href: "/products" },
          { label: "Pokémon", href: "/products" },
          { label: "Scream", href: "/products" },
          { label: "Star Trek", href: "/products" },
          { label: "Star Wars", href: "/products" },
          { label: "Stranger Things", href: "/products" },
          { label: "The Lord of the Rings", href: "/products" },
          { label: "The Muppet Show", href: "/products" },
          { label: "The Simpsons", href: "/products" },
          { label: "Top Gun", href: "/products" },
          { label: "Winnie the Pooh", href: "/products" },
          { label: "Zootopia", href: "/products" },
        ],
      },
      {
        title: "Music",
        items: [
          { label: "Bruce Springsteen", href: "/products" },
          { label: "Clint Black", href: "/products" },
          { label: "Dolly Parton", href: "/products" },
          { label: "Elvis Presley", href: "/products" },
          { label: "Freddie Mercury", href: "/products" },
          { label: "Jimmy Buffett", href: "/products" },
          { label: "Kenny Chesney", href: "/products" },
          { label: "Michael Jackson", href: "/products" },
          { label: "Prince", href: "/products" },
          { label: "Rock the Country", href: "/products" },
          { label: "Westlife", href: "/products" },
          { label: "Willie Nelson", href: "/products" },
        ],
      },
      {
        title: "Other",
        items: [
          { label: "DC", href: "/products" },
          { label: "Friday The 13th", href: "/products" },
          { label: "La La Land", href: "/products" },
          { label: "Marvel", href: "/products" },
          { label: "Mission Impossible", href: "/products" },
          { label: "Pirates of the Caribbean", href: "/products" },
          { label: "Taxi Driver", href: "/products" },
          { label: "The Texas Chainsaw Massacre", href: "/products" },
        ],
      },
      {
        title: "Rock Band",
        items: [
          { label: "AC/DC", href: "/products" },
          { label: "Aerosmith", href: "/products" },
          { label: "Black Stone Cherry", href: "/products" },
          { label: "Guns N' Roses", href: "/products" },
          { label: "Iron Maiden", href: "/products" },
          { label: "KISS", href: "/products" },
          { label: "Led Zeppelin", href: "/products" },
          { label: "Megadeth", href: "/products" },
          { label: "Metallica", href: "/products" },
          { label: "Pink Floyd", href: "/products" },
          { label: "Queen", href: "/products" },
          { label: "RUSH", href: "/products" },
          { label: "Sleep Token", href: "/products" },
          { label: "The Beatles", href: "/products" },
          { label: "The Eagles", href: "/products" },
          { label: "The Rolling Stones", href: "/products" },
          { label: "Thirty Seconds to Mars", href: "/products" },
          { label: "Van Halen", href: "/products" },
          { label: "Wu-Tang Clan", href: "/products" },
        ],
      },
      {
        title: "Sport",
        items: [
          { label: "MLB", href: "/products" },
          { label: "NBA", href: "/products" },
          { label: "NCAA", href: "/products" },
          { label: "NFL", href: "/products" },
          { label: "NHL", href: "/products" },
          { label: "Other Sport", href: "/products" },
          { label: "Soccer", href: "/products" },
        ],
      },
      {
        title: "Tabletop",
        items: [
          { label: "Dungeons & Dragons", href: "/products" },
        ],
      },
      {
        title: "Video Game",
        items: [
          { label: "Fallout", href: "/products" },
          { label: "Sonic The Hedgehog", href: "/products" },
          { label: "World of Warcraft", href: "/products" },
          { label: "Zelda", href: "/products" },
        ],
      },
    ],
  },
  { id: 5, label: "ABOUT US", link: "/#aboutus" },
  { id: 6, label: "CONTACT US", link: "/#contactus" },
];

export default function HeaderNav() {
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash.replace("#", ""));
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const activeTab = pathname.startsWith("/products")
    ? 2
    : activeHash === "aboutus"
      ? 5
      : activeHash === "contactus"
        ? 6
        : pathname === "/"
          ? 1
          : null;

  return (
    <header className="fixed top-0 z-50 w-full py-2 bg-surface/90 dark:bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_0_0_rgba(255,255,255,0.05)]">
      <div className="relative flex items-center px-margin py-4 w-full max-w-[1440px] mx-auto gap-10">
        <FuzzyText
          baseIntensity={0.18}
          hoverIntensity={0.55}
          enableHover
          fontSize="1.5rem"
          fontWeight={700}
          color="#00FFFF"
          className="block shrink-0 leading-none"
        >
          MIDNIGHT STORE
        </FuzzyText>
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 border border-cyan-300/35 bg-gradient-to-r from-[#0a1014]/95 via-[#111118]/95 to-[#140d1d]/95 p-1 shadow-[0_0_26px_rgba(0,251,251,0.18),0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <MegaMenu items={navItems} activeId={activeTab} />
        </nav>
      </div>
      <style jsx global>{`
        @keyframes navbar-beep-slow {
          0% {
            opacity: 1;
          }
          83.333% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-navbar-beep-slow {
          animation: navbar-beep-slow 1s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-navbar-beep-slow {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
