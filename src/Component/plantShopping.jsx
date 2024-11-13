/** @format */

import React, { useState } from "react";
import "./PlantShopping.css"; // Ensure your CSS reflects the new style enhancements
import flowerImage from "../assets/flowers/rose.jpg"; // Replace with your actual image path
import medicinalImage from "../assets/medicinal/mint.jpg"; // Replace with your actual image path
import vegetableImage from "../assets/vegetable/carrot.jpg"; // Replace with your actual image path
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity as incrementVegetableQuantity,
  decrementQuantity as decrementVegetableQuantity,
} from "./Redux/vegetable";
import {
  incrementQuantity as incrementFloweringQuantity,
  decrementQuantity as decrementFloweringQuantity,
} from "./Redux/flowering";
import {
  incrementQuantity as incrementMedicinalQuantity,
  decrementQuantity as decrementMedicinalQuantity,
} from "./Redux/medicinal";

function PlantShopping() {
  const [selectedCard, setSelectedCard] = useState(null); // State to track which card is selected
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const vegetableState = useSelector((state) => state.vegetable);
  const medicinalState = useSelector((state) => state.medicinal);
  const floweringState = useSelector((state) => state.flowering);
  const dispatch = useDispatch();

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

  const renderPlantCards = () => {
    let plants = [];
    let increment, decrement;
    console.log('card cloicked is', selectedCard)
    if (selectedCard === "Vegetable") {
      plants = vegetableState;
      increment = incrementVegetableQuantity;
      decrement = decrementVegetableQuantity;
      if (plants.length === 0) {
        return <p>We will be adding some vegetables soon</p>;
      }
    } else if (selectedCard === "Flowers") {
      plants = floweringState;
      increment = incrementFloweringQuantity;
      decrement = decrementFloweringQuantity;
      if (plants.length === 0) {
        return <p>We will be adding some flowers soon</p>;
      }
    } else if (selectedCard === "Medicinal Plants") {
      plants = medicinalState;
      increment = incrementMedicinalQuantity;
      decrement = decrementMedicinalQuantity;
      if (plants.length === 0) {
        return <p>We will be adding some medicinal plants soon</p>;
      }
    }
    else{
      return <p>We will be adding soon.........</p>
    }
   
      return (<>
        <div className='modal-plant-cards-container'>
  {plants.map((plant, index) => (
    <div key={index} className='modal-plant-card'>
      <img
        src={plant.img || 'default-placeholder.jpg'} // Replace with a default placeholder image path if needed
        alt={plant.name || 'Default Plant Name'}
        className='modal-plant-card-image'
      />
      <div className='modal-plant-card-content'>
        <h3>{plant.name || 'Default Plant Name'}</h3>
        <p>Cost: ${plant.cost !== undefined ? plant.cost : 'N/A'}</p>
        <div className='modal-quantity-controls'>
          <button onClick={() => dispatch(decrement(index))}>-</button>
          <span>{plant.quantity !== undefined ? plant.quantity : 0}</span>
          <button onClick={() => dispatch(increment(index))}>+</button>

        </div>
      </div>
    </div>
  ))}

</div>
<div>
<p className='total-cost-text'>
  Total cost for the {selectedCard} is: ${calculateTotalCost(selectedCard)}
</p>
</div>
</>
      );
   
  };

  const calculateTotalCost = (selectedCard) => {
    console.log('Calculating total cost for:', selectedCard);
  
    let allPlants = [];
  
    switch (selectedCard) {
      case "Vegetable":
        allPlants = vegetableState ? [...vegetableState] : [];
        break;
      case "Flowers":
        allPlants = floweringState ? [...floweringState] : [];
        break;
      case "Medicinal Plants":
        allPlants = medicinalState ? [...medicinalState] : [];
        break;
      default:
        console.error('Invalid selectedCard value:', selectedCard);
        return 0;
    }
  
    const totalCost = allPlants.reduce(
      (total, plant) => total + (plant.cost || 0) * (plant.quantity || 0),
      0
    );
  
    console.log('Total cost:', totalCost);
    return totalCost;
  };

  return (
    <div className='plant-shopping-container'>
      <div className='plant-shopping-header'>
        <h1 className='plant-shopping-title'>Welcome to the Nursery!</h1>
        <p className='plant-shopping-description'>
          Discover the beauty and benefits of nature with our curated collection
          of plants.
        </p>
      </div>

      <div className='plant-cards-container'>
        {/* Flower Card */}
        <div className='plant-card' onClick={() => handleCardClick("Flowers")}>
          <img src={flowerImage} alt='Flowers' className='plant-card-image' />
          <div className='plant-card-content'>
            <h2 className='plant-card-title'>Flowers</h2>
            <p className='plant-card-description'>
              Brighten your home with colorful blooms that bring vibrancy, joy,
              and natural fragrance.
            </p>
          </div>
        </div>

        {/* Medicinal Plants Card */}
        <div
          className='plant-card'
          onClick={() => handleCardClick("Medicinal Plants")}>
          <img
            src={medicinalImage}
            alt='Medicinal Plants'
            className='plant-card-image'
          />
          <div className='plant-card-content'>
            <h2 className='plant-card-title'>Medicinal Plants</h2>
            <p className='plant-card-description'>
              Nature's pharmacy: these plants offer healing properties and
              enhance your well-being.
            </p>
          </div>
        </div>

        {/* Vegetable Plants Card */}
        <div
          className='plant-card'
          onClick={() => handleCardClick("Vegetable")}>
          <img
            src={vegetableImage}
            alt='Vegetable Plants'
            className='plant-card-image'
          />
          <div className='plant-card-content'>
            <h2 className='plant-card-title'>Vegetable Plants</h2>
            <p className='plant-card-description'>
              Grow your own fresh vegetables, rich in nutrients and perfect for
              a healthy lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal-overlay' onClick={handleOutsideClick}>
          <div className='modal-content'>
            <h2>{`Welcome to the ${selectedCard} Section!`}</h2>
            <div className='plant-modal-cards-container'>
              {renderPlantCards()}
            </div>
            {/* <p className='total-cost'>Total Cost: ${calculateTotalCost()}</p> */}
            <button className='modal-close-button' onClick={closeModal}>Close</button>          
            </div>
        </div>
      )}
    </div>
  );
}

export default PlantShopping;
