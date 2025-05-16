// This script toggles between light and dark mode for the webpage.
document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", function () {
    document.querySelectorAll(".light, .dark").forEach((element) => {
      if (element.classList.contains("light")) {
        element.classList.replace("light", "dark");
        document
          .querySelector(".fa-moon")
          .classList.replace("fa-moon", "fa-sun");
      } else {
        element.classList.replace("dark", "light");
        document
          .querySelector(".fa-sun")
          .classList.replace("fa-sun", "fa-moon");
      }
    });
  });
