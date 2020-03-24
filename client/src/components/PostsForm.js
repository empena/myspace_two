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


export default class PostsForm extends React.Component {

  state = {text:'',}

  handleSubmit = () => {

  }

  handleChange = () => {

  }

  render(){
    return(
      <Form {...layout} onSubmit={this.handleSubmit}>
        <Form.Item 
        label="Email">
          <Input.TextArea 
            label="Post"
            name="text"
            value={text}
            required
            placeholder="Type Your Post Here"
            onChange={this.handleChange}
          />
        </Form.Item>
      </Form>
    )
  }
}