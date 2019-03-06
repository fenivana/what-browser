var browsers = [[/Edge\/(\d+)\.(\d+)/, 'Edge'], [/Chrome\/(\d+)\.(\d+)/, 'Chrome'], [/(?:iPod|iPod touch|iPhone|iPad).*OS (\d+)_(\d+)/, 'Mobile Safari'], [/Version\/(\d+)\.(\d+).*Safari/, 'Safari'], [/Firefox\/(\d+)\.(\d+)/, 'Firefox'], [/Trident.*rv.(\d+)\.(\d+)/, 'IE'], [/MSIE (\d+)\.(\d+)/, 'IE']];

function whatBrowser(userAgent) {
  for (var _iterator = browsers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var bro = _ref;
    var match = userAgent.match(bro[0]);

    if (match) {
      return {
        name: bro[1],
        version: match[1] + '.' + match[2]
      };
    }
  }

  return null;
}

export default whatBrowser;
