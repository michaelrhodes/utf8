module.exports = (function () {
  return 'TextDecoder' in this ?
    require('./browser/string') :
    function string (bytes) {
      return Buffer.from(bytes).toString()
    }
})()
