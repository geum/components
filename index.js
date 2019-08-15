const production = process.env.NODE_ENV === 'production';

// react browser
if (process.browser) {
  module.exports = production ?
    require('./dist/index.prod.js') :
    require('./dist/index.dev.js');

// node
} else {

}
