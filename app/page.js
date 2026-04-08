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
      <header   className="relative h-screen w-screen bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1472352327492-9765783b74e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
       <div className="bg-linear-to-t from-[#26495f] to-transparent opacity-60 h-screen w-full absolute"></div>
        <div className="bg-linear-to-b via-[#00000000] from-[#26495f] to-transparent opacity-60 h-screen w-full absolute"></div>
        
        <div className="logo flex absolute justify-center items-center h-screen w-full  text-white ">
        <div className="cave ">
    <h1 className={`${Century.className} absolute top-1/3 left-35/90 -rotate-15 font-bold  text-2xl`}> La</h1>
    <h1 className={`${Century.className} absolute top-10/40 left-35/100  font-bold text-9xl`}>C</h1>
    <h1 className={`${Century.className} absolute top-10/40 left-43/100 -rotate-9 font-bold  text-9xl`}>a</h1>
    <h1 className={`${Century.className} absolute top-13/50 left-52/100 rotate-5 font-bold  text-9xl`}>e</h1>
    <h1 className={`${Century.className} absolute top-11/50 left-48/100 rotate-4 font-bold  text-9xl`}>v</h1>
    </div>
    <h1 className={`${QuickSand.className} absolute top-19/50 left-58/100  text-[32px]`}>du Coin</h1>
      </div>
    <div className="flex flex-col h-screen w-screen">
    <p className={`${QuickSand.className} absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-5xl`}>le Repère des Copains</p>
    <div className="text-center absolute top-4/6 left-1/2 -translate-x-1/2">
              <a
                href="#reservation"
                className={`${QuickSand.className} block p-[4px_11px] lg:p-[8px_22px] bg-transparent border-2 border-white rounded-4xl text-white text-[8px] lg:text-xs font-bold uppercase decoration-0 cursor-pointer transition-all duration-300 ease relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-350 before:ease before:-z-1 hover:text-black hover:before:scale-x-100`}
              >
                Réservé dès maintenant
              </a>
            </div>
            <div className={`${QuickSand.className} absolute bottom-0 left-1/2 -translate-x-1/2 mb-9 flex items-center justify-between gap-10 w-screen text-white`}>
             
   <MorphingText className={`${QuickSand.className} `} texts={["Ouvert depuis décembre 2024", "On vous attend"]} />
   <MorphingText className={`${QuickSand.className} `} texts={["200+ références", "Découvrez nous"]} />
   <MorphingText className={`${QuickSand.className} `} texts={["Vin bio", "vin locale"]} />
 
            </div>
            <div className="nav flex items-center justify-center absolute text-white w-full">
  <ul 
    className="flex justify-center gap-10 mt-5 w-full group"
  >
    {['Notre histoire', 'Nos vins', 'Notre boutique', 'Notre vitrine'].map((item) => (
      <li key={item} className="transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:opacity-40 group-hover:blur-[2px] hover:scale-125 hover:opacity-100 hover:blur-none hover:z-10"
      >
        <a href="#" className={`${QuickSand.className} cursor-pointer`}>{item}</a>
      </li>
    ))}
  </ul>
</div>
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
