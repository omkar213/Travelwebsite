import React, { Component } from 'react'
import './App.css';
import UserItem from './UserItem';
export default class Users1 extends Component {
  constructor(props) {
    super(props);
    this.state = { UserList: [] };
  }
  componentDidMount() {
    const URL = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';
    fetch(URL)
      .then(response => response.json())
      .then((json) => {this.setState({ UserList: json })
      });
  }
  render() {
    console.log(this.state.UserList);
    const { UserList } = this.state;
    return (
      <>
        <h1>Users</h1>
          <div>
            {UserList.map((user) => {
              return (<UserItem user={user} />
              )
            })}
          </div>
      </>
    )
  }
}
