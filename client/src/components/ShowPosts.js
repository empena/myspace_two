import React, { Component } from 'react';
import Axios from 'axios';

class ShowPosts extends Component {
  state = {
    posts:[]
  }
  
  componentDidMount(){
    const id = this.props.id
    Axios.get(`/api/users/${id}/posts`)
    .then(res => {
      // console.log(res)
      this.setState({
        posts: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }
  
  
  render() {
    const { posts } = this.state
    // console.log(this.state.posts)
    return (
      <>
      { posts.map( post => 
        <div style={{...styles}} key={post.id}>
         <p>{post.text}</p> 
       </div>
        )}
      </>
    );
  }
}

export default ShowPosts;

const styles = {
  border: '1px solid lightgrey',
  borderRadius: '4px',
  margin: '26px',
  padding: '20px',
}