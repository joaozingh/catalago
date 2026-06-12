import styles from './page.module.css';

export default function Sobre() {
  return (
    <div className={styles.container}>
      <h1>Sobre o projeto</h1>
      <p>Este é um catálogo interativo de produtos desenvolvido com Next.js e React.</p>
    </div>
  );
}