'use strict';

var util = require('util');

module.exports = {
  hello: hello,
  testGitHub: testGitHub
};

function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function testGitHub(res){
   var GitHubApi = require("github");
   var github = new GitHubApi({
     host: "api.github.com",
     version: "3.0.0",
     header: {
       "User-Agent": "atsuydam"
     }
    });

   var vault = require ('avault').createVault('/hw3');

   vault.get("GitVault", function (profileString) {
   var profile = JSON.parse(profileString);
   console.log(profile);

   github.authenticate({
       type: "oauth",
       token: profile    // auth token is not defined
   });

  },github);      // views github as a parameter for the function


    var token = "";

    github.authenticate({
        type: "oauth",
        token: token
    });

   var output = "";

   github.user.get({ user: "atsuydam"} , function(err, data) {
     console.log("Got an error?", err);
     console.log("Got a response?", res);
     output += data;

     github.repos.getAll({}, function(err, data2) {
       console.log("Got an error?", err);
       console.log("Got a response?", res);
       output += data2;
     });
  });
   return output;
}
