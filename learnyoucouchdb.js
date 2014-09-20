#!/usr/bin/env node

var workshopper = require('workshopper'),
    path = require('path'),
    menu = require('./exercises/menu')

workshopper({
  name: 'learnyoucouchdb',
  title: 'LEARN YOU COUCHDB FOR GREAT GOOD!',
  subtitle: '\x1b[23mSelect an exercise and hit \x1b[3mEnter\x1b[23m to begin',
  exerciseDir: fpath('./exercises/'),
  appDir: __dirname,
  helpFile: fpath('help.txt'),
  footerFile: fpath('footer.md'),
  menuItems: []
})

function fpath (f) {
  return path.join(__dirname, f)
}
