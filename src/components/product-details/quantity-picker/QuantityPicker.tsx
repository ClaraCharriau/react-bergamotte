import { useEffect, useState } from "react";
import style from "./QuantityPicker.module.css";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(0);

  const addOne = (): void => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const removeOne = (): void => {
    if(quantity == 0) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  useEffect(() => console.log("la quantité change"), [quantity]);

  return (
    <div className={style.quantityPicker}>
      <button onClick={removeOne}>-</button>
      <p>{quantity}</p>
      <button onClick={addOne}>+</button>
    </div>
  );
};

export default QuantityPicker;
