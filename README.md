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

From [create-react-package](https://github.com/transitive-bullshit/create-react-library#readme) docs:

> Local development is broken into two parts (ideally using two tabs).
> First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```jsx
npm start # runs rollup with watch flag
```

> The second part will be running the example/ create-react-app that's linked to the local version of your module.

```jsx
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

> Now, anytime you make a change to your library in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

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
import { TabNav } from "fs-admin-ui-components";

<TabNav>
  <div label="Home" />
  <div label="Profile" />
  <div label="Messages" />
</TabNav>;
```

### Buttons

### Thumbnails

```jsx
import { Thumbnail } from "fs-admin-ui-components";

<Thumbnail
  image="https://source.unsplash.com/random/300x300?abstract"
  alt="Random abstract art"
/>;
```

### Wells

```jsx
import { Well } from "fs-admin-ui-components";

<Well>
  <p>Hello there!</p>
</Well>;
```

### Forms

### Pagination

### Alerts

## License

MIT © [Ozymandias9000](https://github.com/Ozymandias9000)
