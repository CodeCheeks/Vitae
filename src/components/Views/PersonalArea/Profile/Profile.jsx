import React, { useContext } from 'react';
import './Profile.css'
import { UserContext } from "../../../../contexts/UserContext";

const Profile = () => {

    const { user } = useContext(UserContext);
    const {firstname, lastname, phonenumber, address, email} = user

    return (
        <div className="container">
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{phonenumber}</div>
            <div>{address}</div>
            <div>{email}</div>
        </div>
    );
};

export default Profile;



