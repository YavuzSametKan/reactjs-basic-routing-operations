import React from 'react';
import {useNavigate} from "react-router-dom";


function BottomBar({id, userCount}) {
    const navigate = useNavigate()
    return (
        <nav>
            <ul className='next-and-prev-bar'>
                <li
                    onClick={
                        () => navigate(`/users/${Number(id) - 1 <= 1 ? 1 : Number(id) - 1}`)
                    }
                >
                    Önceki Kullanıcı
                </li>
                <li
                    onClick={
                        () => navigate(`/users/${Number(id) + 1 >= userCount ? userCount : Number(id) + 1}`)
                    }
                >
                    Sonraki Kullanıcı
                </li>
            </ul>
        </nav>
    );
}

export default BottomBar;