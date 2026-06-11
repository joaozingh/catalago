interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default async function DetalheProduto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <div>
      <img src={product.image} alt={product.title} width={200} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>R$ {product.price}</strong></p>
    </div>
  );
}