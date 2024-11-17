import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import db from '../../db/db';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    const getProducts = () => {
        const productsRef = collection(db, 'products');
        getDocs(productsRef).then((dataDb) => {
            const productsDb = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });
            setProducts(productsDb);
            setLoading(false);
        });
    };

    const getProductsByCategory = () => {
        const productsRef = collection(db, 'products');
        const queryCategories = query(
            productsRef,
            where('category', '==', idCategory)
        );
        getDocs(queryCategories).then((dataDb) => {
            const productsDb = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });
            setProducts(productsDb);
            setLoading(false);
        });
    };

    useEffect(() => {
        setLoading(true);
        if (idCategory) {
            getProductsByCategory();
        } else {
            getProducts();
        }
    }, [idCategory]);

    return (
        <div>
            <div className="flex items-center justify-center w-full ">
                {loading ? <Loading /> : <ItemList products={products} />}
            </div>
        </div>
    );
};

export default ItemListContainer;
