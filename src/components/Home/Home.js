import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const{user}=useFirebase();
    return (
        <div>
            <h3>This is home</h3>
            <h1>{user?user.displayName:'No body'}</h1>
            <h3>{user?user.email:'No email found'}</h3>
            <img src={user?user.photoURL:'No photo found'} alt="" />
         
            
        </div>
    );
};

export default Home;