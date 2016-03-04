'use strict';

var binding = function binding(ko) {

  ko = ko || window.ko;

  var init = function init(element, valueAccessor) {

    var obj = valueAccessor();

    if (ko.isObservable(obj.key) || obj.key instanceof Function) {
      obj.key(obj.value);
    } else {
      obj.key = obj.value;
    }
  };

  return {
    init: init,
    allowVirtual: true
  };
};

module.exports = binding;