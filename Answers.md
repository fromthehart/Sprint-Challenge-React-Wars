# Answers

1.  What is React JS and what problems does it try and solve?

React is a library which abstracts away the painful parts of working with DOM manipulation and events to Components to allow for easier, richer, less error-prone development, along with massive performance gains by utilizing a virtual DOM under the hood to keep actual DOM updates to a minimum. It has no opinions about how your app should look or operate, only provides the tools to developer cleaner and work faster and smarter.

2.  What does it mean to _think_ in react?

Weird question, but okay. I believe what you're getting at is approaching app design by thinking in terms of components, state, and props, and understanding and controlling the flow of data properly.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Functional components are ordinary Javascript that accept and props using arguments and return a React element. Class components extend React.Component and utilize a `render()` function to return a React element. Functional components don't have access to `setState()` and as such are stateless.

4.  Describe state.

State is simply the data which is available inside an application. We store data in a state structure in order to provide a common interface for components to create, replace, update and delete data in the app.

5.  Describe props.

Props are properties passed to a Component. They flow down to a component from a parent, and are read-only. They are often pieces of data from the current State of the app, but State itself can only be changed through `setState()`.