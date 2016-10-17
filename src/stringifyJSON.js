// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {

 if (typeof obj === 'object' && obj !== null) {
   if (Array.isArray(obj)) {
     if (obj.length === 0) {
       return '[]';
     } else {
       var stringify = [];
       obj.forEach(function (val) {
         stringify.push(stringifyJSON(val));
       })
       return '[' + stringify + ']';
     }
   } else {
       var objectArray = [];
       for (var key in obj) {
         if (obj[key] === undefined || typeof obj[key] === 'function') {
             return '{}';
         } else {
             objectArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
           }
       }
       return '{' + objectArray + '}';

   }
 } else if (typeof obj === 'string'){
   return '"' + obj + '"';
 } else {
   return '' + obj;
 }
};
