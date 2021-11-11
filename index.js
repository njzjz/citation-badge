var express = require('express');
var app = express();
app.use('/', function (req, res) {
	// request citations
	const https = require('https');
	const options = {
	  hostname: 'metrics-api.dimensions.ai',
	  port: 443,
	  path: '/doi' + req.originalUrl,
	  method: 'GET'
	}
	
	const req2 = https.request(options, res2 => {	
	  res2.on('data', d => {
		const { times_cited } = d.json();
		res.redirect(301, `https://img.shields.io/badge/Citations-${times_cited}-blue`);
	  })
	})
	
	req2.on('error', error => {
	  console.error(error);
	  res.redirect(301, `https://img.shields.io/badge/Error-${error}-red`);
	})
	
	req2.end()
})
module.exports = app;