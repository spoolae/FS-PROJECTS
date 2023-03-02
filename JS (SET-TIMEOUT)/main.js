const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector("form button");

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
  setTimeout(function () {
    alert("Ви успішно підписались на новини!");
    document.querySelector("form").reset();
    closePopup();
  }, 3000);
}
