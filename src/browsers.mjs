export default [
  [/Edge\/(\d+)\.(\d+)/, 'Edge'],
  [/Chrome\/(\d+)\.(\d+)/, 'Chrome'],
  [/(?:iPod|iPod touch|iPhone|iPad).*OS (\d+)_(\d+)/, 'Mobile Safari'],
  [/Version\/(\d+)\.(\d+).*Safari/, 'Safari'],
  [/Firefox\/(\d+)\.(\d+)/, 'Firefox'],
  [/Trident.*rv.(\d+)\.(\d+)/, 'IE'],
  [/MSIE (\d+)\.(\d+)/, 'IE']
]
