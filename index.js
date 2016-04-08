
var querystring = require('component-querystring');
var value = require('component-value');


/**
 * Expose `autofill`.
 */

module.exports = autofill;


/**
 * Automatically fill a `form`'s fields with querystring values.
 *
 * @param {Element} form
 * @param {String} [search]
 */

function autofill (form, search) {
  search = search || location.search;
  var queries = querystring.parse(search.slice(1));
  var fields = form.querySelectorAll('[name]');

  for (var i = 0, field; field = fields[i]; i++) {
    var name = field.name;
    if (queries[name]) value(field, queries[name]);
  }
}
