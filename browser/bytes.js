module.exports = bytes

var text = new TextEncoder

function bytes (string) {
  return text.encode(string)
}
