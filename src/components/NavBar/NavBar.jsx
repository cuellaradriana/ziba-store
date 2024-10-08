import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="flex justify-between gap-5 p-4 bg-pink-300">
            <h2 className="text-4xl font-bold text-white">Ziba Store</h2>
            <ul className="flex space-x-4">
                <li>
                    <button className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md">
                        Lazos
                    </button>
                </li>
                <li>
                    <button className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md">
                        Vinchas
                    </button>
                </li>
                <li>
                    <button className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md">
                        Colitas
                    </button>
                </li>
                <li>
                    <button className="p-2 font-bold text-white bg-inherit hover:bg-white hover:text-pink-600 hover:rounded-md">
                        Lentes
                    </button>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
