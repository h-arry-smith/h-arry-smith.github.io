---
title: "Tailbreak"
date: 2021-01-03T09:15:13Z
draft: true
description: "A lightweight utility library to detect the current window breakpoints, using your tailbreak configuration file."
status: "released"
projectSize: "minor"
github: "https://github.com/h-arry-smith/tailbreak"
npm: "https://www.npmjs.com/package/tailbreak"
---

## About The Project

**tailbreak** is a ultra lightweight (80 loc!) utility that let's you detect which tailwind breakpoint you are in based on your configuration file. It supports all the custom screen breakpoints from the tailwind documentation. It has no dependencies, other than the reccomended resolveConfig which already comes with tailwind.

## Getting Started

To install in your project / web application

  ```sh
  npm install tailbreak
  ```

## Example Code

```js
  import Tailbreak from 'tailbreak';
  const tb = Tailbreak();

  if (tb.sm) { ... }
  if (tb.md) { ... }
  if (tb.lg) { ... }
  if (tb.xl) { ... }
  if (tb['2xl']) { ... }
```
## Motivation & Things Learnt

This is the first time I've produced code for specific intention of releasing it publicly. It has helped familiarise myself with NPM and the process of publishing to the platform.

The motivation for this project was during the [RedditView](/projects/reddit-view) project I wanted to serve two different presentational components, one that handled a specific mobile layout and another that handle tablet and beyond. The reason for doing this in code rather than media-queries was that it required a different structure and the presentational component was getting hard to manage. I went looking for a way to detect this breakpoint in code and was unhappy with the solutions I found.

The code automatically generates the member of the javascript object based on the tailwind config, which then also attaches an appropriate getter function to the object to enable the clean true/false return syntax in the example code. I think that this interface is very elegant. Getting this code to work increased my understanding of the JS object model.