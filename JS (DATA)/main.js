const buttons = document.querySelectorAll("[data-direction]");
const container = document.querySelector(".flex-container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => button.classList.remove("selected"));
    button.classList.add("selected");

    const direction = button.getAttribute("data-direction");
    container.setAttribute("data-flex-direction", direction);
  });
});
