window.onload = function () {
  const buttons = document.querySelectorAll("[data-direction]");
  const container = document.querySelector(".flex-container");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.direction;
      container.dataset.flexDirection = direction;
      buttons.forEach((btn) => {
        btn.style.backgroundColor = btn === button ? "lightskyblue" : "white";
        btn.style.color = btn === button ? "white" : "black";
      });
    });
  });
};
