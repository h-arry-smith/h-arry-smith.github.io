---
title: "Airphp"
date: 2021-01-01T10:08:32Z
draft: true
description: "Airphp is the leading provider of dynamically generated php airbnb clones"
status: "alpha"
projectSize: "major"
mainImage: "/projects/placeholder.png"
screenshots:
  - "/projects/placeholder.png"
  - "/projects/placeholder.png"
  - "/projects/placeholder.png"
github: "https://www.github.com"
npm: "https://www.npmjs.com"
website: "https://www.google.co.uk"
---

## About The Project

**tailbreak** is a ultra lightweight (80 loc!) utility that let's you detect which tailwind breakpoint you are in based on your configuration file. It supports all the custom screen breakpoints from the tailwind documentation. It has no dependencies, other than the reccomended resolveConfig which already comes with tailwind.

## Getting Started

To install in your project / web application

  ```sh
  npm install tailbreak
  ```

To get the source code & tests

1. Clone the repo
   ```sh
   git clone https://github.com/h-arry-smith/tailbreak.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Dependencies
  * None !

### Dev-Dependencies
    "autoprefixer": "^10.1.0",
    "chai": "^4.2.0",
    "mocha": "^8.2.1",
    "mock-browser": "^0.92.14",
    "postcss": "^8.2.1",
    "tailwindcss": "^2.0.2"

## Usage

### Default Configuration
  ```js
    import Tailbreak from 'tailbreak';
    const tb = Tailbreak();

    if (tb.sm) { ... }
    if (tb.md) { ... }
    if (tb.lg) { ... }
    if (tb.xl) { ... }
    if (tb['2xl']) { ... }
  ```
  Passing nothing to the constructor will load the defaults as of Tailbreak 2.0.2. 

### Custom Configuration
  ```js
  // tailwind.config.js
  module.exports = {
    theme: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      }
    }
  }
  ```
  ```js
  // index.js
  import Tailbreak from 'tailbreak'
  import resolveConfig from 'tailwind/resolveConfig'
  import customConfig from 'tailwind.config'

  const tb = Tailbreak(resolveConfig(customConfig));

  if (tb.tablet) {...}
  if (tb.laptop) {...}
  if (tb.desktop) {...}
  ```
  See the tailwind [breakpoint docs](https://tailwindcss.com/docs/breakpoints) for more information on the formatting of custom breakpoints.

  It's reccomended to use the resolveConfig function that tailwind provides, as this will smart merge the configuration files. It's also possible to just pass the config in code if you like, if you are concerned about bundle size. The package currently **does not** support the extends functionality - use resolveConfig for this for better future proofing. 
  
  See the [resolveConfig docs](https://tailwindcss.com/docs/configuration#referencing-in-java-script) from tailwind for suggestions on static configuration for production builds.
  ```js
  ...
  const tb = Tailbreak({
    theme: {
      screens: {
        'phone': '640px'
        ... 
      }
    }
  });
  ```
  If you do this, I reccomend you create a tailbreak object in a file, export it and import this preconfigured object in your project, so that there is one source of truth.

### Using custom configs with React

  If you are using tailbreak in a react project (or any other framework that doesn't allow imports outside of `/src/`) then make sure to move the config inside `/src` and tell tailwind the new location. 

  For example, with craco and create-react-app: 
  ```js
  // craco.config.js
  module.exports = {
    ...
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('/src/tailwind.config.js'),
        require('autoprefixer'),
        ...
      ],
    },
  },
}
  ```

  If you are using the default tailwind breakpoints there is no need to do this, just call `Tailbreak()`.

### Acessing the media queries

  You can access the MediaQueryList objects, by prepending `_` to the relevant breakpoint
  ```js
  console.log(tb._sm.media)
  // -> (min-width: 640px)
  ```
