function HashStorageFunc(key, value) {
  const hashStorage = {};
  this.key = key;
  this.value = value;

  this.addValue = function (key, value) {
    hashStorage[key] = value;
  }

  this.getValue = function (key) {
    return hashStorage[key];
  }

  this.deleteValue = function (key) {
    delete hashStorage[key];
  }
  
  this.getKeys = function() {
    return Object.keys(hashStorage);
  }
}
