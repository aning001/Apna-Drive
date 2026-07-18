/**
 * =========================================
 * APNA DRIVE - Self Drive Car Rental Goa
 * Booking Wizard and WhatsApp Integration (booking.js)
 * =========================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initBookingWizard();
});

function initBookingWizard() {
  const bookingForm = document.getElementById("goa-booking-form");
  const carSelect = document.getElementById("booking-car-select");
  const summaryModal = document.getElementById("booking-summary-modal");
  const modalCloseBtn = document.getElementById("close-summary-modal");
  const sendWhatsAppBtn = document.getElementById("btn-send-whatsapp");

  if (!bookingForm) return;

  // 1. Pre-populate Selected Car from URL parameter (if present)
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCarParam = urlParams.get("car");
  if (selectedCarParam && carSelect) {
    // Attempt to match the option value precisely
    for (let i = 0; i < carSelect.options.length; i++) {
      if (carSelect.options[i].value.toLowerCase() === selectedCarParam.toLowerCase() || 
          carSelect.options[i].text.toLowerCase().includes(selectedCarParam.toLowerCase())) {
        carSelect.selectedIndex = i;
        break;
      }
    }
  }

  // 2. Setup minimum dates (Pickup date should be today or later; Drop-off date should be pickup date or later)
  const pickupDateInput = document.getElementById("booking-pickup-date");
  const dropoffDateInput = document.getElementById("booking-dropoff-date");

  if (pickupDateInput && dropoffDateInput) {
    const today = new Date().toISOString().split("T")[0];
    pickupDateInput.min = today;

    pickupDateInput.addEventListener("change", () => {
      dropoffDateInput.min = pickupDateInput.value;
      if (dropoffDateInput.value && dropoffDateInput.value < pickupDateInput.value) {
        dropoffDateInput.value = pickupDateInput.value;
      }
    });
  }

  // 3. Form Submission Validation and Summary Intercept
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous errors
    clearFieldErrors();

    // Run validation and track the first invalid element
    let firstInvalid = null;

    const nameInput = document.getElementById("booking-name");
    if (!nameInput.value.trim()) {
      showFieldError(nameInput, "Full Name is required");
      if (!firstInvalid) firstInvalid = nameInput;
    }

    const phoneInput = document.getElementById("booking-phone");
    const phoneVal = phoneInput.value.trim();
    if (!phoneVal) {
      showFieldError(phoneInput, "Phone Number is required");
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (phoneVal.length < 10) {
      showFieldError(phoneInput, "Please enter a valid 10-digit mobile number");
      if (!firstInvalid) firstInvalid = phoneInput;
    }

    const emailInput = document.getElementById("booking-email");
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      showFieldError(emailInput, "Email Address is required");
      if (!firstInvalid) firstInvalid = emailInput;
    } else if (!emailVal.includes("@")) {
      showFieldError(emailInput, "Please enter a valid email address");
      if (!firstInvalid) firstInvalid = emailInput;
    }

    const carSelect = document.getElementById("booking-car-select");
    if (!carSelect.value) {
      showFieldError(carSelect, "Please select a car from our fleet");
      if (!firstInvalid) firstInvalid = carSelect;
    }

    const pickupLoc = document.getElementById("booking-pickup-loc");
    if (!pickupLoc.value) {
      showFieldError(pickupLoc, "Please specify a pickup location");
      if (!firstInvalid) firstInvalid = pickupLoc;
    }

    const dropoffLoc = document.getElementById("booking-dropoff-loc");
    if (!dropoffLoc.value) {
      showFieldError(dropoffLoc, "Please specify a drop-off location");
      if (!firstInvalid) firstInvalid = dropoffLoc;
    }

    const pickupDate = document.getElementById("booking-pickup-date");
    if (!pickupDate.value) {
      showFieldError(pickupDate, "Pickup Date is required");
      if (!firstInvalid) firstInvalid = pickupDate;
    }

    const dropoffDate = document.getElementById("booking-dropoff-date");
    if (!dropoffDate.value) {
      showFieldError(dropoffDate, "Drop-off Date is required");
      if (!firstInvalid) firstInvalid = dropoffDate;
    }

    const consent = document.getElementById("booking-consent");
    if (!consent.checked) {
      showFieldError(consent, "You must agree to the Rental Terms & General Policies");
      if (!firstInvalid) firstInvalid = consent;
    }

    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Generate Unique Booking Enquiry ID
    const bookingId = "AP" + Math.floor(1000 + Math.random() * 9000);

    // Collect Form Data
    const formData = {
      bookingId: bookingId,
      name: nameInput.value.trim(),
      phone: phoneVal,
      email: emailVal,
      car: carSelect.value,
      pickupLoc: pickupLoc.value,
      dropoffLoc: dropoffLoc.value,
      pickupDate: pickupDate.value,
      pickupTime: document.getElementById("booking-pickup-time").value,
      dropoffDate: dropoffDate.value,
      dropoffTime: document.getElementById("booking-dropoff-time").value,
      travellers: document.getElementById("booking-travellers").value,
      transmissionPref: document.getElementById("booking-transmission-pref").value,
      message: document.getElementById("booking-message").value.trim()
    };

    // Populate and Show Booking Summary Modal
    showBookingSummary(formData);
  });

  // 4. Modal Close Listener
  if (modalCloseBtn && summaryModal) {
    modalCloseBtn.addEventListener("click", () => {
      summaryModal.classList.remove("is-visible");
    });
  }

  // 5. WhatsApp Message Generation on Confirmed Action
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener("click", () => {
      const summaryData = window.currentBookingData;
      if (!summaryData) return;

      // Format professional WhatsApp Booking Text
      const whatsappText = generateWhatsAppMessage(summaryData);
      
      const businessWhatsApp = "917410563071";
      const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(whatsappText)}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");
      
      // Close Modal but do not lose form data (keep inputs filled for safety)
      if (summaryModal) summaryModal.classList.remove("is-visible");
    });
  }
}

// Field-level error helpers
function showFieldError(input, msg) {
  input.style.borderColor = "#ff3333";
  const errorSpan = document.createElement("span");
  errorSpan.className = "field-error-msg";
  errorSpan.style.color = "#ff3333";
  errorSpan.style.fontSize = "0.75rem";
  errorSpan.style.display = "block";
  errorSpan.style.marginTop = "0.25rem";
  errorSpan.style.fontWeight = "600";
  errorSpan.textContent = msg;

  // Checkbox requires special treatment because it is small
  if (input.type === "checkbox") {
    const parentLabel = input.closest("label") || input;
    parentLabel.parentNode.insertBefore(errorSpan, parentLabel.nextSibling);
  } else {
    const wrapper = input.closest(".input-wrapper") || input;
    wrapper.parentNode.insertBefore(errorSpan, wrapper.nextSibling);
  }
}

function clearFieldErrors() {
  document.querySelectorAll(".field-error-msg").forEach(el => el.remove());
  document.querySelectorAll(".form-input, .form-select").forEach(el => {
    el.style.borderColor = "";
  });
}

// Populate and Reveal Modal
function showBookingSummary(data) {
  const summaryModal = document.getElementById("booking-summary-modal");
  if (!summaryModal) {
    // If modal element isn't present, fallback to opening WhatsApp directly
    const whatsappText = generateWhatsAppMessage(data);
    const businessWhatsApp = "917410563071";
    window.open(`https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(whatsappText)}`, "_blank");
    alert("Redirecting to WhatsApp for confirmation...\n\nYour booking request will be confirmed after checking vehicle availability.");
    return;
  }

  // Set modal elements
  const bookingIdEl = document.getElementById("sum-booking-id");
  if (bookingIdEl) {
    bookingIdEl.textContent = data.bookingId;
  }
  document.getElementById("sum-car-name").textContent = data.car;
  document.getElementById("sum-customer-name").textContent = data.name;
  document.getElementById("sum-customer-phone").textContent = data.phone;
  document.getElementById("sum-pickup").textContent = `${data.pickupLoc} (${data.pickupDate} @ ${data.pickupTime})`;
  document.getElementById("sum-dropoff").textContent = `${data.dropoffLoc} (${data.dropoffDate} @ ${data.dropoffTime})`;
  document.getElementById("sum-travellers").textContent = data.travellers;
  document.getElementById("sum-transmission").textContent = data.transmissionPref;

  // Store in global window namespace for sending trigger
  window.currentBookingData = data;

  // Add CSS styles for visibility
  summaryModal.classList.add("is-visible");
}

// Generate the WhatsApp template
function generateWhatsAppMessage(data) {
  return `*Apna Drive - New Booking Enquiry*

*Booking ID:* ${data.bookingId}

*Customer Name:* ${data.name}
*Phone Number:* ${data.phone}
*Email:* ${data.email || 'Not Provided'}
*Selected Car:* ${data.car}
*Pickup Location:* ${data.pickupLoc}
*Drop-off Location:* ${data.dropoffLoc}
*Pickup Date:* ${data.pickupDate}
*Pickup Time:* ${data.pickupTime}
*Drop-off Date:* ${data.dropoffDate}
*Drop-off Time:* ${data.dropoffTime}
*Number of Travellers:* ${data.travellers}
*Transmission Preference:* ${data.transmissionPref || 'No Preference'}
*Additional Message:* ${data.message || 'None'}

*Status:* Availability Check Requested

Please contact the customer and confirm vehicle availability.`;
}
