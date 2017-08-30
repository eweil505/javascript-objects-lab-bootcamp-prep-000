var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var pair = {key : value};
  var newObj = Object.assign({object}, pair);
}

function destructielyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
