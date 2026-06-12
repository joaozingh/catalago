import FavoritesList from '@/components/FavoritesList';
import styles from './page.module.css';

export default function FavoritosPage() {
  return (
    <div className={styles.container}>
      <h1>Meus Favoritos</h1>
      <FavoritesList />
    </div>
  );
}