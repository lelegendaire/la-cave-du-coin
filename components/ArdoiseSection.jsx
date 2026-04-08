"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Seasons, QuickSand } from "@/app/fonts";
import { Wine, Sparkles, Calendar, ChevronRight } from "lucide-react";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

const winesByTheGlass = [
  {
    id: 1,
    name: "Le P'tit Nature",
    producer: "Domaine des Copains",
    region: "Val de Loire",
    grape: "Gamay",
    priceGlass: "5€",
    priceBottle: "24€",
    taste: "Fruité, gouleyant, parfait à l'apéritif",
    type: "Rouge",
    featured: true,
  },
  {
    id: 2,
    name: "Blanc Vivant",
    producer: "Les Vignerons Libres",
    region: "Jura",
    grape: "Savagnin",
    priceGlass: "7€",
    priceBottle: "32€",
    taste: "Minéral, iodé, une belle complexité",
    type: "Blanc",
    featured: true,
  },
  {
    id: 3,
    name: "Rosé de Soif",
    producer: "Domaine du Coin",
    region: "Provence",
    grape: "Cinsault",
    priceGlass: "4€",
    priceBottle: "18€",
    taste: "Frais, désaltérant, notes d'agrumes",
    type: "Rosé",
    featured: false,
  },
  {
    id: 4,
    name: "Bulle Artisanale",
    producer: "Champagne Artisanal",
    region: "Champagne",
    grape: "Chardonnay, Pinot Noir",
    priceGlass: "9€",
    priceBottle: "45€",
    taste: "Fin, élégant, bulle soyeuse",
    type: "Effervescent",
    featured: true,
  },
];

const seasonalSuggestions = [
  {
    id: 5,
    name: "Cuvée d'Automne",
    producer: "Marie & Pierre",
    region: "Beaujolais",
    price: "16€",
    taste: "Un vin rond et épicé, parfait avec un gibier",
  },
  {
    id: 6,
    name: "Blanc de l'Hiver",
    producer: "Cave de la Place",
    region: "Côtes du Rhône",
    price: "14€",
    taste: "Riche et chaleureux, idéal pour les soirées fraîches",
  },
];

export default function ArdoiseSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current?.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Sidebar text reveal
      gsap.fromTo(
        sidebarRef.current?.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Wine list staggered reveal
      const items = listRef.current?.querySelectorAll(".ardoise-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#26495f] py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1a3347]/40 via-transparent to-[#26495f]/40 pointer-events-none" />

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
              L'Ardoise du Moment
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>

          {/* Title */}
          <CopyBlur>
          <h2
            className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#f5f0e8] leading-tight mb-6`}
          >
            La Carte / Ardoise
          </h2></CopyBlur>

          {/* Intro text */}
          <p
            className={`${QuickSand.className} text-[#a8c4d0] text-base lg:text-lg leading-relaxed`}
          >
            Découvrez notre ardoise et nos vins au verre, sélectionnés pour
            surprendre vos papilles. Chaque semaine, de nouvelles découvertes
            naturelles et authentiques.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Philosophy & Info */}
          <div ref={sidebarRef} className="lg:col-span-4 space-y-8">
            {/* Info Card */}
            <div className="bg-[#1a3347]/50 border border-[#3a6b87]/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                  <Wine className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <h3
                  className={`${Seasons.className} text-xl text-[#f5f0e8]`}
                >
                  Vins au Verre
                </h3>
              </div>
              <p
                className={`${QuickSand.className} text-[#a8c4d0] text-sm leading-relaxed mb-4`}
              >
                Dégustez nos coups de cœur sans ouvrir une bouteille entière.
                Chaque verre est servi avec soin et conseils.
              </p>
              <div className="flex items-center gap-2 text-[#c9a84c]">
                <Sparkles className="w-4 h-4" />
                <span
                  className={`${QuickSand.className} text-xs uppercase tracking-wider`}
                >
                  4 références disponibles
                </span>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-[#f5f0e8]/10 border border-[#3a6b87]/30 rounded-2xl p-6">
              <h3
                className={`${Seasons.className} text-xl text-[#f5f0e8] mb-4`}
              >
                Notre Philosophie
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2" />
                  <p
                    className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                  >
                    <strong className="text-[#f5f0e8]">Nature & Bio</strong> —
                    Sans sulfites ajoutés, levures ou arômes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2" />
                  <p
                    className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                  >
                    <strong className="text-[#f5f0e8]">Producteurs</strong> —
                    Petits domaines qui osent sortir des sentiers battus
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2" />
                  <p
                    className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                  >
                    <strong className="text-[#f5f0e8]">Terroir</strong> —
                    Revenir aux racines, vins authentiques et vivants
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#reservation"
              className={`${QuickSand.className} group flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#c9a84c] text-[#1a3347] rounded-full font-medium transition-all duration-300 hover:bg-[#c9a84c]/90 hover:shadow-lg hover:shadow-[#c9a84c]/25`}
            >
              Réserver votre dégustation
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: Wine List */}
          <div ref={listRef} className="lg:col-span-8 space-y-8">
            {/* Wines by the Glass */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#3a6b87]/40" />
                <h3
                  className={`${Seasons.className} text-2xl text-[#f5f0e8]`}
                >
                  Au Verre
                </h3>
                <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#3a6b87]/40" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {winesByTheGlass.map((wine) => (
                  <div
                    key={wine.id}
                    className="ardoise-item group relative bg-[#1a3347]/40 border border-[#3a6b87]/30 rounded-xl p-5 hover:bg-[#1a3347]/60 hover:border-[#c9a84c]/40 transition-all duration-300"
                  >
                    {/* Featured Badge */}
                    {wine.featured && (
                      <div className="absolute -top-2 -right-2">
                        <span className={`${QuickSand.className} inline-flex items-center gap-1 px-2 py-1 bg-[#c9a84c] text-[#1a3347] text-xs font-medium rounded-full`}>
                          <Sparkles className="w-3 h-3" />
                          Coup de cœur
                        </span>
                      </div>
                    )}

                    {/* Type Badge */}
                    <div className="mb-3">
                      <span
                        className={`${QuickSand.className} px-2 py-1 bg-[#3a6b87]/30 text-[#a8c4d0] text-xs rounded`}
                      >
                        {wine.type}
                      </span>
                    </div>

                    {/* Wine Name */}
                    <h4
                      className={`${Seasons.className} text-lg text-[#f5f0e8] mb-1 group-hover:text-[#c9a84c] transition-colors`}
                    >
                      {wine.name}
                    </h4>

                    {/* Producer */}
                    <p
                      className={`${QuickSand.className} text-[#a8c4d0] text-sm mb-3`}
                    >
                      {wine.producer} — {wine.region}
                    </p>

                    {/* Grape */}
                    <p
                      className={`${QuickSand.className} text-[#6b8a9e] text-xs mb-4`}
                    >
                      Cépage: {wine.grape}
                    </p>

                    {/* Prices */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        <span
                          className={`${QuickSand.className} text-[#c9a84c] text-sm font-medium`}
                        >
                          {wine.priceGlass}
                        </span>
                        <span
                          className={`${QuickSand.className} text-[#6b8a9e] text-xs`}
                        >
                          /verre
                        </span>
                      </div>
                      <div className="h-3 w-px bg-[#3a6b87]/40" />
                      <div className="flex items-center gap-1">
                        <span
                          className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                        >
                          {wine.priceBottle}
                        </span>
                        <span
                          className={`${QuickSand.className} text-[#6b8a9e] text-xs`}
                        >
                          /bouteille
                        </span>
                      </div>
                    </div>

                    {/* Tasting Note (revealed on hover) */}
                    <div className="pt-3 border-t border-[#3a6b87]/30 opacity-60 group-hover:opacity-100 transition-opacity">
                      <p
                        className={`${QuickSand.className} text-[#a8c4d0] text-xs italic`}
                      >
                        {wine.taste}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seasonal Suggestions */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-5 h-5 text-[#c9a84c]" />
                <h3
                  className={`${Seasons.className} text-2xl text-[#f5f0e8]`}
                >
                  Suggestions du Moment
                </h3>
              </div>

              <div className="space-y-4">
                {seasonalSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="ardoise-item group flex items-center justify-between bg-linear-to-r from-[#f5f0e8]/5 to-transparent border border-[#3a6b87]/30 rounded-xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h4
                        className={`${Seasons.className} text-lg text-[#f5f0e8] mb-1 group-hover:text-[#c9a84c] transition-colors`}
                      >
                        {suggestion.name}
                      </h4>
                      <p
                        className={`${QuickSand.className} text-[#a8c4d0] text-sm mb-2`}
                      >
                        {suggestion.producer} — {suggestion.region}
                      </p>
                      <p
                        className={`${QuickSand.className} text-[#6b8a9e] text-xs italic`}
                      >
                        {suggestion.taste}
                      </p>
                    </div>
                    <div className="ml-6 text-right">
                      <span
                        className={`${QuickSand.className} block text-[#c9a84c] text-lg font-medium`}
                      >
                        {suggestion.price}
                      </span>
                      <span
                        className={`${QuickSand.className} text-[#6b8a9e] text-xs`}
                      >
                        /bouteille
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
