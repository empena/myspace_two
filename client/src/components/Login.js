import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {AuthConsumer} from '../providers/AuthProvider';

const layout = {
  labelCol: {
    span: 8,
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


class Login extends React.Component {
  state = { email:'', password:'', }


  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.auth.handleLogin({email, password}, this.props.history)
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]:value })
  };


  render(){
    const { email, password } = this.state;
    return(
      <Form {...layout} onSubmit={this.handleSubmit}>
        <Form.Item>
          <Input 
            label="Email"
            name="email"
            value={email}
            required
            placeholder="Email"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item>
        <Input.Password
          label="Password"
          name="password"
          value={password}  
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


export default class ConnectedLogin extends React.Component{
  render(){
    return(
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}





    