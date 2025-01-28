import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../utils/network-data';
import InputRegister from '../components/InputRegister';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
    const navigate = useNavigate();
    const {locale} = React.useContext(LocaleContext);
    
    async function onRegisterHandler (user) {
        const {error} = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <section className='register-page'>
            <h2>{locale === 'id'?'Isi form untuk mendaftar akun.': 'Fill the form to register account.'}</h2>
            <InputRegister register={onRegisterHandler} />
            <p>{locale === 'id' ? 'Sudah punya akun?': 'Already have an account?'} <Link to={'/'} >{locale === 'id' ? 'Login Disini.': 'Login here.'}</Link></p>
        </section>
    )
}

export default RegisterPage