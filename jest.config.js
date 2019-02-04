const {defaults} = require('jest-config');
module.exports = {
  // ...
  transform: {

  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  transformIgnorePatterns : ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$']
  // ...
};