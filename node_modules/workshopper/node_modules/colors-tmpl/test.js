#!/usr/bin/env node

var colors = require('colors')
  , colorsTmpl = require('./colors-tmpl')

  , assert = function (v1, v2, msg) {
      var b, msg
      if (arguments.length == 2) {
        b = v1
        msg = v2
      } else
        b = v1 === v2

      console.log((b ? '✓'.green : '✗'.red).bold + ' ' + msg[b ? 'green' : 'red'])
      if (!b && arguments.length != 2) {
        console.log('\t' + arguments[0])
        console.log('\t' + arguments[1])
      }
    }

assert(
    colorsTmpl(
      '{red}this should be red{/red}'
    )
  , 'this should be red'.red
  , 'full {red} string'
)

assert(
    colorsTmpl(
      '{green}this should be green{/green}'
    )
  , 'this should be green'.green
  , 'full {green} string'
)

assert(
    colorsTmpl(
      '{underline}this should be underlined{/underline}'
    )
  , 'this should be underlined'.underline
  , 'full {underline} string'
)

assert(
    colorsTmpl(
      'partial {red}red{/red} string'
    )
  , 'partial ' + 'red'.red + ' string'
  , 'partial {red} string'
)

assert(
    colorsTmpl(
      'partial {green}green{/green} string'
    )
  , 'partial ' + 'green'.green + ' string'
  , 'partial {green} string'
)

assert(
    colorsTmpl(
      'unmatched {green} tag, leave it alone'
    )
  , 'unmatched {green} tag, leave it alone'
  , 'unmatched {green} tag, leave it alone'
)

assert(
    colorsTmpl(
      'nonsense {foobar} tag, leave it alone'
    )
  , 'nonsense {foobar} tag, leave it alone'
  , 'nonsense {foobar} tag, leave it alone'
)

assert(
    colorsTmpl(
      'nonsense, matched {foobar}tag{/foobar}, leave it alone'
    )
  , 'nonsense, matched {foobar}tag{/foobar}, leave it alone'
  , 'nonsense, matched {foobar}tag{/foobar}, leave it alone'
)

assert(
    colorsTmpl(
      'lotsa colours: {red}red{/red}, {green}green{/green}, {blue}blue{/blue}, yeehaw!'
    )
  , 'lotsa colours: ' + 'red'.red + ', ' + 'green'.green + ', ' + 'blue'.blue + ', ' + 'yeehaw!'
  , 'multiple colours in one line'
)

assert(
    colorsTmpl(
      '{bold}colours {red}within {green}colours{/green} within {yellow}colours, {underline}oh my!{/underline}{/yellow}{/red} EEEK!{/bold}'
    )
  , ('colours ' + ('within ' + 'colours'.green + ' within ' + ('colours, ' + 'oh my!'.underline).yellow).red + ' EEEK!').bold
  , 'multiple colours contained within colours'
)

assert(
    colorsTmpl(
      '{red}red1{/red}, {red}red2{/red}, {red}red3{/red}'
    )
  , 'red1'.red + ', ' + 'red2'.red + ', ' + 'red3'.red
  , 'multiple occurances of a tag in a single string'
)

assert(
    colorsTmpl(
      '\n{red}red1{/red}\n{red}red2{/red}\n{red}red3{/red}\n'
    )
  , '\n' + 'red1'.red + '\n' + 'red2'.red + '\n' + 'red3'.red + '\n'
  , 'multi-line strings'
)

assert(
    colorsTmpl(
      '\n{red}red1\nred2\nred3{/red}\n'
    )
  , '\n' + 'red1\nred2\nred3'.red + '\n'
  , 'tags can surround multi-line strings'
)
