import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    return (
        <div className="w-full px-40 py-10 bg-pink-100 rounded-3xl">
            <div className="w-full p-10 bg-pink-200 rounded-3xl">
                <div className="flex items-center justify-between w-full gap-8">
                    <div className="flex flex-col items-center justify-center gap-10">
                        <img
                            src={product.pictureURL}
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
                        <ItemCount initial={1} stock={product.stock} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
