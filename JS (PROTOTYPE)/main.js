function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.showInfo = function () {
  return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
};

Product.prototype.setSaleToPrice = function (value = 0) {
  this.price -= value;
  return this.price;
};

Product.prototype.buyAmountProduct = function (amountValue) {
  if (this.quantity >= amountValue) {
    this.quantity -= amountValue;
    return this.price * amountValue;
  } else {
    return null;
  }
};

let product;

function createProduct() {
  let name = document.getElementById("name").value;
  let price = parseFloat(document.getElementById("price").value);
  let quantity = parseInt(document.getElementById("quantity").value);
  product = new Product(name, price, quantity);
  document.getElementById("product-info").innerHTML = product.showInfo();
}

function setSale() {
  let sale = parseFloat(document.getElementById("sale").value);
  let newPrice = product.setSaleToPrice(sale);
  document.getElementById("product-info").innerHTML = product.showInfo();
  alert(`New price: ${newPrice}`);
}

function buyProduct() {
  let amount = parseInt(document.getElementById("amount").value);
  let totalCost = product.buyAmountProduct(amount);
  if (totalCost) {
    document.getElementById("product-info").innerHTML = product.showInfo();
    document.getElementById(
      "total-cost"
    ).innerHTML = `Total cost: ${totalCost}`;
  } else {
    alert("Not enough quantity in stock!");
  }
}
