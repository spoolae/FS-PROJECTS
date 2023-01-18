function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.showInfo = function () {
  return `Назва: ${this.name}, Ціна: ${this.price} грн, Кількість: ${this.quantity} шт`;
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

function createProduct() {
  let name = document.getElementById("name").value;
  let price = parseFloat(document.getElementById("price").value);
  let quantity = parseInt(document.getElementById("quantity").value);
  if (!name || !price || !quantity) {
    alert("Заповніть всі поля!");
    return;
  }
  product = new Product(name, price, quantity);
  document.getElementById("product-info").innerHTML = product.showInfo();
}

function setSale() {
  let sale = parseFloat(document.getElementById("sale").value);
  let newPrice = product.setSaleToPrice(sale);
  document.getElementById("product-info").innerHTML = product.showInfo();
  alert(`Ціна зі знижкою: ${newPrice} грн`);
}

function buyProduct() {
  let amount = parseInt(document.getElementById("amount").value);
  let totalCost = product.buyAmountProduct(amount);
  if (totalCost) {
    document.getElementById("product-info").innerHTML = product.showInfo();
    document.getElementById(
      "total-cost"
    ).innerHTML = `Загальна ціна: ${totalCost} грн`;
  } else {
    alert("Недостатньо товарів!");
  }
}

let saleInput = document.getElementById("sale");

saleInput.addEventListener("input", function () {
  if (this.value < 1) this.value = 1;
  if (this.value > 100) this.value = 100;
});
