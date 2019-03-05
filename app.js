//Problem: We need a simple way to look at users badge count and Javascript points from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

const router = require("./router.js");
//Create a web server
const http = require('http');

http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
  //  setInterval(function(){response.end('hello worldzzzzzz\n')},6000);
}).listen(8000);
console.log("\nserver is running good");

//Function that handles the reading of files and merge in value
// read from file and get a string
// merge values into string
