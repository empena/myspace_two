import React from 'react';
import {AuthConsumer} from '../providers/AuthProvider';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {

  NavItems = () => {
    const { auth: { user, handleLogout }} = this.props;
    if (user){
      return(
        <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1">
          <Link to='/'>
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to='/all_users'>
            <span>Myspace Users</span>
          </Link>
        </Menu.Item>
       <Menu.Item key="2" onClick={handleLogout}>
            <Link to='/'>
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
        <Link to='/'>
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
          <Link to='/all_users'>
            <span>Myspace Users</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to='/login'>
              <span>Login</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="4">
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
    <div className="logo">
      <img src="https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/myspace.jpg?ve=1&tl=1?ve=1&tl=1" 
      alt="myspace-logo" 
      height="auto"
      width="200"
      />
    </div>
    <div >
    { this.NavItems()}
    </div>
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