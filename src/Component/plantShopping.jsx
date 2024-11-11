import React from "react";
import "./PlantShopping.css"; // New dedicated CSS file for PlantShopping styles

function PlantShopping() {
  console.log("PlantShopping component rendering...");
  return (
    <div className="plant-shopping-container">
      <div className="plant-shopping-header">
        <h1 className="plant-shopping-title">Welcome to the Nursery!</h1>
        <p className="plant-shopping-description">
          Browse our collection of indoor, outdoor, and flowering plants.
        </p>
      </div>
    </div>
  );
}

export default PlantShopping;