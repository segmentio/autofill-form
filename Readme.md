
# autofill-form

  Automatically fill a form's fields with querystring values.

## Installation

    $ npm install autofill-form

## Example

```js
var autofill = require('autofill-form');
var form = document.querySelector('form');

window.location.search;
// "/signup?email=test@example.com"

autofill(form);
// now the `input[name=email]` field has a value of "test@example.com"
```

## API

### submit(form)

  Automatically fill a `form`'s fields with querystring values.

## License

  MIT
