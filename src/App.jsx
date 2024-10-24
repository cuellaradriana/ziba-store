import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
