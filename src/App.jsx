import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-zinc-950 overflow-clip">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navigation isOpen={isOpen} />
    </div>
  );
}

export default App;
