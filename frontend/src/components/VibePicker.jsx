import { useState } from "react";

const vibes = ["Chill", "Adventure", "Romantic", "Party", "Food Hunt", "Nature"];
const foods = ["South Indian", "North Indian", "Chinese", "Pizza", "Biryani", "Cafe", "Skip"];
const activities = ["Hangout", "Trekking", "Shopping", "Gaming", "Movies", "Just Eat"];

export default function VibePicker({ onDone }) {
  const [vibe, setVibe] = useState("");
  const [food, setFood] = useState("");
  const [activity, setActivity] = useState("");

  const btnStyle = (active) => ({
    padding: "10px 16px",
    margin: "6px",
    borderRadius: "20px",
    border: "2px solid #ff6b35",
    background: active ? "#ff6b35" : "white",
    color: active ? "white" : "#ff6b35",
    cursor: "pointer",
    fontWeight: "bold"
  });

  return (
    <div>
      <h1 style={{ color: "#ff6b35" }}>🌟 What's your vibe today?</h1>

      <h3>Pick a vibe</h3>
      <div>{vibes.map(v => <button key={v} style={btnStyle(vibe === v)} onClick={() => setVibe(v)}>{v}</button>)}</div>

      <h3>What do you want to eat? (optional)</h3>
      <div>{foods.map(f => <button key={f} style={btnStyle(food === f)} onClick={() => setFood(f)}>{f}</button>)}</div>

      <h3>What do you want to do?</h3>
      <div>{activities.map(a => <button key={a} style={btnStyle(activity === a)} onClick={() => setActivity(a)}>{a}</button>)}</div>

      <br />
      <button
        onClick={() => onDone({ vibe, food_type: food === "Skip" ? "" : food, activity })}
        disabled={!vibe || !activity}
        style={{ padding: "12px 30px", background: "#ff6b35", color: "white", border: "none", borderRadius: "25px", fontSize: "16px", cursor: "pointer", marginTop: "10px" }}
      >
        Find my vibe spots 🚀
      </button>
    </div>
  );
}
