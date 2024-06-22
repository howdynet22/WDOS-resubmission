document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    // Handle header visibility on scroll
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset|| document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-60px';
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
    });

    // Handle loading screen
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 500); // delay

    // Handle mobile menu toggle
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function (event) {
        navMenu.classList.toggle('open');
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
        // Start fade-in animation for main image
        document.getElementById('main-image-section').classList.add('fade-in-start');
    }, 500); // Add a delay
});

// loading.js

document.addEventListener('DOMContentLoaded', function () {
    // Hide loading screen once content is fully loaded
    window.addEventListener('load', function () {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0'; // Fade out loading screen
        setTimeout(function () {
            loadingScreen.style.display = 'none'; // Hide loading screen completely
        }, 500); // Adjust time as needed for fade out transition
    });
});


