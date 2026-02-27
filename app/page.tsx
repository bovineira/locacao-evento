'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const CTA_SECTION_ID = 'cta-final'

function ScrollDownArrow() {
  return (
    <motion.div
      className="flex justify-center pb-6 pt-4 md:pb-8 md:pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <motion.a
        href={`#${CTA_SECTION_ID}`}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById(CTA_SECTION_ID)?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="flex flex-col items-center gap-1 text-amber-200/80 transition-colors hover:text-amber-200"
        aria-label="Rolar para baixo"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="block"
        >
          <svg
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.span>
      </motion.a>
    </motion.div>
  )
}

function GoldCtaButton({ className }: { className?: string }) {
  const scrollToCta = () => {
    document.getElementById(CTA_SECTION_ID)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={scrollToCta}
      className={`rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 px-8 py-4 font-poppins font-semibold text-zinc-900 shadow-[0_4px_24px_rgba(251,191,36,0.35)] transition-shadow hover:shadow-[0_6px_32px_rgba(251,191,36,0.45)] md:px-10 md:py-5 md:text-lg ${className ?? ''}`}
    >
      VERIFICAR DISPONIBILIDADE
    </motion.button>
  )
}

function WhatsAppButton({
  onClick,
  large = false,
}: {
  onClick: () => void
  large?: boolean
}) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: large ? [1, 1.045, 1] : [1, 1.02, 1],
      }}
      transition={{
        opacity: { duration: 0.6 },
        scale: {
          duration: large ? 2.2 : 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: large ? 0.3 : 0.5,
        },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-full bg-[#25D366] text-white font-montserrat font-semibold flex items-center gap-3 shadow-2xl transition-all duration-300 hover:shadow-[#25D366]/50 ${
        large
          ? 'px-10 py-5 md:px-12 md:py-6 text-xl md:text-2xl'
          : 'px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl'
      }`}
    >
      <motion.div
        className="absolute bg-gradient-to-r from-transparent via-white/50 to-transparent"
        style={{ width: '200%', height: '200%', top: '-50%', left: '-50%' }}
        animate={{
          x: ['-200%', '200%'],
          y: ['-200%', '200%'],
          rotate: [45, 45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <span className="relative z-10 flex items-center gap-3">
        <WhatsAppIcon
          className={large ? 'w-7 h-7 md:w-8 md:h-8' : 'w-6 h-6 md:w-7 md:h-7'}
        />
        VERIFICAR DISPONIBILIDADE
      </span>
    </motion.button>
  )
}

const CAROUSEL_IMAGES = Array.from(
  { length: 19 },
  (_, i) => `/carrossel/img-${String(i + 1).padStart(2, '0')}.webp`
)

function InfiniteCarousel() {
  const [current, setCurrent] = useState(0)
  const total = CAROUSEL_IMAGES.length

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  useEffect(() => {
    const interval = setInterval(next, 3500)
    return () => clearInterval(interval)
  }, [next])

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-amber-200/40 shadow-[0_0_30px_rgba(251,191,36,0.15)] md:aspect-[3/2]">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={CAROUSEL_IMAGES[current]}
          alt={`Espaço para eventos - foto ${current + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? 'w-6 bg-amber-300'
                : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const mobileImageUrl = '/placeholder-mobile.webp'
  const desktopImageUrl = '/placeholder-desktop.webp'
  const whatsappNumber = '5511994283658'
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de verificar a disponibilidade do espaço para a minha data.'
  )
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      '_blank'
    )
  }

  return (
    <div className="relative w-full overflow-x-hidden bg-zinc-950">
      {/* ========== SESSÃO 01 - HERO ========== */}
      <section className="relative flex min-h-screen w-full flex-col">
        <picture className="absolute inset-0 z-0">
          <source media="(min-width: 768px)" srcSet={desktopImageUrl} />
          <img
            src={mobileImageUrl}
            alt="Espaço de Eventos Zona Norte São Paulo"
            className="h-full w-full object-cover object-bottom md:object-center"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950/90 md:from-black/60 md:via-black/40 md:to-zinc-950" />
        <main className="relative z-20 flex flex-1 flex-col justify-start px-6 pt-20 md:justify-center md:items-start md:px-12 md:pt-0 lg:px-16">
          <div className="w-full md:w-1/2 md:max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-poppins text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
            >
              O espaço ideal para{' '}
              <span className="text-gradient-animated">seu evento</span> na{' '}
              <span className="text-gradient-animated">Zona Norte</span> de São Paulo.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mb-10 mt-6 font-poppins text-lg font-medium leading-relaxed text-zinc-300 md:mb-12 md:text-xl lg:text-2xl"
            >
              Celebre seus melhores momentos em um ambiente{' '}
              <span className="font-semibold text-gradient-animated">acolhedor, versátil</span>
              {' '}e preparado para transformar cada detalhe em uma{' '}
              <span className="font-semibold text-gradient-animated">experiência inesquecível</span>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GoldCtaButton />
            </motion.div>
          </div>
        </main>
        <div className="relative z-20 shrink-0">
          <ScrollDownArrow />
        </div>
      </section>

      {/* ========== SESSÃO 02 - SOBRE / EVENTOS ========== */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-zinc-950" />
        <motion.div
          className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerStagger}
        >
          <div className="flex flex-col justify-center">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="font-poppins text-lg leading-relaxed text-zinc-300 md:text-xl"
            >
              Confraternizações, eventos familiares ou corporativos. Infraestrutura completa e atendimento personalizado.
            </motion.p>
            <motion.div variants={fadeUp} custom={1} className="mt-8">
              <GoldCtaButton />
            </motion.div>
          </div>
          <motion.div variants={fadeUp} custom={1}>
            <InfiniteCarousel />
          </motion.div>
        </motion.div>
        <ScrollDownArrow />
      </section>

      {/* ========== SESSÃO 03 - LOCALIZAÇÃO ========== */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-zinc-900/50" />
        <motion.div
          className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerStagger}
        >
          <div className="flex flex-col justify-center">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-poppins text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Nossa Localização
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 font-montserrat text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              Localizado na Zona Norte de São Paulo, nosso espaço oferece fácil
              acesso, estacionamento amplo e proximidade das principais vias da
              região.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 font-montserrat text-lg font-semibold text-amber-200 md:text-xl"
            >
              Rua Victorio Primon 360 — Casa Verde — 02550-050
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            custom={2}
            className="overflow-hidden rounded-xl border border-amber-200/30 shadow-[0_0_40px_rgba(251,191,36,0.12)]"
          >
            <iframe
              src="https://www.google.com/maps?q=Rua+Victorio+Primon+360,+Casa+Verde,+Sao+Paulo+02550-050&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Espaço Casa Verde"
              className="block min-h-[280px] w-full md:min-h-[320px]"
            />
          </motion.div>
        </motion.div>
        <ScrollDownArrow />
      </section>

      {/* ========== SESSÃO 04 - DIFERENCIAIS ========== */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerStagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-poppins text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Nossos Diferenciais
            </motion.h2>
            <motion.div
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={containerStagger}
            >
              {[
                'Ambiente versátil, amplo e funcional. Adaptável ao estilo do seu evento.',
                'Equipe especializada para garantir que cada detalhe seja perfeito.',
                'Estacionamento coberto com seguro.',
                'Melhor custo benefício da região.',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-amber-400">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="min-w-0 flex-1 font-montserrat text-sm leading-relaxed text-zinc-300 md:text-base">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-12 flex justify-center"
            >
              <GoldCtaButton />
            </motion.div>
          </motion.div>
        </div>
        <ScrollDownArrow />
      </section>

      {/* ========== SESSÃO 05 - CTA FINAL ========== */}
      <section id={CTA_SECTION_ID} className="relative flex min-h-screen min-w-full flex-col overflow-hidden pt-20 pb-48 md:min-h-[85vh] md:pb-40">
        {/* Background mobile: imagem (100% visível, sem overlay) */}
        <img
          src="/dobra-5-bgmobile.webp"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
        />
        {/* Background desktop: gradiente */}
        <div className="absolute inset-0 hidden bg-gradient-to-b from-zinc-950 via-amber-950/20 to-zinc-950 md:block" />
        {/* Overlay escuro no mobile para legibilidade */}
        <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
        <motion.div
          className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center md:px-12 lg:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerStagger}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-poppins text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            <span className="text-gradient-animated">Garanta já</span> a data do seu{' '}
            <span className="text-gradient-animated">evento!</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 font-poppins text-lg font-medium leading-relaxed text-zinc-300 md:text-xl"
          >
            <span className="font-semibold text-gradient-animated">WhatsApp</span> para consultar disponibilidade e solicitar seu{' '}
            <span className="font-semibold text-gradient-animated">orçamento</span>.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 flex justify-center"
          >
            <WhatsAppButton onClick={handleWhatsAppClick} large />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-12 w-full md:mt-14"
          >
            <div className="flex justify-center">
              <img
                src="/atendente-sessao05.png"
                alt="Atendimento Espaço Casa Verde"
                className="w-full max-h-[420px] max-w-3xl object-contain object-top drop-shadow-2xl md:max-h-[560px] md:max-w-4xl md:w-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-zinc-800 bg-black py-8 px-6 md:px-12 lg:px-16">
        <p className="text-center font-montserrat text-sm text-zinc-500">
          © 2024 Espaço Casa Verde. Todos os direitos reservados. Agendamentos
          via WhatsApp.
        </p>
      </footer>
    </div>
  )
}
