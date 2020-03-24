import React from 'react';
import { Form, Input, Button, } from 'antd';

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
    offset: 2,
    span: 16,
  },
};


export default class PostsForm extends React.Component {

  state = {text:'',}

  handleSubmit = (e) => {
    e.preventDefault()
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const {text} = this.state
    return(
      <Form {...layout} onSubmit={this.handleSubmit}>
        <Form.Item 
        label="Post">
          <Input.TextArea 
            name="text"
            value={text}
            required
            placeholder="Type Your Post Here"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    )
  }
}