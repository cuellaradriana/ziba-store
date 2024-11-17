import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <Routes>
                        <Route path={'/'} element={<ItemListContainer />} />
                        <Route
                            path={'/category/:idCategory'}
                            element={<ItemListContainer />}
                        />
                        <Route
                            path={'/detail/:idProduct'}
                            element={<ItemDetailContainer />}
                        />
                        <Route path={'/cart'} element={<Cart />} />
                        <Route path={'/checkout'} element={<Checkout />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
