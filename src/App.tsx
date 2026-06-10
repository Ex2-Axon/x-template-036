import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.style.transform = 'scale(1.4)'
    const t = setTimeout(() => { if(ref.current) ref.current.style.transform = 'scale(1)' }, 200)
    return () => clearTimeout(t)
  }, [value])
  return <span ref={ref} className="inline-block transition-transform duration-200">{value}</span>
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="relative min-h-screen flex flex-col p-6 overflow-hidden">
      <div className="fixed inset-0 grid-overlay animate-grid-scroll pointer-events-none" />
      <header className="z-10 mb-8 flex justify-between items-center">
        <span className="font-heading text-xs text-primary tracking-widest px-4 py-1 border border-primary/30 rounded-full bg-primary/5">SYNTHWAVE — ONLINE</span>
        <span className="text-[10px] font-heading text-muted">v1.36.0</span>
      </header>
      <main className="z-10 grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl mx-auto w-full">
        <section className="md:col-span-8 bento-card flex flex-col justify-center min-h-[300px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src={heroImg} className="w-64 h-64 grayscale invert" alt="" />
          </div>
          <div className="relative z-10">
            <h1 className="text-6xl font-black text-primary font-heading mb-4">DRIVE</h1>
            <p className="text-xl font-body max-w-md">Outrun the future with neon-infused precision.</p>
          </div>
        </section>
        <section className="md:col-span-4 bento-card flex flex-col items-center justify-center text-center">
          <button onClick={() => setCount(c => c + 1)} className="bg-primary text-background px-8 py-4 rounded-xl font-heading hover:scale-105 transition-all shadow-[0_0_20px_rgba(247,37,133,0.4)]">
            IGNITE_ <CounterNum value={count} />
          </button>
        </section>
        <section className="md:col-span-4 bento-card">
          <h2 className="font-heading text-primary mb-4">STACK</h2>
          <div className="flex gap-4">
            <img src={viteLogo} className="w-10 h-10" alt="" />
            <img src={reactLogo} className="w-10 h-10 animate-spin-slow" alt="" />
          </div>
        </section>
        <section className="md:col-span-8 bento-card">
          <h2 className="font-heading text-primary mb-4">LINKS</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="https://github.com/Ex2-Axon/x-template" target="_blank" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://discord.gg/8Zeq8VCU" target="_blank" className="hover:text-primary transition-colors">Discord</a>
          </div>
        </section>
      </main>
      <footer className="z-10 mt-auto py-8 text-center text-[10px] text-muted font-heading tracking-[0.5em]">
        © 2026 MICROTRONIC. ALL RIGHTS RESERVED.
      </footer>
    </div>
  )
}
export default App
