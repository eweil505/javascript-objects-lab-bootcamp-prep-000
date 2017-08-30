var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var pair = {key : value};
  var clone = object;
  var newObj = Object.assign(clone, pair);
}

function destructielyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = object;

}
