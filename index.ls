
{docopt} = require('docopt')
beml = require('beml')
require! 'fs'

doc = """
Usage:
    beml-cli [<input>]
    beml-cli -h | --help 

Options:
    If no <input> is passed, it is read from stdin
"""

o = docopt(doc)

filename = o["<input>"]
filename ?= '/dev/stdin'

fs.readFile filename, 'utf-8', (err, res) ->
    console.log beml.process(res)



