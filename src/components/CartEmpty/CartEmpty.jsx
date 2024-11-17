import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h3 className="text-2xl italic text-pink-700 text-semibold">
                Tu carrito está vacío
            </h3>
            <Link to="/">
                <button className="px-5 py-3 font-medium bg-pink-300 rounded-xl hover:bg-pink-600 hover:text-white">
                    Volver al inicio
                </button>
            </Link>
        </div>
    );
};

export default CartEmpty;
