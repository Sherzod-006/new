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
        document.querySelector(".sigbut").classList.add("black");
        document.querySelector(".logbut").classList.add("black");
      } else {
        element.classList.replace("dark", "light");
        document.querySelector(".fa-sun").classList.add("iact");
        document.querySelector(".fa-moon").classList.remove("iact");

        document.querySelector(".black").classList.replace("black", "white");
        document.querySelector(".setbut").classList.remove("black");
        document.querySelector(".sigbut").classList.remove("black");
        document.querySelector(".logbut").classList.remove("black");
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

//login button
document.getElementById("logbutt").addEventListener("click", function () {
  document.querySelectorAll(".logbut, .logbutact").forEach((element) => {
    if (element.classList.contains("logbut")) {
      element.classList.replace("logbut", "logbutact");
    } else {
      element.classList.replace("logbutact", "logbut");
    }
  });
});

//Sign in Button
document.getElementById("sigbutt").addEventListener("click", function () {
  document.querySelectorAll(".sigbut, .sigbutact").forEach((element) => {
    if (element.classList.contains("sigbut")) {
      element.classList.replace("sigbut", "sigbutact");
    } else {
      element.classList.replace("sigbutact", "sigbut");
    }
  });
});
