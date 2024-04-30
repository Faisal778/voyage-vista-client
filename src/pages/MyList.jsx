import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';

const MyList = () => {
    const {user} = UseAuth() || {};
    const [item, setItem] = useState([]);
    useEffect (() =>{

        fetch(`http://localhost:5000/myTouristSpot/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
        })
    }, [user])


    return (
        <div>
           {
            item.map(p => (
                <div>
                    {p.name}
                </div>
               ))
           }
        </div>
    );
};

export default MyList;