"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Seasons, QuickSand } from "@/app/fonts";
import { Mail, Phone, MapPin, Calendar, Clock, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import CopyBlur from "./CopyBlur";

gsap.registerPlugin(ScrollTrigger);

const eventTypes = [
  { id: "degustation", label: "Soirée dégustation" },
  { id: "prive", label: "Événement privé" },
  { id: "mariage", label: "Mariage / Baptême" },
  { id: "conseil", label: "Conseil personnalisé" },
  { id: "autre", label: "Autre" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "36 place Andrée Récipon, Laillé, 35890",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 86 89 12 88",
    href: "tel:+33686891288",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mimi-li@hotmail.fr",
    href: "mailto:mimi-li@hotmail.fr",
  },
];

const openingHours = [
  { day: "Lundi", hours: "Fermé", highlight: false },
  { day: "Mardi", hours: "15h30 – 19h00", highlight: false },
  { day: "Mercredi", hours: "10h00 – 13h00 · 15h30 – 19h00", highlight: false },
  { day: "Jeudi", hours: "10h00 – 13h00 · 15h30 – 21h30", highlight: true },
  { day: "Vendredi", hours: "10h00 – 13h00 · 15h30 – 21h30", highlight: true },
  { day: "Samedi", hours: "10h00 – 13h00 · 14h30 – 19h00", highlight: false },
  { day: "Dimanche", hours: "Fermé", highlight: false },
];

export default function ReservationSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      // Form and info stagger from opposite sides
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Veuillez sélectionner un type d'événement";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

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
              Contact
            </span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>

          {/* Title */}
          <CopyBlur>
          <h2
            className={`${Seasons.className} text-4xl lg:text-5xl xl:text-6xl text-[#1a3347] leading-tight mb-6`}
          >
            Réservation & Contact
          </h2></CopyBlur>

          {/* Intro text */}
          <p
            className={`${QuickSand.className} text-[#26495f] text-base lg:text-lg leading-relaxed`}
          >
            Réservez votre place pour nos dégustations ou demandez une sélection
            sur-mesure pour votre événement. Nous vous répondrons dans les plus
            brefs délais.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info & Hours */}
          <div ref={infoRef} className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3
                className={`${Seasons.className} text-xl text-[#1a3347] mb-6`}
              >
                Nos Coordonnées
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#26495f]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#26495f]" />
                      </div>
                      <div>
                        <p
                          className={`${QuickSand.className} text-[#6b7280] text-xs uppercase tracking-wider mb-1`}
                        >
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`${QuickSand.className} text-[#1a3347] font-medium hover:text-[#26495f] transition-colors`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p
                            className={`${QuickSand.className} text-[#1a3347] font-medium`}
                          >
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#26495f] rounded-2xl p-6 shadow-lg text-white">
              <h3
                className={`${Seasons.className} text-xl text-[#f5f0e8] mb-6`}
              >
                Horaires d'Ouverture
              </h3>
              <div className="space-y-3">
                {openingHours.map((slot, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-2 border-b border-[#3a6b87]/30 last:border-0 ${
                      slot.highlight ? "bg-[#1a3347]/50 -mx-2 px-2 rounded" : ""
                    }`}
                  >
                    <span
                      className={`${QuickSand.className} text-[#a8c4d0] text-sm`}
                    >
                      {slot.day}
                    </span>
                    <span
                      className={`${QuickSand.className} text-[#f5f0e8] text-sm font-medium`}
                    >
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-[#3a6b87]/30">
                <p
                  className={`${QuickSand.className} text-[#a8c4d0] text-xs uppercase tracking-wider mb-4`}
                >
                  Suivez-nous
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/lacaveducoin.laille"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1a3347] flex items-center justify-center hover:bg-[#c9a84c] transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/people/La-Cave-du-Coin/61570527667602/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1a3347] flex items-center justify-center hover:bg-[#c9a84c] transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reservation Form */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3
                className={`${Seasons.className} text-2xl text-[#1a3347] mb-6`}
              >
                Formulaire de Réservation
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4
                    className={`${Seasons.className} text-2xl text-[#1a3347] mb-2`}
                  >
                    Message envoyé !
                  </h4>
                  <p
                    className={`${QuickSand.className} text-[#6b7280]`}
                  >
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={`${QuickSand.className} space-y-6`}>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`${QuickSand.className} block text-[#26495f] text-sm font-medium mb-2`}
                    >
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a8c4d0]" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border ${
                          errors.name ? "border-red-500" : "border-[#e0e0e0]"
                        } rounded-xl focus:outline-none focus:border-[#26495f] focus:ring-2 focus:ring-[#26495f]/10 transition-all ${QuickSand.className} text-[#1a3347]`}
                        placeholder="Votre nom"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`${QuickSand.className} block text-[#26495f] text-sm font-medium mb-2`}
                    >
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a8c4d0]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border ${
                          errors.email ? "border-red-500" : "border-[#e0e0e0]"
                        } rounded-xl focus:outline-none focus:border-[#26495f] focus:ring-2 focus:ring-[#26495f]/10 transition-all ${QuickSand.className} text-[#1a3347]`}
                        placeholder="votre@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className={`${QuickSand.className} block text-[#26495f] text-sm font-medium mb-2`}
                    >
                      Téléphone (optionnel)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a8c4d0]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border border-[#e0e0e0] rounded-xl focus:outline-none focus:border-[#26495f] focus:ring-2 focus:ring-[#26495f]/10 transition-all ${QuickSand.className} text-[#1a3347]"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Event Type */}
                  <div>
                    <label
                      htmlFor="eventType"
                      className={`${QuickSand.className} block text-[#26495f] text-sm font-medium mb-2`}
                    >
                      Type d'événement *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a8c4d0]" />
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border ${
                          errors.eventType ? "border-red-500" : "border-[#e0e0e0]"
                        } rounded-xl focus:outline-none focus:border-[#26495f] focus:ring-2 focus:ring-[#26495f]/10 transition-all ${QuickSand.className} text-[#1a3347] appearance-none cursor-pointer`}
                      >
                        <option value="">Sélectionnez un type</option>
                        {eventTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.eventType && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.eventType}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`${QuickSand.className} block text-[#26495f] text-sm font-medium mb-2`}
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#a8c4d0]" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border ${
                          errors.message ? "border-red-500" : "border-[#e0e0e0]"
                        } rounded-xl focus:outline-none focus:border-[#26495f] focus:ring-2 focus:ring-[#26495f]/10 transition-all ${QuickSand.className} text-[#1a3347] resize-none`}
                        placeholder="Décrivez votre événement, vos besoins..."
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${QuickSand.className} w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#26495f] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[#1a3347] hover:shadow-lg hover:shadow-[#26495f]/25 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-t from-transparent via-[#c9a84c]/40 to-transparent" />
    </section>
  );
}
