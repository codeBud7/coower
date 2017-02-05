'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const request = require('request');
const parse = require('csv-parse');

const awsUri = alfy.config.get('coower-awsUri');
const csvFile = alfy.config.get('coower-csvFileUri');
const auth = alfy.config.get('coower-authToken');

alfredNotifier();

var options = {
	url: csvFile,
	headers: {
		'Authorization': 'Basic ' + auth
	}
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		var projects = body.split('\n');
		projects.pop();

		var items = projects.filter(function(item) {
			return typeof item == 'string' && item.toLowerCase().indexOf(alfy.input.toLowerCase()) > -1;
		}).map(x => ({
			title: x.split(',')[0],
			subtitle: 'Prio: ' + x.split(",")[1] + ', Port: ' + x.split(",")[2],
			arg: awsUri + '{ENV}-Prio' + x.split(',')[1].charAt(0).toUpperCase() + x.split(',')[1].slice(1).toLowerCase() + '/services/{ENV}-' + x.split(',')[0] + '/tasks'
		}));
		alfy.output(items);
	}
}

request(options, callback);
