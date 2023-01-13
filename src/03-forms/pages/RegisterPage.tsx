import { ChangeEvent, useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const { name, email, password1, password2 } = registerData;

    const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {
       setRegisterData( prev => ({
          ...prev,
          [ event.target.name ] : event.target.value
       }))
    }

    const onSubmit = ( event: any) => {
        event.preventDefault();
    }

  return (
    <div>
        <h1>Registar Page</h1>
        <form noValidate onSubmit={ onSubmit }>

            <input type="text"
                placeholder="Name"
                value={ name }
                name='name'
                onChange={ onChange }
            
            />
            
            <input type="email"
                placeholder="Email"
                value={ email }
                name='email'
                onChange={ onChange }
            />

            
            <input type="password"
                placeholder="Password"
                value={ password1 }
                name='password1'
                onChange={ onChange }
            />

            <input type="password"
                placeholder="Repeat Password"
                value={ password2 }
                name='password2'
                onChange={ onChange }
            />

            <button type="submit">Create</button>
            
        </form>
    </div>


  )
}
