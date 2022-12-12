class Base {
  constructor(value) {
    this.value = value;
  }

  getProperty() {
    return this.value;
  }

  plus(...n) {
    this.value += n.reduce((total, current) => total + current);
    return this.value;
  }

  minus(...n) {
    this.value -= n.reduce((total, current) => total + current);
    return this.value;
  }

  multiply(n) {
    this.value *= n;
    return this.value;
  }

  divide(n) {
    this.property /= n;
    return this.value;
  }
}

class IntBuilder extends Base {
  plus(...n) {
    this.value += n.reduce((total, current) => {
      return total + current;
    }, 0);
    return this.value;
  }

  static random(from, to) {
    return this.value;
  }

  mod(n) {
    this.value %= n;
    return this.value;
  }

  power(n) {
    this.value **= n;
    return this.value;
  }
}

class StringBuilder extends Base {
  plus(...n) {
    this.value += n.reduce((total, current) => {
      return total + current;
    }, "");
    return this.value;
  }
}
