export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  tag: string;
  priceNote?: string;
}

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  category: 'mechas' | 'makeup' | 'cortes' | 'tratamentos' | 'megahair';
  caption: string;
  location?: string;
  shortCode?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
  image?: string;
  highlight: string;
}

export const SALON_INFO = {
  name: "Maryan Seelig Hair Concept",
  expert: "Maryana Seelig",
  experienceYears: 19,
  tagline: "Mechas de Baixa Manutenção, Cortes com Visagismo & Beleza Autoral",
  phone: "+55 48 99133-5127",
  phoneRaw: "5548991335127",
  whatsappUrl: "https://api.whatsapp.com/send?phone=5548991335127&text=Ol%C3%A1%2C%20Maryana!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20sal%C3%A3o.",
  instagram: "maryanseelighair",
  instagramUrl: "https://www.instagram.com/maryanseelighair",
  mapsShareUrl: "https://share.google/EXWw6sEbYX1au87xu",
  address: "Florianópolis - SC (Atendimento Especializado em Jurerê Internacional, Lagoa da Conceição e Região Nobre)",
  city: "Florianópolis",
  state: "SC",
  hours: "Terça a Sábado: 09h às 19h (Com agendamento prévio)",
  bio: "Com mais de 19 anos de dedicação à alta beleza feminina, Maryana Seelig é especialista em mechas de baixa manutenção e efeito natural, cortes personalizados com visagismo, maquiagem de alta durabilidade e produções completas para noivas e eventos sofisticados em Santa Catarina."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "mechas-naturais",
    title: "Mechas de Baixa Manutenção",
    subtitle: "Efeito Natural & Iluminação sem Marcações",
    description: "Técnica autoral exclusiva para criar degradês perfeitos, transição suave da raiz e luminosidade sofisticada que cresce de forma harmoniosa, permitindo retoques espaçados de 6 a 12 meses.",
    details: [
      "Sem marcas ou divisões artificiais",
      "Preservação integral da saúde da fibra capilar",
      "Tonalização personalizada ao tom de pele (Visagismo)",
      "Tratamento reconstrutor pós-química incluído"
    ],
    image: "/images/portfolio/DDAyxpOvx4g_0.jpg",
    tag: "Mais Pedido",
    priceNote: "Diagnóstico Capilar Incluso"
  },
  {
    id: "loiro-diva",
    title: "Loiros dos Sonhos & Correção de Cor",
    subtitle: "Do Summer Blond ao Platinado e Champanhe",
    description: "Abertura de fundo segura e precisa para alcançar o loiro desejado (dourado, champanhe, perolado ou platinado) mantendo os fios sedosos, com balanço e brilho incomparável.",
    details: [
      "Clareamento com tecnologia de proteção anti-quebra",
      "Neutralização de tons indesejados e correção",
      "Matização nobre de longa durabilidade",
      "Brilho tridimensional espelhado"
    ],
    image: "/images/portfolio/Db_pr5ihkIj_0.jpg",
    tag: "Exclusivo",
    priceNote: "Personalizado"
  },
  {
    id: "cortes-visagismo",
    title: "Cortes Personalizados & Visagismo",
    subtitle: "Linhas Modernas que Valorizam sua Identidade",
    description: "Cortes arquitetados de acordo com o formato do rosto, textura do cabelo e estilo de vida. Da sofisticação do Bob e camadas fluidas até transformações completas com leveza e movimento.",
    details: [
      "Análise visagista de harmonia facial",
      "Texturização para caimento e volume natural",
      "Acabamento com escova modelada e finalização",
      "Praticidade real no dia a dia da cliente"
    ],
    image: "/images/portfolio/DZ-dyD3O6Ok_0.jpg",
    tag: "Transformação",
    priceNote: "Avaliação Gratuita"
  },
  {
    id: "makeup-penteados",
    title: "Makeup & Penteados para Noivas e Eventos",
    subtitle: "Produções de Alto Impacto & Pele Blindada",
    description: "Maquiagem profissional sofisticada (efeito Glow e pele blindada à prova d'água e lágrimas) e penteados autorais (semipreso, rabo de cavalo luxo, coques elegantes) para noivas, formandas e madrinhas.",
    details: [
      "Pele com acabamento natural, resistente e ultra duradouro",
      "Produtos importados e de alta performance",
      "Penteados estruturados que duram o evento todo",
      "Atendimento exclusivo para o Dia da Noiva"
    ],
    image: "/images/portfolio/DYdYKXyDBRL_0.jpg",
    tag: "Luxo & Noivas",
    priceNote: "Pacotes Especiais"
  },
  {
    id: "spa-capilar-ozonio",
    title: "Tratamento Spa com Vapor de Ozônio",
    subtitle: "Recuperação Profunda dos Fios com Linha Vegana Keune",
    description: "Protocolo de terapia capilar com vapor de ozônio e produtos veganos de alta pureza (Keune So Pure). Recupera os fios danificados de dentro para fora, oxigena o couro cabeludo e sela as cutículas.",
    details: [
      "Ação bactericida e fungicida do ozônio",
      "Restauração lipídica e hidratação profunda",
      "Livre de sulfatos, parabenos e conservantes químicos",
      "Toque aveludado, sedosidade e balanço imediato"
    ],
    image: "/images/portfolio/DYn5smJMlOY_0.jpg",
    tag: "Terapia Capilar",
    priceNote: "Nutrição Intensa"
  },
  {
    id: "mega-hair-extensoes",
    title: "Mega Hair & Extensões em Fita Adesiva",
    subtitle: "Volume e Alongamento Invisível e Confortável",
    description: "Técnica de aplicação de faixas adesivas imperceptíveis ao toque e à vista. Cabelos 100% humanos selecionados, com peso balanceado para garantir a saúde dos fios naturais.",
    details: [
      "Aplicação rápida, indolor e confortável",
      "Faixas ultrafinas e imperceptíveis",
      "Possibilidade de prender e fazer qualquer penteado",
      "Manutenção segura a cada 60-90 dias"
    ],
    image: "/images/portfolio/DaeKlP6s6X6_0.jpg",
    tag: "Volume & Comprimento",
    priceNote: "Sob Consulta"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    image: "/images/portfolio/DDAyxpOvx4g_0.jpg",
    title: "Summer Blond com Efeito Natural",
    category: "mechas",
    caption: "Summer blond com abertura de fundo suave e raiz esfumada de baixíssima manutenção.",
    location: "Itacorubi, Florianópolis"
  },
  {
    id: "p2",
    image: "/images/portfolio/Db_pr5ihkIj_0.jpg",
    title: "Loiro Diva dos Sonhos",
    category: "mechas",
    caption: "Loiro sofisticado entregue com integridade total da fibra capilar e brilho tridimensional.",
    location: "Florianópolis"
  },
  {
    id: "p3",
    image: "/images/portfolio/DCcpiaZvrbI_2.jpg",
    title: "Makeup Glam & Pele Glow",
    category: "makeup",
    caption: "Produção de maquiagem para evento em Jurerê Internacional com acabamento impecável.",
    location: "Jurerê Internacional"
  },
  {
    id: "p4",
    image: "/images/portfolio/Da-yMWROP5v_0.jpg",
    title: "Transformação e Corte com Visagismo",
    category: "cortes",
    caption: "O poder de uma mulher através dos cabelos: corte moderno com caimento leve e elegante.",
    location: "Florianópolis"
  },
  {
    id: "p5",
    image: "/images/portfolio/DaeKlP6s6X6_0.jpg",
    title: "Make & Cabelo Produção Completa",
    category: "makeup",
    caption: "Produção deusa para evento de gala em Jurerê Internacional.",
    location: "Jurerê Internacional"
  },
  {
    id: "p6",
    image: "/images/portfolio/DY_CZfsMICs_0.jpg",
    title: "Penteado Rabo de Cavalo Luxo",
    category: "makeup",
    caption: "Rabo de cavalo estruturado com make marcante para festa e casamento.",
    location: "Florianópolis"
  },
  {
    id: "p7",
    image: "/images/portfolio/DL0Dj8nsB6R_0.jpg",
    title: "Mechas Naturais + Fita Adesiva",
    category: "megahair",
    caption: "Harmonia perfeita entre mechas de baixa manutenção e aplicação de faixa invisível.",
    location: "Florianópolis"
  },
  {
    id: "p8",
    image: "/images/portfolio/DYn5smJMlOY_0.jpg",
    title: "Spa Capilar com Vapor de Ozônio",
    category: "tratamentos",
    caption: "Fios com brilho, maciez e movimento após protocolo de nutrição e recuperação profunda.",
    location: "Florianópolis"
  },
  {
    id: "p9",
    image: "/images/portfolio/DYdYKXyDBRL_0.jpg",
    title: "Semipreso Nobre & Make Noiva",
    category: "makeup",
    caption: "Penteado semipreso com ondas fluidas e maquiagem de alta fixação para noivas e convidadas.",
    location: "Jurerê Internacional"
  },
  {
    id: "p10",
    image: "/images/portfolio/DbEbm4HJkoh_0.jpg",
    title: "Abertura de Fundo & Iluminação",
    category: "mechas",
    caption: "Abertura de fundo e mechas harmonizadas com a make autoral produzida no salão.",
    location: "Florianópolis"
  },
  {
    id: "p11",
    image: "/images/portfolio/DQ6jwdcDsiD_0.jpg",
    title: "Loiro Tendência Iluminado",
    category: "mechas",
    caption: "Loiro tendência com brilho, volume e camadas que iluminam o rosto sem marcar a raiz.",
    location: "Florianópolis"
  },
  {
    id: "p12",
    image: "/images/portfolio/DZ-dyD3O6Ok_0.jpg",
    title: "Corte em Camadas com Balanço",
    category: "cortes",
    caption: "Corte butterfly em camadas com volume, movimento e caimento que valoriza o rosto.",
    location: "Florianópolis"
  },
  {
    id: "p13",
    image: "/images/portfolio/DaY6DTKul94_0.jpg",
    title: "Make Social Sofisticada",
    category: "makeup",
    caption: "Realce dos traços naturais com esfumado aveludado e lábios nobres.",
    location: "Florianópolis"
  },
  {
    id: "p14",
    image: "/images/portfolio/DWKWBj9h4uM_0.jpg",
    title: "Beleza Expressiva & Autoral",
    category: "makeup",
    caption: "Makeup autoral para mulheres empoderadas que buscam destaque com elegância.",
    location: "Florianópolis"
  },
  {
    id: "p15",
    image: "/images/portfolio/DbPTPrDsolc_0.jpg",
    title: "Finalização & Textura Premium",
    category: "tratamentos",
    caption: "Acabamento sedoso com brilho tridimensional após cronograma capilar e hidratação de luxo.",
    location: "Florianópolis"
  },
  {
    id: "p16",
    image: "/images/portfolio/DCcpiaZvrbI_0.jpg",
    title: "Make e Penteado para Casamento",
    category: "makeup",
    caption: "Produção impecável de clientes que vêm de outros estados para se arrumar em Floripa.",
    location: "Jurerê Internacional"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Débora Trindade",
    role: "Cliente Fiel há mais de 3 anos",
    quote: "A Maryana é simplesmente impecável! Ela sempre entrega o loiro dos meus sonhos sem danificar um fio. Passo meses sem me preocupar com raiz marcada porque as mechas dela crescem com uma naturalidade absurda. Não troco por ninguém!",
    stars: 5,
    highlight: "Loiro Perfeito sem Marcas"
  },
  {
    id: "t2",
    name: "Lauren Ramos",
    role: "Produção para Evento em Jurerê",
    quote: "Fiz cabelo e maquiagem para um evento especial e recebi elogios a noite inteira. A pele ficou intacta até a madrugada e o penteado não desmanchou nem com o vento. Experiência de atendimento maravilhosa e acolhedora!",
    stars: 5,
    highlight: "Make Blindada & Duradoura"
  },
  {
    id: "t3",
    name: "Úrsula Teles",
    role: "Transformação & Corte Visagista",
    quote: "Cheguei com medo de cortar e a Maryana me passou uma segurança ímpar. O corte valorizou demais meu rosto e facilitou minha rotina. O tratamento com vapor de ozônio deixou meu cabelo com um brilho que eu nunca tinha visto.",
    stars: 5,
    highlight: "Corte que Valoriza o Rosto"
  },
  {
    id: "t4",
    name: "Camila Bellissimo",
    role: "Cliente de Porto Alegre / Floripa",
    quote: "Venho do RS para Florianópolis e faço questão absoluta de me arrumar com a Maryana. Ela entende exatamente o que a cliente quer e entrega com uma delicadeza e técnica de quem tem quase duas décadas de maestria.",
    stars: 5,
    highlight: "Atendimento VIP & Exclusivo"
  }
];

export const FAQS = [
  {
    question: "O que são mechas de baixa manutenção e qual a vantagem?",
    answer: "As mechas de baixa manutenção são feitas com técnicas especiais de microesfumado e transição suave na raiz. Isso significa que, à medida que o cabelo cresce, não forma aquela linha reta ou marcada de divisão. Você pode espaçar o retoque entre 6 e 12 meses mantendo o visual elegante e economizando tempo e dinheiro."
  },
  {
    question: "Como funciona o agendamento e a avaliação?",
    answer: "O agendamento é feito diretamente pelo WhatsApp com a própria Maryana ou sua equipe. Para procedimentos químicos como mechas e correções, realizamos um teste de mecha e diagnóstico prévio para garantir a saúde total dos seus fios antes do processo."
  },
  {
    question: "Como é o tratamento com Vapor de Ozônio e linha Keune So Pure?",
    answer: "O vapor de ozônio atua abrindo suavemente a cutícula capilar, permitindo que os ativos botânicos e óleos essenciais da linha vegana Keune penetrem nas camadas mais profundas do córtex. Além de hidratar profundamente, o ozônio desintoxica o couro cabeludo e estimula a força do fio."
  },
  {
    question: "Vocês atendem noivas, formandas e madrinhas?",
    answer: "Sim! Oferecemos pacotes completos para o Dia da Noiva e produções de gala, incluindo teste de penteado e maquiagem, cronograma capilar pré-evento, assessoria e atendimento com toda a exclusividade no salão ou no local do evento."
  },
  {
    question: "Qual a localização e facilidades do salão?",
    answer: "Estamos localizados em região privilegiada em Florianópolis - SC, com fácil acesso para clientes de Jurerê Internacional, Lagoa da Conceição, Itacorubi e Centro. O espaço conta com ambiente climatizado, estacionamento e total conforto para um momento de relaxamento."
  }
];
