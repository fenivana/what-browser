const browsers = require('./browsers')
const whatBrowser = require('./index')
const assert = require('assert')

for (const bro of browsers) {
  assert.deepEqual(whatBrowser(bro[0]), { name: bro[1], version: bro[2] })
}
