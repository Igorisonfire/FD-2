function HashStorage() {
    let storage = {};

    this.addValue = (key, value) => {
        if (typeof key === 'string') {
            storage[key] = value;
        }
    };

    this.getValue = (key) => {
        return storage[key];
    };

    this.deleteValue = (key) => {
        if (key in storage) {
            return delete storage[key];
        } else return false
    };

    this.getKeys = () => {
        return Object.keys(storage);
    };
}
