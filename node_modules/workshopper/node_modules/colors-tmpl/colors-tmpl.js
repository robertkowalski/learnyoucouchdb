/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2012 Rod Vagg <rod@vagg.org> @rvagg
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var colors = require('colors')

  , types = Object.keys(colors).filter(function (k) {
      return /^[a-z]+$/.test(k) && typeof colors[k] == 'function'
    })

  , translators = types.map(function (type) {
      var re = new RegExp('\\{' + type + '\\}([\\s\\S]*?)\\{/' + type + '\\}', 'g')
      return function (str) {
        return str.replace(re, function (_, s) {
          return s[type]
        })
      }
    })

  , render = function (str) {
      return translators.reduce(
          function (str, fn) { return fn(str) }
        , str
      )
    }

module.exports = render
// old style:
module.exports.render = render
