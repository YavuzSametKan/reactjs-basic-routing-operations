import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [userCount, setUserCount] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setUserCount(data.length);
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, []);

    return (
        <>
            <h1 className='users-title'>Kullanıcılar</h1>
            {isLoading && <span style={{marginLeft: 30}}>Loading...</span>}
            <ul className='user-list'>
                {
                    users.map(user => (
                        <li key={user.id}
                            onClick={
                                () =>  navigate(`${user.id}`, { state: {...user, userCount} })
                            }
                        >
                            {user.name}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Users