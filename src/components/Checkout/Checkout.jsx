import React, { useContext, useState } from 'react';
import FormCheckout from './FormCheckout';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, setDoc, Timestamp, doc } from 'firebase/firestore';
import db from '../../db/db.js';
import { Link } from 'react-router-dom';
import validateForm from '../../utils/validateForm.js';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { cart, totalPrice, clear } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);
    const [dataForm, setDataForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: '',
    });

    const handleChangeInput = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const { confirmEmail, ...buyerData } = dataForm;

        const order = {
            buyer: { ...buyerData },
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate(new Date()),
        };

        try {
            const response = await validateForm(dataForm);
            if (response.status === 'error') {
                throw new Error(response.message);
            }
            toast.success('Orden Creada... 😁');
            uploadOrder(order);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, 'orders');
        addDoc(ordersRef, newOrder)
            .then((response) => setOrderId(response.id))
            .catch((error) => console.log(error))
            .finally(() => {
                updateStock();
            });
    };

    const updateStock = () => {
        cart.map(({ id, quantity, ...dataProduct }) => {
            const productRef = doc(db, 'products', id);
            setDoc(productRef, {
                ...dataProduct,
                stock: dataProduct.stock - quantity,
            });
        });
        clear();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-2xl">
                {orderId === null ? (
                    <FormCheckout
                        dataForm={dataForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm}
                    />
                ) : (
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-green-600">
                            ¡Tu orden ha sido creada!
                        </h3>
                        <p className="mt-4">
                            Por favor, guarde su número de seguimiento:
                            <span className="font-bold"> {orderId}</span>
                        </p>
                        <Link to="/">
                            <button className="px-4 py-2 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-600">
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
