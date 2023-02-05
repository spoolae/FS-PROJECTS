class Figure3D {
  constructor(name) {
    if (name === "") {
      throw new Error("Назва не має бути порожньою");
    } else {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value === "") {
      throw new Error("Назва не має бути порожньою");
    } else {
      this._name = value;
    }
  }

  calculateVolume() {
    throw new Error("Метод має викликатись у підкласі (сфера, куб, циліндр)");
  }
}

class Sphere extends Figure3D {
  constructor(name, radius) {
    super(name);
    if (radius <= 0) {
      throw new Error("Радіус має бути додатнім числом");
    } else {
      this._radius = radius;
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error("Радіус має бути додатнім числом");
    } else {
      this._radius = value;
    }
  }

  calculateVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

class Cube extends Figure3D {
  constructor(name, side) {
    super(name);
    if (side <= 0) {
      throw new Error("Сторона має бути додатнім числом");
    } else {
      this._side = side;
    }
  }

  get side() {
    return this._side;
  }

  set side(value) {
    if (value <= 0) {
      throw new Error("Сторона має бути додатнім числом");
    } else {
      this._side = value;
    }
  }

  calculateVolume() {
    return Math.pow(this.side, 3);
  }
}

class Cylinder extends Figure3D {
  constructor(name, radius, height) {
    super(name);
    if (radius <= 0) {
      throw new Error("Радіус має бути додатнім числом");
    } else {
      this._radius = radius;
    }
    if (height <= 0) {
      throw new Error("Висота має бути додатнім числом");
    } else {
      this._height = height;
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error("Радіус має бути додатнім числом");
    } else {
      this._radius = value;
    }
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      throw new Error("Висота має бути додатнім числом");
    } else {
      this._height = value;
    }
  }

  calculateVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }
}

function showVolume3DFigure(figure) {
  try {
    return `${figure.name} має об'єм ${figure.calculateVolume().toFixed(2)}`;
  } catch (error) {
    return "Error: " + error.message;
  }
}

const sphere = new Sphere("Сфера", 4);
const cube = new Cube("Куб", 4);
const cylinder = new Cylinder("Циліндр", 10, 10);

// sphere.radius = -5; // Error: Радіус має бути додатнім числом
// cube.name = ""; // Error: Назва не має бути порожньою
cylinder.height = sphere.radius;

console.log(showVolume3DFigure(sphere)); // Сфера має об'єм 268.08
console.log(showVolume3DFigure(cube)); // Куб має об'єм 64.00
console.log(showVolume3DFigure(cylinder)); // Циліндр має об'єм 1256.64
