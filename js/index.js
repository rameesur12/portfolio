//toggle menu function
let toggleBtn = document.getElementById('btn-toggle');

toggleBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-open');
    this.classList.toggle('fa-xmark');
})

//typing efect
let typed = new Typed('.auto-input', {
    strings: ['Student', 'Future web developer', 'Future QA Tester'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})


//mod change function
let modBtn = document.getElementById('btn-mod');


modBtn.addEventListener('click', function (e) {
    this.classList.toggle('fa-moon');
    if (getCookie("mod") == "light") {
        document.cookie = "mod=dark";
        console.log(getCookie("mod"));
        darkMod();

    } else {
        document.cookie = "mod=light";
        console.log(getCookie("mod"));
        lightMod();
    }
})

function checkCookie() {
    if (document.cookie.indexOf('mod=') == -1 || getCookie("mod") == "light") {
        document.cookie = "mod=light;";
        lightMod();
    } else {
        darkMod();
    }
}

function lightMod() {
    document.documentElement.style.cssText = "--white: white;--black: #141414";
    modBtn.classList.add('fa-moon');
}

function darkMod() {
    document.documentElement.style.cssText = "--white: #141414;--black: white";
    modBtn.classList.add('fa-sun');
}

function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1); // return the value of the cookie
        }
    }
    return ''; // the cookie does not exist
}


//contact box validation
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#msg').value;

    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Submit form data to server
    // ...

    // Reset form
    form.reset();
});