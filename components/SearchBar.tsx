"use client";
import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './SearchBar.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function SearchBar({ products }: { products: Product[] }) {
  const [busca, setBusca] = useState('');

  const filtrados = products.filter((p) =>
    p.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <input
        className={styles.input}
        placeholder="Buscar produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className={styles.grid}>
        {filtrados.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}