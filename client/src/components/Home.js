import React from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

class Home extends React.Component {
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
      <Col span={8} >
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="friend photo" src={friend.avatar} />}
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




// <div className="site-card-wrapper">
//     <Row gutter={16}>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//     </Row>
//   </div>,
// return (
//   <Card.Group itemsPerRow={4}>
//     { cats.map( cat =>
//       <Card key={cat.id}>
//         <Image src={cat.avatar} />
//         <Card.Content>
//           <Divider />
//           <Card.Header>
//             { cat.name }
//           </Card.Header>
//         </Card.Content>
//       </Card>
//     )}
//   </Card.Group>
export default Home

