---
title: How to create React Blink Component?
date: '2019-12-12'
spoiler: React Blink Component
---

This `react-blink-text` is reusable React component will manage to blink any text and changing the text color and font size if we need.

Blink takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.

## Example 

```
import React, { Component } from "react";
import Blink from 'react-blink-text';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <Blink color='blue' text='TestReactApp' fontSize='20'>
          Testing the Blink
        </Blink> 
      </div>
    );
  }
}
export default Application;
```

## Features
1. Supports all html tags : H1, H2, h3,..,etc., Span, Div, A Href tag.
2. Supports all different types of colors
3. Supports server-side rendering.

## Installation

### Yarn:
```
yarn add react-blink-text
```

### Npm:
```
npm install --save react-blink-text
```

## Repo Link:

<b>Link : </b> https://github.com/10secondsofcode/react-blink-text
<br>
<b>Create Issue : </b> https://github.com/10secondsofcode/react-blink-text/issues/new
