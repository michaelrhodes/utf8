var encode = require('./encode')
var decode = require('./decode')
var assert = console.assert

assert(eq(encode([117, 116, 102, 56]), 'utf8'))
assert(eq(encode(new Uint8Array([117, 116, 102, 56])), 'utf8'))
assert(eq(encode(new Uint8Array([117, 116, 102, 56]).buffer), 'utf8'))
assert(eq(decode('utf8'), [117, 116, 102, 56]))

function eq (a, b) {
  if (a === b) return true
  if (a.length !== b.length) return false
  for (var i = 0, l = a.length; i < l; i++)
    if (a[i] !== b[i]) return false
  return true
}
