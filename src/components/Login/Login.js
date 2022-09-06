import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Plz login</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>

            </div>
            <form>

                <input type="email" name="email" id="" placeholder='Your email' />
                <br />
                <input type="password" name="password" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Login;