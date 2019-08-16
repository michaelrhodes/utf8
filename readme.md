# utf8

[![build status](https://travis-ci.org/michaelrhodes/utf8.svg?branch=master)](https://travis-ci.org/michaelrhodes/utf8)

## install
```sh
npm install michaelrhodes/utf8#1.0.0
```

## use
```js
var encode = require('utf8/encode')
var decode = require('utf8/decode')

encode([117, 116, 102, 56])
> 'utf8'

encode(new Uint8Array([117, 116, 102, 56]))
> 'utf8'

encode(new Uint8Array([117, 116, 102, 56]).buffer)
> 'utf8'

decode('utf8')
> Uint8Array([117, 116, 102, 56])
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
