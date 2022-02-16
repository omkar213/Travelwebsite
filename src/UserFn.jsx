import React, { useState, useEffect, useLayoutEffect } from 'react'
import UserItem from './UserItem';

function UserFn() {
  const [userlist, setuserlist] = useState([]);
  useLayoutEffect(() => {
    const URL = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';
    fetch(URL)
      .then(response => response.json())
      .then((user) => setuserlist(user))
      .catch((err) => console.log(err));
  }, []);
  const renderUserList = (userlist) => {
    if (userlist?.length > 0) {
      return (
        <div>
          {userlist.map((user) => {return (<UserItem user={user} key={user.id} />)})}
        </div>
      )
    }
  }
  return (
    <div>
      {renderUserList(userlist)}
    </div>
  )
}
export default UserFn
