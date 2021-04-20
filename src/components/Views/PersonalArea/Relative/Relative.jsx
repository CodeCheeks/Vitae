import React, { useContext } from 'react';
import './Relative.css'
import { UserContext } from "../../../../contexts/UserContext";

const Relative = () => {

    const { user } = useContext(UserContext);
    const {firstname, lastname, gender, group, diet} = user.elder

    return (
        <div className="container">
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{gender}</div>
            <div>{group}</div>
            <div>{diet}</div>
        </div>
    );
};

export default Relative;



