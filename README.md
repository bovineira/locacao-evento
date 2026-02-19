# Landing Page Premium - Espaço de Eventos

Landing Page de Dobra Única (Single Fold) para um Espaço de Eventos Premium, desenvolvida com Next.js, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações premium
- **Lucide React** - Ícones modernos
- **Google Fonts** - Playfair Display e Montserrat

## 📦 Instalação

```bash
npm install
```

## 🎨 Configuração de Imagens

Antes de executar o projeto, adicione suas imagens na pasta `public`:

1. **Mobile**: `public/placeholder-mobile.jpg` - Imagem vertical focada na parte inferior
2. **Desktop**: `public/placeholder-desktop.jpg` - Imagem horizontal para desktop

## ⚙️ Configuração do WhatsApp

Edite o arquivo `app/page.tsx` e atualize:

```typescript
const whatsappNumber = '5511999999999' // Seu número do WhatsApp
const whatsappMessage = encodeURIComponent('Sua mensagem personalizada')
```

## 🏃 Executar o Projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🎯 Características

- ✅ Design minimalista e elegante
- ✅ Layout totalmente responsivo (Mobile e Desktop)
- ✅ Background adaptativo com tag `<picture>`
- ✅ Animações premium com Framer Motion
- ✅ Gradiente animado no texto "Momentos Inesquecíveis"
- ✅ Efeito Shimmer no botão WhatsApp
- ✅ Tipografia premium (Playfair Display + Montserrat)
- ✅ Otimizado para conversão via WhatsApp

## 📱 Responsividade

- **Mobile**: Conteúdo no topo, background vertical focado na parte inferior
- **Desktop**: Conteúdo à esquerda (50% largura), centralizado verticalmente, background horizontal

## 🎨 Efeitos Especiais

1. **Gradiente Animado**: Texto "Momentos Inesquecíveis" com gradiente verde esmeralda e dourado animado
2. **Shimmer Effect**: Efeito de brilho que passa pelo botão WhatsApp a cada 3 segundos
3. **Hover Effects**: Escala suave no botão ao passar o mouse
