class Product {
  constructor(name, price, currency, quantity) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
  }
  getInfo() {
    return `Product: ${this.name}, Price: ${this.price}${this.currency}, Available: ${this.quantity}`;
  }
  buy(amount) {
    if (amount > this.quantity) {
      return `Only ${this.quantity} available, please enter a lower value.`;
    } else {
      this.quantity -= amount;
      return this.price * amount;
    }
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, currency, quantity, weight) {
    super(name, price, currency, quantity);
    this.weight = weight;
  }
  getInfo() {
    return `${super.getInfo()}, Weight: ${this.weight}kg`;
  }
}

class VirtualProduct extends Product {
  constructor(name, price, currency, quantity, memorySize) {
    super(name, price, currency, quantity);
    this.memorySize = memorySize;
  }
  getInfo() {
    return `${super.getInfo()}, Memory Size: ${this.memorySize}MB`;
  }
}

const product1 = new Product("Laptop", 1000, "$", 10);
console.log(product1.getInfo());
console.log(product1.buy(5));
console.log(product1.buy(10));

const physicalProduct1 = new PhysicalProduct("Smartphone", 500, "$", 5, 0.5);
console.log(physicalProduct1.getInfo());
console.log(physicalProduct1.buy(3));
console.log(physicalProduct1.buy(2));

const virtualProduct1 = new VirtualProduct("MacBook", 200, "$", 20, 1024);
console.log(virtualProduct1.getInfo());
console.log(virtualProduct1.buy(10));
console.log(virtualProduct1.buy(20));
