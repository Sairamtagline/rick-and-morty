import NavigationBar from "./shared/NavigationBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="main-content">
        <Suspense fallback={<Loader />}>
          <Routing />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
