
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

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
navlinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a[href*= '+ id + ']').classList.add('active');
});
    };
  });
};

const observer = new IntersectionObserver((entries)  => {
  entries.forEach ((entry)=> {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  }) ;
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));