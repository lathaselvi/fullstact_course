# Full Stack Development

## Installing Code Editor (VS code)

This is a open source software that is maintained by Microsoft. You can download it 👉 [🔗Link](https://code.visualstudio.com/).

## Front-end (React ⚛️)

[🎥 React.js: The Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44) brings you the full story behind the early days of React, focusing on the dedicated group of developers who helped bring it to the world stage.

### What is the need of node.js ?

**To run react we need Node.js**. First, Chrome's V8 Engine refers to Google Chrome's JavaScript engine. The browser's JavaScript engine is responsible for reading, understanding, and breaking down JavaScript into machine code in order to run it. Second, the runtime refers to the state at which JavaScript runs in the browser.

Essentially, Node.js packages the runtime state for JavaScript usage outside of the browser.

Now, we can write JavaScript not only for the browser, but also as a general programming language to write our **scripts** to **running our servers**.
<br>
[Referenced from www.nicknish.co](https://www.nicknish.co/blog/explain-it-like-im-5-nodejs)

### How to install node.js ?

1.  Download Node from [Link 🔗](https://nodejs.org/en). Please download the Recommended version which is stable.

2.  The installed the node version "v18.16.0", to check your Node version use the command

```
node -v
```

3. Check If "npm" is also properly installed. To check the same run the command

```
npm -v
```

> ✨ Note: The command can be executed in default terminal (cmd in windows).

### Creating new ⚛️ React project

1. Download and execute the React beginner starter pack.

```
npx create-next-app
```

2. Use the below config to create the application.

<img src="asset\react_prj_config.png" alt="Project configuration">

3. To Run the App, go to the root folder , in this case the root folder is "app-name", and execute `npm run dev`

👩‍💻 Terminal command :

```
> cd app-name
> npm run dev
```

### JSX

JSX and it is a syntax extension to JavaScript.It provides a more declarative syntax for defining React components. It resembles HTML, making it easier to read and understand the structure of the user interface.

JSX promotes component-based architecture, allowing you to create reusable and modular UI components. This leads to more maintainable and scalable code.

JSX, in combination with React DOM, automatically escapes values embedded in JSX expressions. This prevents security vulnerabilities, such as cross-site scripting (XSS) attacks, by ensuring that user-provided data is treated as plain text and not executed as code. This automatic escaping helps to mitigate potential security risks in your applications.

### Babel

<img src="asset\Babel_Logo.png" alt="Babel Logo" width="200" height="100">

Babel is a popular JavaScript transpiler that can transform JSX code into regular JavaScript code. By configuring Babel with the @babel/preset-react preset, JSX syntax can be transpiled into compatible JavaScript code that can be executed by browsers. Babel allows you to use modern JavaScript features and JSX syntax while ensuring backward compatibility with older browsers.

> ✨ Note: Babel comes pre installed and configure with "create-next-app".

### Creating Components

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:

Example

```
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

```

Syntax definition

```
function <function_name>() {
  return (
   // return markdown.
  );
}

// or ES6 arrow function

const <function_name>=()=>{
  return (
   // return markdown.
  );
}

export default function_name


```

#### Nesting component

Nesting refers to the practice of embedding components within other components, creating a hierarchical structure of components. This hierarchical structure is known as the component tree.

Nesting components is a fundamental concept in React and allows for the composition of complex user interfaces. By breaking down the UI into smaller, reusable components, developers can organize and manage the application's structure more effectively.

```
export default function ParentComponent() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <ChildComponent />
    </div>
  );
}
```

Here we call the **ChildComponent** is nested into the **ParentComponent**.

Please the referee the "FullStact_course\front_end\src\pages\component-creation.js" to get understanding component creation and nested component and how implement.

<img src="asset\com-cre.png" alt="Parent and Child component" >

#### Importing and Exporting components

<details>
<summary>
Guid to know the different way to Import and Export Components.
</summary>
When the project grows maintaining all the component in one file is not manageable. In the above example (Parent child component example), we have exported both ParentComponent and ChildComponent, and Imported the same into the "component-creation.js" file.

##### Syntax to default export a component

```
const <function name> =()=>{
  // return statement
}

export default <function name>;

```

##### Syntax to import default

```
import <function name> from '<path of the file>'
```

##### Syntax to export component

```
export const <function name> =()=>{
  // return statement
}
 or

const <function name> =()=>{
  // return statement
}

export {<function name>}

/* here the we exporting a object with key (function name) and value (the function/component itself), as the key and value are same here we just use name directly. In case if you want to export in different name the key can changes, example */

// export {<different name>:<function name>}

```

##### Syntax to import component

```
import {<function name>} from '<path of the file>'
```

Example of exporting multiple entities.

```
const fun1 =()=>{
  // return statement
}

export const fun2 =()=>{
// return statement
}

export const fun3 =()=>{
// return statement
}

export default function1;

```

This how we can import those components

```
import fun1 ,{fun2,fun3} from '<file path>';
```

</details>
