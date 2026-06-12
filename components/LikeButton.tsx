"use client";
import { useState, useEffect } from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton({ productId }: { productId: number }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setLiked(favoritos.includes(productId));
  }, [productId]);

  const toggleLike = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    let novos;
    if (favoritos.includes(productId)) {
      novos = favoritos.filter((id: number) => id !== productId);
    } else {
      novos = [...favoritos, productId];
    }
    localStorage.setItem('favoritos', JSON.stringify(novos));
    setLiked(!liked);
  };

  return (
    <button
      className={`${styles.button} ${liked ? styles.liked : ''}`}
      onClick={toggleLike}
    >
      {liked ? '❤️ Favoritado' : '🤍 Favoritar'}
    </button>
  );
}