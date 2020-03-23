import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import { Menu, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import {
  // LogoutOutlined,
  // LoginOutlined,
  // UploadOutlined,
  // DoubleRightOutlined, 
  // DoubleLeftOutlined,
} from '@ant-design/icons';


class Navbar extends React.Component {
  state = {
    collapsed: false,
  };


  NavItems = () => {
    const { auth: { user, handleLogout }} = this.props;
    if (user){
      return(
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1">
        {/* <HomeOutlined /> */}
          <Link to='/'>
            <span>Home</span>
          </Link>
        </Menu.Item>
       <Menu.Item key="2" onClick={handleLogout}>
          {/* <LogoutOutlined /> */}
            <Link to='/logout'>
              <span>Logout</span>
            </Link>
        </Menu.Item>
      </Menu>
      )
    } else {
      return(
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
      <Menu.Item key="1">
      {/* <HomeOutlined /> */}
        <Link to='/'>
          <span>Home</span>
        </Link>
      </Menu.Item>
        <Menu.Item key="3">
          {/* <LoginOutlined /> */}
            <Link to='/login'>
              <span>Login</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="4">
          {/* <UploadOutlined /> */}
            <Link to='/register'>
              <span>Register</span>
            </Link>
        </Menu.Item>
      </Menu>
      )
    }
    
  }


  render() {
    return (
    <>
    { this.NavItems()}
    </>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);