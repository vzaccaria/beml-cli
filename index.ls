
{docopt} = require('docopt')
beml = require('beml')
require! 'fs'

doc = """
Usage:
  beml-cli <input>
  beml-cli -h | --help | --version

"""

o = docopt(doc, version: '0.0.0')
filename = o["<input>"]
fs.readFile filename, 'utf-8', (err, res) ->
    console.log beml.process(res)



