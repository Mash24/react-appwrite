import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user || !user.username) return <h1>Please login first!</h1>;

    return (
        <div> 
        <h1>Profile: {user.username}</h1>
        </div>
    );
}

export default Profile;
