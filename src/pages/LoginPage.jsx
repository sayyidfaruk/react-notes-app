import React from 'react'
import InputLogin from '../components/InputLogin'
import { login } from '../utils/network-data'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ loginSuccess }) {
    const { locale } = React.useContext(LocaleContext);

    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className='login-page'>
            <h2>{locale === 'id' ? 'Yuk, login untuk menggunakan aplikasi.' : 'Login to use the app, please.'}</h2>
            <InputLogin login={onLogin} />
            <p>{locale === 'id' ? 'Belum punya akun?' : "Don't have an account?"} <Link to={'/register'} >{locale === 'id' ? 'Daftar Disini.' : 'Register here.'}</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage