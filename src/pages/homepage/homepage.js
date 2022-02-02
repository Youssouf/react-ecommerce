import React, { Component } from 'react';
import DirectoryMenu from '../../components/directory/directort';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <DirectoryMenu/>
      </div>
    );
  }
}
