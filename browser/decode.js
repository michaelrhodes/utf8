module.exports = decode

var encoder = new TextEncoder

function decode (str) {
  return encoder.encode(str)
}
