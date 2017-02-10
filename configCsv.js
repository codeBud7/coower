'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

alfy.config.set('coower-csvFileUri', alfy.input);
