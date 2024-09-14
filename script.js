// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Function to remove active class from all links
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add active class to the currently active link
function addActiveClass(id) {
    removeActiveClasses();
    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Detect which section is in view
function handleScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + 100; // Add 100px to adjust for the header height

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            addActiveClass(sectionId);
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
