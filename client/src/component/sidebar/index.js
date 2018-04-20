import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

class SideBar extends Component {
  render() {
    const selectedKeys = [this.props.path];
    return (
      <Menu onSelect={this.onSelect} defaultSelectedKeys={selectedKeys}>
        <Menu.Item key="/">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="/case">
          <Link to="/case">case</Link>
        </Menu.Item>
      </Menu>
    );
  }

  onSelect(e) {
    console.log(e);
  }
}

export default connect(
  state => {
    return {
      path: state.router.location.hash.substring(1)
    };
  }
)(SideBar);
