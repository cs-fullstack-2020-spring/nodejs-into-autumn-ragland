// define reference to http node module
 let http = require('http');

 // call createSever method on http module reference and save returned value as a variable 
 let newServer = http.createServer(
     (req,res) => {
         // send string to sever and close channel
         res.end("This is my first web server!");
     }
 )

 // call listen method on createServer return value on port 2016 and host name localhost
 newServer.listen(2016, "localhost");

 // log success message to terminal
 console.log("Listening on port 2016")