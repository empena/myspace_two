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
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (true){
      return(
        <Menu.Item key="2">
          {/* <LogoutOutlined /> */}
            <Link to='/logout'>
              <span>Logout</span>
            </Link>
        </Menu.Item>
      )
    } else {
      return(
        <>
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
          </>
      )
    }
    
  }


  render() {
    return (
      <>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? DoubleRightOutlined : DoubleLeftOutlined)}
        </Button> */}
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
          { this.NavItems()}
        </Menu>
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