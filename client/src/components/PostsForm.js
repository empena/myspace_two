import React from 'react';
import { Form, Input, Button, } from 'antd';
import axios from 'axios'
import {useFormInput, } from '../hooks/useFormInput'

const PostForm = (props) => {

  const text = useFormInput('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/users/id/posts", { text: text.value })
      .then(res => {
        props.add(res.data);
        props.toggleForm();
        // props.id();
      })
  }

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
  

// export default class PostsForm extends React.Component {

//   state = {text:'',}

//   handleSubmit = (e) => {
//     const id = this.props.id
//     const newPost = {...this.state}
//     e.preventDefault()
//     Axios.post(`/api/users/id/posts`, newPost)
//     .then(res => {
//       console.log(res)
//       this.setState({
//         text: ''
//       });
//     }).catch(err => {
//       console.log(err)
//     })
    
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

    return(
      <Form {...layout} onSubmit={handleSubmit}>
        <Form.Item 
        label="New Post">
          <Input.TextArea 
            name="text"
            required
            placeholder="Type Your Post Here"
            { ...text }
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

export default PostForm



