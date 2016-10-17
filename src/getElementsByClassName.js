// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  function search(element) {
    if (element.classList.contains(className)) {
      results.push(element);
    }
    for (var i = 0; i < element.children.length; i++) {
      search(element.children[i]);
    }
  }
  search(document.body);
  return results;
};



