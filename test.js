var string = require('./string')
var bytes = require('./bytes')
var assert = console.assert

assert(eq(string([117, 116, 102, 56]), 'utf8'))
assert(eq(string(new Uint8Array([117, 116, 102, 56])), 'utf8'))
assert(eq(string(new Uint8Array([117, 116, 102, 56]).buffer), 'utf8'))
assert(eq(bytes('utf8'), [117, 116, 102, 56]))

function eq (a, b) {
  if (a === b) return true
  if (a.length !== b.length) return false
  for (var i = 0, l = a.length; i < l; i++)
    if (a[i] !== b[i]) return false
  return true
}
