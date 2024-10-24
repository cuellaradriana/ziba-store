import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className="flex flex-wrap items-center justify-around w-full gap-6 p-5 ">
            {products.map((product) => {
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemList;
