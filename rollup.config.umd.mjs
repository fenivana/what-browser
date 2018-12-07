import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',
  output: {
    format: 'umd',
    name: 'whatBrowser',
    file: 'dist/whatBrowser.js'
  },
  plugins: [
    babel()
  ]
}
