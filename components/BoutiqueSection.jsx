"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Seasons, QuickSand } from "@/app/fonts";
import { ShoppingBag, Gift, PartyPopper, Heart, Plus, ChevronRight } from "lucide-react";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

const eventCollections = [
  {
    id: 1,
    name: "Coffret Mariage",
    occasion: "Mariage",
    bottles: 6,
    price: "89€",
    description: "Une sélection prestigieuse pour célébrer votre plus beau jour",
    wines: ["Champagne Brut", "Bordeaux Rouge", "Bourgogne Blanc"],
    icon: Heart,
    featured: true,
  },
  {
    id: 2,
    name: "Coffret Baptême",
    occasion: "Baptême",
    bottles: 4,
    price: "55€",
    description: "Des vins d'exception pour marquer ce moment unique",
    wines: ["Crémant de Loire", "Côtes du Rhône", "Muscat"],
    icon: Gift,
    featured: false,
  },
  {
    id: 3,
    name: "Coffret Cousinade",
    occasion: "Cousinade",
    bottles: 8,
    price: "65€",
    description: "Partagez de bons moments autour de vins conviviaux",
    wines: ["Rouge du Sud", "Blanc de Bourgogne", "Rosé de Provence"],
    icon: PartyPopper,
    featured: true,
  },
  {
    id: 4,
    name: "Coffret Grand Repas",
    occasion: "Grande tablée",
    bottles: 12,
    price: "95€",
    description: "Pour vos dimanches en famille ou entre amis",
    wines: ["Bordeaux", "Beaujolais", "Val de Loire", "Jura"],
    icon: ShoppingBag,
    featured: false,
  },
];

const individualBottles = [
  {
    id: 5,
    name: "Le P'tit Nature",
    producer: "Domaine des Copains",
    region: "Val de Loire",
    price: "12€",
    image: "/hero.jpg",
    category: "Rouge",
  },
  {
    id: 6,
    name: "Blanc Vivant",
    producer: "Les Vignerons Libres",
    region: "Jura",
    price: "22€",
    image: "/hero.jpg",
    category: "Blanc",
  },
  {
    id: 7,
    name: "Cuvée Authenticité",
    producer: "Marie & Pierre",
    region: "Beaujolais",
    price: "18€",
    image: "/hero.jpg",
    category: "Rouge",
  },
  {
    id: 8,
    name: "Rosé de Soif",
    producer: "Domaine du Coin",
    region: "Provence",
    price: "14€",
    image: "/hero.jpg",
    category: "Rosé",
  },
];

export default function BoutiqueSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const collectionsRef = useRef(null);
  const bottlesRef = useRef(null);

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

      // Collections staggered reveal
      const collectionCards = collectionsRef.current?.querySelectorAll(".collection-card");
      gsap.fromTo(
        collectionCards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: collectionsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Bottles staggered reveal
      const bottleCards = bottlesRef.current?.querySelectorAll(".bottle-card");
      gsap.fromTo(
        bottleCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottlesRef.current,
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
      className="relative min-h-screen w-full bg-[#f5f0e8] py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/hero.jpg')] bg-repeat pointer-events-none" />

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
              Boutique
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>

          {/* Title */}
          <CopyBlur>
          <h2
            className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#1a3347] leading-tight mb-6`}
          >
            Nos Coffrets & Bouteilles
          </h2></CopyBlur>

          {/* Intro text */}
          <p
            className={`${QuickSand.className} text-[#26495f] text-base lg:text-lg leading-relaxed mb-4`}
          >
            Emportez chez vous nos meilleures sélections. Chaque bouteille est
            choisie avec passion pour sublimer vos moments de partage.
          </p>

          {/* Highlight */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#26495f]/10 rounded-full">
            <Heart className="w-4 h-4 text-[#c9a84c]" />
            <span
              className={`${QuickSand.className} text-[#1a3347] text-sm font-medium`}
            >
              Sélection sur-mesure pour vos événements
            </span>
          </div>
        </div>

        {/* Event Collections */}
        <div ref={collectionsRef} className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#c9a84c]/30" />
            <h3
              className={`${Seasons.className} text-2xl text-[#1a3347]`}
            >
              Coffrets Événements
            </h3>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#c9a84c]/30" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCollections.map((collection) => {
              const Icon = collection.icon;
              return (
                <div
                  key={collection.id}
                  className={`collection-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    collection.featured ? "ring-2 ring-[#c9a84c]" : ""
                  }`}
                >
                  {/* Featured Badge */}
                  {collection.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`${QuickSand.className} inline-flex items-center gap-1 px-2 py-1 bg-[#c9a84c] text-white text-xs font-medium rounded-full`}>
                        <Heart className="w-3 h-3" />
                        Populaire
                      </span>
                    </div>
                  )}

                  {/* Icon Header */}
                  <div className="relative h-32 bg-linear-to-br from-[#26495f] to-[#1a3347] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-[#c9a84c]" />
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-20 h-20 border border-[#c9a84c]/30 rounded-full" />
                      <div className="absolute bottom-4 right-4 w-12 h-12 border border-[#c9a84c]/30 rounded-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4
                      className={`${Seasons.className} text-lg text-[#1a3347] mb-1`}
                    >
                      {collection.name}
                    </h4>
                    <p
                      className={`${QuickSand.className} text-[#6b7280] text-xs mb-3`}
                    >
                      {collection.bottles} bouteilles
                    </p>
                    <p
                      className={`${QuickSand.className} text-[#26495f] text-sm mb-4 line-clamp-2`}
                    >
                      {collection.description}
                    </p>

                    {/* Wine list preview */}
                    <div className="space-y-1 mb-4">
                      {collection.wines.map((wine, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                          <span
                            className={`${QuickSand.className} text-[#6b7280] text-xs`}
                          >
                            {wine}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#f5f0e8]">
                      <span
                        className={`${QuickSand.className} text-[#1a3347] text-xl font-bold`}
                      >
                        {collection.price}
                      </span>
                      <button className={`${QuickSand.className} flex items-center gap-1 px-3 py-2 bg-[#26495f] text-white text-xs rounded-full hover:bg-[#1a3347] transition-colors`}>
                        <Plus className="w-3 h-3" />
                        Ajouter
                      </button>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#26495f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Individual Bottles */}
        <div ref={bottlesRef}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#c9a84c]/30" />
            <h3
              className={`${Seasons.className} text-2xl text-[#1a3347]`}
            >
              À l'Unité
            </h3>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#c9a84c]/30" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualBottles.map((bottle) => (
              <div
                key={bottle.id}
                className="bottle-card group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-3/4 overflow-hidden bg-[#f5f0e8]">
                  <Image
                    src={bottle.image}
                    alt={bottle.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a3347]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`${QuickSand.className} px-2 py-1 bg-white/90 text-[#1a3347] text-xs rounded`}>
                      {bottle.category}
                    </span>
                  </div>

                  {/* Add to Cart Button (revealed on hover) */}
                  <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full px-3 py-2 bg-[#c9a84c] text-white text-sm rounded-full hover:bg-[#c9a84c]/90 transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4
                    className={`${Seasons.className} text-base text-[#1a3347] mb-1 group-hover:text-[#26495f] transition-colors`}
                  >
                    {bottle.name}
                  </h4>
                  <p
                    className={`${QuickSand.className} text-[#6b7280] text-xs mb-2`}
                  >
                    {bottle.producer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`${QuickSand.className} text-[#26495f] text-sm`}
                    >
                      {bottle.region}
                    </span>
                    <span
                      className={`${QuickSand.className} text-[#c9a84c] text-sm font-bold`}
                    >
                      {bottle.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p
            className={`${QuickSand.className} text-[#26495f] text-base mb-6`}
          >
            Un événement spécial ? Nous créons votre sélection personnalisée.
          </p>
          <a
            href="#reservation"
            className={`${QuickSand.className} inline-flex items-center gap-2 px-8 py-4 bg-[#26495f] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#1a3347] hover:shadow-xl hover:shadow-[#26495f]/25 group`}
          >
            Demander une sélection sur-mesure
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
