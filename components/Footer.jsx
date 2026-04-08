"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Seasons, QuickSand, Century } from "@/app/fonts";
import { MapPin, Phone, Mail, Clock, ChevronRight, Wine } from "lucide-react";

const openingHours = [
  { day: "Lundi", hours: "Fermé" },
  { day: "Mardi", hours: "15h30 – 19h00" },
  { day: "Mercredi", hours: "10h00 – 13h00 · 15h30 – 19h00" },
  { day: "Jeudi", hours: "10h00 – 13h00 · 15h30 – 21h30" },
  { day: "Vendredi", hours: "10h00 – 13h00 · 15h30 – 21h30" },
  { day: "Samedi", hours: "10h00 – 13h00 · 14h30 – 19h00" },
  { day: "Dimanche", hours: "Fermé" },
];

const quickLinks = [
  { label: "Notre histoire", href: "#histoire" },
  { label: "Nos vins", href: "#vins" },
  { label: "La carte", href: "#ardoise" },
  { label: "Boutique", href: "#boutique" },
  { label: "Événements", href: "#evenements" },
  { label: "Galerie", href: "#galerie" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "#confidentialite" },
  { label: "Mentions légales", href: "#legal" },
  { label: "CGV", href: "#cgv" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo reveal
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Footer sections stagger
      const sections = footerRef.current?.querySelectorAll(".footer-section");
      gsap.fromTo(
        sections,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#1a3347] text-white pt-20 pb-8 overflow-hidden"
    >
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Logo & Brand (3 cols) */}
          <div ref={logoRef} className="lg:col-span-3">
            {/* Logo */}
            <div className="mb-6">
              <div className="relative h-16 w-32">
                <div className="flex items-center gap-1">
                  <h1
                    className={`${Century.className} text-3xl font-bold text-white -rotate-6`}
                  >
                    La
                  </h1>
                  <h1
                    className={`${Century.className} text-5xl font-bold text-white`}
                  >
                    C
                  </h1>
                  <h1
                    className={`${Century.className} text-5xl font-bold text-white -rotate-6`}
                  >
                    a
                  </h1>
                  <h1
                    className={`${Century.className} text-4xl font-bold text-white rotate-6`}
                  >
                    v
                  </h1>
                  <h1
                    className={`${Century.className} text-4xl font-bold text-white -rotate-6`}
                  >
                    e
                  </h1>
                </div>
                <span
                  className={`${QuickSand.className} text-white text-lg ml-1`}
                >
                  du Coin
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p
              className={`${QuickSand.className} text-[#a8c4d0] text-sm mb-6`}
            >
              Le Repère des Copains
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/lacaveducoin.laille"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#26495f] flex items-center justify-center hover:bg-[#c9a84c] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
              </a>
              <a
                href="https://www.facebook.com/people/La-Cave-du-Coin/61570527667602/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#26495f] flex items-center justify-center hover:bg-[#c9a84c] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 footer-section">
            <h3
              className={`${Seasons.className} text-lg text-[#f5f0e8] mb-6`}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`${QuickSand.className} text-[#a8c4d0] text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2 group`}
                  >
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (3 cols) */}
          <div className="lg:col-span-4 footer-section">
            <h3
              className={`${Seasons.className} text-lg text-[#f5f0e8] mb-6`}
            >
              Nous trouver
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
              <div>
                <p
                  className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                >
                  36 place Andrée Récipon
                </p>
                <p
                  className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                >
                  35890 Laillé
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+33686891288"
              className="flex items-center gap-3 mb-4 group"
            >
              <Phone className="w-5 h-5 text-[#c9a84c] shrink-0" />
              <span
                className={`${QuickSand.className} text-[#a8c4d0] text-sm hover:text-[#c9a84c] transition-colors`}
              >
                06 86 89 12 88
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:mimi-li@hotmail.fr"
              className="flex items-center gap-3 group"
            >
              <Mail className="w-5 h-5 text-[#c9a84c] shrink-0" />
              <span
                className={`${QuickSand.className} text-[#a8c4d0] text-sm hover:text-[#c9a84c] transition-colors`}
              >
                mimi-li@hotmail.fr
              </span>
            </a>
          </div>

          {/* Column 4: Hours (4 cols) */}
          <div className="lg:col-span-3 footer-section">
            <h3
              className={`${Seasons.className} text-lg text-[#f5f0e8] mb-6 flex items-center gap-2`}
            >
              <Clock className="w-5 h-5 text-[#c9a84c]" />
              Horaires
            </h3>
            <div className="space-y-2">
              {openingHours.map((slot, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-1.5 border-b border-[#26495f]/50 last:border-0"
                >
                  <span
                    className={`${QuickSand.className} text-[#a8c4d0] text-xs`}
                  >
                    {slot.day}
                  </span>
                  <span
                    className={`${QuickSand.className} text-[#f5f0e8] text-xs font-medium`}
                  >
                    {slot.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-12 footer-section rounded-2xl overflow-hidden border border-[#26495f]/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991668092228!2d-1.7728!3d47.9847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f8a4a4a4a4a4a%3A0x4a4a4a4a4a4a4a4a!2s36%20place%20Andr%C3%A9e%20R%C3%A9cipon%2C%2035890%20Laill%C3%A9!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="250"
            style={{ border: 0, filter: "grayscale(0.3) contrast(0.9) opacity(0.8)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation La Cave du Coin"
            className="w-full"
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#26495f]/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p
                className={`${QuickSand.className} text-[#6b8a9e] text-xs`}
              >
                &copy; 2024-{new Date().getFullYear()} La Cave du Coin. Tous droits réservés.
              </p>
              <p
                className={`${QuickSand.className} text-[#6b8a9e] text-xs mt-1`}
              >
                L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`${QuickSand.className} text-[#6b8a9e] text-xs hover:text-[#c9a84c] transition-colors`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2">
              <Wine className="w-4 h-4 text-[#c9a84c]" />
              <span
                className={`${QuickSand.className} text-[#6b8a9e] text-xs`}
              >
                Fait avec passion à Laillé
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-10 w-48 h-48 bg-[#3a6b87]/10 rounded-full blur-3xl" />
    </footer>
  );
}
