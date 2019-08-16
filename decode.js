module.exports = decode

function decode (str) {
  return new Uint8Array(Buffer.from(str))
}
