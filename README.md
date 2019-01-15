# fs-admin-ui-components

>

[![NPM](https://img.shields.io/npm/v/fs-admin-ui-components.svg)](https://www.npmjs.com/package/fs-admin-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

- [Usage](#usage)
- [Components](#components)
- [License](#license)

## Install

```bash
npm i -S fs-admin-ui-components
```

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "fs-admin-ui-components";

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## Components

- [Headings](#headings)
- [Lists](#lists)
- [Navbars](#navbars)
- [Buttons](#buttons)
- [Thumbnails](#thumbnails)
- [Wells](#wells)
- [Forms](#forms)
- [Pagination](#pagination)
- [Alerts](#alerts)

### Headings

### Lists

### Navbars

#### TabNav

```jsx
<TabNav>
  <div label="Home" />
  <div label="Profile" />
  <div label="Messages" />
</TabNav>
```

### Buttons

### Thumbnails

```jsx
<Thumbnail
  image="https://source.unsplash.com/random/300x300?abstract"
  alt="Random abstract art"
/>
```

### Wells

```jsx
<Well>
  <p>Hello there!</p>
</Well>
```

### Forms

### Pagination

### Alerts

## License

MIT © [Ozymandias9000](https://github.com/Ozymandias9000)
