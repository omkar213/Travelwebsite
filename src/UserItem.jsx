import React from 'react'
import './App.css';

export default function UserItem({user}) {
    return (
    <div className='UsersContainer'>
        <div className='UserlistItems' key={user.id}>
            <strong>Album ID:{user.albumId}<br /></strong>
            <strong>User ID: {user.id}<br /></strong>
            Image: <img className='usersImg' src={user.url} alt="Image" />
        </div>
    </div>
    )
}
