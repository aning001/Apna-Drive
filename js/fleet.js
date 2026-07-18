/**
 * =========================================
 * APNA DRIVE - Self Drive Car Rental Goa
 * Fleet Database and Dynamic Filtering (fleet.js)
 * =========================================
 */

// 1. CAR DATABASE (All 19 Cars as specified)
const CAR_DATABASE = [
  {
    id: "baleno",
    name: "Maruti Suzuki Baleno",
    slug: "baleno-self-drive-rental-goa",
    category: "Hatchbacks", // Match categories: Hatchbacks, Sedans, SUVs, Family Cars, Premium Cars, Budget Cars, Automatic Cars, Manual Cars
    type: "Hatchback",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    luggage: "2 Bags",
    price: 1200,
    featured: true,
    image: "images/cars/baleno.webp",
    features: ["Touchscreen Infotainment", "Reverse Parking Camera", "Dual Airbags", "Bluetooth Connect"]
  },
  {
    id: "swift",
    name: "Maruti Suzuki Swift",
    slug: "swift-self-drive-rental-goa",
    category: "Hatchbacks",
    type: "Hatchback",
    transmission: "Manual",
    fuel: "Petrol",
    seats: 5,
    luggage: "2 Bags",
    price: 1100,
    featured: true,
    image: "images/cars/swift.webp",
    features: ["Power Windows", "Keyless Entry", "Dual Airbags", "Steering Mounted Controls"]
  },
  {
    id: "i20",
    name: "Hyundai i20",
    slug: "i20-self-drive-rental-goa",
    category: "Hatchbacks",
    type: "Hatchback",
    transmission: "Manual",
    fuel: "Petrol",
    seats: 5,
    luggage: "2 Bags",
    price: 1300,
    featured: false,
    image: "images/cars/i20.webp",
    features: ["Rear AC Vents", "Touchscreen Audio", "Electrically Adjustable Mirrors", "LED DRLs"]
  },
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    slug: "dzire-self-drive-rental-goa",
    category: "Sedans",
    type: "Sedan",
    transmission: "Manual",
    fuel: "Petrol",
    seats: 5,
    luggage: "3 Bags",
    price: 1300,
    featured: true,
    image: "images/cars/dzire.webp",
    features: ["Spacious Boot", "Dual Airbags", "Rear Armrest", "Automatic Climate Control"]
  },
  {
    id: "venue",
    name: "Hyundai Venue",
    slug: "venue-self-drive-rental-goa",
    category: "SUVs",
    type: "Compact SUV",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    luggage: "3 Bags",
    price: 1500,
    featured: false,
    image: "images/cars/venue.webp",
    features: ["Sunroof", "Connected Car Tech", "Rear Parking Sensors", "Air Purifier"]
  },
  {
    id: "brezza",
    name: "Maruti Suzuki Brezza",
    slug: "brezza-self-drive-rental-goa",
    category: "SUVs",
    type: "Compact SUV",
    transmission: "Manual",
    fuel: "Petrol",
    seats: 5,
    luggage: "3 Bags",
    price: 1500,
    featured: true,
    image: "images/cars/brezza.webp",
    features: ["Smart Hybrid Engine", "High Ground Clearance", "ABS with EBD", "Keyless Start"]
  },
  {
    id: "creta",
    name: "Hyundai Creta",
    slug: "creta-self-drive-rental-goa",
    category: "SUVs",
    type: "Mid SUV",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    luggage: "4 Bags",
    price: 2000,
    featured: true,
    image: "images/cars/creta.webp",
    features: ["Panoramic Sunroof", "Ventilated Seats", "Bose Sound System", "Cruise Control"]
  },
  {
    id: "sonet",
    name: "Kia Sonet",
    slug: "sonet-self-drive-rental-goa",
    category: "SUVs",
    type: "Compact SUV",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    luggage: "3 Bags",
    price: 1600,
    featured: false,
    image: "images/cars/sonet.webp",
    features: ["Bose Speakers", "Front Parking Sensors", "Traction Control", "Sleek Interiors"]
  },
  {
    id: "thar",
    name: "Mahindra Thar (Hard Top)",
    slug: "thar-self-drive-rental-goa",
    category: "SUVs",
    type: "4x4 SUV",
    transmission: "Manual",
    fuel: "Diesel",
    seats: 4,
    luggage: "2 Bags",
    price: 2500,
    featured: true,
    image: "images/cars/thar.webp",
    features: ["4x4 Low/High Gearbox", "Heavy Duty Suspension", "All-Terrain Tyres", "Touchscreen Navigation"]
  },
  {
    id: "thar-convertible",
    name: "Mahindra Thar Convertible",
    slug: "thar-convertible-rental-goa",
    category: "Premium Cars",
    type: "Convertible SUV",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 4,
    luggage: "2 Bags",
    price: 3000,
    featured: true,
    image: "images/cars/thar-convertible.webp",
    features: ["Convertible Soft Top", "4x4 Drive Mode", "Adventure Instrument Cluster", "Durable Interiors"]
  },
  {
    id: "jimny",
    name: "Maruti Suzuki Jimny",
    slug: "jimny-self-drive-rental-goa",
    category: "SUVs",
    type: "4x4 Compact SUV",
    transmission: "Manual",
    fuel: "Petrol",
    seats: 4,
    luggage: "2 Bags",
    price: 2000,
    featured: false,
    image: "images/cars/jimny.webp",
    features: ["AllGrip Pro 4x4", "Washable Cabin floors", "Rigid Axle Suspensions", "Retro Design"]
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    slug: "ertiga-self-drive-rental-goa",
    category: "Family Cars",
    type: "7-Seater MPV",
    transmission: "Manual",
    fuel: "Petrol",
    seats: 7,
    luggage: "4 Bags",
    price: 1800,
    featured: true,
    image: "images/cars/ertiga.webp",
    features: ["3-Row AC Outlets", "Spacious Reclining Seats", "Hybrid Fuel Efficiency", "Utility Luggage Rack"]
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    slug: "innova-crysta-rental-goa",
    category: "Family Cars",
    type: "7-Seater MPV",
    transmission: "Manual",
    fuel: "Diesel",
    seats: 7,
    luggage: "5 Bags",
    price: 2800,
    featured: true,
    image: "images/cars/innova-crysta.webp",
    features: ["Plush Captain Seats", "Bulletproof Reliability", "Rear Tray Tables", "7 SRS Airbags"]
  },
  {
    id: "innova-hycross",
    name: "Toyota Innova Hycross",
    slug: "innova-hycross-rental-goa",
    category: "Family Cars",
    type: "7/8 Seater Hybrid MPV",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 7,
    luggage: "5 Bags",
    price: 3200,
    featured: false,
    image: "images/cars/innova-hycross.webp",
    features: ["Strong Hybrid System", "Dual Zone Climate Control", "Ottoman Captain Seats", "Panoramic Sunroof"]
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    slug: "fortuner-self-drive-rental-goa",
    category: "Premium Cars",
    type: "Luxury 4x4 SUV",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    luggage: "5 Bags",
    price: 4500,
    featured: true,
    image: "images/cars/fortuner.webp",
    features: ["Power Tailgate", "Aggressive Street Presence", "Active Traction Control", "Cooler Glovebox"]
  },
  {
    id: "carens",
    name: "Kia Carens",
    slug: "carens-rental-goa",
    category: "Family Cars",
    type: "7-Seater MPV",
    transmission: "Manual",
    fuel: "Petrol",
    seats: 7,
    luggage: "4 Bags",
    price: 2000,
    featured: false,
    image: "images/cars/carens.webp",
    features: ["One-Touch Tumble Seats", "Ambient Mood Lighting", "Air Purifier", "Premium Interiors"]
  },
  {
    id: "mini-cooper",
    name: "Mini Cooper Convertible",
    slug: "mini-cooper-rental-goa",
    category: "Premium Cars",
    type: "Luxury Convertible",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 4,
    luggage: "1 Bag",
    price: 8000,
    featured: true,
    image: "images/cars/mini-cooper.webp",
    features: ["Fully Automatic Soft Top", "Go-Kart Handling Engine", "Premium Leather Seats", "Harman Kardon Audio"]
  },
  {
    id: "bmw-5",
    name: "BMW 5 Series",
    slug: "bmw-self-drive-rental-goa",
    category: "Premium Cars",
    type: "Luxury Sedan",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    luggage: "4 Bags",
    price: 9000,
    featured: false,
    image: "images/cars/bmw-5.webp",
    features: ["Adaptive Air Suspension", "Digital Live Cockpit", "Premium Gesture Controls", "Sunblind Panels"]
  },
  {
    id: "audi",
    name: "Audi Sedan",
    slug: "audi-self-drive-rental-goa",
    category: "Premium Cars",
    type: "Luxury Sedan",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    luggage: "4 Bags",
    price: 8500,
    featured: false,
    image: "images/cars/audi.webp",
    features: ["Virtual Cockpit", "Quattro Drive Tech", "Electric Front Seats", "Crisp Sound Surround"]
  }
];

// 2. RENDER CAR CARDS (Used on Fleet page and Home page)
function renderCarCards(cars, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (cars.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: 3rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="margin-bottom: 0.5rem; color: var(--primary-dark);">No Cars Found</h3>
        <p style="color: var(--muted-text); margin-bottom: 1.5rem;">Try adjusting your filters or search terms.</p>
        <button onclick="resetAllFilters()" class="btn btn-secondary">Reset All Filters</button>
      </div>
    `;
    return;
  }

  cars.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    
    // Create the HTML structure for each car card
    card.innerHTML = `
      <div class="car-card-img-box">
        <span class="car-badge">${car.type}</span>
        <img src="${car.image}" alt="${car.name}" class="car-card-img" loading="lazy">
        <span class="car-price-badge">Starts <span>₹${car.price}</span>/day</span>
      </div>
      <div class="car-card-body">
        <h3 class="car-card-title">${car.name}</h3>
        <p class="car-card-subtitle">${car.category} • ${car.fuel}</p>
        
        <div class="car-spec-list">
          <div class="spec-item">
            <svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            <span>${car.transmission}</span>
          </div>
          <div class="spec-item">
            <svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>${car.seats} Seats</span>
          </div>
          <div class="spec-item">
            <svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M12 2v9"></path><path d="M8 5h8"></path></svg>
            <span>${car.luggage}</span>
          </div>
          <div class="spec-item">
            <svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
            <span>A/C Available</span>
          </div>
        </div>
        
        <div class="car-card-actions">
          <a href="cars/${car.slug}.html" class="btn btn-outline">View Details</a>
          <a href="https://wa.me/917410563071?text=${encodeURIComponent('Hello Apna Drive, I want to book ' + car.name + '. Please share availability.')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book Now</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  
  // Trigger Image Fallbacks if images fail
  if (window.initImageFallbackSystem) {
    window.initImageFallbackSystem();
  }
}

// 3. MAIN FILTERING AND SEARCH CODE FOR fleet.html
function initFleetFilters() {
  const searchInput = document.getElementById("search-car");
  const categoryFilter = document.getElementById("filter-category");
  const transmissionFilter = document.getElementById("filter-transmission");
  const fuelFilter = document.getElementById("filter-fuel");
  const seatingFilter = document.getElementById("filter-seating");
  const sortingSelect = document.getElementById("sort-price");
  const filterResetBtn = document.getElementById("btn-reset-filters");

  if (!categoryFilter && !searchInput && !transmissionFilter) return; // Prevent executing on non-fleet pages

  // Parse URL parameter options (e.g. ?category=SUVs, ?transmission=Automatic)
  parseUrlParameters();

  function applyFilters() {
    let filteredCars = [...CAR_DATABASE];

    // Search bar
    if (searchInput) {
      const query = searchInput.value.toLowerCase().trim();
      if (query !== "") {
        filteredCars = filteredCars.filter(car => 
          car.name.toLowerCase().includes(query) || 
          car.type.toLowerCase().includes(query) || 
          car.category.toLowerCase().includes(query)
        );
      }
    }

    // Category
    if (categoryFilter) {
      const selectedCat = categoryFilter.value;
      if (selectedCat && selectedCat !== "all") {
        // Handle custom groupings or strict matching
        if (selectedCat === "Automatic") {
          filteredCars = filteredCars.filter(car => car.transmission === "Automatic");
        } else if (selectedCat === "Manual") {
          filteredCars = filteredCars.filter(car => car.transmission === "Manual");
        } else {
          filteredCars = filteredCars.filter(car => car.category === selectedCat);
        }
      }
    }

    // Transmission
    if (transmissionFilter) {
      const selectedTrans = transmissionFilter.value;
      if (selectedTrans && selectedTrans !== "all") {
        filteredCars = filteredCars.filter(car => car.transmission === selectedTrans);
      }
    }

    // Fuel Type
    if (fuelFilter) {
      const selectedFuel = fuelFilter.value;
      if (selectedFuel && selectedFuel !== "all") {
        filteredCars = filteredCars.filter(car => car.fuel === selectedFuel);
      }
    }

    // Seating capacity
    if (seatingFilter) {
      const selectedSeats = seatingFilter.value;
      if (selectedSeats && selectedSeats !== "all") {
        const seatsNum = parseInt(selectedSeats);
        if (seatsNum === 4) {
          filteredCars = filteredCars.filter(car => car.seats <= 4);
        } else if (seatsNum === 5) {
          filteredCars = filteredCars.filter(car => car.seats === 5);
        } else if (seatsNum === 7) {
          filteredCars = filteredCars.filter(car => car.seats >= 7);
        }
      }
    }

    // Sorting
    if (sortingSelect) {
      const sortValue = sortingSelect.value;
      if (sortValue === "price-asc") {
        filteredCars.sort((a, b) => a.price - b.price);
      } else if (sortValue === "price-desc") {
        filteredCars.sort((a, b) => b.price - a.price);
      }
    }

    renderCarCards(filteredCars, "fleet-grid");
  }

  // Bind Events
  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (categoryFilter) categoryFilter.addEventListener("change", applyFilters);
  if (transmissionFilter) transmissionFilter.addEventListener("change", applyFilters);
  if (fuelFilter) fuelFilter.addEventListener("change", applyFilters);
  if (seatingFilter) seatingFilter.addEventListener("change", applyFilters);
  if (sortingSelect) sortingSelect.addEventListener("change", applyFilters);

  if (filterResetBtn) {
    filterResetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      resetAllFilters();
    });
  }

  // Initial render
  applyFilters();
}

// 4. PARSE SEARCH ARGS FROM URL
function parseUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  
  const category = urlParams.get("category");
  const transmission = urlParams.get("transmission");
  const fuel = urlParams.get("fuel");
  const seats = urlParams.get("seats");
  const search = urlParams.get("search");

  if (category) {
    const el = document.getElementById("filter-category");
    if (el) el.value = category;
  }
  if (transmission) {
    const el = document.getElementById("filter-transmission");
    if (el) el.value = transmission;
  }
  if (fuel) {
    const el = document.getElementById("filter-fuel");
    if (el) el.value = fuel;
  }
  if (seats) {
    const el = document.getElementById("filter-seating");
    if (el) el.value = seats;
  }
  if (search) {
    const el = document.getElementById("search-car");
    if (el) el.value = search;
  }
}

// 5. GLOBAL FILTER RESET
function resetAllFilters() {
  const searchInput = document.getElementById("search-car");
  const categoryFilter = document.getElementById("filter-category");
  const transmissionFilter = document.getElementById("filter-transmission");
  const fuelFilter = document.getElementById("filter-fuel");
  const seatingFilter = document.getElementById("filter-seating");
  const sortingSelect = document.getElementById("sort-price");

  if (searchInput) searchInput.value = "";
  if (categoryFilter) categoryFilter.value = "all";
  if (transmissionFilter) transmissionFilter.value = "all";
  if (fuelFilter) fuelFilter.value = "all";
  if (seatingFilter) seatingFilter.value = "all";
  if (sortingSelect) sortingSelect.value = "default";

  // Re-run filter and render
  const grid = document.getElementById("fleet-grid");
  if (grid) {
    renderCarCards(CAR_DATABASE, "fleet-grid");
  }
}

// Auto run filters setup if elements exist
document.addEventListener("DOMContentLoaded", () => {
  initFleetFilters();
  
  // If we are on the homepage, render only the featured cars (max 6-8)
  const homeFeaturedContainer = document.getElementById("home-featured-grid");
  if (homeFeaturedContainer) {
    const featuredCars = CAR_DATABASE.filter(car => car.featured).slice(0, 8);
    renderCarCards(featuredCars, "home-featured-grid");
  }
});
