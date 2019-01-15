import React, { Component } from "react";

import { Thumbnail, Well } from "fs-admin-ui-components";

export default class App extends Component {
  render() {
    return (
      <div>
        <Thumbnail
          image="https://source.unsplash.com/random/300x300?abstract"
          alt="hi"
        />
        <Well>
          <p>Hello!</p>
        </Well>
      </div>
    );
  }
}
