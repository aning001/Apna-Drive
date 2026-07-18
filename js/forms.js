/**
 * =========================================
 * APNA DRIVE - Self Drive Car Rental Goa
 * Contact, Newsletter and Quick Search Forms (forms.js)
 * =========================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
  initNewsletterForm();
  initQuickBookingForm();
});

/* =========================================
   1. CONTACT FORM VALIDATION
   ========================================= */
function initContactForm() {
  const contactForm = document.getElementById("goa-contact-form");
  if (!contactForm) return;

  const successModal = document.getElementById("contact-success-modal");
  const closeContactModalBtn = document.getElementById("close-contact-modal");
  const sendContactWhatsAppBtn = document.getElementById("btn-send-contact-whatsapp");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous errors
    clearContactFieldErrors();

    // Field validation and tracking first invalid element
    let firstInvalid = null;

    const nameInput = document.getElementById("contact-name");
    if (!nameInput.value.trim()) {
      showContactFieldError(nameInput, "Full Name is required");
      if (!firstInvalid) firstInvalid = nameInput;
    }

    const phoneInput = document.getElementById("contact-phone");
    const phoneVal = phoneInput.value.trim();
    if (!phoneVal) {
      showContactFieldError(phoneInput, "Phone Number is required");
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (phoneVal.length < 10) {
      showContactFieldError(phoneInput, "Please enter a valid 10-digit mobile number");
      if (!firstInvalid) firstInvalid = phoneInput;
    }

    const emailInput = document.getElementById("contact-email");
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      showContactFieldError(emailInput, "Email Address is required");
      if (!firstInvalid) firstInvalid = emailInput;
    } else if (!emailVal.includes("@")) {
      showContactFieldError(emailInput, "Please enter a valid email address");
      if (!firstInvalid) firstInvalid = emailInput;
    }

    const locationSelect = document.getElementById("contact-location");
    if (!locationSelect.value) {
      showContactFieldError(locationSelect, "Please specify your location");
      if (!firstInvalid) firstInvalid = locationSelect;
    }

    const travelDateInput = document.getElementById("contact-travel-date");
    if (!travelDateInput.value) {
      showContactFieldError(travelDateInput, "Travel Date is required");
      if (!firstInvalid) firstInvalid = travelDateInput;
    }

    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Generate Unique Contact Enquiry ID
    const enquiryId = "ADQ" + Math.floor(1000 + Math.random() * 9000);

    // Save Contact Data globally
    window.currentContactData = {
      enquiryId: enquiryId,
      name: nameInput.value.trim(),
      phone: phoneVal,
      email: emailVal,
      carPref: document.getElementById("contact-car-pref").value || "Any Available Car",
      location: locationSelect.value,
      travelDate: travelDateInput.value,
      message: document.getElementById("contact-message").value.trim()
    };

    // Update modal contents and show it
    const idDisplay = document.getElementById("contact-enquiry-id");
    if (idDisplay) {
      idDisplay.textContent = enquiryId;
    }

    if (successModal) {
      successModal.classList.add("is-visible");
    }
  });

  // Modal event listeners
  if (closeContactModalBtn && successModal) {
    closeContactModalBtn.addEventListener("click", () => {
      successModal.classList.remove("is-visible");
    });
  }

  if (sendContactWhatsAppBtn) {
    sendContactWhatsAppBtn.addEventListener("click", () => {
      const data = window.currentContactData;
      if (!data) return;

      const whatsappText = `*Apna Drive - New Contact Enquiry*

*Enquiry ID:* ${data.enquiryId}

*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Preferred Car:* ${data.carPref}
*Pickup Location:* ${data.location}
*Travel Date:* ${data.travelDate}
*Message:* ${data.message || "None"}

Please contact the customer as soon as possible.`;

      const businessWhatsApp = "917410563071";
      const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(whatsappText)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Hide modal but keep form data for safety
      if (successModal) {
        successModal.classList.remove("is-visible");
      }
    });
  }
}

// Helpers for Contact Form Errors
function showContactFieldError(input, msg) {
  input.style.borderColor = "#ff3333";
  const errorSpan = document.createElement("span");
  errorSpan.className = "field-error-msg";
  errorSpan.style.color = "#ff3333";
  errorSpan.style.fontSize = "0.75rem";
  errorSpan.style.display = "block";
  errorSpan.style.marginTop = "0.25rem";
  errorSpan.style.fontWeight = "600";
  errorSpan.textContent = msg;

  // Insert error after input element or select element
  input.parentNode.insertBefore(errorSpan, input.nextSibling);
}

function clearContactFieldErrors() {
  document.querySelectorAll("#goa-contact-form .field-error-msg").forEach(el => el.remove());
  document.querySelectorAll("#goa-contact-form .form-input, #goa-contact-form .form-select").forEach(el => {
    el.style.borderColor = "";
  });
}

/* =========================================
   2. NEWSLETTER FORM VALIDATION
   ========================================= */
function initNewsletterForm() {
  const newsletterForm = document.getElementById("goa-newsletter-form");
  if (!newsletterForm) return;

  const msgBox = document.getElementById("newsletter-message-box");

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector(".newsletter-input");
    const email = emailInput ? emailInput.value.trim() : "";

    if (!email || !email.includes("@")) {
      showStatusMsg("Please enter a valid email address.", "error");
      return;
    }

    // Simulate successful newsletter subscription
    showStatusMsg("Thank you! You have subscribed successfully to Apna Drive Goa newsletters.", "success");
    if (emailInput) emailInput.value = "";
  });

  function showStatusMsg(text, type) {
    if (!msgBox) return;
    msgBox.textContent = text;
    msgBox.className = "newsletter-msg " + type;
    
    // Auto hide after 4 seconds
    setTimeout(() => {
      msgBox.className = "newsletter-msg";
      msgBox.textContent = "";
    }, 4000);
  }
}

/* =========================================
   3. QUICK BOOKING / CAR SEARCH FROM HOME
   ========================================= */
function initQuickBookingForm() {
  const quickForm = document.getElementById("homepage-quick-booking-form");
  if (!quickForm) return;

  const today = new Date().toISOString().split("T")[0];
  const pickupDate = document.getElementById("quick-pickup-date");
  const dropoffDate = document.getElementById("quick-dropoff-date");

  if (pickupDate && dropoffDate) {
    pickupDate.min = today;
    pickupDate.addEventListener("change", () => {
      dropoffDate.min = pickupDate.value;
      if (dropoffDate.value && dropoffDate.value < pickupDate.value) {
        dropoffDate.value = pickupDate.value;
      }
    });
  }

  quickForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const pickupLoc = document.getElementById("quick-pickup-loc").value;
    const pickupD = document.getElementById("quick-pickup-date").value;
    const pickupT = document.getElementById("quick-pickup-time").value;
    const dropoffD = document.getElementById("quick-dropoff-date").value;
    const dropoffT = document.getElementById("quick-dropoff-time").value;
    const carPreference = document.getElementById("quick-car-pref").value;

    if (!pickupLoc || !pickupD || !dropoffD) {
      alert("Please specify at least Pickup Location, Pickup Date and Drop-off Date.");
      return;
    }

    // Build query params
    const queryParams = new URLSearchParams();
    if (carPreference) queryParams.set("car", carPreference);
    queryParams.set("pickupLoc", pickupLoc);
    queryParams.set("pickupDate", pickupD);
    queryParams.set("pickupTime", pickupT);
    queryParams.set("dropoffDate", dropoffD);
    queryParams.set("dropoffTime", dropoffT);

    // Redirect to the master booking page with query parameters
    window.location.href = `booking.html?${queryParams.toString()}`;
  });
}
