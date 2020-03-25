import React from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

class AllUsers extends React.Component {
state = {
  friends: []
}
 
componentDidMount(){
  axios.get('/api/friends')
  .then(res => {
    console.log(res)
    this.setState({
      friends: res.data
    });
  }).catch(err => {
    console.log(err)
  })
}

 render(){
   const {friends} = this.state
  
   return(
     <div className="site-card-wrapper">
      <Row gutter={16}>
    { friends.map( friend => 
      <Col key={friend.id} span={8} >
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="friend" src={friend.avatar} />}
          
        >
          <Meta title={friend.username} description={friend.location}/>
        </Card>
    </Col>
    )}
    </Row>
    </div>
   
  )
  }
}

export default AllUsers



