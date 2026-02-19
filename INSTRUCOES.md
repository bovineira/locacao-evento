# 📋 Instruções de Configuração

## 🖼️ Adicionar Imagens de Background

1. Coloque suas imagens na pasta `public/`:
   - **Mobile**: `public/placeholder-mobile.jpg` 
     - Formato: Vertical (portrait)
     - Foco: Parte inferior da imagem (onde ficará o conteúdo no topo)
     - Recomendado: 1080x1920px ou proporção similar
   
   - **Desktop**: `public/placeholder-desktop.jpg`
     - Formato: Horizontal (landscape)
     - Foco: Centro da imagem (onde ficará o conteúdo à esquerda)
     - Recomendado: 1920x1080px ou proporção similar

2. **Dica**: Use imagens de alta qualidade e otimizadas para web (formato WebP ou JPG comprimido)

## 📱 Configurar WhatsApp

Edite o arquivo `app/page.tsx` na linha 12:

```typescript
const whatsappNumber = '5511999999999' // Substitua pelo número real (formato: código do país + DDD + número)
const whatsappMessage = encodeURIComponent('Sua mensagem personalizada aqui')
```

**Formato do número**: 
- Sem espaços, parênteses ou hífens
- Incluir código do país (55 para Brasil)
- Exemplo: `5511999999999` (Brasil + 11 + 999999999)

## 🎨 Personalizar Textos

Você pode personalizar os textos diretamente no arquivo `app/page.tsx`:

- **Headline** (linha 49): "O Cenário Perfeito para Seus Momentos Inesquecíveis."
- **Subheadline** (linha 62): Texto descritivo do espaço
- **Palavras em destaque** (linhas 63-65): Casamentos, aniversários, eventos corporativos
- **Nome do espaço no footer** (linha 112): "Espaço Premium"

## 🚀 Executar o Projeto

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

O projeto estará disponível em: `http://localhost:3000`

## ✅ Checklist de Lançamento

- [ ] Imagens de background adicionadas (mobile e desktop)
- [ ] Número do WhatsApp configurado
- [ ] Mensagem do WhatsApp personalizada
- [ ] Textos revisados e personalizados
- [ ] Nome do espaço atualizado no footer
- [ ] Testado em dispositivos móveis
- [ ] Testado em desktop
- [ ] Links do WhatsApp funcionando
- [ ] Imagens otimizadas para web

## 🎯 Dicas de Otimização

1. **Performance**: Use ferramentas como `next/image` para otimização automática de imagens
2. **SEO**: Atualize o `metadata` no arquivo `app/layout.tsx`
3. **Analytics**: Adicione Google Analytics ou similar se necessário
4. **Testes**: Teste em diferentes navegadores e dispositivos
