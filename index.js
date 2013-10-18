
var querystring = require('querystring');
var value = require('value');


/**
 * Expose `autofill`.
 */

module.exports = autofill;


/**
 * Automatically fill a `form`'s fields with querystring values.
 *
 * @param {Element} form
 */

function autofill (form) {
  var queries = querystring.parse(location.search.slice(1));
  var fields = form.querySelectorAll('[name]');

  for (var i = 0, field; field = fields[i]; i++) {
    var name = field.name;
    if (queries[name]) value(field, queries[name]);
  }
}