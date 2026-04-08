"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Seasons, QuickSand } from "@/app/fonts";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

export default function HistoireSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge reveal
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image parallax + fade
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Staggered paragraphs reveal
      gsap.fromTo(
        paragraphsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addParagraphRef = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#26495f] py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#26495f]/20 via-transparent to-[#1a3347]/40 pointer-events-none" />

      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Storytelling Text */}
          <div ref={textRef} className="space-y-8">
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span
                className={`${QuickSand.className} text-[#c9a84c] text-xs uppercase tracking-widest`}
              >
                Depuis 2024
              </span>
            </div>

            {/* Title */}
            <CopyBlur>
            <h2
              ref={addParagraphRef}
              className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#f5f0e8] leading-tight`}
            >
              Quatre amis, <br />
              <span className="text-[#c9a84c]">une passion du vin</span>
            </h2></CopyBlur>

            {/* Story paragraphs */}
            <div className="space-y-6">
              <p
                ref={addParagraphRef}
                className={`${QuickSand.className} text-[#a8c4d0] text-base lg:text-lg leading-relaxed`}
              >
                Tout commence par un défi entre amis : ouvrir une cave à vin
                près de l'église, un véritable <strong className="text-[#f5f0e8]">repère de copains</strong> où
                chaque bouteille raconte une histoire.
              </p>

              <p
                ref={addParagraphRef}
                className={`${QuickSand.className} text-[#a8c4d0] text-base lg:text-lg leading-relaxed`}
              >
                Ici, on défend les <strong className="text-[#f5f0e8]">vins authentiques</strong>, ceux qui
                osent sortir des sentiers battus. Des vins nature, vivants,
                élaborés sans produits chimiques de synthèse, ni intrants
                œnologiques.
              </p>

              <p
                ref={addParagraphRef}
                className={`${QuickSand.className} text-[#a8c4d0] text-base lg:text-lg leading-relaxed`}
              >
                Plus de <strong className="text-[#c9a84c]">200 références</strong> en boutique, du petit
                producteur qui travaille en biodynamie jusqu'aux pépites
                accessibles dès 6 euros la bouteille.
              </p>
            </div>

            {/* Team highlight */}
            <div
              ref={addParagraphRef}
              className="pt-6 border-t border-[#3a6b87]/40"
            >
              <p
                className={`${QuickSand.className} text-[#f5f0e8] text-sm uppercase tracking-wider mb-3`}
              >
                L'équipe
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                  <span
                    className={`${QuickSand.className} text-[#f5f0e8] text-base`}
                  >
                    <strong className="text-[#c9a84c]">Yann DANIEL</strong> — Propriétaire
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                  <span
                    className={`${QuickSand.className} text-[#f5f0e8] text-base`}
                  >
                    <strong className="text-[#c9a84c]">Samuel Miseriaux</strong> — Caviste
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div ref={imageRef} className="relative">
            {/* Main image container */}
            <div className="relative w-full aspect-4/5 lg:aspect-3/4 overflow-hidden rounded-sm">
              <Image
                src="/hero.jpg"
                alt="La Cave du Coin - Ambiance du lieu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1a3347]/60 via-transparent to-transparent" />
            </div>

            {/* Decorative gold accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#c9a84c]/30" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#c9a84c]/30" />

            {/* Floating quote badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-[#26495f] border border-[#3a6b87]/40 px-5 py-4 shadow-2xl">
              <p
                className={`${QuickSand.className} text-[#f5f0e8] text-sm italic leading-relaxed`}
              >
                "Revenir aux racines <br />
                <span className="text-[#c9a84c]">du terroir</span>"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
