function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.showInfo = function () {
  return `Назва: ${this.name}, Ціна: ${this.price.toFixed(2)} грн, Кількість: ${
    this.quantity
  } шт`;
};

Product.prototype.setSaleToPrice = function (value = 0) {
  this.price -= (this.price * value) / 100;
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
let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let quantityInput = document.getElementById("quantity");
let saleInput = document.getElementById("sale");
let amountInput = document.getElementById("amount");

function createProduct() {
  let name = nameInput.value;
  let price = parseFloat(priceInput.value);
  let quantity = parseInt(quantityInput.value);
  if (!name || !price || !quantity) {
    alert("Заповніть всі поля!");
    return;
  }
  product = new Product(name, price, quantity);
  document.getElementById("product-info").innerHTML = product.showInfo();
}

function setSale() {
  let sale = parseFloat(saleInput.value);
  let newPrice = product.setSaleToPrice(sale);
  document.getElementById("product-info").innerHTML = product.showInfo();
  alert(`Ціна зі знижкою: ${newPrice.toFixed(2)} грн`);
}

function buyProduct() {
  let amount = parseInt(amountInput.value);
  let totalCost = product.buyAmountProduct(amount);
  if (totalCost) {
    document.getElementById("product-info").innerHTML = product.showInfo();
    document.getElementById(
      "total-cost"
    ).innerHTML = `Загальна ціна: ${totalCost.toFixed(2)} грн`;
  } else {
    alert("Недостатньо товарів!");
  }
}

saleInput.addEventListener("input", function () {
  if (this.value < 1) this.value = 1;
  if (this.value > 100) this.value = 100;
});
