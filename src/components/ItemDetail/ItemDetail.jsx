import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        const productCart = { ...product, quantity };
        addItem(productCart);
        setShowItemCount(false);
    };

    return (
        <div className="w-full px-40 py-10 bg-pink-100 rounded-3xl">
            <div className="w-full p-10 bg-pink-200 rounded-3xl">
                <div className="flex items-center justify-between w-full gap-8">
                    <div className="flex flex-col items-center justify-center gap-10">
                        <img
                            src={product.image}
                            alt={product.title}
                            width={500}
                            className="border-2 border-pink-900 rounded-3xl"
                        />
                        <h4 className="text-3xl font-semibold text-pink-900">
                            {product.title}
                        </h4>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-10">
                        <p className="text-xl font-medium">
                            {product.description}
                        </p>
                        <p className="text-lg font-semibold text-pink-900">
                            $ {product.price}
                        </p>
                        {showItemCount ? (
                            <ItemCount
                                stock={product.stock}
                                onAdd={handleOnAdd}
                            />
                        ) : (
                            <Link to="/cart">
                                <button className="px-5 py-3 font-medium text-white bg-pink-700 border-2 border-pink-700 hover:font-semibold rounded-xl hover:bg-white hover:text-pink-900">
                                    Terminar mi compra
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
