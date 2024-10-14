const bar = document.querySelector('.bar');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle the 'nav-active' class to open and close the menu
bar.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    bar.classList.toggle('toggle'); // Optionally animate burger icon
});

// Close the menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        bar.classList.remove('toggle');
    });
});

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        links.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});