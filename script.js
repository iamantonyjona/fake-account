document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll("a.nav-link").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            // Auto-hide navbar on mobile
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        });
    });

    // Scroll sections active link handling
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY + 100; // Offset for better accuracy

        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                const id = section.getAttribute("id");
                navItems.forEach((item) => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${id}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    });

    // ScrollReveal initialization
    if (typeof ScrollReveal !== "undefined" && ScrollReveal) {
        const sr = ScrollReveal({
            distance: "50px",
            duration: 1500,
            easing: "ease-in-out",
            mobile: true,
        });

        if (window.innerWidth <= 768) {
            sr.reveal(".home-header, .home-content, .homebg, .team-header, .tools-header", {
                distance: "15px",
                duration: 1000,
                interval: 50,
                reset: true,
            });
        } else {
            sr.reveal(".home-header", { origin: "left", interval: 100 });
            sr.reveal(".home-content", { origin: "right", delay: 200 });
            sr.reveal(".homebg", { origin: "top", delay: 300 });

            // Team Section Animations
            sr.reveal(".team-header", { origin: "top", delay: 300 });
            sr.reveal(".tools-header", { origin: "top", delay: 200 });
            sr.reveal(".about-subheader", { origin: "top", delay: 400 });
            sr.reveal(".about-content1", { origin: "right", delay: 600 });
            sr.reveal(".readme", { origin: "bottom", delay: 800 });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const detectionLink = document.querySelector('a[href="detection.html"]');
    if (detectionLink) {
        detectionLink.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent default navigation
            window.location.href = "detection.html";  // Redirect manually
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector('a[href="index.html"]');
    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent default navigation
            window.location.href = "index.html";  // Redirect manually
        });
    }
});


// Predefined user data (same as before)
const users = [
    { username: "priya", followers: 100, posts: 10 },
    { username: "rohit123", followers: 30, posts: 2 },
    { username: "david99", followers: 150, posts: 20 },
    { username: "sam_singh", followers: 200, posts: 50 },
    { username: "jessy_queen", followers: 45, posts: 3 },
    { username: "arjun_k", followers: 75, posts: 15 },
    { username: "riya_star", followers: 500, posts: 100 },
    { username: "tech_guru", followers: 25, posts: 1 },
    { username: "leo_the_king", followers: 120, posts: 30 },
    { username: "game_master", followers: 10, posts: 0 },
    { username: "karthik_r", followers: 90, posts: 18 },
    { username: "meena_s", followers: 70, posts: 9 },
    { username: "hari_v", followers: 150, posts: 27 },
    { username: "revathi_m", followers: 60, posts: 10 },
    { username: "vignesh_k", followers: 180, posts: 35 },
    { username: "lakshmi_d", followers: 55, posts: 7 },
    { username: "arun_prakash", followers: 210, posts: 40 },
    { username: "divya_b", followers: 95, posts: 12 },
    { username: "sathish_n", followers: 130, posts: 20 },
    { username: "nandhini_r", followers: 80, posts: 15 },
    { username: "balaji_m", followers: 160, posts: 22 },
    { username: "keerthana_r", followers: 100, posts: 14 },
    { username: "murugan_t", followers: 45, posts: 3 },
    { username: "anu_r", followers: 75, posts: 11 },
    { username: "dinesh_v", followers: 140, posts: 28 },
    { username: "saranya_k", followers: 110, posts: 16 },
    { username: "rajesh_s", followers: 95, posts: 13 },
    { username: "bhuvana_m", followers: 85, posts: 10 },
    { username: "yuvan_k", followers: 170, posts: 31 },
    { username: "kavya_v", followers: 65, posts: 8 },
    { username: "selva_r", followers: 190, posts: 36 },
    { username: "janani_d", followers: 50, posts: 6 },
    { username: "gokul_m", followers: 120, posts: 18 },
    { username: "aishwarya_n", followers: 200, posts: 38 },
    { username: "mani_k", followers: 30, posts: 2 }
];


function checkAccount() {
    let username = document.getElementById("username").value.trim();
    let followers = parseInt(document.getElementById("followers").value);
    let posts = parseInt(document.getElementById("posts").value);
    
    let fakeMessage = document.getElementById("fakeMessage");
    let realAccountContainer = document.getElementById("realAccountContainer");

    // Find user in predefined list
    let foundUser = users.find(user => user.username === username);

    if (foundUser && followers === foundUser.followers && posts === foundUser.posts) {
        // Show Real Account Container
        realAccountContainer.classList.remove("d-none");
        fakeMessage.classList.add("d-none");

        // Display User Info
        document.getElementById("displayUsername").textContent = username;
        document.getElementById("displayFollowers").textContent = followers;
        document.getElementById("displayPosts").textContent = posts;
    } else {
        // Show Fake Message
        realAccountContainer.classList.add("d-none");
        fakeMessage.classList.remove("d-none");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("preloader-active"); // Prevent scrolling on page load
  
    window.addEventListener("load", function () {
        setTimeout(() => {
            document.getElementById("preloader").classList.add("preloader-hidden");
            document.body.classList.remove("preloader-active"); // Allow scrolling after preloader is hidden
        }, 2000); // Adjust delay as needed
    });
});


