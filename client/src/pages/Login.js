//--------------------------------------//
// Importing the necessary dependencies //
//--------------------------------------//
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/authContext';
//-------------------------//
// Create a Login function //
//-------------------------//
function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);
  //------------------------------------------------------------//
  // Stock username and password in the data variable           //
  // Make a POST request including the data variable            //
  // Get the response then if error display it in alert message //
  // Else store the JWToken in the session Storage              //
  // And And indicates that the authentication status is TRUE   //
  // Send to the posts page                                     //
  //------------------------------------------------------------//
  const loginRequest = () => {
    const data = { username: username, password: password };
    axios.post('http://localhost:3001/users/login', data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem('JWToken', response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate('/posts');
      }
    });
  };
  //---------------------------//
  // Return the HTML to inject //
  //---------------------------//
  return (
    <div className="loginContainer">
      <p>Se connecter</p>
      <input
        placeholder=" Nom d'utilisateur..."
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder=" Mot de passe..."
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button className="buttonLogin" onClick={loginRequest}>
        Connexion
      </button>
      <a className="loginLink" href="/register">
        Pas encore de compte ? Enregistrez vous.
      </a>
    </div>
  );
}
//---------------------------//
// Export the Login function //
//---------------------------//
export default Login;
