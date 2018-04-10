import React, { Component } from 'react';
import { Layout, DatePicker } from 'antd';
import './app.css';

class App extends Component {
  render() {
    return (
      <Layout className="app">
        <Layout.Header>
          <h1>Welcome</h1>
        </Layout.Header>
        <Layout>
          <Layout.Sider>
            sidebar
          </Layout.Sider>
          <Layout.Content>
            <DatePicker />
          </Layout.Content>
        </Layout>
        <Layout.Footer>
          footer
        </Layout.Footer>
      </Layout>
    );
  }
}

export default App;
