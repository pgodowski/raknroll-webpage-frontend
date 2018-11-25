import React from 'react';

const API = "https://raknroll-pdf.herokuapp.com/thankyou?firstName=";

const UserTable = props => {
    const user = props.users[0];
    return (
        <div>
            <h1>Hura! {user.name}!</h1>
            <h2>Miło nam poinformować, że Twoje włosy są juz u nas.</h2>
            <h3><a className="thankyou-link" href={API + user.name}>Kliknij, aby pobrać podziękowanie</a></h3>
        </div>
    );
}

export default UserTable;

