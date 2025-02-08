document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll("section");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Hide all sections
      sections.forEach((section) => (section.style.display = "none"));

      // Add active class to clicked tab
      this.classList.add("active");
      // Show the corresponding section
      sections[index].style.display = "block";
    });
  });

  // Show the first section by default
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });
});
