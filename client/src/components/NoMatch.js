import React from 'react';
import { Link, } from 'react-router-dom';
import { Button } from 'antd';

const NoMatch = () => (
  <>
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <h3>PAGE NOT FOUND</h3>
    </div>
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <Link to="/">
      <Button type="primary">Home</Button>
    </Link>
    </div>
    </>
)

export default NoMatch