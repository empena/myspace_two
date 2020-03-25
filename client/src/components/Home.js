import React, { useState, useEffect } from 'react';
import PostsForm from '../components/PostsForm';
import User from './User';
import { AuthConsumer } from '../providers/AuthProvider'
import ShowPosts from './ShowPosts';
import {Button, } from 'semantic-ui-react'

const Home = (props) => {
  const[posts, setPosts] = useState([])
  const[showForm, setShowForm] = useState(false)
  
  const addPost = (post) => setPosts([...posts, post ])

  return (
    <>
      <h1>Your Profile</h1>
      <User />
      <br />
      <br />
      <hr />
      <br />
      { showForm && <PostsForm  add={addPost} toggleForm={setShowForm} /> }
      <Button onClick={() => setShowForm(!showForm)}>
        { showForm ? "Close Post Form" : "Show Post Form"}
      </Button>
      <hr />
      <h2>Your Posts:</h2>
      <ShowPosts />
    </>
  ); 
}

const ConnectedHome = (props) => (
  <AuthConsumer>
    {auth =>
    <Home {...props} auth={auth}/>
    }
  </AuthConsumer>
)

export default ConnectedHome;