import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'


export const FormikAbstract = () => {


  return (
    <div>
        <h1>Formik Abstract</h1>
        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ ( values ) => {
                console.log( values );
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                .max(15,'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                    lastName: Yup.string()
                                .max(15,'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                    email: Yup.string()
                                .email('El correo no tiene un formato valido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'],'Esta opcion no es permitida')
                                .required('Requerido')

                })
             }>

                {
                    ( formik ) => (
                        <Form>
                            <MyTextInput 
                                label="firstName" 
                                name="firstName" 
                                placeholder='Carlos'
                            />
        
                            <MyTextInput 
                                label="lastName" 
                                name="lastName" 
                                placeholder='Maldonado'
                            />
        
                            <MyTextInput 
                                label="email" 
                                name="email" 
                                placeholder='camv29@gmail.com'
                                type='email'
                            />

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It-Senior</option>
                                <option value="it-jr">It-Jr</option>
                            </MySelect>
                          
                            <MyCheckbox label="Terms and conditions" name="terms" />
                
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
        </Formik>



    </div>
  )
}
