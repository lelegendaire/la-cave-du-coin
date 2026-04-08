'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { vertexShader, fragmentShader } from '@/app/shader'

gsap.registerPlugin(ScrollTrigger)

const CONFIG = {
  color: '#26495f',
  spread: 0.5,
  speed: 2,
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0.89, g: 0.89, b: 0.89 }
}

export default function HeroCanvas({ heroRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = heroRef?.current
    if (!canvas || !hero) return

    // Lenis
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)

    // Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    let material // ← déclare ici

    function resize() {
      const width = hero.offsetWidth
      const height = hero.offsetHeight
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      if (material) {
        material.uniforms.uResolution.value.set(width, height)
      }
    }
    resize()
    window.addEventListener('resize', resize)

    const rgb = hexToRgb(CONFIG.color)
    const geometry = new THREE.PlaneGeometry(2, 2)
    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uProgress: { value: 0 },
        uResolution: { value: new THREE.Vector2(hero.offsetWidth, hero.offsetHeight) },
        uColor: { value: new THREE.Vector3(rgb.r, rgb.g, rgb.b) },
        uSpread: { value: CONFIG.spread },
      },
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let scrollProgress = 0
    let animFrameId

    function animate() {
      material.uniforms.uProgress.value = scrollProgress
      renderer.render(scene, camera)
      animFrameId = requestAnimationFrame(animate)
    }
    animate()

    lenis.on('scroll', ({ scroll }) => {
      const heroHeight = hero.offsetHeight
      const windowHeight = window.innerHeight
      const maxScroll = heroHeight - windowHeight
      scrollProgress = Math.min((scroll / maxScroll) * CONFIG.speed, 1.1)
    })

    // Cleanup
    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', resize)
      lenis.destroy()
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [heroRef])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}