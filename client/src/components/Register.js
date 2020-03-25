import React from 'react';
import { Form, Input, Button } from 'antd';
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


class Register extends React.Component {
  state = { email:'', password:'', passwordConfirmation:'' }


  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password, passwordConfirmation} = this.state;
    this.props.auth.handleLogin({email, password}, this.props.history)
    if (password === passwordConfirmation){
    this.props.auth.handleRegister( {email, password, passwordConfirmation},
    this.props.history )
    } else {
      alert('passwords do not match')
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]:value })
  };


  render(){
    const { email, password, passwordConfirmation } = this.state;
    return(
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
        <Form.Item 
        label="Password">
          <Input.Password
            label="Password"
            name="password"
            value={password}  
            required
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item 
        label="Password">
          <Input.Password
            label="Password"
            name="passwordConfirmation"
            value={passwordConfirmation}  
            required
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   );
  };
}


export default class ConnectedRegister extends React.Component{
  render(){
    return(
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}





    