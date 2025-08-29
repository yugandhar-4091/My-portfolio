// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("✅ Message sent successfully!");
    this.reset();
});

// Smooth Scroll (Optional)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});
