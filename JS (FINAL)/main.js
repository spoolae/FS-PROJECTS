const cardsContainer = document.querySelector(".cards");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      const image = document.createElement("img");
      const name = document.createElement("h3");
      const socialIcons = document.createElement("div");

      card.classList.add("user-card");
      socialIcons.classList.add("social-icons");

      // проверка наличия изображения
      if (item.profilePicture && item.profilePicture.trim() !== "") {
        image.src = item.profilePicture;
        image.alt = `${item.firstName} ${item.lastName}'s profile picture`;

        // обработка ошибки, если изображение не найдено
        image.onerror = () => {
          image.src = "default-avatar.jpg";
          image.alt = "Default avatar";
        };
      } else {
        image.src = "default-avatar.jpg";
        image.alt = "Default avatar";
      }

      // проверка наличия имени пользователя
      if (
        item.firstName &&
        item.firstName.trim() !== "" &&
        item.lastName &&
        item.lastName.trim() !== ""
      ) {
        name.textContent = `${item.firstName} ${item.lastName}`;
      } else {
        name.textContent = "Unknown User";
      }

      item.contacts.forEach((contact) => {
        const iconLink = document.createElement("a");
        const icon = document.createElement("i");

        iconLink.href = contact;
        icon.classList.add("fab");

        if (contact.includes("facebook")) {
          icon.classList.add("fa-facebook");
        } else if (contact.includes("twitter")) {
          icon.classList.add("fa-twitter");
        } else if (contact.includes("instagram")) {
          icon.classList.add("fa-instagram");
        }

        iconLink.appendChild(icon);
        socialIcons.appendChild(iconLink);
      });

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(socialIcons);
      cardsContainer.appendChild(card);
    });
  });
