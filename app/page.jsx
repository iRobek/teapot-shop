import { getProducts } from "./api/getProducts/route";

export default async function Home() {

  const products = await getProducts();

  console.log(products);

  return (
    <div>
      Product list
      {products.map((prod) => (
        <div key={prod._id}>
          <h1>{prod.name}</h1>
          <h3>{prod.desc}</h3>
          <h3>{prod.price}</h3>
        </div>
      ))}
    </div>
  )

}