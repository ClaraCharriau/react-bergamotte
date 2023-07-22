import ContainerFlexAround from "components/common/container-flex-around/ContainerFlexAround";
import ProductCard from "components/product-card/ProductCard";
import { IProduct } from "mocks/product";
import { useLoaderData } from "react-router-dom";
import { getProducts } from "services/products.service";

export const productsLoader = async () => {
  const products = await getProducts();
  return products;
} 

const Products = () => {
  const products = useLoaderData() as IProduct[];
  return (
    <main>
      <h2>Nos produits</h2>
      <ContainerFlexAround>
        {products.map((product) => <li key={product.id}><ProductCard item={product} /></li>)}
      </ContainerFlexAround>
    </main>
  )
};

export default Products;
