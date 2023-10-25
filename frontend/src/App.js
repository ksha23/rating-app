import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DiningHall from "./pages/DiningHall";
import DiningHallWithReviews from "./pages/DiningHallWithReviews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className = "pages">
          <Routes>
            <Route
              path = "/"
              element = {<Home/>}
            />
            <Route
              path = "/halls"
              element = {<DiningHall/>}
            />
            <Route 
              path="/dininghall/:id" 
              element={<DiningHallWithReviews />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
