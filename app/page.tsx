import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <h1>Catálogo de Camisetas & Blusas</h1>
      <p>As melhores peças para o seu dia a dia, com estilo e conforto.</p>
      <Link href="/produtos" className={styles.button}>
        Ver Produtos
      </Link>
    </div>
  );
}