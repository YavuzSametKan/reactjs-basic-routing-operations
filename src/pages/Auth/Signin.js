import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Signin() {
    const navigate = useNavigate()
    return (
        <section className='auth'>
            <div className='form-header'>
                <h1>Kayıt Ol</h1>
            </div>
            <form className='auth-form'>
                <input type="text" placeholder='E-mail'/>
                <input type="text" placeholder='Kullanıcı Adı'/>
                <input type="password" placeholder='Şifre'/>
                <input type="password" placeholder='Şifre Tekrar'/>
                <button
                    type='button'
                    onClick={
                        () => navigate('/auth/login')
                    }>
                    Kayıt Ol
                </button>
                <Link to='/auth/login'>Zaten bir hesabın var mı?</Link>
            </form>
        </section>
    );
}

export default Signin;