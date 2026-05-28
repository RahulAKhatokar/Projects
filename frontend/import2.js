const data = {
  "places": [
    // HANGOUT
    { "name": "Church Street", "area": "MG Road", "city": "Bangalore", "vibes": ["Chill", "Party"], "food_type": "Multiple", "activity": "Hangout", "description": "One of Bangalore's most iconic streets — lined with cafes, bars and restaurants. Perfect for a fun evening out.", "maps_link": "https://maps.google.com/?q=Church+Street+Bangalore" },
    { "name": "Koramangala Social", "area": "Koramangala", "city": "Bangalore", "vibes": ["Chill", "Party"], "food_type": "Multiple", "activity": "Hangout", "description": "A lively co-working meets hangout space with great food, drinks and a vibrant crowd.", "maps_link": "https://maps.google.com/?q=Koramangala+Social+Bangalore" },
    { "name": "UB City", "area": "Vittal Mallya Road", "city": "Bangalore", "vibes": ["Romantic", "Chill"], "food_type": "Multiple", "activity": "Hangout", "description": "Bangalore's most upscale mall with luxury brands, fine dining and a beautiful open plaza.", "maps_link": "https://maps.google.com/?q=UB+City+Bangalore" },
    { "name": "100 Feet Road", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Chill", "Food Hunt"], "food_type": "Multiple", "activity": "Hangout", "description": "The heart of Indiranagar — packed with trendy cafes, restaurants and bars on both sides.", "maps_link": "https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bangalore" },

    // TREKKING
    { "name": "Savandurga", "area": "Magadi Road", "city": "Bangalore", "vibes": ["Adventure", "Nature"], "food_type": "Not a food place", "activity": "Trekking", "description": "One of the largest monolith hills in Asia — a challenging and rewarding trek near Bangalore.", "maps_link": "https://maps.google.com/?q=Savandurga+Bangalore" },
    { "name": "Skandagiri", "area": "Chikkaballapur", "city": "Bangalore", "vibes": ["Adventure", "Nature"], "food_type": "Not a food place", "activity": "Trekking", "description": "Famous for its night treks and stunning sunrise views above the clouds.", "maps_link": "https://maps.google.com/?q=Skandagiri+Bangalore" },
    { "name": "Ramanagara Hills", "area": "Ramanagara", "city": "Bangalore", "vibes": ["Adventure", "Nature"], "food_type": "Not a food place", "activity": "Trekking", "description": "The famous Sholay filming location — great rocky terrain for trekking and rock climbing.", "maps_link": "https://maps.google.com/?q=Ramanagara+Hills+Bangalore" },
    { "name": "Anthargange", "area": "Kolar", "city": "Bangalore", "vibes": ["Adventure", "Nature"], "food_type": "Not a food place", "activity": "Trekking", "description": "Unique cave trekking experience with volcanic rock formations and a temple at the top.", "maps_link": "https://maps.google.com/?q=Anthargange+Bangalore" },

    // SHOPPING
    { "name": "Commercial Street", "area": "Shivajinagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Not a food place", "activity": "Shopping", "description": "Bangalore's most popular street shopping destination — clothes, accessories, everything at great prices.", "maps_link": "https://maps.google.com/?q=Commercial+Street+Bangalore" },
    { "name": "Phoenix Marketcity", "area": "Whitefield", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Multiple", "activity": "Shopping", "description": "One of Bangalore's biggest malls with 500+ brands, food court and entertainment.", "maps_link": "https://maps.google.com/?q=Phoenix+Marketcity+Bangalore" },
    { "name": "Orion Mall", "area": "Rajajinagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Multiple", "activity": "Shopping", "description": "A premium mall in North Bangalore with great brands, dining and a multiplex.", "maps_link": "https://maps.google.com/?q=Orion+Mall+Bangalore" },
    { "name": "Brigade Road", "area": "MG Road", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Multiple", "activity": "Shopping", "description": "Classic Bangalore shopping street with stores, fast food joints and a buzzing atmosphere.", "maps_link": "https://maps.google.com/?q=Brigade+Road+Bangalore" },
    { "name": "Forum South Bengaluru", "area": "Kanakapura Road", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Multiple", "activity": "Shopping", "description": "A modern mall in South Bangalore with great retail, dining and entertainment options.", "maps_link": "https://maps.google.com/?q=Forum+South+Bengaluru+Bangalore" },

    // GAMING
    { "name": "LXG Esports", "area": "Koramangala", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Not a food place", "activity": "Gaming", "description": "Bangalore's top esports gaming cafe — high-end PCs, consoles and tournaments.", "maps_link": "https://maps.google.com/?q=LXG+Esports+Bangalore" },

    // MOVIES
    { "name": "PVR Orion Mall", "area": "Rajajinagar", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Not a food place", "activity": "Movies", "description": "Premium multiplex inside Orion Mall with great screens and sound systems.", "maps_link": "https://maps.google.com/?q=PVR+Orion+Mall+Bangalore" },
    { "name": "INOX Garuda Mall", "area": "Magrath Road", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Not a food place", "activity": "Movies", "description": "Popular multiplex in the heart of Bangalore near MG Road.", "maps_link": "https://maps.google.com/?q=INOX+Garuda+Mall+Bangalore" },
    { "name": "Cinepolis", "area": "Bannerghatta Road", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Not a food place", "activity": "Movies", "description": "Great multiplex in South Bangalore with comfortable seating and latest movies.", "maps_link": "https://maps.google.com/?q=Cinepolis+Bangalore" },
    { "name": "PVR Phoenix Marketcity", "area": "Whitefield", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Not a food place", "activity": "Movies", "description": "Multiplex inside Phoenix Marketcity — great for a movie day in East Bangalore.", "maps_link": "https://maps.google.com/?q=PVR+Phoenix+Marketcity+Bangalore" },
    { "name": "Urvashi Theatre", "area": "Lalbagh Road", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Not a food place", "activity": "Movies", "description": "One of Bangalore's oldest and most loved single screen theatres — iconic experience.", "maps_link": "https://maps.google.com/?q=Urvashi+Theatre+Bangalore" }
  ]
};

const http = require('http');
const body = JSON.stringify(data);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/places/bulk',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body)
  }
};

const req = http.request(options, res => {
  let d = '';
  res.on('data', chunk => d += chunk);
  res.on('end', () => console.log('Response:', d));
});

req.on('error', e => console.error('Error:', e));
req.write(body);
req.end();
