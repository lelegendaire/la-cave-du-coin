"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Seasons, QuickSand } from "@/app/fonts";
import { Calendar, Clock, Users, Wine, MapPin, ChevronRight, Music } from "lucide-react";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

const upcomingEvents = [
  {
    id: 1,
    title: "Soirée Vins de Loire",
    date: "Jeudi 18 Avril",
    time: "18h00 - 21h30",
    description:
      "Découvrez les vins nature du Val de Loire en compagnie de Marie et Pierre du Domaine des Copains. Dégustation de 6 vins et planche de fromages locaux.",
    image: "/hero.jpg",
    attendees: "15 places",
    price: "25€",
    type: "Dégustation",
  },
  {
    id: 2,
    title: "Apéro Jazz & Vins Bio",
    date: "Vendredi 19 Avril",
    time: "19h00 - 22h00",
    description:
      "Un vendredi soir musical avec jazz live et sélection de vins biologiques. Ambiance conviviale garantie au repère des copains.",
    image: "/hero.jpg",
    attendees: "20 places",
    price: "15€",
    type: "Apéro Concert",
  },
  {
    id: 3,
    title: "Atelier : Reconnaître les Cépages",
    date: "Samedi 20 Avril",
    time: "14h00 - 16h00",
    description:
      "Apprenez à identifier les principaux cépages français grâce à notre caviste Samuel. Atelier ludique et pédagogique avec 8 vins à l'aveugle.",
    image: "/hero.jpg",
    attendees: "12 places",
    price: "30€",
    type: "Atelier",
  },
  {
    id: 4,
    title: "Soirée Bourgogne & Terroir",
    date: "Jeudi 25 Avril",
    time: "18h00 - 21h30",
    description:
      "Voyage au cœur de la Bourgogne avec des vins d'exception. Rencontre avec un vigneron de Chablis et dégustation de ses cuvées rares.",
    image: "/hero.jpg",
    attendees: "15 places",
    price: "35€",
    type: "Dégustation",
  },
];

const recurringEvents = [
  {
    day: "Tous les Jeudis",
    event: "Soirée Dégustation",
    time: "18h00 - 21h30",
    description: "Découverte d'une région ou d'un cépage",
  },
  {
    day: "Tous les Vendredis",
    event: "Apéro du Repère",
    time: "18h00 - 22h00",
    description: "Vins au verre et ambiance conviviale",
  },
];

export default function EvenementsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const recurringRef = useRef(null);
  const eventsRef = useRef(null);

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

      // Recurring events banner
      gsap.fromTo(
        recurringRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: recurringRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Event cards staggered reveal with parallax
      const eventCards = eventsRef.current?.querySelectorAll(".event-card");
      eventCards?.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Subtle parallax on image
        const image = card.querySelector(".event-image");
        if (image) {
          gsap.to(image, {
            y: -20,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#f5f0e8] py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle texture */}
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
              Agenda
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>

          {/* Title */}
          <CopyBlur>
          <h2
            className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#1a3347] leading-tight mb-6`}
          >
            Événements & Dégustations
          </h2></CopyBlur>

          {/* Intro text */}
          <p
            className={`${QuickSand.className} text-[#26495f] text-base lg:text-lg leading-relaxed`}
          >
            Rejoignez-nous pour des moments conviviaux uniques. Chaque semaine,
            de nouvelles découvertes autour des vins nature et des producteurs
            passionnés.
          </p>
        </div>

        {/* Recurring Events Banner */}
        <div
          ref={recurringRef}
          className="mb-16 bg-linear-to-r from-[#26495f] to-[#1a3347] rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {recurringEvents.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <div>
                  <h3
                    className={`${Seasons.className} text-xl text-[#f5f0e8] mb-1`}
                  >
                    {item.day}
                  </h3>
                  <p
                    className={`${QuickSand.className} text-[#c9a84c] font-medium mb-1`}
                  >
                    {item.event}
                  </p>
                  <div className="flex items-center gap-4 text-[#a8c4d0] text-sm">
                    <span className={`${QuickSand.className} flex items-center gap-1`}>
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </span>
                  </div>
                  <p
                    className={`${QuickSand.className} text-[#a8c4d0] text-sm mt-2`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div ref={eventsRef} className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="event-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="event-image absolute inset-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a3347] via-[#1a3347]/40 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${QuickSand.className} px-3 py-1.5 bg-[#c9a84c] text-white text-xs font-medium rounded-full`}>
                    {event.type}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${QuickSand.className} px-3 py-1.5 bg-white/90 text-[#1a3347] text-sm font-bold rounded-full`}>
                    {event.price}
                  </span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className={`${Seasons.className} text-xl text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors`}
                  >
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date & Time */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-[#26495f]">
                    <Calendar className="w-4 h-4 text-[#c9a84c]" />
                    <span
                      className={`${QuickSand.className} text-sm font-medium`}
                    >
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#26495f]">
                    <Clock className="w-4 h-4 text-[#c9a84c]" />
                    <span
                      className={`${QuickSand.className} text-sm`}
                    >
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`${QuickSand.className} text-[#6b7280] text-sm leading-relaxed mb-4 line-clamp-2`}
                >
                  {event.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#f5f0e8]">
                  <div className={`${QuickSand.className} flex items-center gap-2 text-[#6b7280] text-sm`}>
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}</span>
                  </div>
                  <button className={`${QuickSand.className} flex items-center gap-2 px-4 py-2 bg-[#26495f] text-white text-sm rounded-full hover:bg-[#1a3347] transition-all group-hover:gap-3 `}>
                    Réserver
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p
            className={`${QuickSand.className} text-[#26495f] text-base mb-6`}
          >
            Un événement privé ? Nous organisons vos soirées sur-mesure.
          </p>
          <a
            href="#reservation"
            className={`${QuickSand.className} inline-flex items-center gap-2 px-8 py-4 bg-[#26495f] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#1a3347] hover:shadow-xl hover:shadow-[#26495f]/25 group`}
          >
            Réserver un événement privé
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
