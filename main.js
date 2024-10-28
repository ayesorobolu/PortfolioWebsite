
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



// contact validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');

  // Error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formMessage.textContent = '';

  // Validate form fields
  let hasError = false;

  if (nameField.value.trim() === '') {
      nameField.classList.add('error');
      nameError.textContent = 'Name is required.';
      hasError = true;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value.trim())) {
      emailField.classList.add('error');
      emailError.textContent = 'Please enter a valid email address.';
      hasError = true;
  }


  if (messageField.value.trim() === '') {
      messageField.classList.add('error');
      messageError.textContent = 'Message is required.';
      hasError = true;
  }

  if (!hasError) {
      
      Email.send({
          SecureToken: "678991b8-a205-4cd8-a620-cf8dba64ad91",  
          To: "abrahamayesoro@gmail.com",                       
          From: "abrahamayesoro@gmail.com",                      
          Subject: `New Contact Form Submission from ${nameField.value.trim()}`,
          Body: `Name: ${nameField.value.trim()}<br>
                 Email: ${emailField.value.trim()}<br>
                 Message: ${messageField.value.trim()}`
      }).then(function(message) {
          Swal.fire({
              title: "Successful!",
              text: "Your message has been sent!",
              icon: "success"
            });
          // Reset the form after successful submission
          document.getElementById('contactForm').reset();
      }).catch(function(error) {
          formMessage.style.color = 'red';
          formMessage.textContent = 'Failed to send email. Please try again later.';
      });
  }
});