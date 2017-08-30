var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var pair = {};
  pair[key] = value;
  var clone = object;
  var newObj = Object.assign(clone, pair);
  return newObj;
}

function destructielyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = object;
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
