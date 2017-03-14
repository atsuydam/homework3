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


    var token = "";

    github.authenticate({
        type: "oauth",
        token: token
    });
    var async = require('async');
    var output ="";

    function putItStraight(callback) {
        github.users.get({user: "atsuydam"}, function (err, data) {
            github.repos.getAll({}, function (err, data2) {
                console.log("Houston do we have a problem?", err);
                console.log("This one is working?", data);
                if (err) return callback(err);
                callback(null, data2);
                //data.json(output); //these type of functions are working, what library am I missing?
            });
            console.log("and here we have ", output);
            callback(null, output);
        });
    }

    putItStraight( function(err, data2){
        console.log(data2);
        output += data2;
    });
    console.log("I don't think we're synced yet", output);


   return output;
}
