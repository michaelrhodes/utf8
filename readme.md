# utf8

[![ci](https://travis-ci.org/michaelrhodes/utf8.svg?branch=master)](https://travis-ci.org/michaelrhodes/utf8)

## install
```sh
npm install michaelrhodes/utf8#1.0.0
```

## use
```js
var string = require('utf8/string')
var bytes = require('utf8/bytes')

string([117, 116, 102, 56])
> 'utf8'

string(new Uint8Array([117, 116, 102, 56]))
> 'utf8'

string(new Uint8Array([117, 116, 102, 56]).buffer)
> 'utf8'

bytes('utf8')
> Uint8Array([117, 116, 102, 56])
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
