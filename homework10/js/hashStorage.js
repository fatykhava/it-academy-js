function HashStorageFunc(key, value) {
  this.hashStorage = {};
  this.key = key;
  this.value = value;
}

HashStorageFunc.prototype.addValue = function (key, value) {
  this.hashStorage[key] = value;
}

HashStorageFunc.prototype.getValue = function (key) {
  return this.hashStorage[key];
}

HashStorageFunc.prototype.deleteValue = function (key) {
  delete this.hashStorage[key];
}

HashStorageFunc.prototype.getKeys = function() {
  return Object.keys(this.hashStorage);
}
