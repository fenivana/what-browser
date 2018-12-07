/* eslint no-console: "off" */

const whatBrowser = require('..')
const browsers = require('../test/browsers')

for (const bro of browsers) {
  console.log('User-Agent:', bro[0])
  console.log('Result:', whatBrowser(bro[0]))
}
