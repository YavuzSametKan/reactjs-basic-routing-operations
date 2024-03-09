import React from 'react';
import Navbar from "../../components/Navbar";

function NotFound() {
    return (
        <>
        <Navbar/>
        <h1 style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 60,
            //color: '#5F5D9C',
            textAlign: 'center'
        }}><span style={{fontSize: 100}}>404</span><br/>Sayfa Bulunamadı</h1>
        </>
    );
}

export default NotFound;