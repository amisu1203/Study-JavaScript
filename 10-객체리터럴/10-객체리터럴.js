var prefix = 'prop';
var i = 0;

var obj = {};

obj[prefix+'-'+ i++] = i;
console.log(obj);
console.log(i);
obj[prefix+'-'+ ++i] = i;
console.log(obj);