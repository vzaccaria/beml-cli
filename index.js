#!/usr/bin/env node
(function(){
  var docopt, beml, fs, doc, o, filename;
  docopt = require('docopt').docopt;
  beml = require('beml');
  fs = require('fs');
  doc = "Usage:\n    beml-cli [<input>]\n    beml-cli -h | --help \n\nOptions:\n    If no <input> is passed, it is read from stdin";
  o = docopt(doc);
  filename = o["<input>"];
  filename == null && (filename = '/dev/stdin');
  fs.readFile(filename, 'utf-8', function(err, res){
    return console.log(beml.process(res));
  });
}).call(this);
