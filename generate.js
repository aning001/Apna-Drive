/**
 * =========================================
 * APNA DRIVE - Static Site Compiler Script
 * /generate.js
 * =========================================
 */

import fs from "fs";
import path from "path";
import { BUSINESS_INFO, CARS, LOCATIONS, SERVICES, BLOGS } from "./generator/data.js";
import { headerTemplate, footerTemplate, breadcrumbTemplate } from "./generator/templates.js";
import { renderStoryContainer, HOME_STORIES, FLEET_STORIES, GOA_TRAVEL_STORIES, BLOG_STORIES, ABOUT_STORIES, CONTACT_STORIES, BOOKING_STORIES, getParameterizedStories } from "./generator/contentBlocks.js";

// Ensure subfolders exist
const directories = ["css", "js", "cars", "services", "locations", "blog", "images"];
directories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

console.log("Starting static site compilation for Apna Drive...");

const LOCATION_INFOS = {
  "mopa-airport": { icon: "✈️", desc: "Self-drive car delivery available near Mopa Airport." },
  "dabolim-airport": { icon: "✈️", desc: "Convenient self-drive car pickup and delivery near Dabolim Airport." },
  "panjim": { icon: "🏛️", desc: "Explore Fontainhas Latin Quarter and city sights in Panjim." },
  "calangute": { icon: "🏖️", desc: "Get your hatchback or SUV delivered directly to Calangute Beach." },
  "baga": { icon: "🍹", desc: "Enjoy Baga's famous nightlife and beach shacks with our rental cars." },
  "candolim": { icon: "🏰", desc: "Premium car rental delivery to resorts along Candolim Beach." },
  "anjuna": { icon: "🌅", desc: "Perfect for exploring Wednesday flea markets and cliffside cafes in Anjuna." },
  "mapusa": { icon: "🛍️", desc: "Central transit access and affordable rentals in Mapusa town." },
  "margao": { icon: "🚉", desc: "Railway station delivery and close proximity to South Goa beach belt." },
  "vasco": { icon: "⚓", desc: "Instant delivery to Vasco Railway station and Bogmalo beach." },
  "north-goa": { icon: "🌴", desc: "Explore high-energy beaches, fortresses, and food scenes in North Goa." },
  "south-goa": { icon: "🌊", desc: "Cruise along peaceful white-sand beaches and scenic heritage sites." }
};

/* =========================================
   1. CORE PAGES COMPILATION
   ========================================= */

// --- index.html ---
const indexHtml = `
${headerTemplate("Self Drive Car Rental in Goa - Book Clean Cars", "Book clean, comfortable, and well-maintained self-drive cars in Goa with Apna Drive. No hidden charges. Pickup at Mopa and Dabolim airports. Book on WhatsApp.", "", "home")}

<!-- HERO SECTION -->
<section class="hero-section">
  <div class="hero-bg-shape"></div>
  <div class="container hero-grid">
    <div>
      <span class="badge">🌴 Explore Goa Your Way</span>
      <h1 class="hero-title">Your <span>Goa Drive</span> Starts Here</h1>
      <p class="hero-desc">Book clean, comfortable, and well-maintained self-drive cars across Goa with a simple and convenient booking process. Explore beautiful beaches at your own pace.</p>
      
      <div class="hero-actions">
        <a href="fleet.html" class="btn btn-primary">Explore Cars</a>
        <a href="https://wa.me/${BUSINESS_INFO.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg style="width:18px; height:18px; fill:currentColor;" viewBox="0 0 24 24"><path d="M12.031 6c-2.767 0-5 2.233-5 5s2.233 5 5 5c2.767 0 5-2.233 5-5s-2.233-5-5-5zm0 9c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm.516-11c3.551.042 6.433 2.923 6.475 6.474a8.47 8.47 0 0 1-5.184 7.82 8.38 8.38 0 0 1-3.8.9l-5.1.9 1.9-5.7a8.38 8.38 0 0 1-.9-3.8c.041-3.552 2.924-6.432 6.475-6.474z"/></svg>
          Book on WhatsApp
        </a>
      </div>
      
      <div class="hero-trust-points">
        <div class="trust-point">
          <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span>100% Legal RTO Cars</span>
        </div>
        <div class="trust-point">
          <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span>No Hidden Surcharges</span>
        </div>
        <div class="trust-point">
          <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span>Airport Handover</span>
        </div>
      </div>
    </div>
    
    <div class="hero-visual">
      <div class="hero-img-wrapper">
        <img src="images/hero/apna-drive-hero.webp" alt="Self Drive Thar Rental in Goa" class="hero-main-img">
        <div class="badge-widget pos-top">
          <div class="widget-icon-bg">⭐</div>
          <div class="widget-text">
            <h4>4.9/5 Rating</h4>
            <p>From verified travelers</p>
          </div>
        </div>
        <div class="badge-widget pos-bottom">
          <div class="widget-icon-bg">🔑</div>
          <div class="widget-text">
            <h4>Easy Handover</h4>
            <p>Paperless digital KYC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- QUICK BOOKING FORM -->
<div class="container booking-form-outer">
  <form class="booking-form-card" id="homepage-quick-booking-form">
    <div class="booking-form-header">
      <span>⚡</span> Quick Self Drive Reservation
    </div>
    <div class="booking-form-grid">
      
      <div class="form-group-col">
        <label class="input-label" for="quick-pickup-loc">Pickup Location</label>
        <div class="input-wrapper">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <select class="form-select" id="quick-pickup-loc" required>
            <option value="" disabled selected>Where to pick up?</option>
            ${LOCATIONS.map(loc => `<option value="${loc.name}">${loc.name}</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="form-group-col">
        <label class="input-label" for="quick-pickup-date">Pickup Date</label>
        <div class="input-wrapper">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <input type="date" class="form-input" id="quick-pickup-date" required>
        </div>
      </div>

      <div class="form-group-col">
        <label class="input-label" for="quick-pickup-time">Pickup Time</label>
        <div class="input-wrapper">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <input type="time" class="form-input" id="quick-pickup-time" value="09:00" required>
        </div>
      </div>

      <div class="form-group-col">
        <label class="input-label" for="quick-dropoff-date">Drop-off Date</label>
        <div class="input-wrapper">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <input type="date" class="form-input" id="quick-dropoff-date" required>
        </div>
      </div>

      <div class="form-group-col">
        <label class="input-label" for="quick-dropoff-time">Drop-off Time</label>
        <div class="input-wrapper">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <input type="time" class="form-input" id="quick-dropoff-time" value="09:00" required>
        </div>
      </div>

      <div class="form-group-col">
        <label class="input-label" for="quick-car-pref">Car Choice</label>
        <div class="input-wrapper">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h1"/><circle cx="18.5" cy="17" r="2.5"/><circle cx="7.5" cy="17" r="2.5"/><path d="M13 17H9"/></svg>
          <select class="form-select" id="quick-car-pref">
            <option value="" selected>Any Available Car</option>
            ${CARS.map(car => `<option value="${car.name}">${car.name}</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="form-group-col" style="grid-column: 1 / -1; margin-top: 0.5rem;">
        <button type="submit" class="form-btn-submit">Search Available Cars</button>
      </div>

    </div>
  </form>
</div>

<!-- FEATURED FLEET SECTION -->
<section class="section-padding">
  <div class="container">
    <div class="text-center">
      <span class="section-subtitle">Our Clean Fleet</span>
      <h2 class="section-title">Popular Self-Drive Rentals in Goa</h2>
      <p class="section-desc">Choose from our wide collection of sanitized hatchbacks, spacious family MPVs, adventure Thar 4x4s, and elite luxury convertibles.</p>
    </div>
    
    <!-- Dynamically Populated via fleet.js with fallback support -->
    <div class="grid grid-3 car-cards-grid" id="home-featured-grid">
      <!-- Fallback message if JS is blocked -->
      <div class="text-center" style="grid-column: 1 / -1;">
        <p class="text-muted">Loading our premium fleet dashboard...</p>
      </div>
    </div>

    <div class="text-center" style="margin-top: 3rem;">
      <a href="fleet.html" class="btn btn-secondary">View Full Fleet (19 Cars)</a>
    </div>
  </div>
</section>

<!-- WHY CHOOSE APNA DRIVE -->
<section class="section-padding why-us-section">
  <div class="container">
    <div class="text-center">
      <span class="section-subtitle">The Apna Drive Difference</span>
      <h2 class="section-title">Why Rent a Car With Us?</h2>
      <p class="section-desc">We represent transparency, clean vehicles, and stellar support, making us the top choice for Goan road trips.</p>
    </div>
    
    <div class="grid grid-3 features-grid">
      
      <div class="feature-card">
        <div class="feature-icon-wrapper">🛡️</div>
        <h3>100% Legal &amp; Insured</h3>
        <p>All our cars carry legal commercial black-and-yellow transport license plates with comprehensive insurance covering self-drive rentals.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrapper">🧼</div>
        <h3>Pristine &amp; Sanitized</h3>
        <p>Each car undergoes a multi-point vacuum and sanitization treatment before handover. Breathe easy and enjoy a spotless, fresh cabin space.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrapper">✈️</div>
        <h3>Direct Airport Delivery</h3>
        <p>We deliver cars directly to Mopa Airport (GOX) and Dabolim Airport (GOI) terminal parking bays with simple paperless verification.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrapper">🤝</div>
        <h3>No Hidden Pricing</h3>
        <p>What you see is what you pay. Transparent agreements with clearly outlined fuel, damage, and security deposit terms.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrapper">💬</div>
        <h3>24/7 WhatsApp Support</h3>
        <p>Our Goan booking managers and roadside assistance teams are available 24/7 on WhatsApp to support you during emergencies.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrapper">⏱️</div>
        <h3>Unlimited Mileage Options</h3>
        <p>No capping on kilometers. Explore deep South Goa beaches or northern hills without worrying about ticking meters.</p>
      </div>

    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="section-padding">
  <div class="container">
    <div class="text-center">
      <span class="section-subtitle">Rental Steps</span>
      <h2 class="section-title">How Self-Drive Rental Works</h2>
      <p class="section-desc">Go from terminal flight exit to the Goan beach highway in 4 simple, transparent steps.</p>
    </div>
    
    <div class="grid grid-4 steps-grid">
      <div class="steps-line"></div>
      
      <div class="step-card">
        <div class="step-number-box">1</div>
        <h3>Choose Your Car</h3>
        <p>Browse our 19 vehicle options and select the ideal ride matching your budget, seating, and transmission choice.</p>
      </div>

      <div class="step-card">
        <div class="step-number-box">2</div>
        <h3>Share Trip Details</h3>
        <p>Complete our secure digital booking form with your Goa dates, pickup/drop locations, and landing flight details.</p>
      </div>

      <div class="step-card">
        <div class="step-number-box">3</div>
        <h3>Confirm Availability</h3>
        <p>Our booking managers immediately check the real-time calendar and confirm your car reservation over a quick WhatsApp chat.</p>
      </div>

      <div class="step-card">
        <div class="step-number-box">4</div>
        <h3>Pick Up &amp; Explore</h3>
        <p>Meet our delivery agent at your specified terminal, hotel lobby, or beach spot. Complete a quick scan, sign and drive!</p>
      </div>

    </div>
  </div>
</section>

<!-- POPULAR LOCATIONS -->
<section class="section-padding" style="background-color: var(--light-bg); overflow: hidden;">
  <div class="container" style="position: relative;">
    <div class="text-center">
      <span class="section-subtitle">Goa Coverage</span>
      <h2 class="section-title">Popular Pickup &amp; Return Locations</h2>
      <p class="section-desc">Get your self-drive vehicle delivered straight to your arrival point or vacation resort lobby.</p>
    </div>
    
    <div class="location-carousel-wrapper">
      <button class="location-carousel-btn prev" id="locPrevBtn" aria-label="Previous locations">‹</button>
      
      <div class="location-carousel" id="locationCarousel">
        ${LOCATIONS.map(loc => {
          const info = LOCATION_INFOS[loc.id] || { icon: "📍", desc: `Self-drive car delivery available near ${loc.name}.` };
          return `
          <a href="locations/${loc.slug}.html" class="location-card">
            <div>
              <div class="location-card-icon">${info.icon}</div>
              <h3>${loc.name}</h3>
              <p>${info.desc}</p>
            </div>
            <span class="location-card-cta">
              View Location
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cta-arrow-icon" style="margin-left: 4px; transition: transform 0.2s; display: inline-block; vertical-align: middle;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </a>
          `;
        }).join("")}
      </div>
      
      <button class="location-carousel-btn next" id="locNextBtn" aria-label="Next locations">›</button>
    </div>
    
    <div class="text-center" style="margin-top: 3rem;">
      <a href="contact.html" class="btn btn-outline">Check All Delivery Locations</a>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="section-padding">
  <div class="container">
    <div class="text-center">
      <span class="section-subtitle">Our Reviews</span>
      <h2 class="section-title">Loved by Travelers</h2>
      <p class="section-desc">Check out what real vacationers and families say about Apna Drive's self-drive fleet experience.</p>
    </div>
    
    <div class="grid grid-3 testimonials-grid">
      
      <div class="testimonial-card">
        <div class="rating-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-text">"Renting the automatic Baleno from Mopa Airport was incredibly smooth. Handover agent met us right in the terminal parking block. Car was spotless, cold AC, drove for 5 days without single issue. Absolute life saver!"</p>
        <div class="testimonial-user">
          <div class="user-avatar">RH</div>
          <div class="user-info">
            <h4>Rohan Heera</h4>
            <p>Family Tour • July 2026</p>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="rating-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-text">"Iconic Thar Convertible made our honeymoon driving on South Goa coastal roads feel magical! Apna Drive had transparent policies, deposit was returned on-the-spot without a single question. Highly recommended!"</p>
        <div class="testimonial-user">
          <div class="user-avatar">AS</div>
          <div class="user-info">
            <h4>Ananya Sen</h4>
            <p>Couples Vacation • June 2026</p>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="rating-stars">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-text">"As a digital nomad, I booked a monthly plan on the Maruti Swift. apna drive support team handled full routine maintenance. Slashed pricing was outstanding, and they was super flexible. Best rental in Goa!"</p>
        <div class="testimonial-user">
          <div class="user-avatar">VD</div>
          <div class="user-info">
            <h4>Vikram Deshmukh</h4>
            <p>Workation Nomad • May 2026</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- FAQ SECTION -->
<section class="section-padding" style="background-color: var(--soft-cream);">
  <div class="container faq-container">
    <div class="text-center">
      <span class="section-subtitle">Got Questions?</span>
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-desc">Find quick answers to common questions about driving, paperwork, security deposit, and booking confirmation.</p>
    </div>
    
    <div class="faq-item">
      <button class="faq-trigger" aria-expanded="false">
        <span>What documents are required to rent a car?</span>
        <svg class="faq-plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <div class="faq-content">
        <div class="faq-answer">
          You must provide a valid Indian Driving License (LMV) and a government-approved ID (Aadhaar Card, Passport, or Voter ID). Soft copies on mobile or expired documents are not accepted. For foreign nationals, an International Driving Permit along with a home-country license is mandatory.
        </div>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-trigger" aria-expanded="false">
        <span>Is a security deposit required?</span>
        <svg class="faq-plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <div class="faq-content">
        <div class="faq-answer">
          Yes, a small refundable security deposit (ranging from ₹2,000 to ₹5,000 depending on the vehicle category) is collected during car handover. This deposit is fully refunded immediately upon returning the car, subject to zero traffic fines, toll slips, or damage.
        </div>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-trigger" aria-expanded="false">
        <span>What is the fuel policy?</span>
        <svg class="faq-plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <div class="faq-content">
        <div class="faq-answer">
          We operate on a "like-to-like" fuel policy. The vehicle will be handed over with a certain amount of fuel (usually half-tank or quarter-tank), and you must return the car with the exact same level. Additional fuel left in the tank during return is non-refundable.
        </div>
      </div>
    </div>

    <div class="faq-item">
      <button class="faq-trigger" aria-expanded="false">
        <span>Is airport delivery available and are there delivery charges?</span>
        <svg class="faq-plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <div class="faq-content">
        <div class="faq-answer">
          Yes, we provide 24/7 delivery directly to both Manohar International Airport in Mopa (GOX) and Dabolim Airport (GOI). Airport delivery is free for bookings of 3 days or more. For shorter rentals, a nominal delivery fee may apply.
        </div>
      </div>
    </div>

  </div>
</section>

<!-- PREMIUM FINAL CTA -->
<section class="section-padding premium-cta-section">
  <div class="container premium-cta-content">
    <h2 class="premium-cta-title">Ready to Explore Goa on Your Own Terms?</h2>
    <p class="premium-cta-desc">Choose your clean, well-maintained self-drive car today and skip expensive airport tourist cabs entirely.</p>
    <div class="premium-cta-actions">
      <a href="fleet.html" class="btn btn-white">Browse Cars</a>
      <a href="https://wa.me/${BUSINESS_INFO.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book on WhatsApp</a>
    </div>
  </div>
</section>

${renderStoryContainer("Uncover the Best Road Trips and Hidden Gems of Goa", HOME_STORIES)}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "index.html"), indexHtml);

// --- fleet.html ---
const fleetHtml = `
${headerTemplate("Browse Our Self Drive Cars Fleet in Goa", "Rent clean and well-maintained self-drive hatchbacks, sedans, SUVs, family MPVs, and luxury cars in Goa. Interactive filters and instant WhatsApp booking.", "", "fleet")}
${breadcrumbTemplate([{ label: "Our Fleet", url: "fleet.html" }])}

<section class="section-padding" style="background-color: var(--light-bg);">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3rem;">
      <span class="section-subtitle">Apna Drive Fleet</span>
      <h1 class="section-title">Rent Self-Drive Cars in Goa</h1>
      <p class="section-desc">Search, filter, and compare our legal commercial fleet of 19 sanitized vehicles. Book instantly with zero hidden surcharges.</p>
    </div>

    <!-- FILTER BOARD -->
    <div class="booking-form-card" style="margin-bottom: 3rem; padding: 1.5rem;">
      <div class="booking-form-grid" style="grid-template-columns: repeat(5, 1fr);">
        
        <div class="form-group-col">
          <label class="input-label" for="search-car">Search Car Name</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" class="form-input" id="search-car" placeholder="e.g. Thar, Swift...">
          </div>
        </div>

        <div class="form-group-col">
          <label class="input-label" for="filter-category">Category</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h1"/><circle cx="18.5" cy="17" r="2.5"/><circle cx="7.5" cy="17" r="2.5"/><path d="M13 17H9"/></svg>
            <select class="form-select" id="filter-category">
              <option value="all">All Categories</option>
              <option value="Hatchbacks">Hatchbacks</option>
              <option value="Sedans">Sedans</option>
              <option value="SUVs">SUVs</option>
              <option value="Family Cars">Family MPVs</option>
              <option value="Premium Cars">Premium Luxury</option>
            </select>
          </div>
        </div>

        <div class="form-group-col">
          <label class="input-label" for="filter-transmission">Transmission</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
            <select class="form-select" id="filter-transmission">
              <option value="all">Any Gearbox</option>
              <option value="Automatic">Automatic Only</option>
              <option value="Manual">Manual Only</option>
            </select>
          </div>
        </div>

        <div class="form-group-col">
          <label class="input-label" for="filter-fuel">Fuel Type</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <select class="form-select" id="filter-fuel">
              <option value="all">Any Fuel</option>
              <option value="Petrol">Petrol Only</option>
              <option value="Diesel">Diesel Only</option>
            </select>
          </div>
        </div>

        <div class="form-group-col">
          <label class="input-label" for="sort-price">Sort Price</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            <select class="form-select" id="sort-price">
              <option value="default">Default Sort</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div class="form-group-col" style="grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--muted-text);">
            Adjusting selectors filters our 19 vehicle options in real-time.
          </div>
          <button class="btn btn-outline" id="btn-reset-filters" style="padding: 0.5rem 1rem; font-size: 0.85rem;">Reset Filters</button>
        </div>

      </div>
    </div>

    <!-- FLEET LISTINGS GRID -->
    <div class="grid grid-3 car-cards-grid" id="fleet-grid">
      <!-- Generated via fleet.js client-side -->
    </div>

  </div>
</section>

${renderStoryContainer("Explore Our Premium Fleet of Self-Drive Vehicles", FLEET_STORIES)}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "fleet.html"), fleetHtml);

// --- services.html ---
const servicesHtml = `
${headerTemplate("Self Drive Services in Goa - Apna Drive Services", "Discover our range of self-drive car services in Goa. From Mopa airport deliveries and automated car rentals to corporate packages. Rent at competitive prices.", "", "services")}
${breadcrumbTemplate([{ label: "Our Services", url: "services.html" }])}

<section class="section-padding">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <span class="section-subtitle">Rental Solutions</span>
      <h1 class="section-title">Self-Drive Car Rental Services in Goa</h1>
      <p class="section-desc">We offer highly specialized, tourist-focused rental services to ensure you enjoy absolute comfort, flexibility, and convenience during your Goa visit.</p>
    </div>

    <div class="grid grid-3 services-grid">
      ${SERVICES.map(service => `
        <div class="service-item-card">
          <h3>
            <span style="color: var(--primary-green);">🌴</span> 
            ${service.name}
          </h3>
          <p>${service.intro.slice(0, 150)}...</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <a href="services/${service.slug}.html" class="service-item-link">Learn More &rsaquo;</a>
            <a href="https://wa.me/917410563071?text=${encodeURIComponent('Hello Apna Drive, I want to book ' + service.name + '. Please share availability.')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-radius: 4px;">Book Now</a>
          </div>
        </div>
      `).join("")}
    </div>
  </div>
</section>

${renderStoryContainer("Premium Self-Drive Car Services in Goa", getParameterizedStories("service", "Self-Drive Services"))}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "services.html"), servicesHtml);

// --- about.html ---
const aboutHtml = `
${headerTemplate("About Apna Drive - Self Drive Car Rental Goa", "Read our story. Apna Drive is Goa's most transparent and reliable self-drive car rental provider. 100% legal RTO registered cars. No hidden fees.", "", "about")}
${breadcrumbTemplate([{ label: "About Us", url: "about.html" }])}

<section class="section-padding">
  <div class="container" style="max-width: 900px;">
    <div class="text-center" style="margin-bottom: 3rem;">
      <span class="section-subtitle">Our Story</span>
      <h1 class="section-title">About Apna Drive Goa</h1>
      <p class="section-desc">Your trusted, legal, and highly reliable self-drive vehicle partner in the land of sun, sand, and coastal highways.</p>
    </div>

    <div style="font-size: 1.1rem; line-height: 1.8; color: var(--dark-text);">
      <p style="margin-bottom: 1.5rem;">
        Welcome to <strong>Apna Drive</strong>, one of Goa's premier providers of clean, sanitized, and fully insured self-drive car rentals. We believe that traveling is about experiencing freedom. Our company was founded by Goan travel enthusiasts who wanted to provide tourists with a highly transparent, legal, and seamless alternative to overpriced local transport taxis.
      </p>
      <p style="margin-bottom: 1.5rem;">
        Unlike many unlicensed operations, <strong>Apna Drive operates a 100% legal fleet of commercial transport vehicles</strong> carrying black license plates with yellow lettering. This protects you from traffic police inspection fines and ensures our comprehensive insurance covers self-drive use.
      </p>
      
      <h3 class="specs-section-title" style="margin: 2.5rem 0 1.25rem 0;">Our Vehicle Standards</h3>
      <p style="margin-bottom: 1.5rem;">
        Every car in our fleet—ranging from agile hatchbacks like the Swift to luxurious SUVs like the Fortuner and convertible Thar—undergoes an intensive multi-point mechanical inspection, tyre-pressure review, and detailed cabin deep cleaning before every single handover. We sanitize high-touch surfaces, including the steering wheel, gear shifts, door locks, and keys, to ensure your family's health and safety.
      </p>

      <h3 class="specs-section-title" style="margin: 2.5rem 0 1.25rem 0;">No Fake Claims, Just Real Value</h3>
      <p style="margin-bottom: 1.5rem;">
        We don't claim to be "Goa's Number One Award-Winning Corporation" with "Millions of Fake Satisfied Customers". We are a humble, professional, and dedicated local Goan team that treats every single traveler like our guest. We provide clear pricing with zero hidden surcharges, detailed digital checklists during handovers, and reliable 24/7 roadside assistance on WhatsApp.
      </p>
    </div>

    <div class="premium-cta-actions" style="margin-top: 4rem;">
      <a href="fleet.html" class="btn btn-secondary">Browse Our 19 Cars</a>
      <a href="contact.html" class="btn btn-outline">Talk to Our Team</a>
    </div>

  </div>
</section>

${renderStoryContainer("The History, Values, and People Behind Apna Drive", ABOUT_STORIES)}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "about.html"), aboutHtml);

// --- contact.html ---
const contactHtml = `
${headerTemplate("Contact Apna Drive - Self Drive Car Rental Goa", "Reach out to Apna Drive. Contact details, Google Map iframe, phone numbers, and WhatsApp booking lines. Doorstep deliveries across Goa.", "", "contact")}
${breadcrumbTemplate([{ label: "Contact Us", url: "contact.html" }])}

<section class="section-padding">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <span class="section-subtitle">Get In Touch</span>
      <h1 class="section-title">Contact Apna Drive Goa</h1>
      <p class="section-desc">Our booking desk and customer assistance agents are available 24/7. Have queries about pricing, pick-ups, or paperwork? Reach out to us!</p>
    </div>

    <div class="car-details-grid">
      
      <!-- Contact Form -->
      <div class="booking-sidebar-card">
        <h3 class="booking-sidebar-title">📩 Send a Message</h3>
        <form id="goa-contact-form">
          <div style="margin-bottom: 1.2rem;">
            <label class="input-label" for="contact-name">Full Name *</label>
            <input type="text" class="form-input" id="contact-name" style="padding-left: 1rem;" placeholder="Your Name" required>
          </div>
          <div style="margin-bottom: 1.2rem;">
            <label class="input-label" for="contact-phone">Phone Number *</label>
            <input type="tel" class="form-input" id="contact-phone" style="padding-left: 1rem;" placeholder="10-Digit Mobile Number" required>
          </div>
          <div style="margin-bottom: 1.2rem;">
            <label class="input-label" for="contact-email">Email Address *</label>
            <input type="email" class="form-input" id="contact-email" style="padding-left: 1rem;" placeholder="Email ID" required>
          </div>
          <div style="margin-bottom: 1.2rem;">
            <label class="input-label" for="contact-car-pref">Car Preference</label>
            <select class="form-select" id="contact-car-pref" style="padding-left: 1rem;">
              <option value="" selected>Any Available Car</option>
              ${CARS.map(car => `<option value="${car.name}">${car.name}</option>`).join("")}
            </select>
          </div>
          <div style="margin-bottom: 1.2rem;">
            <label class="input-label" for="contact-location">Your Goa Location *</label>
            <select class="form-select" id="contact-location" style="padding-left: 1rem;" required>
              <option value="" disabled selected>Select location</option>
              ${LOCATIONS.map(loc => `<option value="${loc.name}">${loc.name}</option>`).join("")}
            </select>
          </div>
          <div style="margin-bottom: 1.2rem;">
            <label class="input-label" for="contact-travel-date">Travel Date *</label>
            <input type="date" class="form-input" id="contact-travel-date" style="padding-left: 1rem;" required>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <label class="input-label" for="contact-message">Your Message</label>
            <textarea class="form-input" id="contact-message" style="padding-left: 1rem; height: 100px; padding-top: 0.5rem;" placeholder="How can our team help you?"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; height: 46px; font-weight: 700;">Submit Enquiry</button>
        </form>
      </div>

      <!-- Contact Info & Google Map -->
      <div>
        <div class="policy-card" style="margin-bottom: 2rem;">
          <h3 class="specs-section-title">Support Desk</h3>
          <ul class="footer-contact-list" style="margin-top: 1rem;">
            <li class="footer-contact-item">
              <span class="footer-contact-icon">📞</span>
              <div>
                <strong>Phone:</strong><br>
                <a href="tel:${BUSINESS_INFO.phoneLink}" style="color: var(--primary-green); font-weight: 700;">${BUSINESS_INFO.phone}</a>
              </div>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">💬</span>
              <div>
                <strong>WhatsApp Booking Line:</strong><br>
                <a href="https://wa.me/${BUSINESS_INFO.whatsapp}" target="_blank" rel="noopener noreferrer" style="color: var(--primary-green); font-weight: 700;">+${BUSINESS_INFO.whatsapp}</a>
              </div>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">✉️</span>
              <div>
                <strong>Email:</strong><br>
                <a href="mailto:${BUSINESS_INFO.email}" style="color: var(--primary-green); font-weight: 700;">${BUSINESS_INFO.email}</a>
              </div>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">📍</span>
              <div>
                <strong>Head Office:</strong><br>
                ${BUSINESS_INFO.address}
              </div>
            </li>
            <li class="footer-contact-item">
              <span class="footer-contact-icon">⏱️</span>
              <div>
                <strong>Business Hours:</strong><br>
                ${BUSINESS_INFO.hours} (Deliveries and pickups are available 24/7)
              </div>
            </li>
          </ul>
        </div>

        <!-- Google Map Section -->
        <div style="margin-bottom: 0.75rem; font-weight: 600; color: var(--primary-dark); display: flex; align-items: center; gap: 0.35rem;">
          <span>📍</span> Google Map: Dabolim Airport, Goa
        </div>
        <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); height: 260px; width: 100%;">
          <!-- Replace the Google Maps iframe src below with the final business map embed URL -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122971.50346387063!2d73.74312658826767!3d15.599988224538808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfec04eb589571%3A0xf673da1e9882fbed!2sCalangute%2C%20Goa!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Apna Drive Goa Head Office Location Map - Dabolim Airport, Goa">
          </iframe>
        </div>
      </div>

    </div>
  </div>

  <!-- CONTACT SUCCESS POPUP -->
  <div id="contact-success-modal" class="mobile-overlay" style="display: none; align-items: center; justify-content: center; padding: 1.5rem;">
    <div class="booking-form-card" style="width: 100%; max-width: 500px; box-shadow: var(--shadow-lg); padding: 2rem;">
      <h3 class="booking-sidebar-title" style="text-align: center; color: var(--primary-green); font-size: 1.4rem; margin-bottom: 1rem;">🎉 Enquiry Received</h3>
      
      <p style="font-size: 0.9rem; color: var(--primary-dark); line-height: 1.5; margin-bottom: 1.2rem; text-align: center;">
        Thank you for reaching out to <strong>Apna Drive</strong>.<br><br>
        Your contact enquiry has been prepared successfully. Our team will check details and contact you as soon as possible.
      </p>

      <!-- Enquiry ID Card -->
      <div style="background-color: var(--light-bg); border: 2px dashed var(--primary-green); padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1.5rem;">
        <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: var(--muted-text); letter-spacing: 0.5px;">Enquiry ID</span>
        <div style="font-size: 2rem; font-weight: 800; color: var(--primary-green); margin: 0.25rem 0;" id="contact-enquiry-id">ADQXXXX</div>
        <span style="font-size: 0.75rem; color: var(--muted-text); font-weight: 500;">Please keep this ID for reference.</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        <button class="btn btn-outline" id="close-contact-modal" style="width: 100%; font-weight: 600;">Close</button>
        <button class="btn btn-primary" id="btn-send-contact-whatsapp" style="width: 100%; background-color: #25D366; border-color: #25D366; font-weight: 700;">Continue on WhatsApp</button>
      </div>
    </div>
  </div>

  <style>
    #contact-success-modal.is-visible {
      display: flex !important;
      opacity: 1 !important;
      visibility: visible !important;
      z-index: 1000 !important;
      background-color: rgba(18, 55, 42, 0.6) !important;
    }
  </style>
</section>

${renderStoryContainer("Direct Human Support and Round-the-Clock Assistance", CONTACT_STORIES)}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "contact.html"), contactHtml);

// --- booking.html ---
const bookingHtml = `
${headerTemplate("Book Your Self Drive Car in Goa - Apna Drive", "Reserve your clean, well-maintained self-drive car in Goa. Custom booking summary and instant pre-filled WhatsApp message generation.", "", "booking")}
${breadcrumbTemplate([{ label: "Book a Car", url: "booking.html" }])}

<section class="section-padding" style="background-color: var(--light-bg);">
  <div class="container" style="max-width: 900px;">
    <div class="text-center" style="margin-bottom: 3rem;">
      <span class="section-subtitle">Booking Engine</span>
      <h1 class="section-title">Reserve Your Self-Drive Car</h1>
      <p class="section-desc">Submit your Goa travel itinerary below. Your booking request will be reviewed and confirmed by our managers on WhatsApp based on vehicle availability.</p>
    </div>

    <!-- Booking Form -->
    <form class="booking-form-card" id="goa-booking-form" style="padding: 2.5rem;">
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <label class="input-label" for="booking-name">Full Name *</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <input type="text" class="form-input" id="booking-name" placeholder="Lead Driver Name" required>
          </div>
        </div>
        <div>
          <label class="input-label" for="booking-phone">Phone Number *</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <input type="tel" class="form-input" id="booking-phone" placeholder="10-Digit Mobile Number" required>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <label class="input-label" for="booking-email">Email Address *</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <input type="email" class="form-input" id="booking-email" placeholder="Your Email ID" required>
          </div>
        </div>
        <div>
          <label class="input-label" for="booking-car-select">Selected Car *</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h1"/><circle cx="18.5" cy="17" r="2.5"/><circle cx="7.5" cy="17" r="2.5"/><path d="M13 17H9"/></svg>
            <select class="form-select" id="booking-car-select" required>
              <option value="" disabled selected>Select Car Model</option>
              ${CARS.map(car => `<option value="${car.name}">${car.name} (Starts ₹${car.price}/day)</option>`).join("")}
            </select>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <label class="input-label" for="booking-pickup-loc">Pickup Location *</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
            <select class="form-select" id="booking-pickup-loc" required>
              <option value="" disabled selected>Where to pick up?</option>
              ${LOCATIONS.map(loc => `<option value="${loc.name}">${loc.name}</option>`).join("")}
            </select>
          </div>
        </div>
        <div>
          <label class="input-label" for="booking-dropoff-loc">Drop-off Location *</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
            <select class="form-select" id="booking-dropoff-loc" required>
              <option value="" disabled selected>Where to return?</option>
              ${LOCATIONS.map(loc => `<option value="${loc.name}">${loc.name}</option>`).join("")}
            </select>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="grid-column: span 1;">
          <label class="input-label" for="booking-pickup-date">Pickup Date *</label>
          <input type="date" class="form-input" id="booking-pickup-date" style="padding-left: 0.75rem;" required>
        </div>
        <div style="grid-column: span 1;">
          <label class="input-label" for="booking-pickup-time">Pickup Time *</label>
          <input type="time" class="form-input" id="booking-pickup-time" style="padding-left: 0.75rem;" value="09:00" required>
        </div>
        <div style="grid-column: span 1;">
          <label class="input-label" for="booking-dropoff-date">Drop Date *</label>
          <input type="date" class="form-input" id="booking-dropoff-date" style="padding-left: 0.75rem;" required>
        </div>
        <div style="grid-column: span 1;">
          <label class="input-label" for="booking-dropoff-time">Drop Time *</label>
          <input type="time" class="form-input" id="booking-dropoff-time" style="padding-left: 0.75rem;" value="09:00" required>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 1.5rem;">
        <div>
          <label class="input-label" for="booking-travellers">Number of Travellers</label>
          <input type="number" class="form-input" id="booking-travellers" style="padding-left: 1rem;" value="2" min="1" max="10">
        </div>
        <div>
          <label class="input-label" for="booking-transmission-pref">Gearbox Preference</label>
          <select class="form-select" id="booking-transmission-pref" style="padding-left: 1rem;">
            <option value="No Preference">No Preference</option>
            <option value="Automatic">Automatic Transmission Only</option>
            <option value="Manual">Manual Transmission Only</option>
          </select>
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label class="input-label" for="booking-message">Special Instructions or Flight Details (Optional)</label>
        <textarea class="form-input" id="booking-message" style="padding-left: 1rem; height: 80px; padding-top: 0.5rem;" placeholder="e.g. Flight AI-123 landing at 2:00 PM. Deliver car at terminal arrival block..."></textarea>
      </div>

      <div style="margin-bottom: 2rem;">
        <label class="flex items-center gap-1" style="font-size: 0.85rem; font-weight: 500; cursor: pointer;">
          <input type="checkbox" id="booking-consent" required style="width: 16px; height: 16px; accent-color: var(--primary-green);">
          <span>I agree to the Apna Drive rental policies, fuel terms, and eligibility conditions (DL, Age 21+).</span>
        </label>
      </div>

      <button type="submit" class="form-btn-submit" style="width: 100%; height: 50px; font-size: 1.1rem;">Review Booking Summary &rsaquo;</button>
    </form>

    <!-- MODAL POPUP FOR SUMMARY -->
    <div id="booking-summary-modal" class="mobile-overlay" style="display: none; align-items: center; justify-content: center; padding: 1.5rem;">
      <div class="booking-form-card" style="width: 100%; max-width: 500px; box-shadow: var(--shadow-lg); padding: 2rem;">
        <h3 class="booking-sidebar-title" style="text-align: center; color: var(--primary-green); font-size: 1.4rem; margin-bottom: 1rem;">🎉 Booking Request Received</h3>
        
        <p style="font-size: 0.9rem; color: var(--primary-dark); line-height: 1.5; margin-bottom: 1.2rem; text-align: center;">
          Thank you for choosing <strong>Apna Drive</strong>.<br><br>
          Your booking enquiry has been prepared successfully. Our team will check vehicle availability and contact you as soon as possible with confirmation and rental details.
        </p>

        <!-- Booking ID Card -->
        <div style="background-color: var(--light-bg); border: 2px dashed var(--primary-green); padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1.5rem;">
          <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: var(--muted-text); letter-spacing: 0.5px;">Booking Enquiry ID</span>
          <div style="font-size: 2rem; font-weight: 800; color: var(--primary-green); margin: 0.25rem 0;" id="sum-booking-id">APXXXX</div>
          <span style="font-size: 0.75rem; color: var(--muted-text); font-weight: 500;">Please keep this ID for reference.</span>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 1.5rem; text-align: left;">
          <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 0.5rem 0; color: var(--muted-text);">Selected Vehicle</th><td style="padding: 0.5rem 0; font-weight:700; text-align: right;" id="sum-car-name">Car Name</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 0.5rem 0; color: var(--muted-text);">Lead Driver</th><td style="padding: 0.5rem 0; font-weight:700; text-align: right;" id="sum-customer-name">Name</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 0.5rem 0; color: var(--muted-text);">Phone Number</th><td style="padding: 0.5rem 0; font-weight:700; text-align: right;" id="sum-customer-phone">Phone</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 0.5rem 0; color: var(--muted-text);">Pickup Schedule</th><td style="padding: 0.5rem 0; font-weight:700; text-align: right; font-size: 0.8rem;" id="sum-pickup">Pickup details</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 0.5rem 0; color: var(--muted-text);">Return Schedule</th><td style="padding: 0.5rem 0; font-weight:700; text-align: right; font-size: 0.8rem;" id="sum-dropoff">Return details</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 0.5rem 0; color: var(--muted-text);">Passengers</th><td style="padding: 0.5rem 0; font-weight:700; text-align: right;" id="sum-travellers">Passengers</td></tr>
          <tr style="border-bottom: 1px solid var(--border-color);"><th style="padding: 0.5rem 0; color: var(--muted-text);">Transmission</th><td style="padding: 0.5rem 0; font-weight:700; text-align: right;" id="sum-transmission">Transmission</td></tr>
        </table>

        <div style="background-color: var(--soft-cream); padding: 0.85rem; border-radius: 6px; border: 1px solid rgba(18,55,42,0.15); margin-bottom: 1.5rem; text-align: center;">
          <p style="font-size: 0.75rem; color: var(--primary-dark); font-weight: 600; margin-bottom: 0; line-height: 1.4;">
            Your booking will be confirmed only after vehicle availability is verified by our team.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <button class="btn btn-outline" id="close-summary-modal" style="width: 100%; font-weight: 600;">Close</button>
          <button class="btn btn-primary" id="btn-send-whatsapp" style="width: 100%; background-color: #25D366; border-color: #25D366; font-weight: 700;">Continue on WhatsApp</button>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- Inject specific modal toggle rules into style.css mapping -->
<style>
  #booking-summary-modal.is-visible {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    z-index: 1000 !important;
    background-color: rgba(18, 55, 42, 0.6) !important;
  }
</style>

${renderStoryContainer("Seamless Booking Processes and Transparent Pricing", BOOKING_STORIES)}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "booking.html"), bookingHtml);

// --- blogs.html ---
const blogsHtml = `
${headerTemplate("Self Drive Travel Blogs & Goa Road Trip Guides", "Curated travel articles, itineraries, packing guides, and tips for self-driving in Goa. Plan your beach-hopping routes with Apna Drive.", "", "blogs")}
${breadcrumbTemplate([{ label: "Our Blogs", url: "blogs.html" }])}

<section class="section-padding" style="background-color: var(--light-bg);">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <span class="section-subtitle">Road Trip Insights</span>
      <h1 class="section-title">Goa Travel &amp; Car Rental Blogs</h1>
      <p class="section-desc">Get professional tips, seasonal travel insights, required documents guides, and scenic route recommendations written specifically for self-drive tourists in Goa.</p>
    </div>

    <div class="grid grid-3 travel-grid">
      ${BLOGS.map(blog => `
        <div class="travel-card">
          <div class="travel-card-img-box">
            <img src="images/blogs/${blog.id}.webp" alt="${blog.name}" class="travel-card-img" loading="lazy">
          </div>
          <div class="travel-card-body">
            <span class="travel-card-tag">${blog.category} • ${blog.date}</span>
            <h3>${blog.name}</h3>
            <p>${blog.intro.slice(0, 140)}...</p>
            <a href="blog/${blog.slug}.html" class="service-item-link" style="margin-top: auto;">Read Full Article &rsaquo;</a>
          </div>
        </div>
      `).join("")}
    </div>
  </div>
</section>

${renderStoryContainer("Insider Insights, Road Trip Guides, and Detailing Integrity", BLOG_STORIES)}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "blogs.html"), blogsHtml);

// --- goa-travel.html ---
const goaTravelHtml = `
${headerTemplate("Ultimate Goa Travel Guide - Scenic Road Trips by Car", "Discover top attractions in North and South Goa. Historic forts, quiet beaches, spice plantations, and waterfalls accessible easily by car.", "", "goa-travel")}
${breadcrumbTemplate([{ label: "Goa Travel Guide", url: "goa-travel.html" }])}

<section class="section-padding">
  <div class="container" style="max-width: 950px;">
    
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <span class="section-subtitle">Travel Companion</span>
      <h1 class="section-title">Goa Self-Drive Travel Guide</h1>
      <p class="section-desc">Goa is far more than just beaches! Discover cultural monuments, mountain drives, markets, and waterfalls that are best experienced with a reliable rental car.</p>
    </div>

    <div style="font-size: 1.05rem; line-height: 1.8; color: var(--dark-text);">
      
      <!-- North Goa Sights -->
      <h2 class="specs-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">1. North Goa Attractions (Beach Vibe &amp; Nightlife)</h2>
      <p style="margin-bottom: 1.5rem;">
        North Goa represents high energy, luxury beach bars, para-sailing, and heritage forts. Driving your self-drive car up Fort Aguada in Candolim provides sweeping panoramic views of the sea, while Chapora Fort (famous for sunset sights) represents a lovely scenic drive. Explore boho Assagao villages for upscale boutiques, cafes and craft cocktail bars.
      </p>

      <!-- South Goa Sights -->
      <h2 class="specs-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">2. South Goa Attractions (Heritage &amp; Pristine Wilderness)</h2>
      <p style="margin-bottom: 1.5rem;">
        If you want to relax, South Goa is your paradise. Drive along smooth scenic highways framed by thick coconut rows to Cabo de Rama—a dramatic cliff fortress overlooking an empty blue bay. Visit Palolem Beach's calm crescent bay, shop at historic Margao municipal markets, and explore old Portuguese colonial mansions in Chandor.
      </p>

      <!-- Waterfalls and Forests -->
      <h2 class="specs-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">3. Inland Sights, Forests &amp; Waterfalls</h2>
      <p style="margin-bottom: 1.5rem;">
        Rent a powerful SUV like the Creta or Thar and head east to the lush Western Ghats. Explore Dudhsagar Waterfalls (India's famous four-tiered cascade), tour a tropical spice plantation in Ponda, and enjoy an authentic traditional Goan buffet meal.
      </p>

      <!-- Driving Safety & Navigation -->
      <div class="policy-card" style="margin-top: 3rem; background-color: var(--light-bg);">
        <h3 style="margin-bottom: 0.75rem;">🚗 Goa Self-Drive Survival Tips:</h3>
        <ul class="inc-exc-list" style="margin-top: 0.5rem;">
          <li class="inc-exc-item"><span style="color:var(--primary-green);">✔</span> <strong>Moderation:</strong> Narrow lanes have blind corners. Drive under 40 km/h in coastal beach alleys.</li>
          <li class="inc-exc-item"><span style="color:var(--primary-green);">✔</span> <strong>Strict Parking:</strong> Avoid yellow stripes or blocking local entrances. Always park in paid municipal spots.</li>
          <li class="inc-exc-item"><span style="color:var(--primary-green);">✔</span> <strong>No beach sand:</strong> Never drive on sand—saltwater damages chassis and incurs heavy fines up to ₹50,000.</li>
        </ul>
      </div>

    </div>

    <div class="premium-cta-actions" style="margin-top: 4rem;">
      <a href="fleet.html" class="btn btn-primary">Choose Your Car</a>
      <a href="blogs.html" class="btn btn-outline">Read Road Trip Blogs</a>
    </div>

  </div>
</section>

${renderStoryContainer("Inspiring Itineraries and Travel Guides for Goa Explorers", GOA_TRAVEL_STORIES)}

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "goa-travel.html"), goaTravelHtml);

// --- 404.html ---
const errorHtml = `
${headerTemplate("Page Not Found - Apna Drive Goa", "The requested page was not found on our server. Browse our self drive car rental fleet in Goa.", "", "404")}

<section class="section-padding text-center" style="background-color: var(--soft-cream); min-height: 70vh; display: flex; align-items: center; justify-content: center;">
  <div class="container" style="max-width: 550px;">
    <div style="font-size: 5rem; margin-bottom: 1.5rem;">🌴</div>
    <h1 style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary-dark);">Page Not Found</h1>
    <p style="color: var(--muted-text); font-size: 1.1rem; margin-bottom: 2.5rem;">The road trip page you are looking for has taken another route or does not exist. Let's get you back on track!</p>
    
    <div style="display: flex; gap: 1rem; justify-content: center;">
      <a href="index.html" class="btn btn-secondary">Go to Homepage</a>
      <a href="fleet.html" class="btn btn-primary">Browse Fleet</a>
    </div>
  </div>
</section>

${footerTemplate("")}
`;
fs.writeFileSync(path.join(process.cwd(), "404.html"), errorHtml);


/* =========================================
   2. POLICY & LEGAL PAGES (10 Pages)
   ========================================= */
const policies = [
  { slug: "terms-and-conditions", title: "Terms and Conditions", desc: "Rental terms, agreements, rules, and billing conditions." },
  { slug: "privacy-policy", title: "Privacy Policy", desc: "User data security, information collection, and usage terms." },
  { slug: "cancellation-policy", title: "Cancellation and Refund Policy", desc: "Details on booking cancellations, refunds, and rescheduling terms." },
  { slug: "rental-policy", title: "General Rental Policy", desc: "Official guidelines for self-driving, documentation, and handover processes." },
  { slug: "fuel-policy", title: "Fuel Policy", desc: "Transparent like-to-like fuel guidelines and return instructions." },
  { slug: "security-deposit-policy", title: "Security Deposit Policy", desc: "Security deposit terms, refund schedule, and fine deductions." },
  { slug: "damage-policy", title: "Damage and Accident Policy", desc: "Insurance, accidental liability limits, and damage assessment rules." },
  { slug: "driver-eligibility", title: "Driver Eligibility Policy", desc: "Age requirements, license validations, and verification details." },
  { slug: "cookie-policy", title: "Cookie Policy", desc: "How we utilize local browser cookies to optimize search parameters." },
  { slug: "disclaimer", title: "Disclaimer Notice", desc: "General business disclaimer, website terms, and legal notices." }
];

policies.forEach(policy => {
  const policyHtml = `
${headerTemplate(policy.title + " | Apna Drive Goa", policy.desc, "", "legal")}
${breadcrumbTemplate([{ label: policy.title, url: policy.slug + ".html" }])}

<section class="section-padding">
  <div class="container" style="max-width: 800px;">
    <h1 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--primary-dark);">${policy.title}</h1>
    <p style="color: var(--muted-text); font-size: 0.95rem; margin-bottom: 2.5rem; font-style: italic;">
      *Important Notice: Apna Drive requires all customers to review our policies before finalizing their reservation. The business owner reserves all rights to amend these clauses in accordance with local Goan transport regulations. Last updated: July 2026.
    </p>

    <div style="line-height: 1.8; color: var(--dark-text);">
      <h3 class="specs-section-title" style="margin: 2rem 0 0.75rem 0;">1. General Agreement</h3>
      <p style="margin-bottom: 1.5rem;">
        By renting a self-drive car from Apna Drive Goa, the renter acknowledges and agrees to comply with all regional traffic laws, transport department directives, and municipal regulations of the State of Goa. The vehicle must only be driven by the authorized person whose driving license was verified during the handover process.
      </p>

      <h3 class="specs-section-title" style="margin: 2rem 0 0.75rem 0;">2. Driver Eligibility and Verification</h3>
      <p style="margin-bottom: 1.5rem;">
        The lead driver must be at least 21 years of age and possess an original, valid Light Motor Vehicle (LMV) Indian Driving License for at least 1 continuous year. Renter must produce original Aadhaar cards or passports during delivery. Soft copies on non-transport portals or learner DLs are strictly rejected.
      </p>

      <h3 class="specs-section-title" style="margin: 2rem 0 0.75rem 0;">3. Usage Boundaries</h3>
      <p style="margin-bottom: 1.5rem;">
        Vehicles rented under self-drive licenses from Apna Drive <strong>are strictly forbidden from traveling outside the geographical boundaries of the State of Goa</strong>, unless a specific interstate transport permit is issued in writing by our management. Off-roading, beach sand driving, drag racing, or commercial carriage of paid passengers is strictly illegal.
      </p>

      <h3 class="specs-section-title" style="margin: 2rem 0 0.75rem 0;">4. Rental Charges and Deposit Releases</h3>
      <p style="margin-bottom: 1.5rem;">
        The refundable security deposit is collected upon handover and released immediately during return, subject to vehicle inspection. Any outstanding parking violation fines, speed camera tickets, or municipal tolls captured during your rental tenure will be deducted directly from the security deposit or invoiced to your lead email address.
      </p>
    </div>

    <div style="margin-top: 4rem; border-top: 1px solid var(--border-color); padding-top: 2rem; text-align: center;">
      <a href="booking.html" class="btn btn-primary">Agree and Go to Booking Form</a>
    </div>

  </div>
</section>
${footerTemplate("")}
`;
  fs.writeFileSync(path.join(process.cwd(), `${policy.slug}.html`), policyHtml);
});


/* =========================================
   3. CAR-SPECIFIC PAGES (19 Pages in cars/)
   ========================================= */
CARS.forEach(car => {
  const carHtml = `
${headerTemplate(car.seoTitle, car.seoDesc, "../", "cars/" + car.slug)}
${breadcrumbTemplate([{ label: "Our Fleet", url: "fleet.html" }, { label: car.name, url: "" }], "../")}

<section class="section-padding">
  <div class="container">
    
    <!-- Car Header Title & Price -->
    <div class="car-details-header">
      <div class="car-details-title-row">
        <h1>Self Drive ${car.name}</h1>
        <div class="car-details-price">₹${car.price} <span>/ day</span></div>
      </div>
      <div class="car-details-meta">
        <span class="badge" style="margin-bottom:0;">${car.category}</span>
        <span class="meta-status">Active &amp; Sanitized</span>
        <span style="color: var(--muted-text); font-size: 0.9rem;">📍 Doorstep Delivery across Goa</span>
      </div>
    </div>

    <!-- Main Detail Grid Layout -->
    <div class="car-details-grid">
      
      <!-- Left Content Column -->
      <div>
        
        <!-- Image Gallery Slider -->
        <div class="gallery-container">
          <div class="gallery-main">
            <img src="../${car.image}" alt="${car.name} Self Drive Rental Goa" class="gallery-main-img" id="main-detail-img">
          </div>
          <div class="gallery-thumbnails">
            <div class="gallery-thumb is-active" onclick="document.getElementById('main-detail-img').src=this.querySelector('img').src; document.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('is-active')); this.classList.add('is-active');">
              <img src="../${car.image}" alt="${car.name} Front">
            </div>
            <!-- Standard dynamic thumbnails with fallback image -->
            <div class="gallery-thumb" onclick="document.getElementById('main-detail-img').src=this.querySelector('img').src; document.querySelectorAll('.gallery-thumb').forEach(t=>t.classList.remove('is-active')); this.classList.add('is-active');">
              <img src="../images/hero/apna-drive-hero.webp" alt="Apna Drive Handover">
            </div>
          </div>
        </div>

        <!-- Specifications grid -->
        <h3 class="specs-section-title">Key Specifications</h3>
        <div class="specs-detail-grid">
          <div class="spec-detail-card">
            <div class="spec-icon-box">⚙️</div>
            <div class="spec-detail-info">
              <h4>Transmission</h4>
              <p>${car.transmission}</p>
            </div>
          </div>
          <div class="spec-detail-card">
            <div class="spec-icon-box">⛽</div>
            <div class="spec-detail-info">
              <h4>Fuel Type</h4>
              <p>${car.fuel}</p>
            </div>
          </div>
          <div class="spec-detail-card">
            <div class="spec-icon-box">👥</div>
            <div class="spec-detail-info">
              <h4>Seating</h4>
              <p>${car.seats} Persons</p>
            </div>
          </div>
          <div class="spec-detail-card">
            <div class="spec-icon-box">💼</div>
            <div class="spec-detail-info">
              <h4>Luggage</h4>
              <p>${car.luggage}</p>
            </div>
          </div>
          <div class="spec-detail-card">
            <div class="spec-icon-box">❄️</div>
            <div class="spec-detail-info">
              <h4>Air Conditioning</h4>
              <p>Chilled Airbags</p>
            </div>
          </div>
          <div class="spec-detail-card">
            <div class="spec-icon-box">🎵</div>
            <div class="spec-detail-info">
              <h4>Music System</h4>
              <p>Touchscreen Audio</p>
            </div>
          </div>
        </div>

        <!-- Overview article -->
        <h3 class="specs-section-title">Vehicle Overview</h3>
        <p style="margin-bottom: 1.5rem; line-height: 1.8; color: var(--dark-text);">${car.intro}</p>
        
        <h4 style="margin-bottom: 0.75rem; color: var(--primary-dark);">🚗 Premium Comfort Elements Built-in:</h4>
        <ul class="inc-exc-list" style="margin-bottom: 2.5rem; padding-left: 0.5rem;">
          ${car.features.map(feat => `
            <li class="inc-exc-item">
              <span style="color: var(--primary-green); font-weight:bold; margin-right:0.5rem;">✔</span> ${feat}
            </li>
          `).join("")}
        </ul>

        <!-- Inclusions & Exclusions -->
        <div class="inc-exc-grid">
          <div class="inc-exc-box inclusions">
            <h4 style="color: var(--primary-green);">Inclusions</h4>
            <ul class="inc-exc-list">
              <li class="inc-exc-item"><span class="inc-exc-icon">✔</span> Clean and fully sanitized car</li>
              <li class="inc-exc-item"><span class="inc-exc-icon">✔</span> Legal black plate transport license</li>
              <li class="inc-exc-item"><span class="inc-exc-icon">✔</span> Unlimited Kilometers drive</li>
              <li class="inc-exc-item"><span class="inc-exc-icon">✔</span> Comprehensive motor insurance</li>
            </ul>
          </div>
          <div class="inc-exc-box exclusions">
            <h4 style="color: var(--accent-orange);">Exclusions</h4>
            <ul class="inc-exc-list">
              <li class="inc-exc-item"><span class="inc-exc-icon">✘</span> Petrol or Diesel refueling</li>
              <li class="inc-exc-item"><span class="inc-exc-icon">✘</span> Interstate transport permit fees</li>
              <li class="inc-exc-item"><span class="inc-exc-icon">✘</span> Parking charges &amp; highway tolls</li>
              <li class="inc-exc-item"><span class="inc-exc-icon">✘</span> Late return extension fees</li>
            </ul>
          </div>
        </div>

        <!-- Paperwork Required -->
        <div class="policy-card">
          <h3 class="specs-section-title" style="margin-bottom: 0.5rem;">Required Handover Documents</h3>
          <p style="font-size:0.9rem; color: var(--muted-text);">Renter must produce these original cards during delivery handover:</p>
          <ul class="policy-list-items">
            <li class="policy-list-item"><span>🪪</span> <strong>Valid Indian Driving License:</strong> LMV original license. No soft-copies or learners allowed.</li>
            <li class="policy-list-item"><span>📄</span> <strong>Identity Verification Card:</strong> Aadhaar Card, original Passport or Voter ID Card.</li>
            <li class="policy-list-item"><span>💸</span> <strong>Refundable Deposit:</strong> Small cash or UPI security deposit (refunded instantly upon car return).</li>
          </ul>
        </div>

        <!-- Dynamic SEO Article on every car page -->
        <article class="seo-details-article">
          <h2>Why Choose the ${car.name} for Your Goa Trip?</h2>
          <p>
            Exploring Goa's scenic locations—from northern beach hubs like Calangute, Baga, and Candolim, to peaceful South Goa spots like Palolem beach and historical Cabo de Rama Fort—is immensely convenient when driving a clean self-drive ${car.name}.
          </p>
          <p>
            Whether you want a smooth manual transmission to control engine torque over hilly ghats or a modern clutch-free automatic transmission to navigate coastal holiday traffic effortlessly, the ${car.name} offers incredible fuel efficiency, easy handling, and ample legroom. Drive safely and skip overpriced local tourist cPanel cPanel cabs completely!
          </p>
        </article>

      </div>

      <!-- Right Sticky Booking Column -->
      <div class="sticky-booking-sidebar">
        <div class="booking-sidebar-card">
          <h3 class="booking-sidebar-title">⚡ Instant Booking</h3>
          <div style="background-color: var(--light-bg); padding: 0.85rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center;">
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight:700; color: var(--muted-text);">Daily Rate Starts From</span>
            <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary-green); margin-top:0.2rem;">₹${car.price} <span style="font-size:0.9rem; color:var(--muted-text); font-weight:500;">/ day</span></div>
          </div>

          <div class="booking-sidebar-form">
            <a href="../booking.html?car=${encodeURIComponent(car.name)}" class="btn btn-primary" style="width: 100%; height: 46px; font-weight:700;">Proceed to Booking Form</a>
            
            <div class="booking-sidebar-cta-divider" style="margin: 1rem 0; font-size: 0.75rem; text-align: center; color: var(--muted-text); font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">OR BOOK DIRECT</div>
            
            <div style="display: flex; gap: 0.5rem;">
              <a href="tel:${BUSINESS_INFO.phoneLink}" class="btn-compact-cta" style="flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.7rem; border-radius: 30px; background-color: var(--primary-green); color: white; font-weight: 700; font-size: 0.85rem; text-decoration: none; border: none; box-shadow: var(--shadow-sm); transition: opacity 0.2s;">
                <svg style="width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2.5;" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Now
              </a>
              <a href="https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hello Apna Drive, I want to book ' + car.name + '. Please share availability.')}" target="_blank" rel="noopener noreferrer" class="btn-compact-cta" style="flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; padding: 0.7rem; border-radius: 30px; background-color: #25D366; color: white; font-weight: 700; font-size: 0.85rem; text-decoration: none; border: none; box-shadow: var(--shadow-sm); transition: opacity 0.2s;">
                <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12.031 6c-2.767 0-5 2.233-5 5s2.233 5 5 5c2.767 0 5-2.233 5-5s-2.233-5-5-5zm0 9c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm.516-11c3.551.042 6.433 2.923 6.475 6.474a8.47 8.47 0 0 1-5.184 7.82 8.38 8.38 0 0 1-3.8.9l-5.1.9 1.9-5.7a8.38 8.38 0 0 1-.9-3.8c.041-3.552 2.924-6.432 6.475-6.474z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div style="font-size: 0.75rem; text-align: center; color: var(--muted-text); margin-top: 1.2rem;">
            * Deliveries are active 24/7. Standard rental terms apply.
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

${renderStoryContainer("Learn More About Self-Drive Car Options", getParameterizedStories("car", car.name, "../"))}

${footerTemplate("../")}
`;
  fs.writeFileSync(path.join(process.cwd(), "cars", `${car.slug}.html`), carHtml);
});


/* =========================================
   4. SERVICES PAGES (12 Pages in services/)
   ========================================= */
SERVICES.forEach(service => {
  const serviceHtml = `
${headerTemplate(service.seoTitle, service.seoDesc, "../", "services/" + service.slug)}
${breadcrumbTemplate([{ label: "Our Services", url: "services.html" }, { label: service.name, url: "" }], "../")}

<section class="section-padding">
  <div class="container" style="max-width: 900px;">
    
    <div class="text-center" style="margin-bottom: 3rem;">
      <span class="section-subtitle">Dedicated Solution</span>
      <h1 class="section-title">${service.name}</h1>
      <p class="section-desc">Professional, convenient, and reliable car hire services across Goa tailored specifically for your vacation schedules.</p>
    </div>

    <div style="font-size: 1.05rem; line-height: 1.8; color: var(--dark-text);">
      <p style="margin-bottom: 1.5rem; font-size: 1.15rem; color: var(--muted-text);">${service.intro}</p>

      <h3 class="specs-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">Service Benefits</h3>
      <ul class="inc-exc-list" style="margin-bottom: 2.5rem;">
        ${service.benefits.map(ben => `
          <li class="inc-exc-item"><span style="color:var(--primary-green); font-weight:bold; margin-right:0.5rem;">✔</span> ${ben}</li>
        `).join("")}
      </ul>

      <h3 class="specs-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">Recommended Cars</h3>
      <p style="margin-bottom: 2rem;">
        Depending on your group size, we highly recommend booking compact hatchbacks like the <strong>Swift</strong> for narrow streets, spacious family cars like the <strong>Innova Crysta</strong> for larger groups, or our iconic <strong>Mahindra Thar 4x4</strong> to cruise down the Goa shoreline in style.
      </p>
    </div>

    <div class="premium-cta-actions" style="margin-top: 4rem;">
      <a href="../booking.html" class="btn btn-primary">Proceed to Booking Desk</a>
      <a href="../fleet.html" class="btn btn-outline">Check All 19 Cars</a>
    </div>

  </div>
</section>

${renderStoryContainer("Learn More About our Specialized Support Solutions", getParameterizedStories("service", service.name, "../"))}

${footerTemplate("../")}
`;
  fs.writeFileSync(path.join(process.cwd(), "services", `${service.slug}.html`), serviceHtml);
});


/* =========================================
   5. LOCATION SEO PAGES (12 Pages in locations/)
   ========================================= */
LOCATIONS.forEach(loc => {
  const locHtml = `
${headerTemplate(loc.seoTitle, loc.seoDesc, "../", "locations/" + loc.slug)}
${breadcrumbTemplate([{ label: "Locations", url: "contact.html" }, { label: loc.name, url: "" }], "../")}

<section class="section-padding">
  <div class="container" style="max-width: 900px;">
    
    <div class="text-center" style="margin-bottom: 3rem;">
      <span class="section-subtitle">Goa Delivery Point</span>
      <h1 class="section-title">Self Drive Car Rental in ${loc.name}</h1>
      <p class="section-desc">Reliable,legal, and fully sanitized self-drive cars delivered straight to your doorstep or hotel in ${loc.name}, Goa.</p>
    </div>

    <div style="font-size: 1.05rem; line-height: 1.8; color: var(--dark-text);">
      <h3 class="specs-section-title" style="margin-bottom: 1rem;">Location Overview</h3>
      <p style="margin-bottom: 1.5rem;">${loc.overview}</p>

      <h3 class="specs-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">Explore Sights &amp; Attractions Nearby</h3>
      <p style="margin-bottom: 1.5rem;">${loc.attractions}</p>

      <h3 class="specs-section-title" style="margin-top: 2rem; margin-bottom: 1rem;">Airport/Doorstep Handover Process</h3>
      <p style="margin-bottom: 2.5rem;">${loc.process}</p>
    </div>

    <div class="premium-cta-actions" style="margin-top: 4rem;">
      <a href="../booking.html?pickupLoc=${encodeURIComponent(loc.name)}" class="btn btn-primary">Book Car for ${loc.name}</a>
      <a href="../fleet.html" class="btn btn-outline">Browse Vehicles</a>
    </div>

  </div>
</section>

${renderStoryContainer(`Explore self-drive options around ${loc.name}`, getParameterizedStories("location", loc.name, "../"))}

${footerTemplate("../")}
`;
  fs.writeFileSync(path.join(process.cwd(), "locations", `${loc.slug}.html`), locHtml);
});


/* =========================================
   6. BLOG PAGES (12 Pages in blog/)
   ========================================= */
BLOGS.forEach(blog => {
  const blogHtml = `
${headerTemplate(blog.seoTitle, blog.seoDesc, "../", "blog/" + blog.slug)}
${breadcrumbTemplate([{ label: "Our Blogs", url: "blogs.html" }, { label: blog.name, url: "" }], "../")}

<section class="section-padding">
  <div class="container" style="max-width: 800px;">
    
    <div class="text-center" style="margin-bottom: 2.5rem;">
      <span class="travel-card-tag" style="background-color: var(--soft-cream); padding: 0.35rem 0.85rem; border-radius:50px; font-weight:600; font-size:0.85rem; color:var(--primary-green);">${blog.category} • ${blog.date} • ⏱️ 5 min read</span>
      <h1 class="section-title" style="font-size: 2.5rem; line-height:1.2; margin-top:1rem;">${blog.name}</h1>
      <p style="color: var(--muted-text); font-size:1.1rem; max-width:600px; margin: 0.5rem auto 0 auto;">Plan your scenic roads, select appropriate gears, check required paperwork and explore Goa like a local.</p>
    </div>

    <!-- TABLE OF CONTENTS -->
    <div style="background-color: var(--soft-cream); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; margin-bottom: 2.5rem;">
      <h4 style="margin-top: 0; margin-bottom: 0.75rem; color: var(--primary-dark); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem; font-weight: 700;">
        📋 Table of Contents
      </h4>
      <ul style="list-style-type: none; padding-left: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem;">
        <li><a href="#section-1" style="color: var(--primary-green); text-decoration: none; font-weight: 600; border-bottom: 1px dotted var(--primary-green);">1. ${blog.h2_1}</a></li>
        <li><a href="#section-2" style="color: var(--primary-green); text-decoration: none; font-weight: 600; border-bottom: 1px dotted var(--primary-green);">2. ${blog.h2_2}</a></li>
        <li><a href="#section-3" style="color: var(--primary-green); text-decoration: none; font-weight: 600; border-bottom: 1px dotted var(--primary-green);">3. ${blog.h2_3}</a></li>
        <li><a href="#faq-section" style="color: var(--primary-green); text-decoration: none; font-weight: 600; border-bottom: 1px dotted var(--primary-green);">4. Frequently Asked Question</a></li>
        <li><a href="#related-section" style="color: var(--primary-green); text-decoration: none; font-weight: 600; border-bottom: 1px dotted var(--primary-green);">5. Related Articles</a></li>
      </ul>
    </div>

    <!-- Editorial Blog Content -->
    <div style="font-size: 1.1rem; line-height: 1.8; color: var(--dark-text);">
      <p style="margin-bottom: 2rem; font-size: 1.15rem; color: var(--muted-text); font-style: italic; line-height: 1.6;">
        "${blog.intro}"
      </p>

      <h2 id="section-1" style="font-size: 1.6rem; margin: 2.5rem 0 1rem 0; color: var(--primary-dark); font-weight:700; scroll-margin-top: 100px;">${blog.h2_1}</h2>
      <p style="margin-bottom: 1.5rem;">${blog.p_1}</p>

      <h2 id="section-2" style="font-size: 1.6rem; margin: 2.5rem 0 1rem 0; color: var(--primary-dark); font-weight:700; scroll-margin-top: 100px;">${blog.h2_2}</h2>
      <p style="margin-bottom: 1.5rem;">${blog.p_2}</p>

      <h2 id="section-3" style="font-size: 1.6rem; margin: 2.5rem 0 1rem 0; color: var(--primary-dark); font-weight:700; scroll-margin-top: 100px;">${blog.h2_3}</h2>
      <p style="margin-bottom: 1.5rem;">${blog.p_3}</p>

      <!-- Blog specialized FAQ -->
      <div id="faq-section" class="policy-card" style="margin-top: 3.5rem; background-color: var(--light-bg); scroll-margin-top: 100px;">
        <h4 style="margin-bottom: 0.5rem; color: var(--primary-dark); font-weight: 700;">❓ Frequently Asked Question:</h4>
        <p style="font-weight: 700; margin-bottom: 0.5rem; color: var(--primary-dark);">${blog.faq_q}</p>
        <p style="color: var(--muted-text); font-size: 0.95rem; margin-bottom: 0;">${blog.faq_a}</p>
      </div>

    </div>

    <!-- RELATED ARTICLES SECTION -->
    <div id="related-section" style="margin-top: 4rem; border-top: 1px solid var(--border-color); padding-top: 3rem; scroll-margin-top: 100px;">
      <h3 style="font-size: 1.5rem; color: var(--primary-dark); margin-bottom: 1.5rem; font-weight: 700;">🌴 Related Road Trip Guides &amp; Insights:</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
        ${BLOGS.filter(b => b.id !== blog.id).slice(0, 2).map(related => `
          <div style="background-color: var(--light-bg); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); display: flex; flex-direction: column; height: 100%;">
            <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary-green); font-weight: 700; margin-bottom: 0.5rem;">${related.category}</span>
            <h4 style="font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 0.75rem; font-weight: 700; line-height: 1.3;">
              <a href="${related.slug}.html" style="text-decoration: none; color: inherit; transition: color 0.2s;" onmouseover="this.style.color='var(--primary-green)'" onmouseout="this.style.color='inherit'">${related.name}</a>
            </h4>
            <p style="font-size: 0.9rem; color: var(--muted-text); margin-bottom: 1rem; line-height: 1.5;">${related.intro.slice(0, 90)}...</p>
            <a href="${related.slug}.html" style="color: var(--primary-green); font-weight: 600; font-size: 0.9rem; margin-top: auto; text-decoration: none; display: flex; align-items: center; gap: 0.25rem;">Read More &rsaquo;</a>
          </div>
        `).join("")}
      </div>
    </div>

    <div style="margin-top: 4rem; border-top: 1px solid var(--border-color); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap:wrap; gap:1.5rem;">
      <div style="font-size: 0.9rem; color: var(--muted-text);">Published by: <strong>Apna Drive Goa Team</strong></div>
      <div style="display: flex; gap: 1rem;">
        <a href="../booking.html" class="btn btn-primary">Reserve a Car Now</a>
        <a href="../blogs.html" class="btn btn-outline">&larr; Back to Blogs</a>
      </div>
    </div>

  </div>
</section>

${renderStoryContainer("More Road Trip Stories and Detailing Insights", BLOG_STORIES)}

${footerTemplate("../")}
`;
  fs.writeFileSync(path.join(process.cwd(), "blog", `${blog.slug}.html`), blogHtml);
});


/* =========================================
   7. TECHNICAL SEO AND META ASSETS
   ========================================= */

// robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://${BUSINESS_INFO.domain}/sitemap.xml
`;
fs.writeFileSync(path.join(process.cwd(), "robots.txt"), robotsTxt);

// sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${BUSINESS_INFO.domain}/index.html</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://${BUSINESS_INFO.domain}/fleet.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://${BUSINESS_INFO.domain}/services.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://${BUSINESS_INFO.domain}/about.html</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://${BUSINESS_INFO.domain}/contact.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://${BUSINESS_INFO.domain}/booking.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://${BUSINESS_INFO.domain}/blogs.html</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://${BUSINESS_INFO.domain}/goa-travel.html</loc>
    <priority>0.7</priority>
  </url>
  ${CARS.map(car => `
  <url>
    <loc>https://${BUSINESS_INFO.domain}/cars/${car.slug}.html</loc>
    <priority>0.8</priority>
  </url>`).join("")}
  ${SERVICES.map(service => `
  <url>
    <loc>https://${BUSINESS_INFO.domain}/services/${service.slug}.html</loc>
    <priority>0.8</priority>
  </url>`).join("")}
  ${LOCATIONS.map(loc => `
  <url>
    <loc>https://${BUSINESS_INFO.domain}/locations/${loc.slug}.html</loc>
    <priority>0.8</priority>
  </url>`).join("")}
  ${BLOGS.map(blog => `
  <url>
    <loc>https://${BUSINESS_INFO.domain}/blog/${blog.slug}.html</loc>
    <priority>0.7</priority>
  </url>`).join("")}
</urlset>
`;
fs.writeFileSync(path.join(process.cwd(), "sitemap.xml"), sitemapXml);

// manifest.json
const manifestJson = {
  name: "Apna Drive Self Drive Rental Goa",
  short_name: "Apna Drive",
  description: "Premium Self Drive Car Rental in Goa. Hatchbacks, SUVs, family cars and luxury drop tops.",
  start_url: "/index.html",
  display: "standalone",
  background_color: "#12372A",
  theme_color: "#1F6F50",
  icons: [
    {
      src: "favicon.ico",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon"
    }
  ]
};
fs.writeFileSync(path.join(process.cwd(), "manifest.json"), JSON.stringify(manifestJson, null, 2));

// humans.txt
const humansTxt = `/* TEAM */
Founder & Developer: Apna Drive Goa Team
Site Architect: Google AI Studio Coding Agent
Contact: ${BUSINESS_INFO.email}

/* SITE */
Standards: HTML5, CSS3, Vanilla JavaScript
Host: Static, cPanel, Netlify, Cloudflare
`;
fs.writeFileSync(path.join(process.cwd(), "humans.txt"), humansTxt);

// llms.txt & llms-full.txt
const llmsTxt = `# Apna Drive - Self Drive Car Rental Goa
This project is a pristine Vanilla HTML5, CSS3, and JavaScript multi-page website serving Apna Drive, a premium self-drive car rental agency in Goa.

## Core Pages
- /index.html: Main landing page.
- /fleet.html: Full car database with dynamic Javascript search and categorization filters.
- /booking.html: Multi-field scheduling reservation engine with WhatsApp forwarding triggers.
- /contact.html: Customer support page with an editable Google Map iframe.
`;
fs.writeFileSync(path.join(process.cwd(), "llms.txt"), llmsTxt);
fs.writeFileSync(path.join(process.cwd(), "llms-full.txt"), llmsTxt);

console.log("Compilation complete! All 60+ HTML, CSS, JS, and SEO files have been generated successfully.");
