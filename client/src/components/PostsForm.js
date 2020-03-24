import React from 'react';
import { Form, Input, Button, } from 'antd';
import {AuthConsumer} from '../providers/AuthProvider';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


class PostsForm extends React.Component {
  state = {text:'',}

  render(){
    return(

    )
  }
}



<Form.Item name={['user', 'introduction']} label="Introduction">
  <Input.TextArea />
</Form.Item>


<Form {...layout} onSubmit={this.handleSubmit}>
        <Form.Item 
        label="Email">
          <Input 
            label="Email"
            name="email"
            value={email}
            required
            placeholder="Email"
            onChange={this.handleChange}
          />
        </Form.Item>