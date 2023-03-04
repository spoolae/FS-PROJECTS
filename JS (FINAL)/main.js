const cardsContainer = document.querySelector(".cards");

// Получаем данные из data.json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Создаем карточки для каждого элемента в массиве данных
    data.forEach((item) => {
      // Создаем элементы
      const card = document.createElement("div");
      const image = document.createElement("img");
      const name = document.createElement("h3");
      const socialIcons = document.createElement("div");

      // Добавляем классы для стилей CSS
      card.classList.add("user-card");
      socialIcons.classList.add("social-icons");

      // Заполняем элементы данными из JSON
      image.src = item.profilePicture;
      image.alt = `${item.firstName} ${item.lastName}'s profile picture`;
      name.textContent = `${item.firstName} ${item.lastName}`;

      // Создаем элементы для социальных иконок
      item.contacts.forEach((contact) => {
        const iconLink = document.createElement("a");
        const icon = document.createElement("i");

        // Добавляем классы для стилей CSS
        iconLink.href = contact;
        icon.classList.add("fab");

        // Устанавливаем иконку в зависимости от ссылки
        if (contact.includes("facebook")) {
          icon.classList.add("fa-facebook");
        } else if (contact.includes("twitter")) {
          icon.classList.add("fa-twitter");
        } else if (contact.includes("instagram")) {
          icon.classList.add("fa-instagram");
        }

        // Добавляем элемент иконки в элемент ссылки
        iconLink.appendChild(icon);

        // Добавляем элемент ссылки в элемент социальных иконок
        socialIcons.appendChild(iconLink);
      });

      // Добавляем элементы карточки в элемент контейнера карточек
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(socialIcons);
      cardsContainer.appendChild(card);
    });
  });
