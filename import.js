const http = require('http');

const data = {
  "places": [
    // CHILL - CAFE - HANGOUT
    { "name": "Dyu Art Cafe", "area": "Koramangala", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Cafe", "activity": "Hangout", "description": "A cozy art cafe perfect for a slow, chill day with good coffee and art on the walls.", "maps_link": "https://maps.google.com/?q=Dyu+Art+Cafe+Bangalore" },
    { "name": "Blue Tokai Coffee", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Cafe", "activity": "Hangout", "description": "One of Bangalore's best specialty coffee spots. Great place to unwind.", "maps_link": "https://maps.google.com/?q=Blue+Tokai+Coffee+Indiranagar+Bangalore" },
    { "name": "Third Wave Coffee", "area": "Koramangala", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Cafe", "activity": "Hangout", "description": "A popular cafe chain known for its great brews and relaxed vibe.", "maps_link": "https://maps.google.com/?q=Third+Wave+Coffee+Koramangala+Bangalore" },
    { "name": "Yogisthaan", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Cafe", "activity": "Hangout", "description": "A peaceful wellness cafe with healthy food and a calming atmosphere.", "maps_link": "https://maps.google.com/?q=Yogisthaan+Indiranagar+Bangalore" },
    { "name": "Dialogues Cafe", "area": "JP Nagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Cafe", "activity": "Hangout", "description": "A unique pay-per-minute cafe with board games, books and great vibes.", "maps_link": "https://maps.google.com/?q=Dialogues+Cafe+Bangalore" },
    { "name": "Paper and Pie", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Cafe", "activity": "Hangout", "description": "Charming cafe with great coffee, waffles and a cozy ambience.", "maps_link": "https://maps.google.com/?q=Paper+and+Pie+Bangalore" },
    { "name": "Cafe Noir", "area": "UB City", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Cafe", "activity": "Hangout", "description": "Chic French-style cafe inside UB City mall. Perfect for a fancy date.", "maps_link": "https://maps.google.com/?q=Cafe+Noir+UB+City+Bangalore" },

    // CHILL - HANGOUT - no specific food (show for all food choices)
    { "name": "Cubbon Park", "area": "Central Bangalore", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Hangout", "description": "A massive green lung in the heart of the city. Perfect for morning walks or lazy afternoons.", "maps_link": "https://maps.google.com/?q=Cubbon+Park+Bangalore" },
    { "name": "Church Street", "area": "MG Road", "city": "Bangalore", "vibes": ["Chill", "Party"], "food_type": "Skip", "activity": "Hangout", "description": "One of Bangalore's most iconic streets — lined with cafes, bars and restaurants.", "maps_link": "https://maps.google.com/?q=Church+Street+Bangalore" },
    { "name": "Koramangala Social", "area": "Koramangala", "city": "Bangalore", "vibes": ["Chill", "Party"], "food_type": "Skip", "activity": "Hangout", "description": "A lively co-working meets hangout space with great food, drinks and a vibrant crowd.", "maps_link": "https://maps.google.com/?q=Koramangala+Social+Bangalore" },
    { "name": "UB City", "area": "Vittal Mallya Road", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Skip", "activity": "Hangout", "description": "Bangalore's most upscale mall with luxury brands, fine dining and a beautiful open plaza.", "maps_link": "https://maps.google.com/?q=UB+City+Bangalore" },
    { "name": "100 Feet Road", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Hangout", "description": "The heart of Indiranagar — packed with trendy cafes, restaurants and bars on both sides.", "maps_link": "https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bangalore" },

    // ADVENTURE - GAMING
    { "name": "Loco Bear", "area": "Koramangala", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Gaming", "description": "Fun indoor gaming zone with escape rooms and adventure activities.", "maps_link": "https://maps.google.com/?q=Loco+Bear+Koramangala+Bangalore" },
    { "name": "Smaaash", "area": "MG Road", "city": "Bangalore", "vibes": ["Adventure", "Party"], "food_type": "Skip", "activity": "Gaming", "description": "Multi-level entertainment center with cricket, bowling, VR and more.", "maps_link": "https://maps.google.com/?q=Smaaash+Bangalore" },
    { "name": "Amoeba", "area": "Church Street", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Gaming", "description": "Classic Bangalore gaming arcade that's been around forever. Pure fun.", "maps_link": "https://maps.google.com/?q=Amoeba+Church+Street+Bangalore" },
    { "name": "Play Arena", "area": "Sarjapur Road", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Gaming", "description": "Massive indoor sports and adventure arena — football, cricket, skating and more.", "maps_link": "https://maps.google.com/?q=Play+Arena+Sarjapur+Road+Bangalore" },
    { "name": "The Grid", "area": "Koramangala", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Gaming", "description": "Trampoline park and adventure zone — perfect for a wild day out.", "maps_link": "https://maps.google.com/?q=The+Grid+Koramangala+Bangalore" },
    { "name": "LXG Esports", "area": "Koramangala", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Gaming", "description": "Bangalore's top esports gaming cafe — high-end PCs, consoles and tournaments.", "maps_link": "https://maps.google.com/?q=LXG+Esports+Bangalore" },

    // ADVENTURE - TREKKING
    { "name": "Nandi Hills", "area": "Chikkaballapur", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Trekking", "description": "A stunning hilltop 60km from Bangalore — perfect for sunrise rides and trekking.", "maps_link": "https://maps.google.com/?q=Nandi+Hills+Bangalore" },
    { "name": "Savandurga", "area": "Magadi Road", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Trekking", "description": "One of the largest monolith hills in Asia — a challenging and rewarding trek near Bangalore.", "maps_link": "https://maps.google.com/?q=Savandurga+Bangalore" },
    { "name": "Skandagiri", "area": "Chikkaballapur", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Trekking", "description": "Famous for its night treks and stunning sunrise views above the clouds.", "maps_link": "https://maps.google.com/?q=Skandagiri+Bangalore" },
    { "name": "Ramanagara Hills", "area": "Ramanagara", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Trekking", "description": "The famous Sholay filming location — great rocky terrain for trekking and rock climbing.", "maps_link": "https://maps.google.com/?q=Ramanagara+Hills+Bangalore" },
    { "name": "Anthargange", "area": "Kolar", "city": "Bangalore", "vibes": ["Adventure"], "food_type": "Skip", "activity": "Trekking", "description": "Unique cave trekking experience with volcanic rock formations and a temple at the top.", "maps_link": "https://maps.google.com/?q=Anthargange+Bangalore" },

    // ROMANTIC - HANGOUT
    { "name": "Olive Beach", "area": "Richmond Road", "city": "Bangalore", "vibes": ["Romantic"], "food_type": "Skip", "activity": "Hangout", "description": "A beautiful Mediterranean restaurant with a stunning outdoor setting.", "maps_link": "https://maps.google.com/?q=Olive+Beach+Bangalore" },
    { "name": "Grasshopper", "area": "Bannerghatta Road", "city": "Bangalore", "vibes": ["Romantic"], "food_type": "Skip", "activity": "Hangout", "description": "Intimate fine dining in a heritage bungalow — one of Bangalore's most romantic spots.", "maps_link": "https://maps.google.com/?q=Grasshopper+Bangalore" },
    { "name": "Rim Naam", "area": "MG Road", "city": "Bangalore", "vibes": ["Romantic"], "food_type": "Skip", "activity": "Hangout", "description": "Elegant Thai restaurant with a serene water-side setting.", "maps_link": "https://maps.google.com/?q=Rim+Naam+Bangalore" },
    { "name": "Tiamo", "area": "Ashok Nagar", "city": "Bangalore", "vibes": ["Romantic"], "food_type": "Skip", "activity": "Hangout", "description": "Cozy Italian restaurant with warm lighting and a romantic atmosphere.", "maps_link": "https://maps.google.com/?q=Tiamo+Bangalore" },
    { "name": "Skyye", "area": "UB City", "city": "Bangalore", "vibes": ["Romantic", "Party"], "food_type": "Skip", "activity": "Hangout", "description": "Rooftop bar with stunning city views — ideal for a night out.", "maps_link": "https://maps.google.com/?q=Skyye+Bangalore" },

    // PARTY - HANGOUT
    { "name": "Toit", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Party"], "food_type": "Skip", "activity": "Hangout", "description": "Bangalore's most loved craft brewery. Great beers, great crowd, great vibes.", "maps_link": "https://maps.google.com/?q=Toit+Indiranagar+Bangalore" },
    { "name": "Biergarten", "area": "Koramangala", "city": "Bangalore", "vibes": ["Party"], "food_type": "Skip", "activity": "Hangout", "description": "Lively German beer garden concept — outdoor seating, good beer, party atmosphere.", "maps_link": "https://maps.google.com/?q=Biergarten+Koramangala+Bangalore" },
    { "name": "Indigo XP", "area": "Church Street", "city": "Bangalore", "vibes": ["Party"], "food_type": "Skip", "activity": "Hangout", "description": "Popular nightclub on Church Street — great music and dance floor.", "maps_link": "https://maps.google.com/?q=Indigo+XP+Bangalore" },
    { "name": "Badmaash", "area": "St Marks Road", "city": "Bangalore", "vibes": ["Party"], "food_type": "Skip", "activity": "Hangout", "description": "Trendy bar and lounge with great cocktails and a fun crowd.", "maps_link": "https://maps.google.com/?q=Badmaash+Bangalore" },

    // FOOD HUNT - SOUTH INDIAN - JUST EAT
    { "name": "Rameshwaram Cafe", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "South Indian", "activity": "Just Eat", "description": "Always packed, always worth it. Best dosas and idlis in the city.", "maps_link": "https://maps.google.com/?q=Rameshwaram+Cafe+Bangalore" },
    { "name": "MTR", "area": "Lalbagh Road", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "South Indian", "activity": "Just Eat", "description": "Mavalli Tiffin Rooms — a Bangalore institution serving authentic South Indian since 1924.", "maps_link": "https://maps.google.com/?q=MTR+Bangalore" },
    { "name": "CTR", "area": "Malleshwaram", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "South Indian", "activity": "Just Eat", "description": "Central Tiffin Room — famous for their butter dosa. A must-visit.", "maps_link": "https://maps.google.com/?q=CTR+Malleshwaram+Bangalore" },
    { "name": "Vidyarthi Bhavan", "area": "Basavanagudi", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "South Indian", "activity": "Just Eat", "description": "Legendary old-school restaurant famous for its crispy masala dosa.", "maps_link": "https://maps.google.com/?q=Vidyarthi+Bhavan+Bangalore" },
    { "name": "Taaza Thindi", "area": "Jayanagar", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "South Indian", "activity": "Just Eat", "description": "Local favourite for authentic, home-style South Indian breakfast.", "maps_link": "https://maps.google.com/?q=Taaza+Thindi+Bangalore" },

    // FOOD HUNT - BIRYANI - JUST EAT
    { "name": "Meghana Foods", "area": "Koramangala", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Biryani", "activity": "Just Eat", "description": "Home of Bangalore's most famous biryani. Come hungry.", "maps_link": "https://maps.google.com/?q=Meghana+Foods+Bangalore" },
    { "name": "Empire Restaurant", "area": "Shivajinagar", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Biryani", "activity": "Just Eat", "description": "Iconic Bangalore restaurant famous for its biryani and kebabs. A must visit.", "maps_link": "https://maps.google.com/?q=Empire+Restaurant+Bangalore" },
    { "name": "Sharief Bhai", "area": "Frazer Town", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Biryani", "activity": "Just Eat", "description": "Famous for its fragrant dum biryani — a Frazer Town legend.", "maps_link": "https://maps.google.com/?q=Sharief+Bhai+Bangalore" },
    { "name": "Hyderabad Biryani House", "area": "HSR Layout", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Biryani", "activity": "Just Eat", "description": "Authentic Hyderabadi dum biryani — rich, spicy and perfectly cooked.", "maps_link": "https://maps.google.com/?q=Hyderabad+Biryani+House+Bangalore" },
    { "name": "Mani's Dum Biryani", "area": "Jayanagar", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Biryani", "activity": "Just Eat", "description": "Small but legendary biryani spot in Jayanagar — always a queue.", "maps_link": "https://maps.google.com/?q=Manis+Dum+Biryani+Bangalore" },

    // FOOD HUNT - NORTH INDIAN - JUST EAT
    { "name": "Punjab Grill", "area": "Whitefield", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "North Indian", "activity": "Just Eat", "description": "Premium North Indian dining with great ambience and authentic flavours.", "maps_link": "https://maps.google.com/?q=Punjab+Grill+Bangalore" },
    { "name": "Delhi Highway", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "North Indian", "activity": "Just Eat", "description": "Casual North Indian spot with great curries, dal and naan.", "maps_link": "https://maps.google.com/?q=Delhi+Highway+Bangalore" },
    { "name": "Oye Amritsar", "area": "Koramangala", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "North Indian", "activity": "Just Eat", "description": "Punjabi street food done right — chole bhature, lassi and more.", "maps_link": "https://maps.google.com/?q=Oye+Amritsar+Bangalore" },
    { "name": "Kebab Magic", "area": "Frazer Town", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "North Indian", "activity": "Just Eat", "description": "Famous for its succulent kebabs and Mughlai dishes.", "maps_link": "https://maps.google.com/?q=Kebab+Magic+Bangalore" },

    // FOOD HUNT - PIZZA - JUST EAT
    { "name": "Brik Oven", "area": "Church Street", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Pizza", "activity": "Just Eat", "description": "Wood-fired thin crust pizzas — one of the best pizza spots in Bangalore.", "maps_link": "https://maps.google.com/?q=Brik+Oven+Bangalore" },
    { "name": "Pizza Bakery", "area": "Indiranagar", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Pizza", "activity": "Just Eat", "description": "Artisan pizzas baked fresh — simple, delicious, always satisfying.", "maps_link": "https://maps.google.com/?q=Pizza+Bakery+Bangalore" },
    { "name": "Onesta", "area": "Koramangala", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Pizza", "activity": "Just Eat", "description": "Loaded pizzas at great prices — a student and young crowd favourite.", "maps_link": "https://maps.google.com/?q=Onesta+Bangalore" },
    { "name": "Toscano", "area": "UB City", "city": "Bangalore", "vibes": ["Food Hunt", "Romantic"], "food_type": "Pizza", "activity": "Just Eat", "description": "Upscale Italian dining with wood-fired pizzas and a great wine list.", "maps_link": "https://maps.google.com/?q=Toscano+Bangalore" },

    // FOOD HUNT - CAFE - JUST EAT
    { "name": "Truffles", "area": "Koramangala", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Cafe", "activity": "Just Eat", "description": "Best burgers and cheesy pasta in Bangalore. Always a long queue but worth it.", "maps_link": "https://maps.google.com/?q=Truffles+Koramangala+Bangalore" },
    { "name": "VV Puram Food Street", "area": "Basavanagudi", "city": "Bangalore", "vibes": ["Food Hunt"], "food_type": "Skip", "activity": "Just Eat", "description": "A legendary food street with dozens of stalls serving authentic Bangalore street food.", "maps_link": "https://maps.google.com/?q=VV+Puram+Food+Street+Bangalore" },

    // SHOPPING
    { "name": "Commercial Street", "area": "Shivajinagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Shopping", "description": "Bangalore's most popular street shopping destination — clothes, accessories, everything at great prices.", "maps_link": "https://maps.google.com/?q=Commercial+Street+Bangalore" },
    { "name": "Phoenix Marketcity", "area": "Whitefield", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Shopping", "description": "One of Bangalore's biggest malls with 500+ brands, food court and entertainment.", "maps_link": "https://maps.google.com/?q=Phoenix+Marketcity+Bangalore" },
    { "name": "Orion Mall", "area": "Rajajinagar", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Shopping", "description": "A premium mall in North Bangalore with great brands, dining and a multiplex.", "maps_link": "https://maps.google.com/?q=Orion+Mall+Bangalore" },
    { "name": "Brigade Road", "area": "MG Road", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Shopping", "description": "Classic Bangalore shopping street with stores, fast food joints and a buzzing atmosphere.", "maps_link": "https://maps.google.com/?q=Brigade+Road+Bangalore" },
    { "name": "Forum South Bengaluru", "area": "Kanakapura Road", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Shopping", "description": "A modern mall in South Bangalore with great retail, dining and entertainment options.", "maps_link": "https://maps.google.com/?q=Forum+South+Bengaluru+Bangalore" },

    // MOVIES
    { "name": "PVR Orion Mall", "area": "Rajajinagar", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Skip", "activity": "Movies", "description": "Premium multiplex inside Orion Mall with great screens and sound systems.", "maps_link": "https://maps.google.com/?q=PVR+Orion+Mall+Bangalore" },
    { "name": "INOX Garuda Mall", "area": "Magrath Road", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Skip", "activity": "Movies", "description": "Popular multiplex in the heart of Bangalore near MG Road.", "maps_link": "https://maps.google.com/?q=INOX+Garuda+Mall+Bangalore" },
    { "name": "Cinepolis", "area": "Bannerghatta Road", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Skip", "activity": "Movies", "description": "Great multiplex in South Bangalore with comfortable seating and latest movies.", "maps_link": "https://maps.google.com/?q=Cinepolis+Bangalore" },
    { "name": "PVR Phoenix Marketcity", "area": "Whitefield", "city": "Bangalore", "vibes": ["Chill", "Romantic"], "food_type": "Skip", "activity": "Movies", "description": "Multiplex inside Phoenix Marketcity — great for a movie day in East Bangalore.", "maps_link": "https://maps.google.com/?q=PVR+Phoenix+Marketcity+Bangalore" },
    { "name": "Urvashi Theatre", "area": "Lalbagh Road", "city": "Bangalore", "vibes": ["Chill"], "food_type": "Skip", "activity": "Movies", "description": "One of Bangalore's oldest and most loved single screen theatres — iconic experience.", "maps_link": "https://maps.google.com/?q=Urvashi+Theatre+Bangalore" }
  ]
};

const body = JSON.stringify(data);
const options = {
  hostname: 'localhost', port: 3000, path: '/api/places/bulk', method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
};
const req = http.request(options, res => {
  let d = '';
  res.on('data', chunk => d += chunk);
  res.on('end', () => console.log('Response:', d));
});
req.on('error', e => console.error('Error:', e));
req.write(body);
req.end();
