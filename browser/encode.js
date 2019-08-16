module.exports = encode

var decoder = new TextDecoder

function encode (buf) {
  return decoder.decode(new Uint8Array(buf))
}
