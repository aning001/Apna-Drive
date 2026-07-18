/**
 * =========================================
 * APNA DRIVE - Self Drive Car Rental Goa
 * Global Vanilla JavaScript Functionality (main.js)
 * =========================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNavigation();
  initFaqAccordion();
  initBackToTop();
  initActiveNavigationState();
  initImageFallbackSystem();
  initLocationCarousel();
});

/* =========================================
   1. STICKY HEADER
   ========================================= */
function initStickyHeader() {
  const header = document.querySelector(".header-container");
  if (!header) return;

  const scrollThreshold = 50;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });
}

/* =========================================
   2. MOBILE NAVIGATION & BODY SCROLL LOCK
   ========================================= */
function initMobileNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const closeBtn = document.querySelector(".mobile-nav-close");
  const body = document.body;

  if (!hamburger || !mobileNav || !mobileOverlay) return;

  function openMenu() {
    hamburger.classList.add("is-active");
    mobileNav.classList.add("is-active");
    mobileOverlay.classList.add("is-active");
    body.classList.add("menu-open"); // Locks scrolling
  }

  function closeMenu() {
    hamburger.classList.remove("is-active");
    mobileNav.classList.remove("is-active");
    mobileOverlay.classList.remove("is-active");
    body.classList.remove("menu-open"); // Unlocks scrolling
  }

  // Toggle Menu
  hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("is-active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close Menu on Close Button Click
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Close Menu on Overlay Click
  mobileOverlay.addEventListener("click", closeMenu);

  // Close Menu on clicking any mobile navigation link except dropdown triggers
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-dropdown-item");
  mobileLinks.forEach(link => {
    if (!link.classList.contains("mobile-dropdown-trigger")) {
      link.addEventListener("click", closeMenu);
    }
  });

  // Mobile Dropdown Nested Menus
  const mobileDropdownTriggers = document.querySelectorAll(".mobile-dropdown-trigger");
  mobileDropdownTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      // Find the sibling submenu
      const submenu = trigger.parentElement.querySelector(".mobile-dropdown-menu");
      const icon = trigger.querySelector(".chevron-icon");
      
      if (submenu) {
        // Only one dropdown should remain open at a time
        const allDropdowns = document.querySelectorAll(".mobile-dropdown-menu");
        allDropdowns.forEach(menu => {
          if (menu !== submenu) {
            menu.classList.remove("is-active");
            // reset icon rotation on the other triggers
            const otherTrigger = menu.parentElement.querySelector(".mobile-dropdown-trigger");
            if (otherTrigger) {
              const otherIcon = otherTrigger.querySelector(".chevron-icon");
              if (otherIcon) {
                otherIcon.style.transform = "rotate(0deg)";
              }
            }
          }
        });

        submenu.classList.toggle("is-active");
        if (icon) {
          icon.style.transform = submenu.classList.contains("is-active") ? "rotate(180deg)" : "rotate(0deg)";
        }
      }
    });
  });
}

/* =========================================
   3. FAQ ACCORDION ACCESSIBILITY
   ========================================= */
function initFaqAccordion() {
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  
  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const currentItem = trigger.closest(".faq-item");
      const isActive = currentItem.classList.contains("is-active");

      // Close all other FAQ items first for clean accordian behavior
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("is-active");
        const itemTrigger = item.querySelector(".faq-trigger");
        if (itemTrigger) {
          itemTrigger.setAttribute("aria-expanded", "false");
        }
      });

      if (!isActive) {
        currentItem.classList.add("is-active");
        trigger.setAttribute("aria-expanded", "true");
      } else {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/* =========================================
   4. BACK TO TOP BUTTON
   ========================================= */
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("is-visible");
    } else {
      backToTopBtn.classList.remove("is-visible");
    }
  });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* =========================================
   5. ACTIVE NAVIGATION INDICATOR
   ========================================= */
function initActiveNavigationState() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Check if the current URL ends with the link destination or if it is exactly match
    if (currentPath === href || currentPath.endsWith("/" + href) || (currentPath === "/" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* =========================================
   6. SMART IMAGE ERROR FALLBACK SYSTEM (Prevent broken images)
   ========================================= */
function initImageFallbackSystem() {
  const images = document.querySelectorAll("img");
  
  images.forEach(img => {
    // If image has already failed or fails in the future
    if (img.naturalWidth === 0 && img.src !== "") {
      applyImageFallback(img);
    }
    img.addEventListener("error", () => {
      applyImageFallback(img);
    });
  });
}

function applyImageFallback(img) {
  const altText = img.alt || "Apna Drive Car";
  const parent = img.parentElement;
  
  // Create beautiful placeholder element
  const fallbackDiv = document.createElement("div");
  fallbackDiv.className = "img-fallback-wrapper";
  
  let icon = "🚗";
  if (altText.toLowerCase().includes("airport") || altText.toLowerCase().includes("mopa")) {
    icon = "✈️";
  } else if (altText.toLowerCase().includes("beach") || altText.toLowerCase().includes("goa")) {
    icon = "🌴";
  } else if (altText.toLowerCase().includes("map")) {
    icon = "📍";
  }

  fallbackDiv.innerHTML = `
    <div class="fallback-icon">${icon}</div>
    <div class="fallback-title">${altText}</div>
    <div class="fallback-subtitle">Self-Drive Rental Goa</div>
  `;

  // Hide the broken image and append fallback
  img.style.display = "none";
  if (parent) {
    parent.appendChild(fallbackDiv);
  }
}

/* =========================================
   7. POPULAR LOCATIONS GALLERY CAROUSEL
   ========================================= */
function initLocationCarousel() {
  const carousel = document.getElementById("locationCarousel");
  const prevBtn = document.getElementById("locPrevBtn");
  const nextBtn = document.getElementById("locNextBtn");
  if (!carousel || !prevBtn || !nextBtn) return;

  const updateButtons = () => {
    // Check if scrolled to start
    if (carousel.scrollLeft <= 5) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    // Check if scrolled to end
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft >= maxScroll - 5) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  };

  prevBtn.addEventListener("click", () => {
    const card = carousel.querySelector(".location-card");
    if (card) {
      const cardWidth = card.offsetWidth;
      // 24px is the gap between cards
      const scrollAmount = cardWidth + 24;
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });

  nextBtn.addEventListener("click", () => {
    const card = carousel.querySelector(".location-card");
    if (card) {
      const cardWidth = card.offsetWidth;
      // 24px is the gap between cards
      const scrollAmount = cardWidth + 24;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });

  // Track scroll changes
  carousel.addEventListener("scroll", updateButtons);

  // Initialize button states
  setTimeout(updateButtons, 150);
  window.addEventListener("resize", updateButtons);
}
