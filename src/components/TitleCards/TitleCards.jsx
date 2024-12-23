import React, { useEffect, useRef } from 'react';
import './titlecards.css';
import cards_data from '../../assets/cards/Cards_data'; // Ensure cards_data is imported correctly

const TitleCards = () => {
  const cardsRef = useRef(); // Move useRef inside the component

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; // Scroll horizontally on vertical wheel event
  };

  useEffect(() => {
    const currentCardsRef = cardsRef.current;
    if (currentCardsRef) {
      currentCardsRef.addEventListener('wheel', handleWheel);

      // Clean up the event listener on component unmount
      return () => {
        currentCardsRef.removeEventListener('wheel', handleWheel);
      };
    }
  }, []); // Run only once when the component mounts

  return (
    <div className="titlecards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
