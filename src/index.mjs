import browsers from './browsers'

function whatBrowser(userAgent) {
  for (const bro of browsers) {
    const match = userAgent.match(bro[0])
    if (match) {
      return {
        name: bro[1],
        version: match[1] + '.' + match[2]
      }
    }
  }

  return null
}

export default whatBrowser
