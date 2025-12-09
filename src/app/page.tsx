import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#414d6e] font-sans text-[#f1e2c2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#414d6e]/80 border-b border-[#f1e2c2]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/logo.svg" alt="Guabún" width={120} height={120} className="transition-transform duration-300 group-hover:scale-125" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-[#f1e2c2]/80 hover:text-[#f1e2c2] transition-colors duration-200">Productos</a>
            <a href="#viaje" className="text-[#f1e2c2]/80 hover:text-[#f1e2c2] transition-colors duration-200">Filosofía</a>
            <a href="#proceso" className="text-[#f1e2c2]/80 hover:text-[#f1e2c2] transition-colors duration-200">Proceso</a>
            <a href="#contacto" className="px-5 py-2 bg-[#D97C7E] text-[#414d6e] rounded-lg font-semibold hover:bg-[#E68A8C] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D97C7E]/25">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#414d6e] via-[#414d6e] to-[#414d6e] animate-pulse opacity-50"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo animado */}
          <div className="mb-12 animate-fade-in">
            <Image 
              src="/logo.svg" 
              alt="Guabún" 
              width={500} 
              height={500} 
              className="mx-auto hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
          
          <p className="text-2xl md:text-3xl text-[#f1e2c2]/90 mb-6 max-w-3xl mx-auto font-light tracking-wide">
            Envisionar. Adaptar. Transformar. Evolucionar.
          </p>
          <p className="text-xl md:text-2xl text-[#9DB8CC] mb-12 max-w-4xl mx-auto leading-relaxed">
            Claridad en sistemas complejos. Acompañamiento sin ruptura. Mejora continua.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#servicios" className="px-8 py-4 bg-[#D97C7E] text-[#414d6e] rounded-lg font-semibold hover:bg-[#E68A8C] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D97C7E]/30">
              Explorar Productos
            </a>
            <a href="#contacto" className="px-8 py-4 border-2 border-[#f1e2c2] rounded-lg font-semibold hover:bg-[#f1e2c2] hover:text-[#414d6e] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f1e2c2]/20 backdrop-blur-sm">
              Conversemos
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-[#f1e2c2]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* El Viaje - Los 4 Símbolos */}
      <section id="viaje" className="min-h-screen flex items-center py-20 px-6 bg-[#414d6e] scroll-mt-20 relative overflow-hidden">
        {/* Background image parallax + Ken Burns */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-kenburns"
          style={{ backgroundImage: "url('/campo1.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#414d6e]/50"></div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nuestra Filosofía</h2>
          <p className="text-xl text-center text-[#9DB8CC] mb-12 max-w-3xl mx-auto">
            Principios que guían cada proyecto
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Envisionar */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl border border-[#f1e2c2]/20 hover:border-[#f1e2c2]/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src="/envisioning.svg" alt="Envisionar" width={48} height={48} className="drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#f1e2c2]">Envisionar</h3>
              <p className="text-[#f1e2c2]/70 text-sm leading-relaxed">
                Claridad en sistemas complejos. Detectar patrones y oportunidades que pasan desapercibidos.
              </p>
            </div>

            {/* Adaptar */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl border border-[#9DB8CC]/20 hover:border-[#9DB8CC]/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src="/adapt.svg" alt="Adaptar" width={48} height={48} className="drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#9DB8CC]">Adaptar</h3>
              <p className="text-[#f1e2c2]/70 text-sm leading-relaxed">
                Movimiento orgánico. Equipos y procesos que se reconfiguran según las necesidades del negocio.
              </p>
            </div>

            {/* Transformar */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl border border-[#D97C7E]/20 hover:border-[#D97C7E]/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src="/transform.svg" alt="Transformar" width={48} height={48} className="drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#D97C7E]">Transformar</h3>
              <p className="text-[#f1e2c2]/70 text-sm leading-relaxed">
                Cambio sin ruptura. Evolución controlada para transiciones seguras y sostenibles.
              </p>
            </div>

            {/* Evolucionar */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl border border-[#F2C963]/20 hover:border-[#F2C963]/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src="/espiral.svg" alt="Evolucionar" width={48} height={48} className="drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#F2C963]">Evolucionar</h3>
              <p className="text-[#f1e2c2]/70 text-sm leading-relaxed">
                Mejora continua. Cada ciclo incorpora aprendizajes y nuevos modelos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Digitales */}
      <section id="servicios" className="min-h-screen flex items-center py-20 px-6 scroll-mt-20 relative overflow-hidden">
        {/* Background image parallax + Ken Burns */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-kenburns"
          style={{ backgroundImage: "url('/playaguabun.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#414d6e]/50"></div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Card principal - Productos Digitales */}
          <div className="bg-[#414d6e] p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl border-l-4 border-[#D97C7E] relative overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D97C7E]/5 to-transparent"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="mb-4">
                  <Image src="/espiral.svg" alt="Productos Digitales" width={48} height={48} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Productos Digitales</h2>
                <p className="text-[#f1e2c2]/80">
                  De la idea al mercado. Diseñamos, desarrollamos y lanzamos productos que resuelven problemas reales y generan valor.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-[#414d6e]/80 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-2">
                    <Image src="/envisioning.svg" alt="Envisionar" width={32} height={32} />
                  </div>
                  <h4 className="font-semibold text-[#f1e2c2]">Envisionar</h4>
                  <p className="text-sm text-[#9DB8CC]">Claridad en el problema</p>
                </div>
                <div className="text-center p-4 bg-[#414d6e]/80 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-2">
                    <Image src="/transform.svg" alt="Transformar" width={32} height={32} />
                  </div>
                  <h4 className="font-semibold text-[#D97C7E]">Transformar</h4>
                  <p className="text-sm text-[#9DB8CC]">Construir la solución</p>
                </div>
                <div className="text-center p-4 bg-[#414d6e]/80 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-2">
                    <Image src="/espiral.svg" alt="Evolucionar" width={32} height={32} />
                  </div>
                  <h4 className="font-semibold text-[#F2C963]">Evolucionar</h4>
                  <p className="text-sm text-[#9DB8CC]">Escalar el impacto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Capacidades - Grid sutil */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Automatización */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl hover:bg-[#3a4757] transition-all duration-300 border border-[#9DB8CC]/10 hover:border-[#9DB8CC]/20 group">
              <div className="w-10 h-10 mb-4 rounded-lg bg-[#9DB8CC]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#9DB8CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Automatización</h3>
              <p className="text-sm text-[#f1e2c2]/60">
                Flujos de trabajo automáticos e integración de sistemas
              </p>
            </div>

            {/* Inteligencia Artificial */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl hover:bg-[#3a4757] transition-all duration-300 border border-[#F2C963]/10 hover:border-[#F2C963]/20 group">
              <div className="w-10 h-10 mb-4 rounded-lg bg-[#F2C963]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#F2C963]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Inteligencia Artificial</h3>
              <p className="text-sm text-[#f1e2c2]/60">
                Asistentes inteligentes y análisis predictivo
              </p>
            </div>

            {/* Desarrollo de Software */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl hover:bg-[#3a4757] transition-all duration-300 border border-[#D97C7E]/10 hover:border-[#D97C7E]/20 group">
              <div className="w-10 h-10 mb-4 rounded-lg bg-[#D97C7E]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#D97C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Desarrollo de Software</h3>
              <p className="text-sm text-[#f1e2c2]/60">
                Plataformas a medida y modernización de sistemas
              </p>
            </div>

            {/* Citizen Developer */}
            <div className="bg-[#3a4757]/50 p-6 rounded-xl hover:bg-[#3a4757] transition-all duration-300 border border-[#f1e2c2]/10 hover:border-[#f1e2c2]/20 group">
              <div className="w-10 h-10 mb-4 rounded-lg bg-[#f1e2c2]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#f1e2c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Citizen Developer</h3>
              <p className="text-sm text-[#f1e2c2]/60">
                Plataformas low-code y autonomía tecnológica
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Proceso */}
      <section id="proceso" className="min-h-screen flex items-center py-20 px-6 bg-[#414d6e] scroll-mt-20 relative overflow-hidden">
        {/* Background image parallax + Ken Burns */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 animate-kenburns"
          style={{ backgroundImage: "url('/campo3.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#414d6e]/60"></div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Nuestro Proceso</h2>
          <p className="text-xl text-center text-[#9DB8CC] mb-16 max-w-3xl mx-auto">
            Cómo trabajamos contigo
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Línea conectora (solo en desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#3a4757] via-[#9DB8CC] via-50% via-[#3a4757] to-[#3a4757]"></div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#3a4757] rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[#f1e2c2]/30 p-4 border-2 border-[#f1e2c2]/30">
                <Image src="/envisioning.svg" alt="Envisionar" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Envisionar</h3>
              <p className="text-[#f1e2c2]/70">
                Claridad para ver tu realidad, detectar patrones y definir hacia dónde ir
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#3a4757] rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[#9DB8CC]/30 p-4 border-2 border-[#9DB8CC]/50">
                <Image src="/adapt.svg" alt="Adaptar" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptar</h3>
              <p className="text-[#f1e2c2]/70">
                Alinear equipos, procesos y tecnología con flexibilidad orgánica
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#3a4757] rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[#D97C7E]/30 p-4 border-2 border-[#D97C7E]/50">
                <Image src="/transform.svg" alt="Transformar" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Transformar</h3>
              <p className="text-[#f1e2c2]/70">
                Cambio gradual y seguro, evolución controlada sin rupturas
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#3a4757] rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[#F2C963]/30 p-4 border-2 border-[#F2C963]/50">
                <Image src="/espiral.svg" alt="Evolucionar" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Evolucionar</h3>
              <p className="text-[#f1e2c2]/70">
                Mejora continua, cada ciclo incorpora aprendizajes y nuevos modelos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-6 bg-[#414d6e] scroll-mt-20 relative overflow-hidden">
        {/* Background image parallax + Ken Burns */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-kenburns"
          style={{ backgroundImage: "url('/campo2.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#414d6e]/50"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            ¿Tienes un desafío en mente?
          </h2>
          <p className="text-xl text-center text-[#9DB8CC] mb-4">
            Cada transformación comienza con claridad.
          </p>
          <p className="text-lg text-center text-[#f1e2c2]/70 mb-12">
            No hacemos proyectos cerrados. Acompañamos progresiones constantes.
          </p>
          
          <div className="bg-[#414d6e] p-8 md:p-12 rounded-2xl shadow-2xl border border-[#f1e2c2]/10">
            <div className="text-center mb-8">
              <a href="mailto:hablemos@guabun.cl" className="inline-flex items-center gap-3 px-6 py-3 bg-[#3a4757] rounded-lg hover:bg-[#4A5A6E] transition-all duration-300 group">
                <svg className="w-6 h-6 text-[#D97C7E] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">hablemos@guabun.cl</span>
              </a>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#f1e2c2]/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Image src="/logo.svg" alt="Guabún" width={64} height={64} className="mx-auto hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="text-xl text-[#9DB8CC] mb-2">
            Envisionar. Adaptar. Transformar. Evolucionar.
          </p>
          <p className="text-[#f1e2c2]/60 mb-8">
            Claridad en sistemas complejos. Acompañamiento sin ruptura. Mejora continua.
          </p>
          <p className="text-sm text-[#f1e2c2]/40">
            © 2025 guabun.cl
          </p>
        </div>
      </footer>
    </div>
  );
}
