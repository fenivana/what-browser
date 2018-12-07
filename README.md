# what-browser
Tiny 1kb util for detecting browser name and version. For Node.js and browser.

## Usage
```js
import whatBrowser from 'what-browser'

whatBrowser('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240')
// -> { name: 'Edge', version: '12.10240' }
```

Can only detect Edge, Chrome, Mobile Safari, Safari, Firefox, IE.
All other Chromium based browser will be detected as Chrome.

## LICENSE
[MIT](LICENSE)
