// Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dark mode toggle (if needed)
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Show a pop-up message when clicking "Register"
document.querySelector('.register-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert("Registrations are currently closed. Stay tuned for updates!");
});

// Dynamic year update in footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Gedit Club - VIT Pune. All rights reserved.`;
