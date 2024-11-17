import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center justify-between gap-10 p-6 mx-auto font-medium bg-pink-100 border-pink-600 rounded-xl w-[460px]">
            <div className="flex items-center justify-between w-1/2 gap-2 px-5 py-2 bg-pink-300 rounded-xl">
                <button
                    className="flex items-center justify-center p-2 font-bold rounded-full hover:bg-pink-600 hover:text-white"
                    onClick={handleDecrement}
                >
                    <FaMinus />
                </button>
                <span>{quantity}</span>
                <button
                    className="flex items-center justify-center p-2 font-bold rounded-full hover:bg-pink-600 hover:text-white"
                    onClick={handleIncrement}
                    disabled={quantity >= stock}
                >
                    <FaPlus />
                </button>
            </div>
            <div className="w-1/2">
                <button
                    onClick={() => onAdd(quantity)}
                    disabled={!stock || quantity > stock}
                    className="px-5 py-3 font-medium bg-pink-300 rounded-xl hover:bg-pink-600 hover:text-white"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
