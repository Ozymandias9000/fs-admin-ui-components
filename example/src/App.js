import React, { Component } from "react";
import {
  Thumbnail,
  Well,
  PaginationButton,
  TabNav
} from "fs-admin-ui-components";

export default class App extends Component {
  render() {
    return (
      <div>
        <Thumbnail
          image="https://source.unsplash.com/random/300x300?abstract"
          alt="hi"
        />
        <Well>
          <p>Hello there !</p>
        </Well>
        <PaginationButton next />
        <TabNav>
          <div label="Profile">Hi there</div>
          <div label="Home">Hi there</div>
          <div label="Messages">Hi there</div>
        </TabNav>
      </div>
    );
  }
}
