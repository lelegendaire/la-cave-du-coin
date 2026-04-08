"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Seasons, QuickSand } from "@/app/fonts";
import { Star, MapPin, Leaf, Wine, Quote } from "lucide-react";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

const featuredProducer = {
  name: "Domaine des Copains",
  location: "Val de Loire, France",
  founded: "2018",
  philosophy:
    "Revenir à l'essentiel : travailler la vigne en respectant la terre, les saisons et le vivant. Pas d'intervention inutile, pas de produits chimiques. Juste le raisin, le temps, et beaucoup d'amour.",
  bio:
    "Marie et Pierre se rencontrent lors d'un stage chez un vigneron bio. Coup de foudre pour la terre et pour le vin. Ils reprennent ensemble 3 hectares de vignes en friche et les transforment en un domaine reconnu pour ses vins nature authentiques.",
  practices: [
    "Agriculture biodynamique",
    "Vendanges manuelles",
    "Fermentations naturelles",
    "Aucun sulfite ajouté",
    "Travail à la lune",
  ],
  wines: [
    {
      name: "Le P'tit Nature",
      type: "Rouge",
      grape: "Gamay",
      price: "12€",
    },
    {
      name: "Blanc de Soif",
      type: "Blanc",
      grape: "Chenin",
      price: "14€",
    },
    {
      name: "Cuvée des Amis",
      type: "Rouge",
      grape: "Cabernet Franc",
      price: "18€",
    },
  ],
  image: "/hero.jpg",
};

export default function CoupDeCoeurSection() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const practicesRef = useRef(null);
  const winesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge reveal
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image scale + fade
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content paragraphs stagger
      gsap.fromTo(
        contentRef.current?.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Practices stagger
      gsap.fromTo(
        practicesRef.current?.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: practicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Wines stagger
      gsap.fromTo(
        winesRef.current?.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: winesRef.current,
            start: "top 75%",
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#26495f]/30 via-transparent to-[#1a3347]/50 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3a6b87]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full"
          >
            <Star className="w-4 h-4 text-[#c9a84c]" />
            <span
              className={`${QuickSand.className} text-[#c9a84c] text-xs uppercase tracking-widest`}
            >
              Producteur du Mois
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <CopyBlur>
          <h2
            ref={titleRef}
            className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#f5f0e8] leading-tight mb-4`}
          >
            Coup de Cœur
          </h2></CopyBlur>
          <p
            className={`${QuickSand.className} text-[#a8c4d0] text-lg`}
          >
            {featuredProducer.name}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={featuredProducer.image}
                alt={featuredProducer.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1a3347]/80 via-transparent to-transparent" />

              {/* Location badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-[#c9a84c]" />
                  <span
                    className={`${QuickSand.className} text-sm`}
                  >
                    {featuredProducer.location}
                  </span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#c9a84c]/40" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#c9a84c]/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#c9a84c]/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#c9a84c]/40" />
            </div>

            {/* Founded badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#c9a84c] rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <span
                  className={`${QuickSand.className} block text-[#1a3347] text-xs font-medium`}
                >
                  Depuis
                </span>
                <span
                  className={`${Seasons.className} block text-[#1a3347] text-xl font-bold`}
                >
                  {featuredProducer.founded}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Quote */}
            <div
              className={`${QuickSand.className} relative pl-6 border-l-2 border-[#c9a84c]/40`}
            >
              <Quote className="absolute -top-2 -left-3 w-8 h-8 text-[#c9a84c]/20" />
              <p className="text-[#f5f0e8] text-lg italic leading-relaxed">
                "{featuredProducer.philosophy}"
              </p>
            </div>

            {/* Story */}
            <div ref={contentRef} className="space-y-4">
              <h3
                className={`${Seasons.className} text-2xl text-[#f5f0e8]`}
              >
                Leur Histoire
              </h3>
              <p
                className={`${QuickSand.className} text-[#a8c4d0] leading-relaxed`}
              >
                {featuredProducer.bio}
              </p>
            </div>

            {/* Practices */}
            <div>
              <h3
                className={`${Seasons.className} text-xl text-[#f5f0e8] mb-4`}
              >
                Leurs Pratiques
              </h3>
              <div
                ref={practicesRef}
                className="grid sm:grid-cols-2 gap-3"
              >
                {featuredProducer.practices.map((practice, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 bg-[#26495f]/40 rounded-lg border border-[#3a6b87]/30"
                  >
                    <Leaf className="w-4 h-4 text-[#c9a84c] shrink-0" />
                    <span
                      className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                    >
                      {practice}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Wines */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <Wine className="w-5 h-5 text-[#c9a84c]" />
              <h3
                className={`${Seasons.className} text-2xl text-[#f5f0e8]`}
              >
                Leurs Vins à la Cave
              </h3>
            </div>
            <p
              className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
            >
              Disponibles en dégustation et à la vente
            </p>
          </div>

          <div
            ref={winesRef}
            className="grid sm:grid-cols-3 gap-6"
          >
            {featuredProducer.wines.map((wine) => (
              <div
                key={wine.name}
                className="group relative bg-[#26495f]/40 border border-[#3a6b87]/30 rounded-xl p-6 hover:border-[#c9a84c]/40 transition-all duration-300"
              >
                {/* Type Badge */}
                <div className="mb-3">
                  <span
                    className={`${QuickSand.className} px-3 py-1 bg-[#3a6b87]/30 text-[#a8c4d0] text-xs rounded-full`}
                  >
                    {wine.type}
                  </span>
                </div>

                {/* Wine Name */}
                <h4
                  className={`${Seasons.className} text-lg text-[#f5f0e8] mb-2 group-hover:text-[#c9a84c] transition-colors`}
                >
                  {wine.name}
                </h4>

                {/* Grape */}
                <p
                  className={`${QuickSand.className} text-[#6b8a9e] text-sm mb-4`}
                >
                  {wine.grape}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-[#3a6b87]/30">
                  <span
                    className={`${QuickSand.className} text-[#c9a84c] text-lg font-bold`}
                  >
                    {wine.price}
                  </span>
                  <button className={`${QuickSand.className} px-4 py-2 bg-[#c9a84c]/20 text-[#c9a84c] text-sm rounded-full hover:bg-[#c9a84c]/30 transition-colors`}>
                    Découvrir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
