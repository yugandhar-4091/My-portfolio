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
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form values
    let name = this.querySelector('input[placeholder="Your Name"]').value;
    let email = this.querySelector('input[placeholder="Your Email"]').value;
    let message = this.querySelector('textarea[placeholder="Your Message"]').value;

    // ✅ 1. Send Email using mailto
    let subject = `New message from ${name}`;
    let body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = `mailto:yugandhar4091@gmail.com?subject=${subject}&body=${body}`;

    // ✅ 2. Send WhatsApp Message (Auto open WhatsApp)
    let whatsappNumber = "917036742470"; // Your full phone number with country code
    let whatsappMessage = `Hello, I am ${name}. My email is ${email}.%0AHere is my message: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    // ✅ 3. Show alert and reset form
    alert("✅ Message ready to send via Email & WhatsApp!");
    this.reset();
});
