import { object, string, mixed } from 'yup';

let userSchema = object({
    firstName: string().required('El nombre es requerido'),
    lastName: string().required('El apellido es requerido'),
    phone: mixed().required('El número de teléfono es requerido'),
    email: string()
        .email('El email no se encuentra en un formato correcto')
        .required('El email es requerido'),
    confirmEmail: string()
        .required('La confirmación de email es requerida')
        .test(
            'emails-match',
            'Los correos electrónicos no coinciden',
            function (value) {
                return value === this.parent.email;
            }
        ),
});

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm);
        return { status: 'success' };
    } catch (error) {
        return { status: 'error', message: error.message };
    }
};

export default validateForm;
