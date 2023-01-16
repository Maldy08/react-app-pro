import { FormEvent } from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

    const { formData, onChange, resetForm , isValidEmail ,name, email, password1, password2 } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });



  return (
    <div>
        <h1>Registar Formik Page</h1>

        <Formik
            initialValues={ {
                name: '',
                email: '',
                password1: '',
                password2: '',
            } }
            onSubmit={ ( values ) =>{
                console.log( values );
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                            .min(2,'Debe de contener por lo menos 2 caracteres')
                            .max(15,'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                    email: Yup.string()
                            .email('Correo invdalido!!')
                            .required('Requerido'),
                    password1: Yup.string()
                            .min(6,'Debe de contener por lo menos 6 caracteres')
                            .required('Requerido'),
                    password2: Yup.string()
                            .required('Requerido')
                            .oneOf([Yup.ref('password1'), 'Los passwords deben coincidir'])
                })
            }
        >
            {
                ( { handleReset } ) => (

                    <Form>
                        
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name='name' component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name='email' component="span" />

                        <label htmlFor="password1">Password</label>
                        <Field name="password1" type="password" placeholder="******" />
                        <ErrorMessage name='password1' component="span" />

                        <label htmlFor="password2">Confirmar Password</label>
                        <Field name="password2" type="password" placeholder="******" />
                        <ErrorMessage name='password2' component="span" />

                        <button type='submit'>Create</button>
                        <button type='button' onClick={ handleReset }>Reset Form</button>
                        
                    
                    </Form>
                )
            }
        </Formik>

    </div>


  )
}


//rama forms-dynamic