var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = object.assign(key, value);
}

function destructielyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
