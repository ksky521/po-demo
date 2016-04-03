var template = require('./header.ejs');
var data = {
  user: {
    name: 'foo'
  }
};
var html = template(data);

var test = __inline('./_test.ejs');

module.exports = function () {
  return html;
}
