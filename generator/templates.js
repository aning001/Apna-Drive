/**
 * =========================================
 * APNA DRIVE - Site Generator UI Templates
 * /generator/templates.js
 * =========================================
 */

import { BUSINESS_INFO } from "./data.js";

/**
 * Header Boilerplate & Navigation
 */
export function headerTemplate(pageTitle, pageDesc, relativePath = "", activePage = "home") {
  const isSubFolder = relativePath !== "";
  const rootPath = isSubFolder ? relativePath : "./";
  
  // Create structured schema based on page
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": BUSINESS_INFO.name,
    "image": `https://${BUSINESS_INFO.domain}/images/hero/apna-drive-hero.webp`,
    "@id": `https://${BUSINESS_INFO.domain}`,
    "url": `https://${BUSINESS_INFO.domain}`,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "₹1100 - ₹9000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": "Dabolim",
      "addressRegion": "Goa",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle} | ${BUSINESS_INFO.name}</title>
  <meta name="description" content="${pageDesc}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://${BUSINESS_INFO.domain}/${isSubFolder ? activePage + '.html' : (activePage === 'home' ? 'index.html' : activePage + '.html')}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://${BUSINESS_INFO.domain}/">
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDesc}">
  <meta property="og:image" content="https://${BUSINESS_INFO.domain}/images/hero/apna-drive-hero.webp">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="${pageTitle}">
  <meta property="twitter:description" content="${pageDesc}">
  <meta property="twitter:image" content="https://${BUSINESS_INFO.domain}/images/hero/apna-drive-hero.webp">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="${rootPath}favicon.ico">
  
  <!-- Custom Stylesheets -->
  <link rel="stylesheet" href="${rootPath}css/style.css">
  <link rel="stylesheet" href="${rootPath}css/responsive.css">
  ${activePage.startsWith("cars/") ? `<link rel="stylesheet" href="${rootPath}css/car-details.css">` : ""}

  <!-- Structured Schema Markup -->
  <script type="application/ld+json">
    ${JSON.stringify(schemaJson)}
  </script>
</head>
<body>

  <!-- 1. TOP INFORMATION BAR -->
  <div class="top-bar">
    <div class="container top-bar-content">
      <div class="top-bar-left">
        <div class="top-bar-item">
          <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Goa-wide Pickup &amp; Delivery</span>
        </div>
        <div class="top-bar-item">
          <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2H2v16h20V2zM6 6h12M6 10h12M6 14h6"/></svg>
          <span>Airport Handover Available at Dabolim Airport</span>
        </div>
      </div>
      <div class="top-bar-right">
        <a href="tel:${BUSINESS_INFO.phoneLink}" class="top-bar-item top-bar-link">
          <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>Call: ${BUSINESS_INFO.phone}</span>
        </a>
        <a href="https://wa.me/${BUSINESS_INFO.whatsapp}" target="_blank" rel="noopener noreferrer" class="top-bar-item top-bar-link">
          <svg class="trust-icon" style="color: #25D366;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  </div>

  <!-- 2. STICKY HEADER -->
  <header class="header-container" id="main-site-header">
    <div class="container navbar">
      <!-- Logo -->
      <a href="${rootPath}index.html" class="logo" id="logo-anchor">
        <span class="logo-icon">🚗</span>Apna<span class="logo-accent">Drive</span>
      </a>

      <!-- Desktop Nav Menu -->
      <nav class="nav-menu" aria-label="Main navigation">
        <a href="${rootPath}index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a>
        
        <!-- Fleet Dropdown -->
        <div class="nav-dropdown">
          <a href="${rootPath}fleet.html" class="nav-link nav-dropdown-toggle ${activePage === 'fleet' ? 'active' : ''}">
            Fleet <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <ul class="dropdown-menu">
            <li><a href="${rootPath}fleet.html" class="dropdown-item">All Self-Drive Cars</a></li>
            <li><a href="${rootPath}cars/thar-self-drive-rental-goa.html" class="dropdown-item">Mahindra Thar Hard Top</a></li>
            <li><a href="${rootPath}cars/thar-convertible-rental-goa.html" class="dropdown-item">Mahindra Thar Convertible</a></li>
            <li><a href="${rootPath}cars/fortuner-self-drive-rental-goa.html" class="dropdown-item">Toyota Fortuner SUV</a></li>
            <li><a href="${rootPath}cars/innova-crysta-rental-goa.html" class="dropdown-item">Toyota Innova Crysta MPV</a></li>
            <li><a href="${rootPath}cars/baleno-self-drive-rental-goa.html" class="dropdown-item">Maruti Baleno (Automatic)</a></li>
            <li><a href="${rootPath}cars/mini-cooper-rental-goa.html" class="dropdown-item">Mini Cooper Convertible</a></li>
          </ul>
        </div>

        <!-- Services Dropdown -->
        <div class="nav-dropdown">
          <a href="${rootPath}services.html" class="nav-link nav-dropdown-toggle ${activePage === 'services' ? 'active' : ''}">
            Services <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <ul class="dropdown-menu">
            <li><a href="${rootPath}services.html" class="dropdown-item">All Services</a></li>
            <li><a href="${rootPath}services/self-drive-car-rental-goa.html" class="dropdown-item">Self Drive Car Rental</a></li>
            <li><a href="${rootPath}services/mopa-airport-car-rental.html" class="dropdown-item">Mopa Airport Car Rental</a></li>
            <li><a href="${rootPath}services/dabolim-airport-car-rental.html" class="dropdown-item">Dabolim Airport Car Rental</a></li>
            <li><a href="${rootPath}services/automatic-car-rental-goa.html" class="dropdown-item">Automatic Car Rental</a></li>
            <li><a href="${rootPath}services/suv-rental-goa.html" class="dropdown-item">SUV Rental Goa</a></li>
            <li><a href="${rootPath}services/luxury-car-rental-goa.html" class="dropdown-item">Luxury Car Rental</a></li>
          </ul>
        </div>

        <a href="${rootPath}goa-travel.html" class="nav-link ${activePage === 'goa-travel' ? 'active' : ''}">Goa Travel</a>
        <a href="${rootPath}about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
        <a href="${rootPath}blogs.html" class="nav-link ${activePage === 'blogs' ? 'active' : ''}">Blogs</a>
        <a href="${rootPath}contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
      </nav>

      <!-- Booking Form Header Button -->
      <a href="${rootPath}booking.html" class="btn btn-secondary ${activePage === 'booking' ? 'active' : ''}" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;" id="header-booking-btn">Booking Form</a>

      <!-- Mobile Hamburger Menu Toggle -->
      <button class="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-overlay"></div>

  <!-- Mobile Sliding Navigation Drawer -->
  <aside class="mobile-nav" aria-label="Mobile navigation">
    <div class="mobile-nav-header" style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1rem; width: 100%;">
      <a href="${rootPath}index.html" class="logo" style="font-size: 1.25rem;">
        <span class="logo-icon">🚗</span>Apna<span class="logo-accent">Drive</span>
      </a>
      <button class="mobile-nav-close" aria-label="Close menu" style="background: none; border: none; font-size: 1.5rem; color: var(--primary-dark); cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 4px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <nav class="mobile-nav-menu">
      <a href="${rootPath}index.html" class="mobile-nav-link">Home</a>
      
      <!-- Mobile Fleet Dropdown -->
      <div>
        <a href="#" class="mobile-nav-link mobile-dropdown-trigger">
          Fleet <svg class="chevron-icon" style="transition: transform 0.3s; width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="mobile-dropdown-menu">
          <a href="${rootPath}fleet.html" class="mobile-dropdown-item">All Cars</a>
          <a href="${rootPath}cars/thar-self-drive-rental-goa.html" class="mobile-dropdown-item">Mahindra Thar</a>
          <a href="${rootPath}cars/fortuner-self-drive-rental-goa.html" class="mobile-dropdown-item">Toyota Fortuner</a>
          <a href="${rootPath}cars/innova-crysta-rental-goa.html" class="mobile-dropdown-item">Innova Crysta</a>
          <a href="${rootPath}cars/baleno-self-drive-rental-goa.html" class="mobile-dropdown-item">Maruti Baleno</a>
          <a href="${rootPath}cars/mini-cooper-rental-goa.html" class="mobile-dropdown-item">Mini Cooper</a>
        </div>
      </div>

      <!-- Mobile Services Dropdown -->
      <div>
        <a href="#" class="mobile-nav-link mobile-dropdown-trigger">
          Services <svg class="chevron-icon" style="transition: transform 0.3s; width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="mobile-dropdown-menu">
          <a href="${rootPath}services.html" class="mobile-dropdown-item">All Services</a>
          <a href="${rootPath}services/self-drive-car-rental-goa.html" class="mobile-dropdown-item">Self Drive Rental</a>
          <a href="${rootPath}services/mopa-airport-car-rental.html" class="mobile-dropdown-item">Mopa Airport Rental</a>
          <a href="${rootPath}services/dabolim-airport-car-rental.html" class="mobile-dropdown-item">Dabolim Airport Rental</a>
          <a href="${rootPath}services/automatic-car-rental-goa.html" class="mobile-dropdown-item">Automatic Rental</a>
          <a href="${rootPath}services/suv-rental-goa.html" class="mobile-dropdown-item">SUV Rental</a>
        </div>
      </div>

      <a href="${rootPath}goa-travel.html" class="mobile-nav-link">Goa Travel Guide</a>
      <a href="${rootPath}about.html" class="mobile-nav-link">About</a>
      <a href="${rootPath}blogs.html" class="mobile-nav-link">Blogs</a>
      <a href="${rootPath}contact.html" class="mobile-nav-link">Contact</a>
    </nav>
    <a href="${rootPath}booking.html" class="btn btn-primary" style="width: 100%; margin-top: auto; padding: 0.75rem 1rem;">Booking Form</a>
  </aside>
`;
}

/**
 * Reusable Breadcrumbs
 */
export function breadcrumbTemplate(crumbs, relativePath = "") {
  const rootPath = relativePath !== "" ? relativePath : "./";
  
  let html = `<div class="breadcrumbs-container">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <div class="breadcrumbs-item"><a href="${rootPath}index.html">Home</a></div>`;
        
  crumbs.forEach((crumb, idx) => {
    html += ` <div class="breadcrumbs-item" style="gap: 0.5rem;">
      <span style="color: var(--border-color); font-size: 1.1rem; line-height: 1;">/</span>`;
    if (crumb.url) {
      html += `<a href="${rootPath}${crumb.url}">${crumb.label}</a>`;
    } else {
      html += `<span class="active">${crumb.label}</span>`;
    }
    html += `</div>`;
  });
  
  html += `</nav>
    </div>
  </div>`;
  
  return html;
}

/**
 * Footer Boilerplate & Scripts
 */
export function footerTemplate(relativePath = "", activePage = "home") {
  const rootPath = relativePath !== "" ? relativePath : "./";
  const currentYear = new Date().getFullYear();

  return `
  <!-- PREMIUM SEO FOOTER SECTION -->
  <section class="seo-footer-section" style="background-color: #0c1a15; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 3rem 0; color: #a3b899; font-family: var(--font-sans);">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem;">
        
        <!-- Popular Goa Locations -->
        <div>
          <h4 style="color: var(--white); font-size: 1rem; margin-bottom: 1rem; font-weight: 700; border-bottom: 2px solid var(--primary-green); padding-bottom: 0.5rem; display: inline-block;">Popular Goa Locations</h4>
          <ul style="list-style: none; padding: 0; margin: 0; line-height: 2; font-size: 0.85rem;">
            <li><a href="${rootPath}locations/self-drive-car-rental-mopa-airport.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Mopa Airport</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-dabolim-airport.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Dabolim Airport</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-panjim.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Panjim</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-calangute.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Calangute</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-candolim.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Candolim</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-baga.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Baga</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-anjuna.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Anjuna</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-mapusa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Mapusa</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-margao.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental Margao</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-north-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental North Goa</a></li>
            <li><a href="${rootPath}locations/self-drive-car-rental-south-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental South Goa</a></li>
          </ul>
        </div>

        <!-- Popular Cars -->
        <div>
          <h4 style="color: var(--white); font-size: 1rem; margin-bottom: 1rem; font-weight: 700; border-bottom: 2px solid var(--primary-green); padding-bottom: 0.5rem; display: inline-block;">Popular Cars</h4>
          <ul style="list-style: none; padding: 0; margin: 0; line-height: 2; font-size: 0.85rem;">
            <li><a href="${rootPath}cars/baleno-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Baleno Rental</a></li>
            <li><a href="${rootPath}cars/swift-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Swift Rental</a></li>
            <li><a href="${rootPath}cars/i20-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive i20 Rental</a></li>
            <li><a href="${rootPath}cars/creta-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Creta Rental</a></li>
            <li><a href="${rootPath}cars/thar-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Thar Rental</a></li>
            <li><a href="${rootPath}cars/fortuner-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Fortuner Rental</a></li>
            <li><a href="${rootPath}cars/ertiga-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Ertiga Rental</a></li>
            <li><a href="${rootPath}cars/jimny-self-drive-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Jimny Rental</a></li>
            <li><a href="${rootPath}cars/innova-crysta-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Innova Crysta</a></li>
            <li><a href="${rootPath}cars/mini-cooper-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Mini Cooper</a></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 style="color: var(--white); font-size: 1rem; margin-bottom: 1rem; font-weight: 700; border-bottom: 2px solid var(--primary-green); padding-bottom: 0.5rem; display: inline-block;">Quick Links</h4>
          <ul style="list-style: none; padding: 0; margin: 0; line-height: 2; font-size: 0.85rem;">
            <li><a href="${rootPath}index.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Home</a></li>
            <li><a href="${rootPath}fleet.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Fleet</a></li>
            <li><a href="${rootPath}services.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Services</a></li>
            <li><a href="${rootPath}goa-travel.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Goa Travel</a></li>
            <li><a href="${rootPath}about.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">About</a></li>
            <li><a href="${rootPath}blogs.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Blogs</a></li>
            <li><a href="${rootPath}contact.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Contact</a></li>
            <li><a href="${rootPath}booking.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Booking</a></li>
          </ul>
        </div>

        <!-- Popular Searches -->
        <div>
          <h4 style="color: var(--white); font-size: 1rem; margin-bottom: 1rem; font-weight: 700; border-bottom: 2px solid var(--primary-green); padding-bottom: 0.5rem; display: inline-block;">Popular Searches</h4>
          <ul style="list-style: none; padding: 0; margin: 0; line-height: 2; font-size: 0.85rem;">
            <li><a href="${rootPath}services/self-drive-car-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental in Goa</a></li>
            <li><a href="${rootPath}services/self-drive-car-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Car Rental in Goa</a></li>
            <li><a href="${rootPath}fleet.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Rent a Car in Goa</a></li>
            <li><a href="${rootPath}services/dabolim-airport-car-rental.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Car Rental in Dabolim Airport</a></li>
            <li><a href="${rootPath}services/dabolim-airport-car-rental.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Self Drive Car Rental in Dabolim Airport</a></li>
            <li><a href="${rootPath}services/automatic-car-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Automatic Car Rental Goa</a></li>
            <li><a href="${rootPath}services/suv-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">SUV Rental Goa</a></li>
            <li><a href="${rootPath}services/family-car-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Family Car Rental Goa</a></li>
            <li><a href="${rootPath}services/luxury-car-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Luxury Car Rental Goa</a></li>
            <li><a href="${rootPath}services/budget-car-rental-goa.html" style="color: #a3b899; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#a3b899'">Budget Car Rental Goa</a></li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- 3. DETAILED SITE FOOTER -->
  <footer class="footer">
    <div class="container footer-top">
      
      <!-- Brand column -->
      <div class="footer-col">
        <a href="${rootPath}index.html" class="logo" style="color: var(--white); margin-bottom: 1.25rem;">
          <span class="logo-icon">🚗</span>Apna<span class="logo-accent">Drive</span>
        </a>
        <p class="footer-about-desc">
          Premium self-drive car rental company in Goa. Offering clean, sanitized, and well-maintained vehicles with direct airport handovers at unbeatable prices.
        </p>
        <div class="social-links">
          <a href="${BUSINESS_INFO.facebook}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Follow Apna Drive on Facebook">
            <svg style="width: 18px; height: 18px; fill: currentColor;" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
          </a>
          <a href="${BUSINESS_INFO.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Follow Apna Drive on Instagram">
            <svg style="width: 18px; height: 18px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h3>Quick Links</h3>
        <ul class="footer-links-list">
          <li class="footer-link-item"><a href="${rootPath}index.html">Home</a></li>
          <li class="footer-link-item"><a href="${rootPath}fleet.html">Browse Fleet</a></li>
          <li class="footer-link-item"><a href="${rootPath}services.html">Our Services</a></li>
          <li class="footer-link-item"><a href="${rootPath}goa-travel.html">Goa Travel Guide</a></li>
          <li class="footer-link-item"><a href="${rootPath}about.html">About Apna Drive</a></li>
          <li class="footer-link-item"><a href="${rootPath}blogs.html">Travel Blogs</a></li>
          <li class="footer-link-item"><a href="${rootPath}contact.html">Contact Us</a></li>
        </ul>
      </div>

      <!-- Popular Cars & Locations -->
      <div class="footer-col">
        <h3>Popular Assets</h3>
        <ul class="footer-links-list">
          <li class="footer-link-item"><a href="${rootPath}cars/thar-self-drive-rental-goa.html">Mahindra Thar Rental</a></li>
          <li class="footer-link-item"><a href="${rootPath}cars/fortuner-self-drive-rental-goa.html">Toyota Fortuner Rental</a></li>
          <li class="footer-link-item"><a href="${rootPath}cars/innova-crysta-rental-goa.html">Innova Crysta Rental</a></li>
          <li class="footer-link-item"><a href="${rootPath}locations/self-drive-car-rental-mopa-airport.html">Mopa Airport Rental</a></li>
          <li class="footer-link-item"><a href="${rootPath}locations/self-drive-car-rental-dabolim-airport.html">Dabolim Airport Rental</a></li>
          <li class="footer-link-item"><a href="${rootPath}locations/self-drive-car-rental-calangute.html">Calangute Car Rental</a></li>
        </ul>
      </div>

      <!-- Newsletter & Contact -->
      <div class="footer-col">
        <h3>Newsletter</h3>
        <p class="newsletter-text">Subscribe to receive exclusive road trip tips, Goa itineraries, and seasonal promo deals!</p>
        <form class="newsletter-form" id="goa-newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Your Email Address" required aria-label="Email address for subscription">
          <button type="submit" class="newsletter-btn">Join</button>
        </form>
        <div id="newsletter-message-box" class="newsletter-msg"></div>
        
        <p style="margin-top: 1.5rem; font-size: 0.8rem; font-weight: 600; color: var(--white);">
          📍 Head Office: ${BUSINESS_INFO.address}
        </p>
      </div>

    </div>

    <!-- Bottom Legal Credit Bar -->
    <div class="footer-bottom">
      <div class="container footer-bottom-grid">
        <div>
          &copy; ${currentYear} <strong>${BUSINESS_INFO.name}</strong>. All rights reserved.
        </div>
        <div class="footer-legal-links">
          <a href="${rootPath}terms-and-conditions.html">Terms</a>
          <a href="${rootPath}privacy-policy.html">Privacy</a>
          <a href="${rootPath}cancellation-policy.html">Cancellation</a>
          <a href="${rootPath}rental-policy.html">Rental Policy</a>
          <a href="${rootPath}fuel-policy.html">Fuel Policy</a>
          <a href="${rootPath}sitemap.xml" target="_blank">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- =========================================
     4. MANDATORY FLOATING ACTION BUTTONS
     ========================================= -->

  <!-- Desktop Floating Action Panel (Side of the screen) -->
  <div class="fixed-floating-actions">
    <!-- Call Button -->
    <a href="tel:${BUSINESS_INFO.phoneLink}" class="floating-action-btn floating-btn-call" aria-label="Call Apna Drive Support Now">
      <svg class="floating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>Call Now</span>
    </a>
    
    <!-- WhatsApp Button -->
    <a href="https://wa.me/${BUSINESS_INFO.whatsapp}" target="_blank" rel="noopener noreferrer" class="floating-action-btn floating-btn-whatsapp" aria-label="Message Apna Drive Support on WhatsApp">
      <svg class="floating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      <span>WhatsApp Now</span>
    </a>
  </div>

  <!-- Mobile Quick Action Dock (Sticky Bottom Row) -->
  <div class="mobile-sticky-dock">
    <a href="tel:${BUSINESS_INFO.phoneLink}" class="mobile-dock-btn mobile-dock-call" aria-label="Call Apna Drive">
      <svg class="floating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>Call Support</span>
    </a>
    <a href="https://wa.me/${BUSINESS_INFO.whatsapp}" target="_blank" rel="noopener noreferrer" class="mobile-dock-btn mobile-dock-whatsapp" aria-label="WhatsApp Apna Drive">
      <svg class="floating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      <span>WhatsApp Us</span>
    </a>
  </div>

  <!-- Back to Top Trigger Button -->
  <a href="#" class="back-to-top" aria-label="Scroll back to top of the page" id="back-to-top-btn">
    <svg style="width: 20px; height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="18 15 12 9 6 15"/></svg>
  </a>

  <!-- Global Deferred JavaScript Core -->
  <script src="${rootPath}js/main.js" defer></script>
  <script src="${rootPath}js/forms.js" defer></script>
  ${activePage === "fleet" || activePage === "home" ? `<script src="${rootPath}js/fleet.js" defer></script>` : ""}
  ${activePage === "booking" ? `<script src="${rootPath}js/booking.js" defer></script>` : ""}

</body>
</html>
  `;
}
