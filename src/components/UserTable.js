import React, { Component } from 'react';

const UserRow = props => {
      return (
        <tr>
          <td>{props.user.name} twoje włosy są juz u nas! Pobierz podziękowanie pod <a href={props.user.link}>tym linkiem</a></td>
          <td>{props.user.email}</td>
        </tr>
      );
  };

 const UserTable = props => {
        var users = [];
        props.users.forEach(user => {
            users.push(<tbody><UserRow user={user}/></tbody>)
        });
        return (
            <table className='table'>
              <thead>
                <tr>
                  <th>Opis</th>
                  <th>Email</th>
                </tr>
              </thead>
              {users}
            </table>
          );
  }

  export default UserTable;

