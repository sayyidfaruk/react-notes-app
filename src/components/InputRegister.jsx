import React from 'react'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types';

function InputRegister({ register }) {
    const [name, onNameChange] = useInput();
    const [email, onEmailChange] = useInput();
    const [password, onPasswordChange] = useInput();
    const [confirmPassword, onConfirmPasswordChange] = useInput();
    function onSubmitHandler(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and confirm password must be same.');
            return;
        }
        register({ name, email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <label htmlFor="name">Name</label>
            <input type="name" id="name" value={name} onChange={onNameChange} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />
            <button>Login</button>
        </form>
    )
}

InputRegister.propTypes = {
    register: PropTypes.func.isRequired,
};

export default InputRegister