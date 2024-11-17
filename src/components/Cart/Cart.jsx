import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartEmpty from '../CartEmpty/CartEmpty';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, totalPrice, removeItem, clear } = useContext(CartContext);

    if (cart.length === 0) {
        return <CartEmpty />;
    }
    return (
        <div className="flex flex-col items-center justify-center gap-2 px-32 py-14">
            <h2 className="pb-4 text-3xl font-bold text-pink-900">
                Productos en el carrito
            </h2>
            <div className="w-full p-10 bg-pink-200 rounded-3xl">
                {cart.map((productCart) => (
                    <div
                        key={productCart.id}
                        className={`flex items-center gap-4 justify-evenly ${
                            cart.length > 1
                                ? 'border-b py-3 border-pink-900'
                                : ''
                        }`}
                    >
                        <img
                            src={productCart.image}
                            alt={productCart.title}
                            className="w-40 border-2 border-pink-700 rounded-xl"
                        />
                        <div className="flex flex-col items-start justify-center gap-1">
                            <p className="text-xl font-semibold text-pink-800">
                                {productCart.title}
                            </p>
                            <p>Cantidad: {productCart.quantity}</p>
                            <p>Precio por unidad: ${productCart.price}</p>
                            <p>
                                Total por producto: $
                                {productCart.quantity * productCart.price}
                            </p>
                        </div>
                        <button
                            className="px-5 py-3 font-medium bg-pink-400 rounded-xl hover:bg-pink-600 hover:text-white"
                            onClick={() => removeItem(productCart.id)}
                        >
                            Eliminar Producto
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between w-full p-6 px-56 bg-pink-300 rounded-3xl">
                <button
                    className="px-5 py-3 font-medium text-white bg-pink-700 border-2 border-pink-700 hover:font-semibold rounded-xl hover:bg-white hover:text-pink-900"
                    onClick={clear}
                >
                    Eliminar Carrito
                </button>
                <Link to="/checkout">
                    <button className="px-5 py-3 font-medium text-white bg-pink-700 border-2 border-pink-700 hover:font-semibold rounded-xl hover:bg-white hover:text-pink-900">
                        Finalizar Compra
                    </button>
                </Link>
                <p className="text-lg italic font-medium">
                    Total a Pagar: ${totalPrice()}
                </p>
            </div>
        </div>
    );
};
