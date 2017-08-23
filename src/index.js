const browsers = require('./browsers')

module.exports = function(ua) {
  for (const bro of browsers) {
    const match = ua.match(bro[0])
    if (match) {
      return {
        name: bro[1],
        version: match[1] + '.' + match[2]
      }
    }
  }

  return null
}
