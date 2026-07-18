/**
 * =========================================
 * APNA DRIVE - Premium Content Blocks & Travel Stories
 * /generator/contentBlocks.js
 * =========================================
 */

// A helper to wrap content blocks in a premium container
export function renderStoryContainer(title, blocks) {
  return `
  <!-- PREMIUM STORY-STYLE CONTENT BLOCKS -->
  <section class="section-padding story-content-section" style="background-color: var(--soft-cream); border-top: 1px solid var(--border-color); padding: 5rem 0;">
    <div class="container" style="max-width: 900px; margin: 0 auto; padding: 0 1.5rem;">
      <div style="text-align: center; margin-bottom: 3.5rem;">
        <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--primary-green); display: block; margin-bottom: 0.5rem;">Apna Drive Insider Stories</span>
        <h2 style="font-size: 2.25rem; color: var(--primary-dark); font-weight: 800; tracking-tight: -0.5px; line-height: 1.2;">${title}</h2>
        <div style="width: 60px; height: 3px; background-color: var(--primary-green); margin: 1.5rem auto 0 auto; border-radius: 2px;"></div>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 3.5rem;">
        ${blocks.map((block, idx) => `
          <article style="background-color: var(--white); padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.02); border: 1px solid rgba(0,0,0,0.03); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <span style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background-color: rgba(31, 111, 80, 0.1); color: var(--primary-green); border-radius: 50%; font-weight: 700; font-size: 0.9rem;">0${idx + 1}</span>
              <h3 style="font-size: 1.4rem; color: var(--primary-dark); font-weight: 700; margin: 0;">${block.title}</h3>
            </div>
            <div style="font-size: 1.05rem; line-height: 1.8; color: var(--muted-text); font-weight: 400; text-align: justify;">
              ${block.paragraphs.map(p => `<p style="margin-bottom: 1.25rem; text-indent: 0.5rem;">${p}</p>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
  `;
}

export const HOME_STORIES = [
  {
    title: "Navigating the Sun-Drenched Coastal Highways of Goa",
    paragraphs: [
      "There is a distinct sensation that takes over the moment your flight touches down at the tarmac in Goa. The heavy, salt-laden sea breeze immediately carries the promise of untamed freedom. For most travelers, the initial excitement is quickly dampened by the chaotic scramble for local transport, navigating aggressive taxi counters, or haggling over arbitrary transit fares. Stepping out of the terminal and directly into the driver's seat of your own private vehicle is the ultimate remedy. Having your chosen car waiting for you, immaculate and keys ready, redefines how your Goan escape begins. It is not merely about finding a way to reach your resort; it is about establishing complete autonomy over your holiday timeline from the very first minute.",
      "As you steer your car onto the smooth, winding roads leading away from the airport, the landscape transforms into a vivid tapestry of towering coconut groves, whitewashed ancestral villas, and glimpses of the shimmering Arabian Sea. Our premium fleet at the <a href=\"fleet.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Apna Drive Fleet</a> provides the perfect mechanical companion for this journey. Cruising down the highway, you have the liberty to pull over at a rustic roadside stall for a piping hot cup of local chai or capture the sunset over a scenic river bridge without a driver tapping their watch. This level of uncompromised freedom transforms transit from a mundane chore into an unforgettable chapter of your travel memories."
    ]
  },
  {
    title: "Savoring the Culinary Roadside Treasures of the Sunshine State",
    paragraphs: [
      "The true culinary soul of Goa does not reside in the heavily advertised beachfront shacks or crowded tourist strips. Instead, it is tucked away in quiet, leafy bylanes where generational family kitchens simmer rich coconut-based fish curries, and sleepy village bakeries bake fresh, crusty poee bread in wood-fired clay ovens before dawn. Reaching these culinary sanctuaries requires an adventurous spirit and, most importantly, your own reliable transport. Setting off on a food-focused road trip allows you to explore the local micro-regions of Goa at your leisure. You can seek out centuries-old taverns hidden deep within the Latin Quarter of Panjim, or navigate North Goa's inland hills to find organic farm-to-table restaurants that tourists rarely discover.",
      "With a private self-drive vehicle, you are no longer constrained by the operating limits of ride-hailing services or the reluctance of local drivers to navigate quiet rural paths. You can easily drive from a morning breakfast of spicy choriz pav in Mapusa to a late-lunch feast of fresh butter-garlic crab at a serene riverfront estuary in South Goa. Having a comfortable, air-conditioned cabin to return to after a satisfying, spice-rich meal ensures your culinary exploration remains relaxing. This freedom to chase authentic flavors across the length and breadth of the state is what makes self-driving an essential choice for discerning food enthusiasts visiting Goa."
    ]
  },
  {
    title: "Exploring Historic Portuguese Forts and Untouched Backwaters",
    paragraphs: [
      "While Goa is globally celebrated for its golden shorelines and high-energy nightlife, there exists a quiet, majestic world of ancient stone fortresses and peaceful, winding rivers just a short drive inland. Towering structures like Fort Aguada, Cabo de Rama, and Reis Magos stand as silent, weather-beaten guardians of Goa's dramatic maritime history. Planning a day of historical exploration allows you to witness breathtaking cliffside views where old iron cannons still point out toward the vast blue horizon. Climbing these ancient ramparts during the quiet morning hours provides a sense of peace and wonder that is impossible to find during the midday tourist rush, making early departures highly rewarding.",
      "Beyond the stone walls of the forts lie the tranquil, emerald backwaters of the Mandovi and Zuari rivers. Driving along these quiet river roads reveals traditional Goan villages where life moves at a gentle, timeless pace. You will pass historic whitewashed chapels, local fishermen casting hand-woven nets, and expansive salt pans gleaming under the warm tropical sun. By renting a vehicle from our dedicated <a href=\"locations/self-drive-car-rental-mopa-airport.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Mopa Airport Car Rental Hub</a>, you can easily transition from the popular coastal beaches to these pristine, green backwaters. It is a journey into the heart of Goa’s natural beauty, showcasing a side of the state that remains beautifully untouched by time."
    ]
  },
  {
    title: "The Ultimate Guide to Hassle-Free Handovers at Goa Airports",
    paragraphs: [
      "For most vacationers, the transition from the stress of a crowded commercial flight to the relaxation of a beach holiday is the most critical part of their trip. This transition is precisely where traditional car rental services often fail, leaving guests to wait in tedious queues or fill out endless physical paperwork. At Apna Drive, we have completely reimagined this airport arrival experience, designing a digital-first, paperless KYC system that guarantees a seamless vehicle handover in minutes. Whether you are landing at the modern Mopa Airport in the north or the bustling Dabolim Airport in South Goa, our friendly handover specialists are positioned to meet you directly at the terminal gate with your keys.",
      "This streamlined process means that within minutes of retrieving your luggage, you are driving your clean, fully sanitized car out of the airport compound and onto the open road. There are no hidden fees to negotiate, no unexpected fuel surcharges, and no high-pressure sales pitches for unnecessary insurance. Our dedication to complete transparency ensures that the price you see on your screen is exactly what you pay. This professional, stress-free handover sets an elegant, welcoming tone for your entire vacation, ensuring you start your coastal adventure with a smile rather than frustration."
    ]
  },
  {
    title: "A Local's Perspective on Driving Etiquette and Hidden Paths in Goa",
    paragraphs: [
      "Driving through Goa is an immensely pleasurable experience, but it does require a mindful approach and a respect for the local driving culture. Unlike the aggressive, fast-paced traffic of major Indian metros, Goan roads operate on a gentle, cooperative rhythm. Village roads are often narrow, winding around ancient banyan trees and ancestral homes, requiring drivers to slow down, share the road gracefully, and sound a polite, brief horn before sharp, blind curves. Honoring this local pace not only ensures your safety but also allows you to absorb the beautiful details of the countryside, from grazing cattle to children cycling past old colorful houses.",
      "Understanding these subtle driving customs unlocks the confidence needed to explore the truly secret corners of the state. With a self-drive car, you can navigate down to the quiet, white-sand cove of Galgibaga Beach in the far south—famous as a protected nesting site for olive ridley turtles—or drive up the winding cliffs of Chorla Ghat to witness the mist rolling over the dense forests of the Western Ghats. These extraordinary destinations are far beyond the reach of standard tourist itineraries. Approaching your journey with curiosity, respect, and a reliable private vehicle allows you to experience Goa not merely as a temporary visitor, but as an appreciative explorer."
    ]
  }
];

export const FLEET_STORIES = [
  {
    title: "Matching Your Goan Travel Vibe to the Perfect Vehicle",
    paragraphs: [
      "Every traveler arrives in Goa with a unique vision of their ideal holiday. Some imagine themselves cruising down palm-fringed avenues in a bold, rugged SUV, while others seek the quiet efficiency of a compact hatchback for navigating bustling market lanes. Our extensive collection at <a href=\"fleet.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Apna Drive Fleet</a> has been carefully curated to cater to these diverse travel personalities. Selecting the right vehicle is not just about utility; it is about matching your car to the specific rhythm of your planned itinerary, ensuring comfort and style align perfectly.",
      "If your plans involve exploring historic inland forts and taking long, scenic drives across state lines, a premium sedan or compact SUV provides the perfect blend of highway stability and modern cabin comfort. For couples seeking a romantic getaway, a premium hatchback offers easy parking and nimble handling in busy beach towns. By taking the time to match your vehicle to your personal travel style, you elevate your road trip experience from a simple commute to a beautifully integrated part of your vacation."
    ]
  },
  {
    title: "The Thrill of Open-Top Driving: Why the Thar is Goa’s Darling",
    paragraphs: [
      "There is an undeniable, magnetic appeal to driving a rugged, open-top vehicle along the sunny coastline of Goa. The <a href=\"cars/thar-self-drive-rental-goa.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Mahindra Thar Rental</a> has firmly established itself as the ultimate symbol of adventure in the sunshine state, offering a commanding view of the road and a robust presence that turns heads. Driving a Thar with the roof down, feeling the warm sea breeze and hearing the rhythmic crash of the waves, creates an immersive connection with Goa's beautiful tropical environment.",
      "The Thar is not just about striking visuals; its high ground clearance and robust four-wheel-drive capability make it the perfect vehicle for seeking out untouched viewpoints and quiet, sandy tracks. Whether you are driving down to a secluded bay in South Goa or navigating the rocky paths leading to an ancient clifftop fort, the Thar handles every challenge with ease. It is a vehicle designed for those who refuse to stay on the beaten path, turning every single drive into an exciting, unforgettable outdoor adventure."
    ]
  },
  {
    title: "Navigating Narrow Lanes Safely: The Practicality of Compact Hatchbacks",
    paragraphs: [
      "While larger vehicles offer command and space, there is a quiet, brilliant practicality to renting a premium compact hatchback for your Goan holiday. Towns like Calangute, Baga, and the historic quarters of Panjim are famous for their charming, narrow lanes, historic stone walls, and bustling street markets. In these vibrant but high-density areas, vehicles like the <a href=\"cars/baleno-self-drive-rental-goa.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Maruti Suzuki Baleno</a> or <a href=\"cars/swift-self-drive-rental-goa.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Maruti Suzuki Swift</a> emerge as the true unsung heroes of coastal transit.",
      "These nimble hatchbacks allow you to squeeze into compact parking spots near popular beach shacks, navigate tight village corners with ease, and zip through local traffic effortlessly. They offer outstanding fuel economy, modern cabin connectivity, and ample space for your beach gear and luggage. Choosing a compact hatchback minimizes parking anxiety and navigation stress in busy zones, leaving you with more energy to focus on the sights, sounds, and relaxing experiences of your vacation."
    ]
  },
  {
    title: "Group Adventures Reimagined: The Comfort of Premium 7-Seaters",
    paragraphs: [
      "A family vacation or a reunion with close friends is built on shared laughter, late-night conversations, and the joy of exploring new places together. However, splitting a close-knit group into multiple small cabs or separate cars often dilutes this shared experience. This is where our premium 7-seater multi-purpose vehicles, such as the <a href=\"cars/innova-crysta-rental-goa.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Innova Crysta Rental</a> or Maruti Suzuki Ertiga, become the perfect choice for group travel.",
      "These spacious vehicles ensure that everyone travels together under one roof, sharing the same playlist, pointing out scenic landmarks, and enjoying group conversations. With generous legroom, dedicated rear air conditioning vents, and flexible luggage configurations, even the longest cross-state drives remain exceptionally comfortable. Traveling together in a premium 7-seater turns the journey itself into a fun, collaborative experience, strengthening bonds and creating beautiful collective memories."
    ]
  },
  {
    title: "Smooth Coastal Cruising: The Modern Appeal of Automatic Rentals",
    paragraphs: [
      "Vacations are meant to be a escape from the stress and daily grind of urban life, and your driving experience should reflect that same sense of relaxation. While manual gearboxes offer a classic, mechanical feel, navigating Goa's popular beach stretches during peak sunset hours can quickly become tiring with a heavy clutch. Opting for an automatic transmission vehicle from our modern fleet allows you to experience the ultimate ease of smooth, two-pedal coastal cruising.",
      "An automatic car handles the constant stop-and-go of resort traffic smoothly, allowing you to keep your focus entirely on the beautiful scenery, winding roads, and tropical surroundings. From modern automatic hatchbacks to luxury automatic SUVs, our fleet offers seamless gear transitions and effortless power. This modern ease of driving ensures that even after a long day of exploring distant spice plantations or historical sites, your drive back to your hotel remains a peaceful, deeply relaxing experience."
    ]
  }
];

export const GOA_TRAVEL_STORIES = [
  {
    title: "The Dual Souls of Goa: Contrasting the Electric North and Serene South",
    paragraphs: [
      "To truly understand Goa, one must appreciate that it is a state of two distinct, beautiful personalities. North Goa is a vibrant, high-energy playground, famous for its bustling beach markets, legendary nightlife, and eclectic culinary scenes centered around Calangute, Baga, and Anjuna. It is a place where there is always a new restaurant to discover, a lively beach party to join, and a vibrant crowd to mingle with. Exploring the north is a thrilling experience that stimulates the senses and keeps you constantly on the move.",
      "In stark contrast, South Goa is a sanctuary of peace, natural beauty, and historical elegance. Here, wide, uncrowded beaches like Palolem, Varca, and Agonda stretch out under the warm sun, framed by quiet coconut groves and sleepy fishing villages. The heritage of South Goa is reflected in its beautifully preserved Portuguese-era mansions, historic spice plantations, and peaceful churches. By securing a reliable self-drive car from <a href=\"fleet.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Apna Drive</a>, you gain the freedom to seamlessly traverse between these two contrasting worlds, experiencing the full spectrum of Goa's diverse cultural landscape."
    ]
  },
  {
    title: "Finding Solitude: Driving to Goa's Uncharted, Hidden Beaches",
    paragraphs: [
      "While popular shorelines offer excitement, the true romance of Goa lies in its secret, secluded beaches that remain hidden from mainstream tourist maps. Destinations like Cola Beach, with its unique freshwater lagoon running parallel to the sea, or the dramatic, cliff-walled cove of Kakolem Beach, offer a level of pristine solitude that feels like stepping onto a deserted island. Reaching these hidden gems is an adventure in itself, often requiring navigating winding dirt tracks and steep, rocky paths.",
      "A private self-drive vehicle is absolutely essential for these coastal explorations, as local taxis and public transport rarely service these remote areas. Having your own car allows you to pack a picnic basket, load up your beach umbrellas, and drive to these secluded shores early in the morning to enjoy them in complete peace. Watching the morning sun cast a golden glow over an empty beach, with only the crabs and sea birds for company, is a magical experience that highlights the true luxury of private travel."
    ]
  },
  {
    title: "A Journey Through Time: Discovering Portuguese Heritage and Old Goa",
    paragraphs: [
      "Goa's rich, multicultural identity is deeply rooted in its fascinating history, particularly the four centuries of Portuguese rule that shaped its architecture, language, and customs. A road trip to the historical city of Old Goa reveals grand, towering basilicas and cathedrals like the Basilica of Bom Jesus and the Se Cathedral, which stand as magnificent examples of Baroque and Manueline architecture. Driving through these historic streets, you can feel the echoes of a bygone era in the massive stone arches and peaceful courtyards.",
      "To experience this heritage in a more intimate setting, drive your rental car to the historic Fontainhas neighborhood in Panjim. This charming Latin Quarter is famous for its narrow, winding lanes lined with brightly colored, tiled Portuguese houses, cozy art galleries, and quaint local bakeries. Exploring these historic streets in your private vehicle allows you to stop and admire the intricate wooden balconies, historic street lamps, and peaceful chapels at your own pace, gaining a deeper appreciation for Goa's unique cultural tapestry."
    ]
  },
  {
    title: "Chasing Waterfalls and Wildlife: Road Trips into the Western Ghats",
    paragraphs: [
      "While most visitors focus entirely on the coast, Goa's eastern border is defined by the lush, mist-covered peaks of the Western Ghats—one of the world's most important biodiversity hotspots. Driving inland, the coastal palms give way to dense, ancient tropical rainforests, scenic mountain passes, and gushing waterfalls. The legendary Dudhsagar Falls, cascading down four tiers of steep mountain rock, is a spectacular sight that showcases the raw, untamed power of Goa's wilderness.",
      "A self-drive road trip into these mountain regions, such as a drive to Netravali Wildlife Sanctuary or the scenic heights of Chorla Ghat, is an exhilarating experience for nature lovers. The air becomes cool and crisp, and the roads wind through quiet forest reserves where you might spot rare hornbills, playful langurs, or wild deer. Having a reliable, high-clearance SUV like our <a href=\"cars/thar-self-drive-rental-goa.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Mahindra Thar Rental</a> provides the perfect combination of power and safety for navigating these winding mountain roads, turning your beach holiday into a rich, multi-dimensional nature adventure."
    ]
  },
  {
    title: "Seasonality and Celebrations: Timing Your Perfect Goan Escape",
    paragraphs: [
      "Goa is a destination that changes beautifully with the passing seasons, offering a completely different experience depending on when you choose to visit. The winter months from November to February are the high season, characterized by perfect sunny weather, vibrant beach festivals, and a thrilling, high-energy atmosphere. This is the ideal time for those who want to experience Goa's famous nightlife, water sports, and bustling open-air markets at their peak.",
      "However, the monsoon season from June to September holds a unique, romantic charm of its own. The entire state is transformed into a lush, emerald paradise, the waterfalls flow at their peak, and the beaches become quiet, peaceful sanctuaries. Driving through the countryside during the monsoons, with the rain washing the coconut fronds and the mist rolling over the hills, is an incredibly peaceful experience. No matter which season you choose, having a reliable car from Apna Drive ensures you can navigate the state comfortably in any weather, making the most of your Goan escape."
    ]
  }
];

export const BLOG_STORIES = [
  {
    title: "The Art of Slow Travel: Why Road Trips Change How We Experience Goa",
    paragraphs: [
      "In our fast-paced, hyper-connected world, vacations are often rushed, with travelers trying to check off as many tourist sights as possible in a short weekend. However, the true beauty of Goa cannot be appreciated in a rush; it must be savored slowly, like a rich, simmered coconut curry. Slow travel is about embracing the joy of the journey itself, allowing yourself to get lost down winding country roads, strike up conversations with local bakers, and spend hours reading a book under a shady palm tree.",
      "A self-drive road trip is the perfect medium for this slow travel philosophy. When you are behind the wheel of your own rental car from <a href=\"fleet.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Apna Drive</a>, there are no fixed tour buses to catch and no rigid schedules to follow. You can choose to stay at a quiet beach for sunset, take a long detour through a beautiful forest reserve, or spend a lazy afternoon exploring a historic estate. This freedom to set your own gentle pace is what transforms a simple trip into a deeply restorative, soulful travel experience."
    ]
  },
  {
    title: "Essential Road Trip Playlists and the Soundtrack of Your Journey",
    paragraphs: [
      "Every great road trip needs a memorable soundtrack—a collection of songs that capture the mood of the landscape, the rhythm of the road, and the excitement of exploration. There is a unique magic to driving down a palm-fringed coastal road with the windows down, feeling the warm sea air, while your favorite song plays on the car's stereo. The music you choose becomes woven into your travel memories, instantly transporting you back to those sunny Goan roads years later.",
      "Our modern rental fleet features advanced touchscreen infotainment systems with seamless Bluetooth, Apple CarPlay, and Android Auto connectivity, ensuring your personal playlists sync effortlessly. Whether you prefer breezy acoustic tunes for morning drives to the beach, high-energy tracks for sunset cruising, or relaxing ambient music for quiet night drives back to your hotel, our cars provide the perfect audio canvas. Setting the right soundtrack elevates your daily drives into a fun, cinematic experience that defines your holiday vibe."
    ]
  },
  {
    title: "Travel Photography from Behind the Wheel: Capturing Goa's Scenic Roads",
    paragraphs: [
      "Goa is an absolute paradise for photographers, offering a stunning mix of dramatic landscapes, vibrant local architecture, and rich tropical colors. While iconic beach sunsets are beautiful, some of the most captivating photographic opportunities are found along the scenic roads of the countryside. From ancient Portuguese-style chapels painted in brilliant blue to traditional fishermen crossing narrow river bridges at dawn, the road reveals a wealth of candid, authentic moments.",
      "Having a private self-drive car is a massive advantage for photography enthusiasts. It allows you to travel during the golden hours of early morning and late afternoon when the light is soft, warm, and perfect for capturing stunning details. You can easily pull over safely whenever you spot a beautiful vista, a colorful village street, or a dramatic clifftop view. It is a level of creative freedom that allows you to document your journey in a rich, highly personal way, creating a beautiful visual journal of your Goan adventure."
    ]
  },
  {
    title: "Behind the Scenes: How We Keep the Wheels Turning Safely",
    paragraphs: [
      "While our customers enjoy the open roads and beautiful beaches of Goa, a dedicated team of professionals works tirelessly behind the scenes to ensure every rental is safe, clean, and mechanically flawless. At Apna Drive, our commitment to customer safety is reflected in our rigorous, multi-point vehicle inspection protocols. Every car that returns from a trip undergoes a comprehensive mechanical check, covering brakes, suspension, tire pressure, and engine fluids before it is cleared for the next guest.",
      "In addition to mechanical safety, we maintain strict sanitization and deep-cleaning standards. Our detailing team uses premium, eco-friendly cleaning agents to thoroughly sanitize high-touch surfaces, wash the interiors, and polish the exterior, ensuring the car feels fresh and welcoming when you step inside. This professional, disciplined approach to vehicle maintenance is the foundation of our service, giving our travelers the absolute peace of mind needed to explore Goa with complete confidence."
    ]
  },
  {
    title: "Stories from Our Travelers: Unforgettable Journeys Across the Coast",
    paragraphs: [
      "Over the years, we have had the privilege of welcoming thousands of diverse travelers to Goa, each bringing their own unique stories, dreams, and adventures. From newlyweds embarking on their first romantic road trip together to groups of college friends celebrating their graduation, our cars have served as the backdrop for countless unforgettable memories. We love hearing from our guests when they share their stories of finding secret waterfalls, proposing at sunset, or discovering hidden village cafes.",
      "One memorable story came from a family who rented an <a href=\"cars/innova-crysta-rental-goa.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Innova Crysta Rental</a> to take their aging grandparents on a nostalgic tour of their ancestral village in South Goa. They spent a beautiful week visiting old churches, sharing family stories, and reconnecting with their roots—a journey that would have been incredibly difficult without the spacious comfort of a private car. These heartwarming stories inspire our team every day, reminding us that we are not just renting cars, but helping travelers create lifelong memories."
    ]
  }
];

export const ABOUT_STORIES = [
  {
    title: "Our Genesis: Transforming Self-Drive Rentals in the Sunshine State",
    paragraphs: [
      "Apna Drive was born out of a simple, shared frustration: the realization that renting a self-drive car in Goa was often a complicated, stressful, and nontransparent experience. Our founders, avid travelers themselves, noticed that visitors were routinely met with hidden surcharges, poorly maintained vehicles, and confusing manual paperwork that ate into their precious holiday time. We saw an opportunity to completely transform this industry, establishing a modern, highly professional, and customer-first car rental service that prioritizes absolute honesty and convenience.",
      "Starting with just a small fleet of hatchbacks, we focused on building trust through transparent pricing, digital document verification, and impeccable vehicle maintenance. Today, Apna Drive has grown into one of Goa's most trusted self-drive rental agencies, offering a diverse fleet of premium hatchbacks, rugged SUVs, and spacious family cars. Our growth is a testament to our unwavering commitment to our founding vision: providing a seamless, stress-free driving experience that lets travelers explore the beauty of Goa with complete freedom and peace of mind."
    ]
  },
  {
    title: "The Core Values That Drive Our Customer-First Philosophy",
    paragraphs: [
      "At the heart of Apna Drive lies a set of deeply held core values that guide every decision we make, from how we maintain our vehicles to how we interact with our guests. Our first and most important value is absolute transparency. We believe in honest, upfront pricing with zero hidden charges, ensuring our customers know exactly what they are paying for from the very beginning. This commitment to honesty build strong, long-term relationships with our travelers, many of whom return to us year after year.",
      "Our second core value is mechanical and aesthetic excellence. We take immense pride in our fleet, ensuring every car is subjected to rigorous safety checks and deep cleaning before every trip. Finally, we are driven by a hospitality-first mindset. We view ourselves not just as a car rental company, but as a welcoming ambassador to Goa. Our round-the-clock customer support desk and friendly handover specialists are always ready to assist you, ensuring your vacation runs smoothly from start to finish."
    ]
  },
  {
    title: "Behind the Team: The People Who Welcome You to Goa",
    paragraphs: [
      "While our beautiful cars are the face of Apna Drive, it is our dedicated, passionate team of local professionals who truly make the magic happen. From our booking coordinators who manage reservations with seamless efficiency to our expert mechanics who keep our engines running perfectly, every team member plays a critical role in our success. Our handover specialists, positioned at key hubs like Mopa and Dabolim airports, are the warm, welcoming hosts who greet you upon arrival.",
      "Our team members are all proud locals who possess a deep, intimate knowledge of Goa's geography, culture, and hidden treasures. They are always happy to share a personal recommendation for the best sunset viewpoint, a quiet local seafood eatery, or a scenic driving route through the countryside. This warm, personal touch transforms a standard business transaction into a genuinely supportive relationship, ensuring you feel welcomed, valued, and well-prepared for your coastal road trip."
    ]
  },
  {
    title: "Our Sustainability Mission: Moving Towards a Greener Goa",
    paragraphs: [
      "As a company that operates a large fleet of vehicles in one of India's most beautiful, ecologically sensitive coastal states, we recognize our responsibility to minimize our environmental footprint. We are deeply committed to promoting responsible tourism and sustainable travel practices that protect Goa's pristine beaches, lush forests, and rich biodiversity for future generations. Our sustainability mission is integrated into our daily operations in several meaningful ways.",
      "We actively optimize our fleet efficiency through regular mechanical maintenance, ensuring our engines run cleanly and consume less fuel. We have also pioneered a paperless, digital-first KYC and booking system, eliminating the need for physical forms and reducing paper waste across our offices. Looking ahead, we are actively researching the integration of hybrid and electric vehicles into our fleet, dreaming of a future where visitors can cruise along Goa's scenic coastal highways with zero emissions."
    ]
  },
  {
    title: "Looking to the Horizon: Our Vision for the Future of Goan Tourism",
    paragraphs: [
      "The travel landscape is constantly evolving, with modern travelers seeking more authentic, personalized, and independent experiences than ever before. At Apna Drive, our vision for the future is to continue leading this positive transformation in Goan tourism. We plan to expand our premium fleet, introducing the latest vehicle models and advanced safety features to ensure our guests always have access to the very best driving companions on the market.",
      "We are also investing in cutting-edge digital technologies to make our booking and handover processes even faster, simpler, and more secure. However, as we grow and innovate, our core dedication to transparent, honest, and warm personal service will never change. We aim to remain the gold standard for self-drive rentals in Goa, supporting responsible exploration and helping travelers from all over the world discover the true, soulful character of this tropical paradise."
    ]
  }
];

export const CONTACT_STORIES = [
  {
    title: "Open Communication: We are Always Just a Ring or Message Away",
    paragraphs: [
      "In an era where customer service is increasingly dominated by frustrating automated bots, cold email ticketing systems, and endless phone menus, Apna Drive stands firmly for real, direct human connection. We believe that when you have a question about your rental, need assistance with your booking, or require support on the road, you deserve to speak directly to a friendly, knowledgeable human being who can help you immediately, without any delays.",
      "Our dedicated customer support desk is active 24 hours a day, 7 days a week, ensuring help is always available whenever you need it. Whether you prefer a quick, convenient chat on <a href=\"https://wa.me/917410563071\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">WhatsApp Support</a> or a direct, friendly phone call to <a href=\"tel:+917410563071\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">+91 74105 63071</a>, our team is always ready to assist you. This unwavering commitment to open, instant communication ensures you never feel stranded or unsupported during your Goan holiday."
    ]
  },
  {
    title: "What to Expect When You Reach Out to Our Booking Desk",
    paragraphs: [
      "When you contact Apna Drive, you are not just getting a customer service representative; you are connecting with a supportive travel partner who is genuinely excited to help you plan your Goan road trip. Our booking process is designed to be highly consultative, reassuring, and tailored to your specific needs. When you reach out to discuss your trip, our friendly team members take the time to understand your travel style, group size, and planned itinerary.",
      "We will help you select the absolute best vehicle from our fleet, explain our simple document verification process, and coordinate your preferred delivery time and location. If you are landing at Mopa or Dabolim airport, we will gather your flight details to track your arrival and ensure our specialist is waiting for you the moment you step out of the terminal. This personalized, meticulous coordination ensures that your transition from flight arrival to driving away is flawless."
    ]
  },
  {
    title: "Real-Time Assistance for Peace of Mind on Goan Roads",
    paragraphs: [
      "Renting a car in an unfamiliar destination can sometimes bring a touch of anxiety, with travelers worrying about unexpected mechanical issues, flat tires, or navigation challenges. At Apna Drive, we completely eliminate these worries by providing comprehensive, real-time roadside assistance across the entire state of Goa. No matter where you choose to explore, from the remote cliffs of the south to the mountain passes of the east, our team has your back.",
      "In the highly unlikely event that you face any vehicle issues, a simple call or message to our support desk immediately triggers a rapid response. We will dispatch a local technician to your exact location to resolve the issue, or provide a replacement vehicle from our nearest hub to keep your vacation moving smoothly. This robust safety net guarantees that you can explore Goa's quietest, most scenic routes with the absolute peace of mind that support is always ready to assist you."
    ]
  },
  {
    title: "Collaborative Planning: Tailoring Your Rental for Special Occasions",
    paragraphs: [
      "Goa is a globally popular destination for celebrating life's most beautiful milestones, from romantic beach proposals and tropical destination weddings to grand family reunions and premium corporate retreats. These special events require a level of coordination, style, and reliability that goes far beyond a standard car rental. At Apna Drive, we love collaborating with our guests to tailor our vehicle services for these memorable, high-profile occasions.",
      "Whether you need a convoy of clean, matching SUVs like the <a href=\"cars/thar-self-drive-rental-goa.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Mahindra Thar Rental</a> for your wedding party, a premium luxury car like the Mini Cooper for a scenic proposal drive, or multiple spacious 7-seaters to transport your corporate team, our team is ready to design a custom package for you. We will coordinate decorated handovers, schedule multi-point deliveries, and manage the logistics flawlessly, allowing you to focus entirely on enjoying your special celebration."
    ]
  },
  {
    title: "Gathering Feedback: Our Commitment to Continuous Excellence",
    paragraphs: [
      "We believe that true professional craftsmanship is a continuous, lifelong journey of learning, refinement, and constant improvement. At Apna Drive, we do not simply finish a rental and forget about it; we actively listen to our customers' feedback, suggestions, and stories to constantly elevate our service standards. Every review we receive, whether it praises our cleanliness or suggests a minor tweak, is analyzed with care.",
      "We use this valuable feedback to constantly update our maintenance checklists, refine our digital booking systems, and train our handover specialists to be even more supportive and welcoming. Our commitment to continuous excellence is what keeps us at the forefront of Goan tourism, ensuring that every time you return to rent from Apna Drive, the experience is even smoother, more convenient, and more enjoyable than your last visit."
    ]
  }
];

export const BOOKING_STORIES = [
  {
    title: "Simplicity Redefined: How Our Online Booking System Saves Your Time",
    paragraphs: [
      "When you are planning a hard-earned vacation, the last thing you want to deal with is a complicated, tedious booking process filled with endless digital forms, confusing drop-down menus, and mandatory account creations. At Apna Drive, we believe that reserving a car should be as simple, fast, and exciting as starting the engine. That is why we have completely redesigned our <a href=\"booking.html\" style=\"color: var(--primary-green); font-weight: 600; text-decoration: underline;\">Online Booking Form</a>, trimming away unnecessary steps to create a streamlined, one-page reservation engine.",
      "Our clean interface allows you to select your preferred car, input your travel dates, specify your delivery location, and submit your request in under two minutes. Our system automatically processes your details and routes your reservation directly to our active WhatsApp desk. This instant routing means a real human booking specialist reviews your request immediately, confirming availability and finalizing your rental in real time, saving you from waiting hours for automated email confirmations."
    ]
  },
  {
    title: "Seamless Document Verification: Secure, Private, and Fast",
    paragraphs: [
      "In today's digital age, data privacy and secure personal document handling are of paramount importance to travelers. To ensure a safe, legal rental experience under Goa RTO regulations, we require standard driving license and identity verification for all lead drivers. We have designed our document verification process to be exceptionally secure, fast, and completely paperless, respecting your privacy at every step.",
      "Instead of forcing you to upload sensitive documents to insecure public databases or carry physical photocopies across the airport, we utilize direct, end-to-end encrypted chat channels. Once your booking request is submitted, our coordinator will guide you to securely share your documents on WhatsApp. This highly personal approach ensures your data is handled with absolute confidentiality by a single verified specialist, allowing us to complete your KYC ahead of time so your arrival handover is near-instantaneous."
    ]
  },
  {
    title: "Transparent Pricing: What You See is Exactly What You Pay",
    paragraphs: [
      "One of the most common complaints travelers have with traditional car rental services is the unexpected sticker shock that occurs during vehicle handover. Many agencies lure guests in with low base rates, only to tack on mandatory cleaning fees, premium airport delivery surcharges, or unexpected security deposit fees at the last second. At Apna Drive, we view this practice as a breach of trust, standing firmly for absolute pricing transparency.",
      "Every rate displayed on our website represents the genuine, honest price of the rental. There are no hidden airport handover surcharges, no surprise service fees, and no high-pressure upselling at the counter. The price we confirm during your booking conversation is the exact amount you pay upon delivery. This commitment to transparent pricing ensures you can budget for your trip with absolute confidence, enjoying your holiday without any financial surprises."
    ]
  },
  {
    title: "Understanding Our Flexible Cancellation and Amendment Policies",
    paragraphs: [
      "We understand that travel planning in the modern world requires a high degree of flexibility. Flights can be delayed, train schedules adjusted, or unexpected personal events can force you to rearrange your vacation dates at the last second. At Apna Drive, we believe that our customers should never be heavily penalized for these unpredictable, stressful changes in their travel plans.",
      "That is why we offer highly supportive, flexible cancellation and booking amendment policies that put your peace of mind first. If your plans change, simply notify our booking desk as early as possible. We will help you reschedule your rental to match your new travel dates at no extra cost, or process a fair, hassle-free cancellation according to our transparent guidelines. This supportive approach allows you to book your favorite vehicle months in advance with complete confidence, knowing we have your back if plans shift."
    ]
  },
  {
    title: "Preparing for Handover: What to Bring on Your Arrival Day",
    paragraphs: [
      "To ensure your vehicle handover at the airport or hotel is as fast and smooth as possible, a small amount of preparation goes a long way. On your arrival day, please ensure the lead driver has their original, physical Driving License and a valid Government-issued Photo ID (such as an Aadhaar Card or Passport) ready to show our handover specialist. These original physical documents are legally required for a quick on-site verification.",
      "Our friendly specialist will meet you at the pre-coordinated terminal gate, guide you through a quick, joint walk-around of the vehicle to note its pristine condition, and hand over the keys. This entire process takes less than five minutes. Taking a brief moment to prepare your physical documents ensures you can immediately start your Goan road trip, driving away toward the sun, sand, and beautiful coastal roads without a single moment of delay."
    ]
  }
];

export function getParameterizedStories(type, name, rootPath = "") {
  if (type === "car") {
    return [
      {
        title: `Experience the True Character of Your Self-Drive ${name}`,
        paragraphs: [
          `Driving a premium vehicle like the self-drive ${name} along the sunny coastal roads of Goa is a highly rewarding, sensory experience. This vehicle has been selected for our elite fleet because of its outstanding engineering, responsive handling, and exceptional passenger comfort. Cruising through scenic towns, the ${name} delivers a smooth, powerful performance that handles Goa's winding hills and coastal straightaways with absolute grace.`,
          `Whether you are zipping through the historic lanes of Panjim or taking a long, scenic drive down to the quiet beaches of South Goa, the ${name} adapts perfectly to your travel pace. Its spacious cabin, premium seating, and quiet ride quality ensure that even the longest day trips remain relaxing, making it the perfect mechanical companion for your tropical road trip adventure.`
        ]
      },
      {
        title: `Modern Cabin Technology for a Seamlessly Connected Journey`,
        paragraphs: [
          `A premium road trip requires modern connectivity, and the ${name} is fully equipped to keep your digital world perfectly synced. Featuring an advanced, high-resolution infotainment system with seamless Bluetooth, Apple CarPlay, and Android Auto integration, you can easily load up your GPS navigation maps and stream your custom travel playlists with ease.`,
          `No more dealing with confusing local directions or traveling in silence. The ${name}'s premium sound system fills the cabin with rich, high-fidelity audio, setting the perfect tropical vibe as you cruise past palm trees and beach shacks. Convenient USB charging ports throughout the cabin keep your smartphones and cameras fully powered, ensuring you never miss a beautiful sunset photo opportunity.`
        ]
      },
      {
        title: "Pristine Safety Standards: Our Dedication to Your Peace of Mind",
        paragraphs: [
          `Your safety is the absolute highest priority at Apna Drive. Before any ${name} is handed over to a guest, it undergoes a meticulous, multi-point inspection by our expert mechanical team. We verify tire pressure, brake responsiveness, suspension alignment, and engine fluids, ensuring the vehicle is in absolute peak condition for your journey.`,
          `In addition to mechanical safety, our dedicated detailing team performs a deep, hygienic sanitization of the entire cabin, washing seat covers and thoroughly wiping high-touch surfaces like the steering wheel, gear shift, and door handles with premium eco-safe agents. Driving our ${name} means traveling with the absolute confidence that your car is as clean, safe, and reliable as your own private vehicle.`
        ]
      },
      {
        title: "The Economics of Self-Drive: Smart Budgeting for Goa Explorers",
        paragraphs: [
          `Choosing to rent a self-drive ${name} is not just a choice for luxury and freedom; it is also an exceptionally smart financial decision for your holiday budget. Traditional taxi fares in Goa are notoriously expensive, with fixed rates for single point-to-point journeys often exceeding the cost of an entire day's car rental. These high taxi charges can quickly add up, severely limiting your willingness to explore.`,
          `By renting a self-drive vehicle, you gain 24 hours of unlimited exploration for a single, transparent daily rate with zero hidden surcharges. You can visit multiple beaches, historic forts, and remote inland viewpoints in a single day without paying extra. This incredible cost efficiency unlocks the freedom to explore Goa thoroughly, getting maximum value out of every single vacation day.`
        ]
      },
      {
        title: `Sunset and Shorelines: Creating Lifelong Memories in Your ${name}`,
        paragraphs: [
          `Some of the most beautiful, enduring memories of a Goan vacation are the spontaneous, unscripted moments that occur when you have the freedom to explore at your own pace. Imagine driving your ${name} down to a quiet, white-sand cliffside viewpoint just as the sky begins to blush with shades of deep orange and purple. You park the car, open the trunk, and sit back to watch the golden sun melt into the vast Arabian Sea.`,
          `With a private car, you are never rushed by a waiting driver or constrained by tight public transit schedules. You can stay and watch the stars appear over the ocean, enjoy a late-night dinner at a cozy beach tavern, and drive back to your resort in absolute comfort. Driving the ${name} is about creating these beautiful, timeless moments, turning your vacation into a rich tapestry of unforgettable stories.`
        ]
      }
    ];
  } else if (type === "service") {
    return [
      {
        title: `Elevating Travel Comfort with Our Premium ${name}`,
        paragraphs: [
          `At Apna Drive, we believe that premium transportation is the foundation of a truly successful vacation. Our dedicated ${name} has been designed from the ground up to offer an uncompromised level of comfort, reliability, and sheer convenience to travelers visiting Goa. We understand that every guest arrives with high expectations, and our mission is to exceed them at every single touchpoint.`,
          `From our meticulously maintained vehicles to our polite, professional staff, every aspect of our ${name} is engineered to deliver a seamless experience. You can trust our fleet to provide clean, comfortable, and safe vehicles that let you focus entirely on the beautiful tropical scenery, vibrant local culture, and relaxing moments of your holiday.`
        ]
      },
      {
        title: "The Convenience of 24/7 Handover and Doorstep Delivery",
        paragraphs: [
          `Goa is a dynamic destination where flights land at all hours of the night and travel plans can change in an instant. To support this fast-paced environment, our ${name} operates around the clock, providing flexible delivery and handover options anywhere in the state. Whether you need your car delivered to a luxury resort in South Goa, a private villa in the north, or directly to a railway station, our team coordinates the logistics seamlessly.`,
          `Our friendly handover specialists travel to your preferred location, handle the digital KYC verification quickly, and present you with your keys in minutes. This doorstep service eliminates the need to travel to distant rental offices or wait in tedious administrative queues, letting you start your vacation immediately and comfortably from your hotel lobby.`
        ]
      },
      {
        title: "Pristine Detailing and Rigorous Safety Inspection Protocols",
        paragraphs: [
          `We believe that a clean car is a safe car, and our commitment to hygiene is reflected in our rigorous detailing protocols. Every vehicle assigned to our ${name} undergoes a thorough deep-cleaning process before handover. Our detailing specialists sanitize high-touch surfaces, vacuum the upholstery, and polish the exterior, ensuring the car is pristine and fresh.`,
          `Alongside aesthetic cleanliness, our experienced mechanics perform comprehensive safety checks. We inspect the braking system, check tire tread depth and pressure, test air conditioning performance, and run electronic diagnostics on every car. This disciplined, professional approach to fleet maintenance guarantees that your rental car operates flawlessly, providing a safe, worry-free drive across Goa.`
        ]
      },
      {
        title: "Uncompromising Transparency: Our Honest, No-Hidden-Fee Promise",
        paragraphs: [
          `Trust is the most valuable asset we build with our travelers, and we protect this trust by maintaining absolute transparency in all our business transactions. Unlike many traditional rental companies that hide additional surcharges in complex fine print, our ${name} operates on a strict, honest pricing policy. The daily rate confirmed during your booking is the exact price you pay.`,
          `There are no unexpected airport delivery surcharges, no surprise cleaning fees, and no hidden insurance upsells. We explain our fair security deposit terms clearly up front, and process releases immediately during vehicle return. This upfront, professional transparency allows you to plan your holiday budget with confidence, establishing a reassuring partnership that puts your peace of mind first.`
        ]
      },
      {
        title: "Exploring Goa’s Scenic Countryside with Complete Driving Freedom",
        paragraphs: [
          `The true magic of Goa lies in its vast, beautiful diversity—from golden sandy beaches and historic colonial forts to lush spice plantations and dense mountain ghats. Experiencing this rich landscape thoroughly is only possible when you have the absolute freedom of a private self-drive vehicle. Our premium ${name} unlocks this freedom, allowing you to design your own custom road trips.`,
          `You can drive to a secluded coastal bay in the morning, explore an ancient clifftop fortress in the afternoon, and savor a candlelight dinner at an inland riverfront restaurant in the evening. With no taxi meters ticking and no driver waiting, you are the master of your own journey, creating authentic, unforgettable memories at your own gentle pace.`
        ]
      }
    ];
  } else if (type === "location") {
    return [
      {
        title: `Unlocking Independent Exploration in and around ${name}`,
        paragraphs: [
          `Choosing to rent a self-drive car directly at our ${name} hub is the smartest way to start your Goan holiday. This vibrant area serves as a strategic gateway to some of the state's most beautiful coastal stretches, historic monuments, and culinary hotspots. By bypassing the crowded local taxi stands and stepping straight into your own private vehicle, you establish complete independence over your transit from the very first moment.`,
          `Our dedicated handover team at ${name} ensures your chosen vehicle is fully prepared, clean, and parked nearby, ready for an instant key handover. This seamless service means you can load your luggage, connect your smartphone maps, and drive away toward your resort within minutes of arrival, turning travel days into a relaxing, comfortable experience.`
        ]
      },
      {
        title: `Strategic Location: Seamless Road Connections to Popular Hubs`,
        paragraphs: [
          `Operating from our strategic base in ${name} offers exceptional connectivity to the rest of Goa's scenic highway network. This central position allows you to plan effortless day trips to both the high-energy beaches of the north and the serene, white-sand bays of the south. The well-maintained roads in this region make driving a highly enjoyable, breezy experience.`,
          `Within a short, comfortable drive from ${name}, you can find yourself exploring ancient clifftop forts, cruising past sprawling coconut groves, or navigating to quiet, palm-fringed river estuaries. Having a reliable, air-conditioned car from Apna Drive allows you to traverse these diverse landscapes comfortably, making the most of your travel itinerary without any transportation delays.`
        ]
      },
      {
        title: "Savoring Local Culinary Sights Just a Short Drive Away",
        paragraphs: [
          `The area surrounding ${name} is a treasure trove of culinary delights, featuring a rich mix of traditional Goan eateries, modern beachfront cafes, and historic village bakeries. Many of these culinary gems are tucked away in quiet, leafy lanes that are difficult to reach via public transport, making a private self-drive car the perfect tool for food enthusiasts.`,
          `With your rental car, you can easily drive to a local bakery early in the morning to savor warm, wood-fired poee bread, enjoy a traditional fish thali at a bustling local eatery for lunch, and indulge in a fine-dining experience at a romantic heritage villa in the evening. This absolute freedom to chase authentic flavors across the region turns your trip into a rich, memorable food adventure.`
        ]
      },
      {
        title: "Practical Navigation and Beach Parking Tips for a Smooth Drive",
        paragraphs: [
          `Driving through the scenic routes of ${name} is highly relaxing, but keeping a few local driving tips in mind can make your experience even smoother. During peak sunset hours, the roads leading to popular beach stretches can become busy, making early departures or quiet inland detours a great strategy. Our premium compact hatchbacks are exceptionally easy to park and navigate through these lively zones.`,
          `When visiting popular beaches near ${name}, look out for dedicated, secure parking lots managed by local authorities or beach shacks, which offer safe parking for a nominal fee. Sounding a polite, brief horn before narrow blind village corners and maintaining a cooperative, gentle pace ensures you navigate the local road network safely and align perfectly with Goa's relaxed driving rhythm.`
        ]
      },
      {
        title: "Sunset Chasing: Finding the Best Scenic Viewpoints Nearby",
        paragraphs: [
          `No Goan vacation is complete without witnessing the spectacular daily drama of a tropical sunset. The coastal cliffs and elevated viewpoints surrounding ${name} offer some of the most breathtaking sunset vistas in the state, where the golden sun appears to melt directly into the vast, shimmering blue waters of the Arabian Sea.`,
          `With your private car from Apna Drive, you can easily drive up to these scenic clifftops, roll down the windows to let in the cool evening breeze, and watch the sky transform into a stunning canvas of pink, orange, and purple. There is no need to rush back to catch a cab or worry about finding transit in the dark. You can sit, relax, and savor the peaceful sunset in complete comfort, creating a beautiful memory that lasts a lifetime.`
        ]
      }
    ];
  }
  return [];
}
