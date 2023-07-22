import { useCartContext } from "context/cart.context";
import style from "./Button.module.css";
import { IProduct } from "mocks/product";

interface buttonProps {
  product: IProduct;
  quantity: number;
  buttonText: string;
}

const Button = (props: buttonProps) => {
  const { product, quantity, buttonText } = props;

  const { addProductToCart } = useCartContext();

  const addToCart = (product: IProduct, quantity: number) => {
    console.log(`${product.productName} ajouté au panier !`);
    addProductToCart(product, quantity);
  };

  return (
    <button
      className={style.basketButton}
      onClick={() => addToCart(product, quantity)}
    >
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
