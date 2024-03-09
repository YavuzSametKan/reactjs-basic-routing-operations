import React from 'react'
import {Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    return (
        <nav>
            <ul className='nav-links'>
                <li onClick={() => navigate(-1)}>&lt;</li>
                <li onClick={() => navigate('/')}>Ana Sayfa</li>
                <li onClick={() => navigate('about')}>Hakkımızda</li>
                <li onClick={() => navigate('contact')}>İletişim</li>
                <li onClick={() => navigate('blog')}>Blog</li>
                <li onClick={() => navigate('users')}>Kullanıcılar</li>
                <li onClick={() => navigate(+1)}>&gt;</li>

                {/*<li>*/}
                {/*    <Link to='/'>Ana Sayfa</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='hakkimizda'>Hakkımızda</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='iletisim'>İletişim</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='blog'>Blog</Link>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}

export default Navbar