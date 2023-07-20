import Button from "components/common/button/Button";
import { IProduct } from "mocks/product";
import style from "./ProductCard.module.css";
import { Link } from "react-router-dom";

interface ProductCardProps {
  item: IProduct;
}

const ProductCard = (props: ProductCardProps) => {
  const { item } = props;
  const { id, productName, price, description: desc } = item;
  return (
    
    <article>
      <Link to={`/products/${id}`} className={style.link}>
      <img className={style.image} src={props.item.image.url} alt={item.image.alt}/>
      <h2>
        {productName} - {price}€
      </h2>
      <p>{desc}</p>
      </Link>
      <Button productName={productName} buttonText="Ajouter au panier" />
    </article>
    
  );
};

export default ProductCard;
