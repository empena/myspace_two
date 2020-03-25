import React, { Component } from 'react';
import PostsForm from '../components/PostsForm';
import User from './User';
import { AuthConsumer } from '../providers/AuthProvider'
import ShowPosts from './ShowPosts';

class Home extends Component {
  
  
  
  render() {
    const user = this.props.auth.user.id
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
        <ShowPosts id={user}/>
      </div>
    );
  }
}

const ConnectedHome = (props) => (
  <AuthConsumer>
    {auth =>
    <Home {...props} auth={auth}/>
    }
  </AuthConsumer>
)

export default ConnectedHome;