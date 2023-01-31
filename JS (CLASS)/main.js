class RangeValidator {
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }

  setFrom(from) {
    this.from = from;
  }

  getFrom() {
    return this.from;
  }

  setTo(to) {
    this.to = to;
  }

  getTo() {
    return this.to;
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

try {
  let rangeValidator = new RangeValidator();
  rangeValidator.setFrom(5);
  rangeValidator.setTo(15);
  console.log(rangeValidator.getRange()); // [5, 15]
  console.log(rangeValidator.validate(10)); // true
  console.log(rangeValidator.validate(20)); // false
} catch (error) {
  console.error(error);
}
