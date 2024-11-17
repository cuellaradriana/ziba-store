import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between gap-5 p-4 bg-pink-300">
            <Link to="/" className="text-4xl font-bold text-white">
                Ziba Store
            </Link>
            <ul className="flex space-x-4">
                <li>
                    <Link
                        to="/category/lazos"
                        className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md"
                    >
                        Lazos
                    </Link>
                </li>
                <li>
                    <Link
                        to="/category/vinchas"
                        className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md"
                    >
                        Vinchas
                    </Link>
                </li>
                <li>
                    <Link
                        to="/category/colitas"
                        className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md"
                    >
                        Colitas
                    </Link>
                </li>
                <li>
                    <Link
                        to="/category/lentes"
                        className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md"
                    >
                        Lentes
                    </Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
