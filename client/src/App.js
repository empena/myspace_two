import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import { Layout } from 'antd';
     {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? DoubleRightOutlined : DoubleLeftOutlined)}
        </Button> */}

const App = () => {
  const { Sider, Content } = Layout;
  return (
    <Layout>
      <Sider>
      <Navbar />
      </Sider>
      <Layout className="site-layout">
      <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 880,
          }}
        >
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NoMatch} /> */}
          </Switch>
        </Content>
        </Layout>
      </Layout>
  );
}

export default App;
