import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import { MenuProvider } from "./context/MenuProvider";

function App() {
  return (
    <MenuProvider>
      <div className="min-h-screen bg-gray-50 text-zinc-950 overflow-clip">
        <Header />
        <Navigation />
        <Title />
      </div>
    </MenuProvider>
  );
}

export default App;
