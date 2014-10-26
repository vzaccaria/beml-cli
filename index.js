#!/usr/bin/env node
(function(){
  var docopt, beml, fs, doc, o, filename;
  docopt = require('docopt').docopt;
  beml = require('beml');
  fs = require('fs');
  doc = "Usage:\n  beml-cli <input>\n  beml-cli -h | --help | --version\n";
  o = docopt(doc, {
    version: '0.0.0'
  });
  filename = o["<input>"];
  fs.readFile(filename, 'utf-8', function(err, res){
    console.log(res);
    return console.log(beml.process(res));
  });
}).call(this);
