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

> ✨ Note: The command can be executed in default terminal  (cmd in windows).

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

### Creating and nesting components











