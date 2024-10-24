import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/asyncMock';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        getProducts()
            .then((data) => {
                if (idCategory) {
                    const filterProducts = data.filter(
                        (product) => product.category === idCategory
                    );
                    setProducts(filterProducts);
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.error(
                    'Ha ocurrido un error obteniendo los productos' + error
                );
            })
            .finally(() => {
                console.log('Promesa Finalizada');
            });
    }, [idCategory]);

    return (
        <div>
            <div className="flex items-center justify-center w-full ">
                <ItemList products={products} />
            </div>
        </div>
    );
};

export default ItemListContainer;
