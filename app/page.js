"use client"
import Image from "next/image";
import {Seasons,Century,QuickSand} from "./fonts"
import CopyBlur from "@/components/CopyBlur";
import HistoireSection from "@/components/HistoireSection";
import VinsSection from "@/components/VinsSection";
import ArdoiseSection from "@/components/ArdoiseSection";
import BoutiqueSection from "@/components/BoutiqueSection";
import CoupDeCoeurSection from "@/components/CoupDeCoeurSection";
import EvenementsSection from "@/components/EvenementsSection";
import GalerieSection from "@/components/GalerieSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import { MorphingText } from "@/components/ui/morphing-text";
import {MoveUpRight} from "lucide-react"
import { vertexShader,fragmentShader } from "./shader";
import { useRef } from 'react'
import HeroCanvas from '@/components/HeroCanvas'
export default function Home() {
    const heroRef = useRef(null)
  return (
    <main className="h-screen w-screen  ">
      <div ref={heroRef} className="h-[125vh] bg-[#26495f]">
    <header className="relative h-screen w-screen bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1472352327492-9765783b74e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
  <div className="bg-linear-to-t from-[#26495f] to-transparent opacity-60 h-screen w-full absolute" />
  <div className="bg-linear-to-b via-[#00000000] from-[#26495f] to-transparent opacity-60 h-screen w-full absolute" />

  {/* LOGO — positions en vw/vh pour cohérence toutes tailles */}
  <div className="absolute inset-0 flex justify-center items-center text-white">
    <div className="relative" style={{ width: '60vw', height: '50vh', maxWidth: '700px' }}>

      {/* "La" petit */}
      <span className={`${Century.className} absolute font-bold -rotate-15`}
        style={{ fontSize: 'clamp(14px, 2.5vw, 28px)', top: '6%', left: '25%' }}>
        La
      </span>

      {/* C */}
      <span className={`${Century.className} absolute font-bold `}
        style={{ fontSize: 'clamp(80px, 14vw, 160px)', top: '-12%', left: '15%', lineHeight: 1 }}>
        C
      </span>

      {/* a */}
      <span className={`${Century.className} absolute font-bold -rotate-9`}
        style={{ fontSize: 'clamp(80px, 14vw, 160px)', top: '-13%', left: '33%', lineHeight: 1 }}>
        a
      </span>

      {/* v */}
      <span className={`${Century.className} absolute font-bold rotate-4`}
        style={{ fontSize: 'clamp(80px, 14vw, 160px)', top: '-22%', left: '45%', lineHeight: 1 }}>
        v
      </span>

      {/* e */}
      <span className={`${Century.className} absolute font-bold rotate-5`}
        style={{ fontSize: 'clamp(80px, 14vw, 160px)', top: '-11%', left: '54%', lineHeight: 1 }}>
        e
      </span>

      {/* du Coin */}
      <span className={`${QuickSand.className} absolute`}
        style={{ fontSize: 'clamp(18px, 3.5vw, 40px)', top: '20%', left: '69%' }}>
        du Coin
      </span>
    </div>
  </div>
 
  {/* CONTENU CENTRAL */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">

    {/* Tagline */}
    <p className={`${QuickSand.className} absolute text-white text-center px-4`}
      style={{ fontSize: 'clamp(22px, 4vw, 48px)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap' }}>
      le Repère des Copains
    </p>

    {/* CTA */}
    <div className="absolute" style={{ top: '64%', left: '50%', transform: 'translateX(-50%)' }}>
      
        <a href="#reservation"
        className={`${QuickSand.className} block px-6 py-2 bg-transparent border-2 border-white rounded-full text-white text-xs font-bold uppercase cursor-pointer transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:-z-1 hover:text-black hover:before:scale-x-100`}
      >
        Réservé dès maintenant
      </a>
    </div>
  </div>

  {/* NAV */}
  <nav className="absolute top-0 w-full text-white">
    <ul className="flex justify-center gap-4 md:gap-10 mt-5 w-full group flex-wrap px-4">
      {['Notre histoire', 'Nos vins', 'Notre boutique', 'Notre vitrine'].map((item) => (
        <li key={item} className="transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:opacity-40 group-hover:blur-[2px] hover:scale-125! hover:opacity-100! hover:blur-none! hover:z-10">
          <a href="#" className={`${QuickSand.className} cursor-pointer text-xs md:text-sm lg:text-base`}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>

  {/* STATS BAS */}
  <div className={`${QuickSand.className} absolute bottom-0 left-1/2 -translate-x-1/2 mb-9 flex items-center justify-between gap-4 md:gap-10 w-screen text-white px-4`}>
    <MorphingText className={`${QuickSand.className} text-xs md:text-base`} texts={["Ouvert depuis décembre 2024", "On vous attend"]} />
    <MorphingText className={`${QuickSand.className} text-xs md:text-base`} texts={["200+ références", "Découvrez nous"]} />
    <MorphingText className={`${QuickSand.className} text-xs md:text-base`} texts={["Vin bio", "Vin locale"]} />
  </div>

  <HeroCanvas heroRef={heroRef} />
</header>
    </div>
    <HistoireSection />
    <VinsSection />
    <ArdoiseSection />
    <BoutiqueSection />
    <CoupDeCoeurSection />
    <EvenementsSection />
    <GalerieSection />
    <ReservationSection />
    <Footer />
    </main>
  );
}
