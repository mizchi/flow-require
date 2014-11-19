var fs = require('fs');
var reactTools = require('react-tools');

module.exports = function(options){
  if(!options) options = {harmony: true, stripTypes: true};
  var extension = options.extension ? options.extension : '.flow.js';

  delete options.extension;
  require.extensions[extension] = function(module, filename){
    var code = fs.readFileSync(filename).toString();
    var transformed = reactTools.transform(code, options)
    module._compile(transformed);
  }
}

