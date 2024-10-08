import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Bienvenidos a mi e-commerce" />
        </div>
    );
}

export default App;
