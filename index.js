document.addEventListener("DomContentLoaded", () => {
  const education = document.querySelectorAll(".education li");
  const profession = document.querySelectorAll(".profession li");

  function resetUI() {
    education.forEach((c) => {
      c.classList.remove("selected");
      c.classList.remove("disabled");
    });
    profession.forEach((c) => {
      c.classList.remove("selected");
      c.classList.remove("disabled");
    });
  }
});
