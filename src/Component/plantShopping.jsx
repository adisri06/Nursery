import React, { useState } from "react";
import "./PlantShopping.css"; // Ensure your CSS reflects the new style enhancements
import flowerImage from "../assets/flowers/rose.jpg"; // Replace with your actual image path
import medicinalImage from "../assets/medicinal/mint.jpg"; // Replace with your actual image path
import vegetableImage from "../assets/vegetable/carrot.jpg"; // Replace with your actual image path

function PlantShopping() {
  const [selectedCard, setSelectedCard] = useState(null); // State to track which card is selected
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleCardClick = (cardType) => {
    setSelectedCard(cardType); // Set the selected card type
    setIsModalOpen(true); // Open the modal
    console.log(`${cardType} card clicked`);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCard(null); // Reset selected card
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal(); // Close modal if clicked outside
    }
  };

  return (
    <div className="plant-shopping-container">
      <div className="plant-shopping-header">
        <h1 className="plant-shopping-title">Welcome to the Nursery!</h1>
        <p className="plant-shopping-description">
          Discover the beauty and benefits of nature with our curated collection of plants.
        </p>
      </div>

      <div className="plant-cards-container">
        {/* Flower Card */}
        <div className="plant-card" onClick={() => handleCardClick("Flowers")}>
          <img src={flowerImage} alt="Flowers" className="plant-card-image" />
          <div className="plant-card-content">
            <h2 className="plant-card-title">Flowers</h2>
            <p className="plant-card-description">
              Brighten your home with colorful blooms that bring vibrancy, joy, and natural fragrance.
            </p>
          </div>
        </div>

        {/* Medicinal Plants Card */}
        <div className="plant-card" onClick={() => handleCardClick("Medicinal Plants")}>
          <img src={medicinalImage} alt="Medicinal Plants" className="plant-card-image" />
          <div className="plant-card-content">
            <h2 className="plant-card-title">Medicinal Plants</h2>
            <p className="plant-card-description">
              Nature's pharmacy: these plants offer healing properties and enhance your well-being.
            </p>
          </div>
        </div>

        {/* Vegetable Plants Card */}
        <div className="plant-card" onClick={() => handleCardClick("Vegetable Plants")}>
          <img src={vegetableImage} alt="Vegetable Plants" className="plant-card-image" />
          <div className="plant-card-content">
            <h2 className="plant-card-title">Vegetable Plants</h2>
            <p className="plant-card-description">
              Grow your own fresh vegetables, rich in nutrients and perfect for a healthy lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content">
            <h2>{`Welcome to the ${selectedCard} Section!`}</h2>
            <p>{`Explore our collection of ${selectedCard} plants for your garden or home.`}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlantShopping;