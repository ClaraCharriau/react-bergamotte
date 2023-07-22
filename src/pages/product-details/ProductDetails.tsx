import Button from "components/common/button/Button";
import style from "./ProductDetails.module.css";
import { ActionFunctionArgs, useLoaderData } from "react-router-dom";
import { getProduct } from "services/products.service";
import { IProduct } from "mocks/product";
import QuantityPicker from "components/product-details/quantity-picker/QuantityPicker";
import { useState } from "react";

export const productLoader = (args: ActionFunctionArgs) => {
  const { params } = args;
  const { id } = params;
  const product = getProduct(Number(id));
  if (!product) {
    throw new Response("", {
      status: 404,
      statusText: "Ce produit n'existe pas",
    });
  }
  return product;
};

const ProductDetails = () => {
  const product = useLoaderData() as IProduct;

  const [quantity, setQuantity] = useState(1);

  const condition = product.isAvailable ? (
    <Button buttonText="Ajouter au panier" product={product} quantity={quantity} />
  ) : (
    <p>Produit indisponible</p>
  );

  return (
    <section className={style.productSection}>
      <img
        className={style.productImage}
        src={product.image.url}
        alt={product.image.alt}
      />
      <div>
        <h1>{product.productName}</h1>
        <strong>
          {product.details} - {product.price}€
        </strong>
        <p>{product.description}</p>
        <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
        {condition}
      </div>
    </section>
  );
};

export default ProductDetails;
