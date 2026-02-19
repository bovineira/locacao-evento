'use client'

import { motion } from 'framer-motion'

// Componente do Ícone WhatsApp
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

export default function Home() {

  // Substitua estas URLs pelos seus placeholders de imagem
  const mobileImageUrl = '/placeholder-mobile.webp' // Imagem vertical focada na parte inferior
  const desktopImageUrl = '/placeholder-mobile.webp' // Temporariamente usando a mesma imagem (adicione placeholder-desktop.webp quando tiver)

  const whatsappNumber = '5511999999999' // Substitua pelo número real do WhatsApp
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de verificar a disponibilidade do espaço para a minha data.')

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background com Picture Tag para Responsividade */}
      <picture className="absolute inset-0 z-0">
        {/* Desktop - Imagem Horizontal */}
        <source
          media="(min-width: 768px)"
          srcSet={desktopImageUrl}
        />
        {/* Mobile - Imagem Vertical */}
        <img
          key={mobileImageUrl}
          src={mobileImageUrl}
          alt="Espaço Premium para Eventos"
          className="w-full h-full object-cover object-bottom md:object-center"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Overlay Escuro para Legibilidade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/50 md:from-black/50 md:via-black/40 md:to-black/50" />

      {/* Conteúdo Principal */}
      <main className="relative z-20 min-h-screen flex flex-col justify-start md:justify-center md:items-start px-6 md:px-12 lg:px-16 pt-20 md:pt-0">
        <div className="w-full md:w-1/2 md:max-w-2xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-poppins text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            <span className="text-gradient-animated inline-block">Agenda Aberta</span>: Garanta o Cenário Exclusivo para o seu{' '}
            <span className="text-gradient-animated inline-block">
              Grande Dia.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-montserrat text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-10 md:mb-12 font-light"
          >
            Infraestrutura completa para{' '}
            <span className="font-semibold text-[#d4af37]">Casamentos</span>,{' '}
            <span className="font-semibold text-[#d4af37]">15 Anos</span> e{' '}
            <span className="font-semibold text-[#d4af37]">Corporativos</span>. Agende antes que se esgote.
          </motion.h2>

          {/* Botão CTA WhatsApp */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.4 },
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppClick}
            className="relative overflow-hidden rounded-full bg-[#25D366] px-8 py-4 md:px-10 md:py-5 text-white font-montserrat font-semibold text-lg md:text-xl flex items-center gap-3 shadow-2xl transition-all duration-300 hover:shadow-[#25D366]/50 group"
          >
            {/* Shimmer Effect - Contínuo e Diagonal */}
            <motion.div
              className="absolute bg-gradient-to-r from-transparent via-white/50 to-transparent"
              style={{
                width: '200%',
                height: '200%',
                top: '-50%',
                left: '-50%',
              }}
              animate={{
                x: ['-200%', '200%'],
                y: ['-200%', '200%'],
                rotate: [45, 45],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 0,
                ease: 'linear',
              }}
            />

            {/* Conteúdo do Botão */}
            <span className="relative z-10 flex items-center gap-3">
              <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
              VERIFICAR DISPONIBILIDADE
            </span>
          </motion.button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-black py-6 px-6 md:px-12 lg:px-16">
        <p className="text-center text-xs md:text-sm text-gray-600 font-montserrat">
          Ao clicar, você será direcionado para o atendimento exclusivo via WhatsApp.{' '}
          <br className="hidden md:inline" />
          © 2026 Espaço Premium. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}
