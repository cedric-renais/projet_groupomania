//--------------------------------------//
// Importing the necessary dependencies //
//--------------------------------------//
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//-------------------------//
// Create a Posts function //
//-------------------------//
function Posts() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();
  //----------------------------------------//
  // Make a request to GET all the posts    //
  // Checks if the user has a valid JWToken //
  //----------------------------------------//
  useEffect(() => {
    axios
      .get('http://localhost:3001/posts', {
        headers: {
          JWToken: sessionStorage.getItem('JWToken'),
        },
      })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setListOfPosts(response.data);
        }
      });
  }, []);
  //---------------------------//
  // Return the HTML to inject //
  //---------------------------//
  return (
    <div className="listOfPosts">
      {listOfPosts.map((value, key) => {
        return (
          <div
            key={key}
            className="post"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title"> {value.title} </div>
            <div className="message">{value.message}</div>
            <div className="username">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}
//---------------------------//
// Export the Posts function //
//---------------------------//
export default Posts;