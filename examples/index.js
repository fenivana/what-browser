/* eslint no-console: "off" */

const whatBrowser = require('../src')
const browsers = require('../tests/browsers')

for (const bro of browsers) {
  console.log('User-Agent:', bro[0])
  console.log('Result:', whatBrowser(bro[0]))
}
