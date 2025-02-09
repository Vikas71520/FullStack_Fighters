
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

  document.getElementById("user-profile").addEventListener("click", function (event) {
    event.stopPropagation();
    let menu = document.getElementById("user-menu");
    let userProfile = document.getElementById("user-profile");
    let rect = userProfile.getBoundingClientRect(); // Get user-profile position in viewport

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";

        // Position relative to viewport, not content
        menu.style.top = rect.top - menu.offsetHeight - 10 + "px"; 
        menu.style.left = rect.left + "px";
    }
});

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.getElementById("user-menu");
    if (!document.getElementById("user-profile").contains(event.target)) {
        menu.style.display = "none";
    }
});

document.querySelector(".menu-item:last-child").addEventListener("click", function () {
  window.location.href = "login.html"; // Redirect to login page
});







