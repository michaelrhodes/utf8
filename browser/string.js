module.exports = string

var text = new TextDecoder

function string (bytes) {
  return text.decode(new Uint8Array(bytes))
}
