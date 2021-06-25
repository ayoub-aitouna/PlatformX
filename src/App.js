import "./App.css";
import {
  Dashboard,
  History,
  PayemntPage,
  Footer,
  CreateDocument,
} from "./pages";
import { NavBar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <>
                <NavBar />
                <Dashboard />
                <History />
                <PayemntPage />
                <Footer />
              </>
            )}
          />
          <Route path="/CreateDocument" component={() => <CreateDocument />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
