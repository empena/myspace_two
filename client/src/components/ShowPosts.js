import React, { useState, useEffect,} from 'react';
import { Segment, List } from 'semantic-ui-react';
import axios from 'axios';

const ShowPosts = (props) => {

  const [posts, setPosts] = useState([])
  
  useEffect( () => {
    axios.get(`/api/users/id/posts`)
    .then( res => { setPosts(res.data);
    })
  }, [])
  
  const renderPosts = () => {
    return posts.map( post => (
      <Segment key={post.id}>
      <List.Header as="h3">{post.text}</List.Header>
    </Segment>
    ))
  }
    return (
      <> 
      <List>
        { renderPosts() }
      </List>
      </>
    );
  
}

export default ShowPosts;

// const styles = {
//   border: '1px solid lightgrey',
//   borderRadius: '4px',
//   margin: '26px',
//   padding: '20px',
// }