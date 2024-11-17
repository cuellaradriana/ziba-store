import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../../db/db';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();

    const getProductById = () => {
        const docRef = doc(db, 'products', idProduct);
        getDoc(docRef).then((dataDb) => {
            const productDb = { id: dataDb.id, ...dataDb.data() };
            setProduct(productDb);
        });
    };
    useEffect(() => {
        getProductById(idProduct);
    }, [idProduct]);

    return (
        <div className="w-full p-10">
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
