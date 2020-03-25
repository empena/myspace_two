import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const User = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Peyton Manning" src="https://i.kym-cdn.com/photos/images/newsfeed/001/207/210/b22.jpg" />}
  >
    <Meta title="Peyton Manning" description="Your Mom's House" />
  </Card>
)

export default User