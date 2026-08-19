# Diretrizes de Design & Identidade Visual: Maryan Seelig Hair

Este documento define a identidade visual, arquitetura de design, paleta de cores, tipografia, logotipo, padrões de componentes e diretrizes visuais para a landing page e portfólio digital premium do **Maryan Seelig Hair Concept** (Florianópolis - SC).

---

## 1. Conceito e Posicionamento da Marca

- **Nome da Marca:** Maryan Seelig Hair Concept
- **Especialista:** Maryana Seelig (Mais de 19 anos de experiência)
- **Localização:** Florianópolis - SC (Atendimento em Jurerê Internacional, Lagoa da Conceição, Itacorubi e região metropolitana)
- **Pilares:**
  - *Naturalidade & Sofisticação:* Mechas de baixíssima manutenção que iluminam sem agredir os fios.
  - *Personalização Exclusiva:* Cortes sob medida com visagismo e maquiagens autorais de alta durabilidade.
  - *Saúde Capilar:* Tratamentos de ponta com tecnologia de vapor de ozônio e cosméticos nobres/veganos (Keune So Pure).
  - *Exclusividade & Conforto:* Experiência de beleza sem correria, em ambiente acolhedor e com atendimento VIP.

---

## 2. Paleta de Cores

A paleta combina tons escuros profundos (Luxury Noir/Espresso) com nuances de Ouro Champanhe, Nude Rosé e Pérola Acetinado, transmitindo autoridade, requinte e feminilidade de alto padrão.

| Categoria | Nome | Hexadecimal | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Dark Luxury** | Noir Espresso | `#121110` | Fundo principal da página, contraste profundo |
| **Dark Elevation** | Caviar Bronze | `#1B1917` | Cards elevados, headers e modais |
| **Dark Surface** | Mocha Soft | `#262320` | Bordas sutis, divisórias, hover states escuros |
| **Gold Primary** | Champanhe Gold | `#D4AF37` | Gradientes de destaque, botões CTA primários, logos |
| **Gold Glow** | Bright Champagne | `#F3E5AB` | Textos brilhantes em gradiente, ícones, badges VIP |
| **Gold Deep** | Antique Bronze | `#997A2E` | Bordas douradas sofisticadas, sombras e reflexos |
| **Rose Accent** | Velvet Blush | `#C4928B` | Destaques sutis, tags de maquiagem/penteados |
| **Light Pearl** | Alabaster Silk | `#FAF7F2` | Textos principais, tipografia de alto contraste |
| **Light Muted** | Warm Sand | `#C9BDB5` | Subtítulos, descrições secundárias, legendas |

---

## 3. Tipografia

- **Tipografia de Título (Editorial Display):**
  - **Família:** *Cormorant Garamond* / *Playfair Display* (Serifada elegante e editorial)
  - **Estilo:** Itálicos sutis para palavras-chave de glamour, peso 400/500/600, tracking leve.
- **Tipografia de Apoio / Corpo (Modern Sans):**
  - **Família:** *Plus Jakarta Sans* / *Montserrat* (Moderna, limpa, legível e técnica)
  - **Estilos:** Regular 400, Medium 500, SemiBold 600.
- **Micro-detalhes / Badges:**
  - `uppercase`, `tracking-widest` (letter-spacing 0.2em), `text-xs font-semibold`.

---

## 4. Logo e Marca Visual

- **Símbolo / Monograma:**
  - Letras entrelaçadas **MS** desenhadas com linhas elegantes em formato de fios esvoaçantes e brilho dourado.
- **Tipografia do Logotipo:**
  - **MARYANA SEELIG** em caixa alta com espaçamento nobre (`letter-spacing: 0.25em`).
  - Subtítulo: **HAIR & MAKEUP CONCEPT** ou **FLORIANÓPOLIS**.
- **Versões:**
  - *Logo Completo:* Ícone + Tipografia para Topbar e Footer.
  - *Monograma Reduzido:* Ícone circular com borda em gradiente dourado para Favicon e selos de qualidade.

---

## 5. Fotografia & Direção de Arte

- **Estilo das Fotos:**
  - Enquadramentos com iluminação quente que evidenciam o brilho, a textura dos fios e a precisão do esfumado das mechas.
  - Retratos frontais e 45° mostrando maquiagens impecáveis e peles radiantes (Glow Skin).
  - Fotos de processo (vapor de ozônio, lavatório spa, mechas) para gerar desejo e demonstrar autoridade.
- **Tratamento de Imagem:**
  - Bordas arredondadas suaves (`rounded-2xl` a `rounded-3xl`).
  - Efeitos de iluminação ambiente: Glows sutis (`radial-gradient`), sombras difusas douradas (`shadow-[0_20px_50px_rgba(212,175,55,0.12)]`).
  - Efeito Before & After (Antes e Depois) interativo com slider comparativo.

---

## 6. Microinterações & Animações

- **Entrada (Scroll Reveal):**
  - Efeitos `fade-in-up` escalonados por seção via Intersection Observer e CSS Transitions nativas ultra-rápidas.
- **Interatividade:**
  - Efeito Glassmorphism nos cards de serviços (`backdrop-blur-md bg-neutral-900/60 border border-amber-500/20`).
  - Hover states magnéticos nos botões CTA dourados com brilho corrediço (`shimmer effect`).
  - Filtro interativo de galeria por categoria (Todas, Mechas & Loiros, Makes & Penteados, Cortes, Noivas & Mega Hair).
  - Visualizador de imagem em modal / lightbox em tela cheia com zoom e detalhes do trabalho.
  - Comparador interativo de Antes e Depois (Slider interativo de arrastar).
  - Seletor de serviços com cálculo estimado e botão direto para WhatsApp com mensagem personalizada pré-preenchida.

---

## 7. Estrutura da Landing Page

1. **Header & Navigation Bar:** Logo SVG dourada, links rápidos (Serviços, Sobre, Galeria, Avaliações, Localização), botão WhatsApp rápido e botão de menu mobile responsivo.
2. **Hero Section:**
   - Badge "19+ Anos de Excelência em Florianópolis".
   - Título de alto impacto com tipografia serifada e destaque dourado.
   - Chamada para ação dupla: Agendar pelo WhatsApp e Explorar Portfólio.
   - Mini cards de diferenciais (Mechas sem marcas, Linha Vegana Keune, Atendimento VIP).
   - Mosaico visual flutuante com fotos reais de alta definição.
3. **Barra de Destaques / Métricas:**
   - 19+ Anos de Carreira | 5.000+ Clientes Transformadas | 100% Personalizado | Florianópolis & Região.
4. **Serviços Exclusivos (Grid Interativo com Cards Glass):**
   - *Mechas de Baixa Manutenção & Efeito Natural*
   - *Loiros dos Sonhos & Correção de Cor*
   - *Cortes Personalizados & Visagismo*
   - *Maquiagem Profissional & Penteados para Noivas/Eventos*
   - *Tratamento Spa Capilar com Vapor de Ozônio (Keune So Pure)*
   - *Mega Hair & Aplicação de Fita Adesiva*
5. **Diferencial / A Experiência Maryana Seelig:**
   - Filosofia de atendimento, saúde do fio em primeiro lugar, diagnóstico capilar personalizado.
6. **Slider Interativo Antes & Depois (Transformações Reais):**
   - Comparador deslizante que permite ver a mudança impressionante de cor e saúde dos fios.
7. **Galeria de Portfólio com Filtros por Categoria:**
   - Abas com fotos reais extraídas do Instagram oficial.
   - Modal lightbox para inspeção em detalhes.
8. **Depoimentos & Avaliações Reais:**
   - Feedbacks de clientes com 5 estrelas e comentários reais sobre a durabilidade e elegância do serviço.
9. **Calculadora / Simulador de Atendimento WhatsApp:**
   - A cliente escolhe os serviços desejados (ex: Mechas + Tratamento + Make) e clica para enviar o pedido formatado direto no WhatsApp da Maryana (+55 48 99133-5127).
10. **Localização & Google Maps Integrado:**
    - Mapa interativo de Florianópolis com pin do salão Maryana Seelig Concept.
    - Endereço, horários, botão de rota no Google Maps e Waze.
11. **FAQ Interativo (Dúvidas Frequentes):**
    - Quanto tempo duram as mechas de baixa manutenção? Como funciona o agendamento? Atende noivas?
12. **Footer:**
    - Logo, links de redes sociais (@maryanseelighair), WhatsApp, endereço, horário e copyright.
13. **Floating Action Button:**
    - Botão flutuante do WhatsApp sempre visível com badge de status online.
