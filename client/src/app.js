import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Sidebar from 'component/sidebar';
import Home from './app/home';
import Case from './app/case';
import { LANG } from './config';
import './app.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout className="app">
        <Layout.Header>
          <h1>{LANG.SITE.NAME}</h1>
        </Layout.Header>
        <Layout>
          <Layout.Sider>
            <Sidebar />
          </Layout.Sider>
          <Layout.Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/case" component={Case} />
            </Switch>
          </Layout.Content>
        </Layout>
        <Layout.Footer>
          &copy;{LANG.SITE.COPY}
        </Layout.Footer>
      </Layout>
    );
  }
}

export default connect(
  state => state
)(App);
