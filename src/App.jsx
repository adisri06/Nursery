import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/navigation";
import PlantShopping from "./Component/PlantShopping";
import Cart from "./Component/cart"; // Assume Cart component exists

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <header className="first_page">
              <div className="main_event">
                <div className="first_page_name_btn">
                  <h1 className="budget_heading">Welcome to the Paradise of Plants!</h1>
                  <p className="budget_sentence">
                    🌿 Step into a world of vibrant greenery and fresh air! 🌱 Discover a wide range of plants to nurture your home, your garden, and your soul! 🌻<br />
                    <strong>Why plants?</strong> Not only do they bring beauty, but they purify the air, reduce stress, and boost your well-being. 🌍💚
                  </p>
                  <div className="getstarted_btn">
                    <a href="/plantation" className="get-started-btn">
                      Explore the Nursery
                    </a>
                  </div>
                </div>
              </div>
            </header>
          }
        />
        <Route path="/plantation" element={<PlantShopping />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;