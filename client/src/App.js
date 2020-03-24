import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import { Layout } from 'antd';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import ConnectedFetchUser from './components/FetchUser';


const App = () => {
  const { Sider, Content } = Layout;
  return (
    <>
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
          <ConnectedFetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
          </ConnectedFetchUser>
        </Content>
        </Layout>
      </Layout>
      
      </>
  );
}

export default App;
