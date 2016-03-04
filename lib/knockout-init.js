const binding = function (ko) {

  ko = ko || window.ko;

  const init = function (element, valueAccessor) {

    const obj = valueAccessor();

    if (ko.isObservable(obj.key) || obj.key instanceof Function) {
      obj.key(obj.value);
    } else {
      obj.key = obj.value;
    }
  };

  return {
    init,
    allowVirtual: true
  };
};

export default binding;
