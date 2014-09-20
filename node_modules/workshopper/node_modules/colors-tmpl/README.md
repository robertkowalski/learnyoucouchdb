# colors-tmpl - Super-simple templating for [colors.js](https://github.com/Marak/colors.js)

```js
var colorsTmpl = require('colors-tmpl')

// simple:
colorsTmpl('{red}this should be red{/red}')
// same as → 'this should be red'.red

// fancy:
colorsTmpl('lotsa colours: {red}red{/red}, {green}green{/green}, {blue}blue{/blue}, yeehaw!')
// same as → 'lotsa colours: ' + 'red'.red + ', ' + 'green'.green + ', ' + 'blue'.blue + ', ' + 'yeehaw!'

// fancier:
colorsTmpl(
      '{bold}colours {red}within {green}colours{/green} within {yellow}colours, {underline}oh my!{/underline}{/yellow}{/red} EEEK!{/bold}'
    )
// same as → 'colours ' + ('within ' + 'colours'.green + ' within ' + ('colours, ' + 'oh my!'.underline).yellow).red + ' EEEK!').bold
```

*Copyright (c) 2012 [Rod Vagg](https://github.com/rvagg) ([@rvagg](https://twitter.com/rvagg))*
