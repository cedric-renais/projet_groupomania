//------------------------------------//
// Imports the necessary dependencies //
//------------------------------------//
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Upload from '../components/User/Upload';
import UpdateBio from '../components/User/UpdateBio';
import UpdateEmail from '../components/User/UpdateEmail';
import UpdatePassword from '../components/User/UpdatePassword';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function User() {
  const [image, setImage] = useState('');
  let { id } = useParams();

  useEffect(() => {
    //-----------------------------------//
    // Makes GET request to get username //
    //-----------------------------------//
    axios
      .get(`${process.env.REACT_APP_API_URL}api/users/${id}`, {
        headers: {
          JWToken: sessionStorage.getItem('JWToken'),
        },
      })
      .then((res) => {
        setImage(res.data.image);
      });
  }, []);

  return (
    <div className="user">
      <Navbar />
      <div className="user_profile">
        <div className="user_leftside">
          <div className="user_image">
            <img src={image} alt="profil" />
            <Upload />
          </div>
        </div>
        <div className="user_rightside">
          <UpdateBio />
          <div className="user_email_password">
            <UpdateEmail />
            <UpdatePassword />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;