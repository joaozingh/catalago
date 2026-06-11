import SearchBar from '@/components/SearchBar';
import { products } from '@/data/products';

export default function ProdutosPage() {
  return (
    <div>
      <h1>Produtos</h1>
      <SearchBar products={products} />
    </div>
  );
}