import { IoMdCart } from 'react-icons/io';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const quantity = totalQuantity();
    return (
        <Link to="/cart">
            <div className="flex items-end">
                <IoMdCart className="text-4xl text-pink-800" />
                {quantity >= 1 && (
                    <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-pink-800 bg-pink-100 rounded-full hover:bg-pink-800 hover:text-white">
                        {quantity}
                    </span>
                )}
            </div>
        </Link>
    );
};

export default CartWidget;
