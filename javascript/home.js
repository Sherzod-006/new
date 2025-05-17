// This script toggles between light and dark mode for the webpage.
document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", function () {
    document.querySelectorAll(".light, .dark").forEach((element) => {
      if (element.classList.contains("light")) {
        element.classList.replace("light", "dark");
        document.querySelector(".fa-moon").classList.add("iact");
        document.querySelector(".fa-sun").classList.remove("iact");

        document.querySelector(".white").classList.replace("white", "black");
        document.querySelector(".setbut").classList.add("black");
      } else {
        element.classList.replace("dark", "light");
        document.querySelector(".fa-sun").classList.add("iact");
        document.querySelector(".fa-moon").classList.remove("iact");

        document.querySelector(".black").classList.replace("black", "white");
        document.querySelector(".setbut").classList.remove("black");
      }
    });
  });

// Settings Button
document.getElementById("setbutt").addEventListener("click", function () {
  document.querySelectorAll(".setbut, .setbutact").forEach((element) => {
    if (element.classList.contains("setbut")) {
      element.classList.replace("setbut", "setbutact");
    } else {
      element.classList.replace("setbutact", "setbut");
    }
  });
});
