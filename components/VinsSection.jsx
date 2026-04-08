"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Seasons, QuickSand } from "@/app/fonts";
import { BottleWine, Leaf, MapPin, Euro } from "lucide-react";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

const wineCategories = [
  { id: "all", label: "Tous" },
  { id: "nature", label: "Vins Nature" },
  { id: "bio", label: "Biodynamie" },
  { id: "local", label: "Producteurs Locaux" },
  { id: "rare", label: "Raretés" },
];

const wineData = [
  {
    id: 1,
    name: "Le P'tit Nature",
    producer: "Domaine des Copains",
    region: "Val de Loire",
    grape: "Gamay",
    price: "12€",
    category: "nature",
    image: "/hero.jpg",
    taste: "Fruité & Gourmand",
  },
  {
    id: 2,
    name: "Cuvée Authenticité",
    producer: "Marie & Pierre",
    region: "Beaujolais",
    grape: "Gamay Noir",
    price: "18€",
    category: "bio",
    image: "/hero.jpg",
    taste: "Élégant & Soyeux",
  },
  {
    id: 3,
    name: "Terroir Brut",
    producer: "Champagne Artisanal",
    region: "Champagne",
    grape: "Chardonnay, Pinot Noir",
    price: "35€",
    category: "rare",
    image: "/hero.jpg",
    taste: "Minéral & Rafraîchissant",
  },
  {
    id: 4,
    name: "Rouge des Amis",
    producer: "Cave de la Place",
    region: "Côtes du Rhône",
    grape: "Grenache, Syrah",
    price: "9€",
    category: "local",
    image: "/hero.jpg",
    taste: "Rond & Épicé",
  },
  {
    id: 5,
    name: "Blanc Vivant",
    producer: "Les Vignerons Libres",
    region: "Jura",
    grape: "Savagnin",
    price: "22€",
    category: "nature",
    image: "/hero.jpg",
    taste: "Complexe & Iodé",
  },
  {
    id: 6,
    name: "Rosé de Soif",
    producer: "Domaine du Coin",
    region: "Provence",
    grape: "Cinsault",
    price: "14€",
    category: "bio",
    image: "/hero.jpg",
    taste: "Frais & Désaltérant",
  },
];

export default function VinsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Grid items staggered reveal
      const cards = gridRef.current?.querySelectorAll(".wine-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const filteredWines =
    activeCategory === "all"
      ? wineData
      : wineData.filter((wine) => wine.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#f5f0e8] py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/hero.jpg')] bg-repeat pointer-events-none" />

      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span
              className={`${QuickSand.className} text-[#c9a84c] text-xs uppercase tracking-widest`}
            >
              Notre Sélection
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>

          {/* Title */}
          <CopyBlur>
          <h2
            className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#1a3347] leading-tight mb-6`}
          >
            Nos Vins
          </h2></CopyBlur>

          {/* Intro text */}
          <p
            className={`${QuickSand.className} text-[#26495f] text-base lg:text-lg leading-relaxed mb-8`}
          >
            Pour tous vos jolis moments — mariage, baptême, cousinade, grande
            tablée du dimanche — découvrez nos sélections de vins, champagnes et
            spiritueux sur-mesure.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full">
              <Leaf className="w-4 h-4 text-[#26495f]" />
              <span
                className={`${QuickSand.className} text-[#1a3347] text-sm`}
              >
                Vins Nature
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full">
              <MapPin className="w-4 h-4 text-[#26495f]" />
              <span
                className={`${QuickSand.className} text-[#1a3347] text-sm`}
              >
                Producteurs Locaux
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full">
              <Euro className="w-4 h-4 text-[#26495f]" />
              <span
                className={`${QuickSand.className} text-[#1a3347] text-sm`}
              >
                Dès 6€
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {wineCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${QuickSand.className} px-5 py-2.5 text-sm transition-all duration-300 rounded-full ${
                activeCategory === category.id
                  ? "bg-[#26495f] text-white shadow-lg shadow-[#26495f]/25"
                  : "bg-white/60 text-[#26495f] hover:bg-[#26495f]/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Wine Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredWines.map((wine) => (
            <div
              key={wine.id}
              className="wine-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a3347]/90 via-[#1a3347]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${QuickSand.className} px-3 py-1 bg-[#c9a84c] text-white text-xs uppercase tracking-wider rounded-full`}>
                    {wine.category === "nature" && "Nature"}
                    {wine.category === "bio" && "Biodynamie"}
                    {wine.category === "local" && "Local"}
                    {wine.category === "rare" && "Rareté"}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${QuickSand.className} px-3 py-1 bg-white/90 text-[#1a3347] text-sm font-bold rounded-full`}>
                    {wine.price}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2 mb-2">
                    <BottleWine  className="w-4 h-4 text-[#c9a84c]" />
                    <span className={`${QuickSand.className} text-white text-xs`}>
                      {wine.producer}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#c9a84c]" />
                    <span className={`${QuickSand.className} text-white text-xs`}>
                      {wine.region}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-[#c9a84c]" />
                    <span className={`${QuickSand.className} text-white text-xs`}>
                      {wine.grape}
                    </span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/20">
                    <span className={`${QuickSand.className} text-[#c9a84c] text-sm italic`}>
                      {wine.taste}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-5">
                <h3
                  className={`${Seasons.className} text-xl text-[#1a3347] mb-1 group-hover:text-[#26495f] transition-colors`}
                >
                  {wine.name}
                </h3>
                <p
                  className={`${QuickSand.className} text-[#6b7280] text-sm`}
                >
                  {wine.region} — {wine.grape}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="#boutique"
            className={`${QuickSand.className} inline-flex items-center gap-2 px-8 py-4 bg-[#26495f] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#1a3347] hover:shadow-xl hover:shadow-[#26495f]/25 group`}
          >
            Voir la boutique complète
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
