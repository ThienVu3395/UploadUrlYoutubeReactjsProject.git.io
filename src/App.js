import React, { Component } from 'react';
import Menu from './layout/Menu';
import Content from './layout/Content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content />
      </div>
    )
  }
}
