import React, { Component } from 'react';
import PostsForm from '../components/PostsForm';
import User from './User';

class Home extends Component {
  
  
  
  render() {
    return (
      <div>
        <h1>Your Profile</h1>
        <User />
        <br />
        <br />
        <hr />
        <br />
        <PostsForm />
        <hr />
        <h2>Your Posts:</h2>
      </div>
    );
  }
}

export default Home;