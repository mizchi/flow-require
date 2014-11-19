# flow-require


use `.flow.js` extension

## How to use


```js
# use
require('flow-require')()

# use your react-tools option
require('flow-require')({
  harmony: true,
	sourceMap: true,
	sourceFilename: 'source.js',
  stripTypes: true
})
```

Default Option is `{harmony: true, stripTypes: true}`

See transform options here https://www.npmjs.org/package/react-tools

## Example

a.flow.js

```js
/* @flow */
module.exports = class A {}
```

main.js

```js
require('flow-require')()
require('./a')
```

