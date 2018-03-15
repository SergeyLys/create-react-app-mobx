import React from 'react';
import {Link} from 'react-router-dom';

const UserList = (props) => {

    const userList = props.users.toJS().map((user, key) => {
        return <li key={key}><Link to={user.name.first}>{user.name.first}</Link></li>
    });

    return (
        <ul>
            {userList}
        </ul>
    )
};

export default UserList;