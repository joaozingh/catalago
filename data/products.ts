export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Camiseta Básica Branca",
    description: "Camiseta 100% algodão, corte reto, ideal para o dia a dia. Tecido leve e confortável.",
    price: 39.9,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Camisetas",
  },
  {
    id: 2,
    title: "Camiseta Estampada Preta",
    description: "Camiseta preta com estampa exclusiva, malha premium e modelagem unissex.",
    price: 49.9,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    category: "Camisetas",
  },
  {
    id: 3,
    title: "Camiseta Listrada Azul",
    description: "Camiseta com listras horizontais, gola redonda e tecido respirável.",
    price: 44.9,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500",
    category: "Camisetas",
  },
  {
    id: 4,
    title: "Blusa de Frio Cinza",
    description: "Blusa de moletom leve, gola careca, ótima para dias mais frescos.",
    price: 79.9,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    category: "Blusas",
  },
  {
    id: 5,
    title: "Camiseta Polo Verde",
    description: "Camiseta polo piquet, gola e punhos canelados, ideal para looks casuais.",
    price: 69.9,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500",
    category: "Camisetas",
  },
  {
    id: 6,
    title: "Blusa Manga Longa Bege",
    description: "Blusa de manga longa, tecido macio e modelagem confortável para o dia a dia.",
    price: 59.9,
    image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500",
    category: "Blusas",
  },
  {
    id: 7,
    title: "Camiseta Oversized Preta",
    description: "Camiseta de modelagem ampla, tecido encorpado e caimento moderno.",
    price: 54.9,
    image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=500",
    category: "Camisetas",
  },
  {
    id: 8,
    title: "Camiseta Regata Branca",
    description: "Regata leve em algodão, perfeita para treinos ou dias quentes.",
    price: 34.9,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
    category: "Camisetas",
  },
  {
    id: 9,
    title: "Blusa Cropped Rosa",
    description: "Blusa cropped de tecido leve, gola redonda e modelagem feminina.",
    price: 49.9,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500",
    category: "Blusas",
  },
  {
    id: 10,
    title: "Camiseta Estampa Floral",
    description: "Camiseta com estampa floral colorida, tecido leve e fresco.",
    price: 47.9,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500",
    category: "Camisetas",
  },
];