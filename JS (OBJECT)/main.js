function Cattle(brand, maxVolume, minVolume) {
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.minVolume = minVolume;
  this.currentVolume = 0;
  this.isOn = false;

  this.addWater = function (value) {
    if (this.currentVolume + value > this.maxVolume) {
      alert("Чайник переповнений");
      return;
    }
    this.currentVolume += value;
  };

  this.makeTea = function (value) {
    if (this.currentVolume - value < this.minVolume) {
      alert("Недостатньо води");
      return;
    }
    this.currentVolume -= value;
  };

  this.turnOn = function () {
    this.isOn = true;
  };
}

const cattle = new Cattle("Xiaomi", 10, 1);

document.getElementById("brand").innerHTML = cattle.brand;
document.getElementById("max-volume").innerHTML = cattle.maxVolume;
document.getElementById("min-volume").innerHTML = cattle.minVolume;
document.getElementById("current-volume").innerHTML = cattle.currentVolume;
document.getElementById("is-on").innerHTML = cattle.isOn;

function addWater() {
  const value = parseInt(document.getElementById("add-water-value").value);
  cattle.addWater(value);
  document.getElementById("current-volume").innerHTML = cattle.currentVolume;
}

function makeTea() {
  const value = parseInt(document.getElementById("make-tea-value").value);
  cattle.makeTea(value);
  document.getElementById("current-volume").innerHTML = cattle.currentVolume;
}

function turnOn() {
  cattle.turnOn();
  document.getElementById("is-on").innerHTML = cattle.isOn;
}
