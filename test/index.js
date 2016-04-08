
var assert = require('assert');
var domify = require('domify');
var autofill = require('..');

describe('autofill-form', function () {
  it('should work', function () {
    var form = domify('<form><input name="one"><input name="two"><input name="four"></form>');
    autofill(form, '?one=1&two=2&three=3');
    assert.equal('1', form.querySelector('[name=one]').value);
    assert.equal('2', form.querySelector('[name=two]').value);
    assert.equal('', form.querySelector('[name=four]').value);
  });
});
