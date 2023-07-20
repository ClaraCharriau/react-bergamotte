import { IProduct, PRODUCTS } from "mocks/product"

export const getProducts = () : IProduct[] => {
    return PRODUCTS;
}

export const getProduct = (id: number) : IProduct | undefined => {
    return PRODUCTS.find((product) => product.id === id);
}
