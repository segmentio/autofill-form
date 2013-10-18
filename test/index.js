
var querystring = '?one=1&two=2&three=3';
if (location.search != querystring) location.search = querystring;

describe('autofill-form', function () {

  var assert = require('assert');
  var autofill = require('autofill-form');
  var domify = require('domify');

  it('should work', function () {
    var form = domify('<form><input name="one"><input name="two"><input name="four"></form>');
    autofill(form);
    assert('1' == form.querySelector('[name=one]').value);
    assert('2' == form.querySelector('[name=two]').value);
    assert('' === form.querySelector('[name=four]').value);
  });

});