import { IProduct } from "mocks/product";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// npm install uuid
// npm install @types/uuid

interface ICartProduct {
    id: string;
    product: IProduct;
    quantity: number;
}

interface ICart {
    products: ICartProduct[];
    addProductToCart: (product: IProduct, quantity: number) => void;
    getCartQuantity: () => number;
    getCartTotal: () => number;
}

const defaultCart: ICart = {
    products: [],
    addProductToCart:() => {},
    getCartQuantity: () => 0,
    getCartTotal: () => 0
}

const CartContext = createContext<ICart>(defaultCart);

interface CartProviderProps {
	children: JSX.Element;
}

const CartProvider = (props: CartProviderProps) => {
	const {children} = props;
    const [CartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    const addProductToCart = (newproduct: IProduct, newquantity: number) => {
        const newCartProduct: ICartProduct = {
            id: uuidv4(),
            product: newproduct,
            quantity: newquantity
        };
        setCartProducts([...CartProducts, newCartProduct]);
        console.log(CartProducts);
    }

    const getCartQuantity = () => {
        return CartProducts.reduce((accumulator: number, currentValue: ICartProduct) => accumulator += currentValue.quantity, 0);
    }

    const getCartTotal = () => {
        return CartProducts.reduce((accumulator: number, currentValue: ICartProduct) => accumulator + (currentValue.product.price * currentValue.quantity), 0);
    }

	const cart: ICart = {
		products: [],
        addProductToCart,
        getCartQuantity,
        getCartTotal
	}

	return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
