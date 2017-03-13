'use strict';

var util = require('util');

module.exports = {
  GitHubRepo: GitHubRepo
};

function GitHubRepo(res){
   var GitHubApi = require("github");
   var github = new GitHubApi({
     version: "9.2.0",
    });

  //  var vault = require('avault').createVault(__dirname);
  //
  //  vault.get("GitVault", function (profileString) {
  //  var profile = JSON.parse(profileString);
  //  console.log(profile);
  //
  //  github.authenticate({
  //      type: "oauth",
  //      token: AUTH_TOKEN    // auth token is not defined
  //  });
  // },github);


    var token = "c325860ebcb5c39e49db6a59466a88d4ed02b760";

    github.authenticate({
        type: "oauth",
        token: token
    });

    var output ="";
   github.users.get({user: "atsuydam"} , function(err, data) {
       github.repos.getAll({}, function(err, data2) {
            console.log("Houston do we have a problem?", err);
            console.log("This one is working?", data);
            output = JSON.stringify(data2);
           //res.json(data2); these type of functions are working, what library am I missing?
      });

  });
   return output;
}
