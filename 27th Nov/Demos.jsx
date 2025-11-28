import { useState } from 'react';
import { createPortal } from 'react-dom';

function Demos() {
  const [name, setName] = useState("John");
  const [isTomato, setIsTomato] = useState(true);
  const [isOnion, setIsOnion] = useState(false);

  const [favoriteFruit, setFavoriteFruit] = useState("Banana");
  
  const [showModal, setShowModal] = useState(false);

  const [divClicks, setDivClicks] = useState(0);
  const [btnClicks, setBtnClicks] = useState(0);

  const fruits = ["Apple", "Banana", "Cherry"];

  function submitBurger() {
    let toppings = "";
    if (isTomato) toppings += "tomato ";
    if (isOnion) toppings += "onion";
    
    alert("localhost:5173 says\n" + name + " wants a burger with " + toppings);
  }

  function submitFruit() {
    alert("localhost:5173 says\nYour favorite fruit is: " + favoriteFruit);
  }

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1>Interactive Demos</h1>
      <hr />

      {/* 1. Burger Form */}
      <h3>Burger Form</h3>
      <p>
        My name is: 
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ marginLeft: '5px' }}
        />
      </p>
      <p>I want a burger with:</p>
      
      <label>
        Tomato: 
        <input 
          type="checkbox" 
          checked={isTomato} 
          onChange={() => setIsTomato(!isTomato)} 
        />
      </label>

      <label style={{ marginLeft: '10px' }}>
        Onion: 
        <input 
          type="checkbox" 
          checked={isOnion} 
          onChange={() => setIsOnion(!isOnion)} 
        />
      </label>

      <button onClick={submitBurger} style={{ marginLeft: '10px' }}>Submit</button>
      <hr />

      {/* 2. Fruits */}
      <h3>My Favorite Fruits</h3>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <h3>Select your favorite fruit:</h3>
      {fruits.map(fruit => (
        <div key={fruit}>
          <input 
            type="radio" 
            name="fruits" 
            checked={favoriteFruit === fruit}
            onChange={() => setFavoriteFruit(fruit)}
          /> 
          {fruit}
        </div>
      ))}
      <button onClick={submitFruit} style={{ marginTop: '10px' }}>Submit</button>
      <hr />

      {/* 3. Modal using Portal */}
      <h3>React Portal Modal</h3>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && createPortal(
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Content</h2>
            <p>This content is rendered using a React Portal!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>,
        document.body
      )}
      <hr />

      {/* 4. Event Bubbling */}
      <h3>Event Bubbling</h3>
      <div className="box" onClick={() => setDivClicks(divClicks + 1)}>
        <h4>Div Clicked: {divClicks}</h4>
        <h4>Button Clicked: {btnClicks}</h4>
        <p>The floating button is outside, but clicks still bubble up!</p>

        {createPortal(
          <button 
            className="floating-btn"
            onClick={() => setBtnClicks(btnClicks + 1)}
          >
            Floating Button
          </button>,
          document.body
        )}
      </div>
      
      {/* Spacer so the floating button doesn't cover content */}
      <div style={{ height: '100px' }}></div>
    </div>
  );
}

export default Demos;