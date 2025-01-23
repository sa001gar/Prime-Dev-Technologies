// Initialize GSAP
gsap.registerPlugin(ScrollTrigger)

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

// Set initial theme based on system preference
if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode")
} else {
  document.body.classList.add("light-mode")
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
  document.body.classList.toggle("light-mode")
})

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navItems = document.querySelector(".nav-items")

mobileMenuBtn.addEventListener("click", () => {
  navItems.classList.toggle("active")
  mobileMenuBtn.classList.toggle("active")
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".mobile-menu-btn") && !e.target.closest(".nav-items")) {
    navItems.classList.remove("active")
    mobileMenuBtn.classList.remove("active")
  }
})

// Close mobile menu when clicking on a link
navItems.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.remove("active")
    mobileMenuBtn.classList.remove("active")
  })
})

// Close mobile menu on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navItems.classList.remove("active")
    mobileMenuBtn.classList.remove("active")
  }
})

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// GSAP Animations
// Reveal text animation
gsap.utils.toArray(".reveal-text").forEach((text) => {
  gsap.from(text, {
    scrollTrigger: {
      trigger: text,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
  })
})

// Service cards animation
gsap.utils.toArray(".service-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=50",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    delay: i * 0.2,
    ease: "power3.out",
  })
})

// Expertise cards animation
gsap.utils.toArray(".expertise-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=50",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
    ease: "power3.out",
  })
})

// Stats counter animation
gsap.utils.toArray(".stat-number").forEach((stat) => {
  const target = Number.parseInt(stat.textContent)
  gsap.to(stat, {
    scrollTrigger: {
      trigger: stat,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
    innerHTML: target,
    duration: 2,
    snap: { innerHTML: 1 },
    ease: "power1.inOut",
  })
})

// Form validation
const form = document.querySelector(".contact-form")
form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Here you would typically send the form data to your server
  console.log("Form submitted:", { name, email, message })
  alert("Thank you for your message! We will get back to you soon.")
  form.reset()
})

// Add active states for navigation
const sections = document.querySelectorAll("section[id]")
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-items a[href="#${sectionId}"]`)

    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.style.color = "var(--primary)"
    } else if (navLink) {
      navLink.style.color = "var(--text)"
    }
  })
})

// Tech logos animation
gsap.from(".tech-logos img", {
  scrollTrigger: {
    trigger: ".tech-logos",
    start: "top bottom-=100",
    toggleActions: "play none none reverse",
  },
  duration: 0.8,
  opacity: 0,
  y: 30,
  stagger: 0.2,
  ease: "power3.out",
})

// Projects animation
gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=50",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    delay: i * 0.2,
    ease: "power3.out",
  })
})

// Clients animation
gsap.utils.toArray(".client-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=50",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    opacity: 0,
    y: 30,
    delay: i * 0.2,
    ease: "power3.out",
  })
})

// Team members animation
gsap.utils.toArray(".team-member").forEach((member, i) => {
  gsap.from(member, {
    scrollTrigger: {
      trigger: member,
      start: "top bottom-=50",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    delay: i * 0.2,
    ease: "power3.out",
  })
})

// Rating stars animation
gsap.utils.toArray(".rating").forEach((rating) => {
  const stars = rating.querySelectorAll("i")
  gsap.from(stars, {
    scrollTrigger: {
      trigger: rating,
      start: "top bottom-=50",
      toggleActions: "play none none reverse",
    },
    duration: 0.4,
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
    ease: "back.out(1.7)",
  })
})

// Modal functionality
const modalOverlay = document.querySelector(".modal-overlay")
const modalClose = document.querySelector(".modal-close")
const contactButtons = document.querySelectorAll('a[href="#contact"]')

contactButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()
    modalOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
  })
})

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("active")
  document.body.style.overflow = ""
})

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }
})

// Close modal on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    modalOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }
})

// Handle modal form submission
const modalForm = modalOverlay.querySelector(".contact-form")
modalForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("modal-name").value
  const email = document.getElementById("modal-email").value
  const mobile = document.getElementById("modal-mobile").value
  const message = document.getElementById("modal-message").value

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all required fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Here you would typically send the form data to your server
  console.log("Form submitted:", { name, email, mobile, message })
  alert("Thank you for your message! We will get back to you soon.")
  modalForm.reset()
  modalOverlay.classList.remove("active")
  document.body.style.overflow = ""
})

