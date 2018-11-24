import React, { Component } from 'react';

const API = "https://boiling-everglades-94066.herokuapp.com/thankyou?firstName=";
const UserRow = props => {
      return (
        <tr>
          <td>{props.user.name} twoje włosy są juz u nas!</td>
          <td><a href={API + props.user.name}>Kliknij w link</a></td>
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
                  <th>Pobierz</th>
                </tr>
              </thead>
              {users}
            </table>
          );
  }

  export default UserTable;

