document.addEventListener("DOMContentLoaded", function () {

  function HashStorage() {
    let storage = {};

    this.addValue = (key, value) => {
      if (typeof key === 'string') {
        storage[key] = value;
        return storage;
      }
    };

    this.getValue = (key) => {
      return storage[key];
    };

    this.deleteValue = (key) => {
      delete storage[key];
    };

    this.getKeys = () => {
      return Object.keys(storage);
    };
  }

  let drinkStorage = new HashStorage();

  console.log(drinkStorage.addValue('name1', 'Sprite'));
  console.log(drinkStorage.addValue('name2', 'Cola'));
  console.log(drinkStorage.addValue('name3', 'Fanta'));
  console.log(drinkStorage.getKeys());
});