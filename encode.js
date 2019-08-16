module.exports = encode

function encode (buf) {
  return Buffer.from(buf).toString()
}
