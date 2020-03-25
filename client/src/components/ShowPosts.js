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
      console.log(res)
      this.setState({
        posts: res.data
      });
    }).catch(err => {
      console.log(err)
    })
  }
  
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default ShowPosts;