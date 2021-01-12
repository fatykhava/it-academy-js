class HashStorageFunc {
  constructor(key, value) {
    this._hashStorage = {};
    this.key = key;
    this.value = value;
  }

  addValue = (key, value) => {
    this._hashStorage[key] = value;
  }

  getValue = (key) => {
    return this._hashStorage[key];
  }

  deleteValue = (key) => {
    delete this._hashStorage[key];
  }

  getKeys = () => {
    return Object.keys(this._hashStorage);
  }
}
