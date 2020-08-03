module.exports = (function () {
  return 'TextEncoder' in this ?
    require('./browser/bytes') :
    function bytes (string) {
      return new Uint8Array(Buffer.from(string))
    }
})()
