import React, { Component } from "react";
import {
  Thumbnail,
  Well,
  PaginationButton,
  Button,
  TabNav,
  Dropdown,
  Alert
} from "fs-admin-ui-components";

export default class App extends Component {
  render() {
    return (
      <main>
        <Thumbnail
          image="https://source.unsplash.com/random/300x300?abstract"
          alt="hi"
        />
        <h1>h1 Heading</h1>
        <h2>h2 Heading</h2>
        <h3>h3 Heading</h3>
        <h4>h4 Heading</h4>
        <h5>h5 Heading</h5>
        <h6>h6 Heading</h6>
        <Well>
          <p>Hello there !</p>
        </Well>
        <PaginationButton prev>Prev</PaginationButton>
        <PaginationButton next>Next</PaginationButton>
        <Button onClick={() => alert("Hi!")}>Click me!</Button>
        <Alert primary>Primary alert</Alert>
        <Alert secondary>Secondary alert</Alert>
        <Alert success>Success alert</Alert>
        <Alert warning>Warning alert</Alert>
        <Alert danger>Danger alert</Alert>
        <TabNav>
          <div label="Home" />
          <div label="Profile" />
          <div label="Messages" />
        </TabNav>
        <Dropdown>
          <div option="blue">Blue</div>
          <div option="red">Red</div>
          <div option="green">Green</div>
        </Dropdown>
      </main>
    );
  }
}
