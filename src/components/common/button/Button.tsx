import style from "./Button.module.css";

interface buttonProps {
  productName?: string;
  buttonText: string;
}

const Button = (props : buttonProps) => {
  const {productName = "", buttonText} = props

  const addToCart = (value: string) => {
    console.log(`${value} ajouté au panier !`);
  };

  return (
    <button
      className={style.basketButton}
      onClick={() => addToCart(productName)}
    >
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
