// ===== Mobile Menu Toggle =====
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// ===== Scroll-to-Top Button =====
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.display = "none";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#ff9800";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.boxShadow = "0 3px 8px rgba(0,0,0,0.3)";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Active Menu Highlight =====
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active-link");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active-link");
    }
  });
});

// ===== Dark Mode Toggle =====
const darkModeBtn = document.createElement("button");
darkModeBtn.innerText = "🌙 Dark Mode";
darkModeBtn.id = "darkModeBtn";
document.querySelector(".navbar").appendChild(darkModeBtn);

darkModeBtn.style.marginLeft = "20px";
darkModeBtn.style.padding = "5px 10px";
darkModeBtn.style.background = "#ff9800";
darkModeBtn.style.color = "white";
darkModeBtn.style.border = "none";
darkModeBtn.style.borderRadius = "5px";
darkModeBtn.style.cursor = "pointer";

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerText = "☀️ Light Mode";
  } else {
    darkModeBtn.innerText = "🌙 Dark Mode";
  }
});
// script.js
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(
    function(response) {
      alert("✅ Message Sent Successfully!");
    },
    function(error) {
      alert("❌ Failed to send. Please try again.");
    }
  );
});
