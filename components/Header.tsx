import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Catálogo
      </Link>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/favoritos">Favoritos</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}