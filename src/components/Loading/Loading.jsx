import { BiLoaderCircle } from 'react-icons/bi';

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center w-full h-screen ">
                <div className="flex items-center justify-center gap-1">
                    <BiLoaderCircle className="text-3xl text-pink-700 animate-spin" />
                    <span className="text-3xl text-pink-700 text-semibold">
                        Cargando...
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
