import { useState } from "react";
import VibePicker from "./components/VibePicker";
import Results from "./components/Results";

function App() {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({});

  const handleVibeDone = (selectedFilters) => {
    setFilters(selectedFilters);
    setStep(2);
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      {step === 1 && <VibePicker onDone={handleVibeDone} />}
      {step === 2 && <Results filters={filters} onBack={() => setStep(1)} />}
    </div>
  );
}

export default App;
