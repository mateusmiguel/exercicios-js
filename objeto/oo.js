var someFn = function (obj, cb, params){
    cb.apply(obj, params);
    return 1;
}
var result = someFn({ someProperty: 'interview' }, function (param1, param2) {
    console.log('This pointing to', this);
    console.log('Param 1 is', param1);
    console.log('Param 2 is', param2);
}, ['cool', 'interview']);

console.log('Result is', result);