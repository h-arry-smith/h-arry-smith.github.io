---
title: "Learn React | Part 3 | Your First Component"
date: 2021-01-02T10:04:39Z
draft: true
tags: []
---

This basic guide is going to teach you how to do a whole bunch of things you can't now.  
\
Let's jump straight in with the example content
```bash
npx create-react-app tutorial
```
Now there's a bunch of things to consider
  * Important thing one
  * Important thing two
  * Important thing three  
  
<br>

So just bear that in mind.

```jsx
class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

That's pretty much all you need to know.

{{< tutorial-nav prev="tutorials/react/react-2.md" >}}