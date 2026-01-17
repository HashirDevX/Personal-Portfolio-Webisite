let Menu = document.getElementById("menu");
let closer = document.getElementById("close");
let mobileNav = document.getElementById("navbar-mobile");
Menu.addEventListener("click", function () {
  mobileNav.style.right = "0%";
});
closer.addEventListener("click", function () {
  mobileNav.style.right = "-100%";
});

const API_URL = "{{ SERVICE_ID }}";
console.log("checking", API_URL);



// Typing Animation Js Start Here!

var typed = new Typed("#role-changer", {
  strings: [
    "Web Developer",
    "Wordpress Developer",
    "GHL Developer",
    "Frontend Developer",
  ],
  typeSpeed: 90,
  backSpeed: 90,
  loop: true,
});
// Typing Animation Js Ends Here!

// Portfolio Slider JS Start Here!
const swiper = new Swiper(".funnel-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Open modal on slide click or button click
document.querySelectorAll(".swiper-slide").forEach((slide) => {
  const imgSrc = slide.getAttribute("data-image");
  const viewBtn = slide.querySelector(".view-btn");

  // Button click
  viewBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.add("active");
    modalImage.src = imgSrc;
    document.body.style.overflow = "hidden";
  });

  // Slide click
  slide.addEventListener("click", () => {
    modal.classList.add("active");
    modalImage.src = imgSrc;
    document.body.style.overflow = "hidden";
  });
});

// Close modal button
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  modalImage.src = "";
  document.body.style.overflow = "auto";
});

// Close modal on background click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalImage.src = "";
    document.body.style.overflow = "auto";
  }
});
// ESC key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    modalImage.src = "";
    document.body.style.overflow = "auto";
  }
});
// Portfolio Slider JS Start Here!

// Form Data to your Gmail Start here!


(function () {
  emailjs.init("FtpwsYD9AJjG-GPgx"); // Public Key
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "V_SERVICE_ID"
  const userTemplateID = "V_USER_TEMPLATE_ID";     // User confirmation
  const leadTemplateID = "V_LEAD_TEMPLATE_ID";     // Admin / Lead

  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  // 🔹 Admin Email (Lead)
  emailjs.send(serviceID, leadTemplateID, formData)
    .then(() => {
      console.log("✅ Lead Email Sent");
    })
    .catch((error) => {
      console.error("❌ Lead Email Error:", error);
    });

  // 🔹 User Email
  emailjs.send(serviceID, userTemplateID, formData)
    .then(() => {
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    })
    .catch((error) => {
      console.error("❌ User Email Error:", error);
    });
});

// Form Data to your Gmail ends here!

// COunter js is here
let started = false;

function startCounters() {
  const counters = document.querySelectorAll(".counterCard");
  const duration = 2000; // total animation time in ms
  const fps = 60; // frames per second
  const intervalTime = 1000 / fps; // interval for each frame

  const h1s = Array.from(counters, (c) => c.querySelector("h1"));
  const targets = Array.from(counters, (c) => +c.getAttribute("data-target"));
  const increments = targets.map((t) => t / (duration / intervalTime)); // step per frame
  let counts = new Array(counters.length).fill(0);

  let id = setInterval(() => {
    let allDone = true;

    counts = counts.map((count, i) => {
      if (count < targets[i]) {
        count += increments[i];
        if (count > targets[i]) count = targets[i];
        h1s[i].textContent = Math.ceil(count) + "+";
        allDone = false;
      } else {
        h1s[i].textContent = targets[i] + "+";
      }
      return count;
    });

    if (allDone) clearInterval(id);
  }, intervalTime);
}

document.addEventListener("aos:in", (event) => {
  if (event.detail.classList.contains("counterCard") && !started) {
    startCounters();
    started = true;
  }
});

// Loader JS (minimum 2 sec)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 3000); // minimum loader time
});

const toggle = document.querySelectorAll(".themeToggle");

toggle.forEach((TL) => {
  TL.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // Save preference
    if (document.body.classList.contains("light-theme")) {
      TL.innerHTML = `<i class="ri-moon-clear-line"></i>`;

      localStorage.setItem("theme", "light");
    } else {
      TL.innerHTML = `<i class="ri-sun-line"></i>`;

      localStorage.setItem("theme", "dark");
    }
  });

})

// Load saved theme on refresh
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
});

// Custom CUrsor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorDot.style.top = y + "px";
  cursorDot.style.left = x + "px";
  if (e.target.tagName === "button") {
    cursorOutline.innerHTML = "Hire me!";
    cursorOutline.style.background = "rgba(85, 124, 255, 0.4)"
  }

  cursorOutline.animate(
    {
      top: y + "px",
      left: x + "px",
    },
    {
      duration: 300,
      fill: "forwards",
    }
  );
});

// AOS Animation

AOS.init();
