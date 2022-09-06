import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Orders = () => {
    const{user}=useFirebase();
    return (
        <div>
            <h1>This is Orders page</h1>
            <h1>{user?user.displayName:'No found user!'}</h1>
            <h3>{user?user.email:'No email found!!'}</h3>
        </div>
    );
};

export default Orders;