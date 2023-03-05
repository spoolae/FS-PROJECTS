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

      if (item.profilePicture && item.profilePicture.trim()) {
        image.src = item.profilePicture;
        image.alt = `${item.firstName} ${item.lastName}'s profile picture`;

        image.onerror = () => {
          image.src = "default-avatar.jpg";
          image.alt = "Default avatar";
        };
      } else {
        image.src = "default-avatar.jpg";
        image.alt = "Default avatar";
      }

      name.textContent =
        item.firstName && item.lastName
          ? `${item.firstName} ${item.lastName}`
          : "Unknown Name";

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

      card.addEventListener("click", () => {
        const isActive = card.classList.contains("active");
        const chooseActorText = document.querySelector("section h2");
        const name = item.firstName ? item.firstName : "Unknown";
        const lastName = item.lastName ? item.lastName : "Actor";

        if (isActive) {
          card.classList.remove("active");
          chooseActorText.textContent = "Choose your actor";
        } else {
          const activeCards = document.querySelectorAll(".active");
          activeCards.forEach((activeCard) => {
            activeCard.classList.remove("active");
          });

          card.classList.add("active");
          chooseActorText.textContent = `You chose ${name} ${lastName}.`;
        }
      });

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(socialIcons);
      cardsContainer.appendChild(card);
    });
  });
