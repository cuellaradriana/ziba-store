import React from 'react';

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm} className="grid grid-cols-1 gap-6">
            <h2 className="text-xl font-semibold text-center text-gray-700">
                Completa tu información
            </h2>
            <div>
                <label className="block text-gray-700">Nombre:</label>
                <input
                    type="text"
                    name="firstName"
                    value={dataForm.firstName}
                    onChange={handleChangeInput}
                    placeholder="Marge"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
                <label className="block text-gray-700">Apellido:</label>
                <input
                    type="text"
                    name="lastName"
                    value={dataForm.lastName}
                    onChange={handleChangeInput}
                    placeholder="Simpson"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
                <label className="block text-gray-700">Teléfono:</label>
                <input
                    type="number"
                    name="phone"
                    value={dataForm.phone}
                    onChange={handleChangeInput}
                    placeholder="5491122334455"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
                <label className="block text-gray-700">
                    Correo Electrónico:
                </label>
                <input
                    type="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChangeInput}
                    placeholder="margesimpson@mail.com"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
                <label className="block text-gray-700">
                    Confirmar Correo Electrónico:
                </label>
                <input
                    type="email"
                    name="confirmEmail"
                    value={dataForm.confirmEmail}
                    onChange={handleChangeInput}
                    placeholder="margesimpson@mail.com"
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
                Enviar orden
            </button>
        </form>
    );
};

FormCheckout.propTypes = {};

export default FormCheckout;
