# Node JS Introduction - Conceptualizing Server Side Development

### System Set Up
- GitHub repositories will have a .gitignore file generated specifically for node applications
- Running `node -v` in the terminal will verify if you have the up to date version of `node` on your machine
- Running `npm -v` in the terminal will verify if you have the up to date version of the `node package module`

### App Set Up
- Run `npm init` in the terminal and accept all default values to generate a package.json file
- Create a file `index.js` this will be the *point of entry* 

### Creating a Web Server
- Define a reference to the `http` node module using require
- Call the `createServer()` method on the reference to the `http` node module
- Define an arrow function in the `createServer()` method with two params, `req` short for request and `res` short for response
- In the arrow function call the `end()` method on the `res` parameter and pass in a string (this is what will display in the browser when you run your web server)
- Set the returned value of the `createSever()` method called on the reference to the `http` node module equal to a variable 
- Call the `listen()` method on the variable defined above and pass in two values, port number and host name
- Log a success message to the console after calling the `listen()` method

### Running a Web Server
- Run `node index.js` in the terminal 
- You should see your success message *in the terminal*
- Open the browser to `localhost[YOURPORTNUMBER]`
- You should see the string passed in the `createServer()` method

### Reference 
[MDN NodeJS Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#Hello_Node.js)
