"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Seasons, QuickSand } from "@/app/fonts";
import { ZoomIn, Heart, Wine } from "lucide-react";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    id: 1,
    src: "/hero.jpg",
    alt: "Comptoir de la cave",
    category: "Lieu",
    caption: "Notre comptoir en chêne, cœur battant du repère",
  },
  {
    id: 2,
    src: "/hero.jpg",
    alt: "Rayonnages de bouteilles",
    category: "Boutique",
    caption: "Plus de 200 références soigneusement sélectionnées",
  },
  {
    id: 3,
    src: "/hero.jpg",
    alt: "Yann et Samuel en dégustation",
    category: "Équipe",
    caption: "Yann et Samuel, passionnés à votre service",
  },
  {
    id: 4,
    src: "/hero.jpg",
    alt: "Soirée dégustation",
    category: "Ambiance",
    caption: "Nos jeudis soir : convivialité et découvertes",
  },
  {
    id: 5,
    src: "/hero.jpg",
    alt: "Détail de bouteilles nature",
    category: "Vins",
    caption: "Vins nature, bio et vivants",
  },
  {
    id: 6,
    src: "/hero.jpg",
    alt: "Façade de la boutique",
    category: "Lieu",
    caption: "La Cave du Coin, 36 place Andrée Récipon",
  },
  {
    id: 7,
    src: "/hero.jpg",
    alt: "Planche de dégustation",
    category: "Ambiance",
    caption: "Accords mets & vins lors de nos événements",
  },
  {
    id: 8,
    src: "/hero.jpg",
    alt: "Cave à vins",
    category: "Boutique",
    caption: "Conservation optimale pour nos précieux flacons",
  },
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "Lieu", label: "Lieu" },
  { id: "Équipe", label: "Équipe" },
  { id: "Ambiance", label: "Ambiance" },
  { id: "Vins", label: "Vins" },
  { id: "Boutique", label: "Boutique" },
];

export default function GalerieSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

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

      // Gallery images staggered reveal
      const images = galleryRef.current?.querySelectorAll(".gallery-item");
      images?.forEach((item, idx) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: idx * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#26495f] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1a3347]/40 via-transparent to-[#26495f]/40 pointer-events-none" />

      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span
              className={`${QuickSand.className} text-[#c9a84c] text-xs uppercase tracking-widest`}
            >
              En Images
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>

          {/* Title */}
          <CopyBlur>
          <h2
            className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#f5f0e8] leading-tight mb-6`}
          >
            Galerie
          </h2></CopyBlur>

          {/* Intro text */}
          <p
            className={`${QuickSand.className} text-[#a8c4d0] text-base lg:text-lg leading-relaxed`}
          >
            Plongez dans l'ambiance du Repère des Copains. Comptoir en chêne,
            rayonnages garnis, soirées dégustation... Bienvenue chez vous.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${QuickSand.className} px-5 py-2.5 text-sm transition-all duration-300 rounded-full ${
                activeCategory === category.id
                  ? "bg-[#c9a84c] text-[#1a3347] shadow-lg shadow-[#c9a84c]/25"
                  : "bg-[#1a3347]/40 text-[#a8c4d0] hover:bg-[#1a3347]/60"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1a3347]/90 via-[#1a3347]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`${QuickSand.className} px-2 py-1 bg-[#c9a84c] text-white text-xs rounded`}>
                  {image.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p
                  className={`${QuickSand.className} text-white text-sm line-clamp-2`}
                >
                  {image.caption}
                </p>
              </div>

              {/* Heart decoration */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <Heart className="w-5 h-5 text-[#c9a84c]" />
              </div>
            </div>
          ))}
        </div>

        {/* Visit CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#1a3347]/50 border border-[#3a6b87]/30 rounded-2xl">
            <Wine className="w-6 h-6 text-[#c9a84c]" />
            <div className="text-left">
              <p
                className={`${QuickSand.className} text-[#f5f0e8] text-sm font-medium`}
              >
                Venez vivre l'expérience
              </p>
              <p
                className={`${QuickSand.className} text-[#a8c4d0] text-xs`}
              >
                36 place Andrée Récipon, Laillé
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#c9a84c] transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p
                className={`${Seasons.className} text-xl text-[#f5f0e8] mb-2`}
              >
                {selectedImage.alt}
              </p>
              <p
                className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
              >
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
