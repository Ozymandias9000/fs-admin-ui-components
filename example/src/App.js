import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Select from "react-select";
import {
  Thumbnail,
  Well,
  PaginationButton,
  Button,
  TabNav,
  Dropdown,
  Alert,
  PageNav
} from "fs-admin-ui-components";

export default class App extends Component {
  notify = () => toast.success("Wow so easy !");

  render() {
    return (
      <main>
        <ToastContainer />
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
        <div className="buttonContainer">
          <PaginationButton prev />
          <PaginationButton next />
          <Button onClick={this.notify}>Click for toast!</Button>
        </div>
        <Alert primary="true">Primary alert</Alert>
        <Alert secondary="true">Secondary alert</Alert>
        <Alert success="true">Success alert</Alert>
        <Alert warning="true">Warning alert</Alert>
        <Alert danger="true">Danger alert</Alert>
        <TabNav>
          <div label="Home" />
          <div label="Profile" />
          <div label="Messages" />
        </TabNav>
        <PageNav>
          <div label="1" />
          <div label="2" />
          <div label="3" />
        </PageNav>
        <Dropdown>
          <div option="blue">Blue</div>
          <div option="red">Red</div>
          <div option="green">Green</div>
        </Dropdown>
        <p>
          <a
            href="https://github.com/JedWatson/react-select"
            target="_blank"
            rel="noopener noreferrer"
          >
            React-Select Dropdown
          </a>
        </p>
        <Select
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]}
        />
      </main>
    );
  }
}
