import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-3 bg-pink-100 w-80 rounded-xl">
            <img
                src={product.image}
                alt={product.title}
                width={300}
                className="rounded-xl"
            />
            <h4 className="flex items-center justify-center text-xl font-semibold text-center text-pink-600">
                {product.title}
            </h4>
            <p className="text-xl">$ {product.price}</p>
            <Link
                to={'/detail/' + product.id}
                className="px-5 py-2 text-sm font-semibold text-pink-600 bg-pink-300 rounded-xl hover:bg-pink-600 hover:text-white"
            >
                Ver detalle
            </Link>
        </div>
    );
};

export default Item;
