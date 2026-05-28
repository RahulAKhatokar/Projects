import { useEffect, useState } from "react";

export default function Results({ filters, onBack }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.vibe) params.append("vibe", filters.vibe);
    if (filters.food_type) params.append("food_type", filters.food_type);
    if (filters.activity) params.append("activity", filters.activity);

    fetch(`http://localhost:3000/api/places?${params}`)
      .then(res => res.json())
      .then(data => { setPlaces(data); setLoading(false); });
  }, []);

  return (
    <div>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "#ff6b35", fontSize: "16px", cursor: "pointer" }}>← Back</button>
      <h2 style={{ color: "#ff6b35" }}>Your vibe spots 🗺️</h2>

      {loading && <p>Finding spots...</p>}

      {!loading && places.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "40px" }}>😕</p>
          <p>No spots found yet for this vibe. Check back soon!</p>
        </div>
      )}

      {places.map(place => (
        <div key={place.id} style={{ border: "1px solid #eee", borderRadius: "12px", padding: "16px", marginBottom: "16px" }}>
          {place.image_url && <img src={place.image_url} alt={place.name} style={{ width: "100%", borderRadius: "8px" }} />}
          <h3>{place.name}</h3>
          <p style={{ color: "#888" }}>{place.area} • {place.city}</p>
          <p>{place.description}</p>
          
            href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
            target="_blank"
            style={{ background: "#ff6b35", color: "white", padding: "8px 20px", borderRadius: "20px", textDecoration: "none" }}
          >
            Get Directions 📍
          </a>
        </div>
      ))}
    </div>
  );
}
