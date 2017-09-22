var assert = require('assert')

var findHtml = /<([^\s>]+)(\s|>)+/g
module.exports = extract

function extract (html) {
  assert.equal(typeof html, 'string', 'extract-html-tag: html should be type string')

  var arr = []
  var res

  while (true) {
    res = findHtml.exec(html)
    if (!res) break
    arr = arr.concat(res[1].split(' ')).reduce(filter, [])
  }

  if (arr.length <= 1) return arr
  return arr.filter(function (value, index) {
    return arr.indexOf(value) === index
  })
}

function filter (arr, item) {
  if (!/^\//.test(item)) arr.push(item)
  return arr
}
