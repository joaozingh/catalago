import Link from 'next/link';
import LikeButton from './LikeButton';
import styles from './ProductCard.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <Link href={`/produtos/${product.id}`}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>R$ {product.price}</p>
      </Link>
      <LikeButton productId={product.id} />
    </div>
  );
}