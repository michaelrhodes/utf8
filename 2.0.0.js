!function(e){"module"in this?module.exports=e():utf8=e()}(function(){var e=new TextDecoder,n=new TextEncoder;return{string:function(n){return e.decode(new Uint8Array(n))},bytes:function(e){return n.encode(e)}}});