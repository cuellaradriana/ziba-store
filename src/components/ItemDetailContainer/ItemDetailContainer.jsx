import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducts } from '../../utils/asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();
    useEffect(() => {
        getProducts().then((data) => {
            const findProduct = data.find(
                (product) => product.id === idProduct
            );
            setProduct(findProduct);
        });
    }, []);

    return (
        <div className="w-full p-10">
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
