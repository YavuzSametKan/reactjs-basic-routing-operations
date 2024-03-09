import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from "react-router-dom";
import BottomBar from "../../components/BottomBar";

function UserDetail() {
    const [isLoading, setIsLoading] = useState(true)
    const { id} = useParams()
    const {state} = useLocation()
    const [user, setUser] = useState(state)
    const [userCount, setUserCount] = useState(state?.userCount);

    useEffect(() => {
        if(!user?.id || user.id != id) {
            setIsLoading(true)
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUserCount(data.length))
                .catch(err => console.log('fetch error', err))

            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(data => setUser(data))
                .catch(err => console.log('fetch error', err))
                .finally(() => setIsLoading(false))
        } else {
            setIsLoading(false)
        }
    }, [id, user])

    return (
        <>
            <h1 className='users-title'>Kullanıcı {id}</h1>
            {isLoading && <span style={{marginLeft: 30}}>Loading...</span>}
            {(!isLoading && user) &&
            <ul className='user-detail-list'>
                <li><b>Ad-Soyad:</b> {user.name}</li>
                <li><b>Kullanıcı Adı:</b> {user.username}</li>
                <li><b>Email:</b> {user.email}</li>
                <li><b>Adres;</b>
                    <ul>
                        <li><b>Sokak:</b> {user.address.street}</li>
                        <li><b>Şehir:</b> {user.address.city}</li>
                        <li><b>Daire:</b> {user.address.suite}</li>
                        <li><b>Posta Kodu:</b> {user.address.zipcode}</li>
                    </ul>
                </li>
                <li><b>Telefon:</b> {user.phone}</li>
                <li><b>Website:</b> {user.website}</li>
                <li><b>Şirket;</b>
                    <ul>
                        <li><b>Ad:</b> {user.company.name}</li>
                        <li><b>Alan:</b> {user.company.bs}</li>
                    </ul>
                </li>
            </ul>
            }
            <BottomBar id={id} userCount={userCount}/>
        </>
    );
}

export default UserDetail;