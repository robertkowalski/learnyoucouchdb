// please no
function zalgo(text, options) {
  var soul = {
    "up" : [
      '̍','̎','̄','̅',
      '̿','̑','̆','̐',
      '͒','͗','͑','̇',
      '̈','̊','͂','̓',
      '̈','͊','͋','͌',
      '̃','̂','̌','͐',
      '̀','́','̋','̏',
      '̒','̓','̔','̽',
      '̉','ͣ','ͤ','ͥ',
      'ͦ','ͧ','ͨ','ͩ',
      'ͪ','ͫ','ͬ','ͭ',
      'ͮ','ͯ','̾','͛',
      '͆','̚'
      ],
    "down" : [
      '̖','̗','̘','̙',

      '̜','̝','̞','̟',

      '̠','̤','̥','̦',

      '̩','̪','̫','̬',

      '̭','̮','̯','̰',

      '̱','̲','̳','̹',

      '̺','̻','̼','ͅ',

      '͇','͈','͉','͍',

      '͎','͓','͔','͕',

      '͖','͙','͚','̣'

    ],
    "mid" : [
      '̕','̛','̀','́',
      '͘','̡','̢','̧',
      '̨','̴','̵','̶',
      '͜','͝','͞',
      '͟','͠','͢','̸',
      '̷','͡',' ҉'
      ]
  },
  all = [].concat(soul.up, soul.down, soul.mid),
  zalgo = {};

  /*
  var prn = require('util').print
  for (var i = 0; i < soul.up.length; i++){
    prn(i + ' ')
  'Rod Vagg'.split('').forEach(function (c) { prn(c + soul.up[i]) })
  console.log();
  }
  for (var i = 0; i < soul.down.length; i++){
    prn(i + ' ')
  'Rod Vagg'.split('').forEach(function (c) { prn(c + soul.down[i]) })
  console.log();
  }
  'Rod Vagg'.split('').forEach(function (c) { prn(c + soul.up[43] + soul.down[4]) })
  console.log()
  */

  function randomNumber(range) {
    r = Math.floor(Math.random()*range);
    return r;
  };

  function is_char(character) {
    var bool = false;
    all.filter(function(i){
     bool = (i == character);
    });
    return bool;
  }

  function heComes(text, options){
      result = '';
      options = options || {};
      options["up"] = options["up"] || true;
      options["mid"] = options["mid"] || true;
      options["down"] = options["down"] || true;
      options["size"] = options["size"] || "maxi";
      var counts
        , dir = 'up'
      text = text.split('');
       for(var l in text){
         if(is_char(l)) { continue; }
         result = result + text[l];

        counts = {"up" : 0, "down" : 0, "mid" : 0};

        switch(options.size) {
          case 'mini':
            counts.up = randomNumber(8);
            counts.mid = randomNumber(2);
            counts.down = randomNumber(8);
          break;
          case 'maxi':
            counts.up = randomNumber(16) + 3;
            counts.mid = randomNumber(4) + 1;
            counts.down = randomNumber(64) + 3;
          break;
          case 'maxx':
            counts.up = randomNumber(128) + 10;
            counts.mid = randomNumber(20) + 1;
            counts.down = randomNumber(256) + 10;
          break;
          case 'down':
            counts.up = 0
            counts.mid = 0
            counts.down = randomNumber(256) + 10
          break;
          case 'maxdown':
            counts.up = 0//randomNumber(200)
            counts.mid = 0
            counts.down = randomNumber(200)
          break;
          default:
            counts.up = randomNumber(8) + 1;
            counts.mid = randomNumber(6) / 2;
            counts.down= randomNumber(8) + 1;
          break;
        }

        /*
        console.log(options,options.size,counts)
          for (var i = 0; i < counts[dir]; i++)
            result += soul[dir][randomNumber(soul[dir].length)]
          dir = dir == 'up' ? 'down' : 'up'
       */
        var arr = ["up", "mid", "down"];
        for(var d in arr){
          var index = arr[d];
          for (var i = 0 ; i < counts[index]; i++)
          {
            if(options[index]) {
                result = result + soul[index][randomNumber(soul[index].length)];
              }
            }
          }
        }
      return result;
  };
  return heComes(text, options);
}

module.exports = zalgo
