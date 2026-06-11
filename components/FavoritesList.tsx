"use client";
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function FavoritesList() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setFavoritos(salvos);
  }, []);

  const produtosFavoritos = products.filter((p) => favoritos.includes(p.id));

  if (produtosFavoritos.length === 0) {
    return <p>Você ainda não favoritou nenhum produto.</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {produtosFavoritos.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}