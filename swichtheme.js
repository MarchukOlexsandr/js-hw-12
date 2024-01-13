const themeSwitchToggle = document.querySelector(".theme-switch__toggle");

// Check if the user has previously selected a theme color
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeSwitchToggle.checked = savedTheme === "dark-theme";
}

themeSwitchToggle.addEventListener("change", () => {
  const theme = themeSwitchToggle.checked ? "dark-theme" : "light-theme";
  document.body.classList.toggle(theme);
  localStorage.setItem("theme", theme);

  // Toggle the background color between black and white
  if (theme === "dark-theme") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

// Set the initial background color based on the saved theme
if (savedTheme) {
  if (savedTheme === "dark-theme") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
