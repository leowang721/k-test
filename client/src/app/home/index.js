import React, { Component } from 'react';
import { Menu } from 'antd';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>哈哈哈</h1>
      </div>
    );
  }

  onSelect(e) {
    console.log(e);
  }
}

export default Home;
