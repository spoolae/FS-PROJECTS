const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector("#submitBtn");
const emailInput = document.querySelector("input[type='email']");

function openPopup() {
  openBtn.disabled = true;
  openBtn.innerHTML = "Зачекайте...";
  setTimeout(function () {
    document.querySelector("body").classList.add("popup-active");
    openBtn.disabled = false;
    openBtn.innerHTML = "Замовити";
  }, 3000);
}

function closePopup() {
  document.querySelector("body").classList.remove("popup-active");
  openBtn.disabled = false;
  openBtn.innerHTML = "Замовити";
}

function submitForm() {
  openBtn.disabled = true;
  openBtn.innerHTML = "Зачекайте...";
  if (emailInput.checkValidity()) {
    alert("Ви успішно підписались на новини!");
    document.querySelector("form").reset();
    closePopup();
  } else {
    alert("Будь ласка, введіть дійсну адресу електронної пошти.");
    openBtn.disabled = false;
    openBtn.innerHTML = "Підписатись на новини";
  }
}
