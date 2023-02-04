class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }

  set from(from) {
    if (from >= this.to) {
      throw new Error("from має бути меншим за to");
    }
    this._from = from;
  }

  get from() {
    return this._from;
  }

  set to(to) {
    if (to <= this.from) {
      throw new Error("to має бути більшим за from");
    }
    this._to = to;
  }

  get to() {
    return this._to;
  }

  getRange() {
    return [this.from, this.to];
  }

  validate(value) {
    if (value >= this.from && value <= this.to) {
      return true;
    }
    return false;
  }
}

let rangeValidator = new RangeValidator();

try {
  rangeValidator.from = 5;
  rangeValidator.to = 15;
} catch (error) {
  console.warn(error);
}

console.log(rangeValidator.getRange()); // [5, 15]
console.log(rangeValidator.validate(10)); // true
console.log(rangeValidator.validate(20)); // false
