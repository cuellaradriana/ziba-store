const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <div className="flex items-center justify-center w-full h-screen">
                <p className="text-3xl font-semibold">{greeting}</p>
            </div>
        </div>
    );
};

export default ItemListContainer;
