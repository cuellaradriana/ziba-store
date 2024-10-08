import { IoMdCart } from 'react-icons/io';

const CartWidget = () => {
    return (
        <div>
            <div className="flex items-end">
                <IoMdCart className="text-4xl text-pink-800" />
                <span className="px-2 py-1 -ml-2 text-xs font-bold text-pink-800 bg-white rounded-full hover:bg-pink-800 hover:text-white">
                    3
                </span>
            </div>
        </div>
    );
};

export default CartWidget;
