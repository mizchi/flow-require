# flow-require

Transfrom flowtype code on common.js require

```
npm install flow-require --save
```

use `.flow.js` extension

## How to use

```js
// simple use case
require('flow-require')();

// with react-tools option
require('flow-require')({
  extension: '.flow.js'
  harmony: true,
  sourceMap: true,
  sourceFilename: 'source.map',
  stripTypes: true
});
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
var A = require('./a')
```

