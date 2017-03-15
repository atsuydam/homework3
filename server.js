// Assignment 3: working with OAuth and API security
// Author: Amanda Suydam
// Created: 03/15/2017

var express = require('express');
var path = require('path');
var app = express();

var url = require('url');
var urlValue = 'http://localhost:1337/';
var parsedUrl = url.parse(urlValue, true, true);

//var Client = require(__dirname + "\\node_modules\\github\\lib\\index");

// var github = new Client({
// 	debug: true
// })

var GitHubApi = require("github");
var github = new GitHubApi({
    version: "3.0.0",
});

var vault = require('avault').createVault(__dirname);
vault.get("GitVault", function(profileString){
	var profile = JSON.parse(profileString);
	console.log(profile);
	var token = profile.key;
    github.authenticate({
        type: "oauth",
        token: token
    }, github);
})


app.get('/oauth', function(req, res, next) {
	var responce = res;
			github.repos.getContent({
				owner: "atsuydam",
				repo: "homework3",
				path: ""
			}, function(err, res) {
				console.log(err, res);

				responce.json(res);
				console.log(Object.keys(res.data));
			}, responce);
});

app.use("/", function(req, res, next) {
	var method = req.method;
	console.log(method + "failed with error 405");

	res.status(405);
	res.send('Method is not surpported by server');
	next();
});

// start the server
app.listen(1337);
console.log('using the 1337 port!');
console.log("http://localhost:1337/");
	