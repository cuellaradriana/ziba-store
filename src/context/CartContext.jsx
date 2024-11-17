import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (newItem) => {
        if (cart.some((item) => item.id === newItem.id)) {
            const updateCart = cart.map((item) =>
                item.id === newItem.id
                    ? { ...item, quantity: item.quantity + newItem.quantity }
                    : item
            );
            setCart([...updateCart]);
            return;
        }
        setCart([...cart, newItem]);
    };

    const totalQuantity = () => {
        const cartQuantity = cart.reduce(
            (total, itemCart) => total + itemCart.quantity,
            0
        );
        return cartQuantity;
    };

    const totalPrice = () => {
        const totalCart = cart.reduce(
            (total, itemCart) => total + itemCart.quantity * itemCart.price,
            0
        );
        return totalCart;
    };

    const removeItem = (itemId) => {
        const filterProducts = cart.filter(
            (itemCart) => itemCart.id !== itemId
        );
        setCart(filterProducts);
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                totalQuantity,
                totalPrice,
                removeItem,
                clear,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
