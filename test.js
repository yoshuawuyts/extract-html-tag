var tape = require('tape')
var extract = require('./')

tape('extracts classes from html', function (assert) {
  var html = `
    <div class="foo bar">
      <p class="bin baz">hello planet</p>
    </div>
  `
  var expected = [ 'div', 'p' ]
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('returns empty array if no matches', function (assert) {
  var html = `hello world`
  var expected = []
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('removes duplicates', function (assert) {
  var html = `
    <div class="foo bar">
      <div class="foo bar">hello planet</div>
    </div>
  `
  var expected = [ 'div' ]
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('matches fancy tags', function (assert) {
  var html = `
    <body class=_7750a623>
      <h1>hello planet</h1>
    </body>
  `
  var expected = [ 'body', 'h1' ]
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})
