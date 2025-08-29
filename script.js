// Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Contact Form (mock submit)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Message Sent Successfully!");
  this.reset();
});

// Search Bar
function searchSite() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  if (input.includes("project")) {
    window.location.href = "#projects";
  } else if (input.includes("skill")) {
    window.location.href = "#skills";
  } else if (input.includes("contact")) {
    window.location.href = "#contact";
  } else {
    alert("No results found.");
  }
  return false;
}
