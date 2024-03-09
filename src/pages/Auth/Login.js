import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    return (
        <section className='auth'>
            <div className='form-header'>
                <h1>Giriş Yap</h1>
            </div>
            <form className='auth-form'>
                <input type="text" placeholder='Kullanıcı Adı'/>
                <input type="password" placeholder='Şifre'/>
                <button
                    type='button'
                    onClick={
                        () => navigate('/')
                    }>
                    Giriş Yap
                </button>
                <Link to='/auth/signin'>Bir hesabın yok mu?</Link>
            </form>
        </section>
    );
}

export default Login;