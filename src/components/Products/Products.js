import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const{user}=useFirebase();
    return (
        <div>
            <h3>This is a high quality product</h3>
            <h1>{user?user.displayName:'No body here'}</h1>
            <h3>{user?user.email:'email not found'}</h3>
        </div>
    );
};

export default Products;