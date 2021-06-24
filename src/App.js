import "./App.css";
import { Dashboard, History, PayemntPage, Footer } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
      <History />
      <PayemntPage />
      <Footer />
    </div>
  );
}

export default App;
