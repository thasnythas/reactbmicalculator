import React, { useState } from 'react';
import './App.css';
import HEADER from './component/HEADER';
import Footer from './component/Footer';



function App() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory("You are underweight");
        setImageUrl('https://cdn-icons-png.flaticon.com/128/10058/10058381.png  '); // Replace with the correct image URL
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory("Your weight is normal");
        setImageUrl('https://cdn.vectorstock.com/i/preview-2x/29/53/gym-icon-vector-732953.webp'); // Replace with the correct image URL
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory("You are overweight");
        setImageUrl('https://cdn.vectorstock.com/i/preview-2x/96/54/businessman-no-money-overweight-vector-9589654.webp' ); // Replace with the correct image URL
      } else if (bmiValue >= 30) {
        setCategory("You are obese");
        setImageUrl('https://cdn-icons-png.freepik.com/256/5571/5571799.png?ga=GA1.1.285740525.1725534793&semt=ais_hybrid '); // Replace with the correct image URL
      }
    } else {
      console.log("Please enter valid weight and height values");
    }
  };

  const clearForm = () => {
    setGender('');
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
    setImageUrl('');
  };

  return (
    <>
<div>
<HEADER/>
</div>

    <div className="container">
      <div className="container1">
        <h2 className="lop">BMI CALCULATOR</h2>
        <fieldset className="gill ">
          <legend >GENDER: </legend>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
  <input 
    
    type="radio"
    name="gender"
    value="male"
    checked={gender === 'male'}
    onChange={(e) => setGender(e.target.value)}
  />&nbsp;&nbsp; Male
</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
          <label>
            <input  
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            /> Female
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input 
              type="radio"
              name="gender"
              value="other"
              checked={gender === 'other'}
              onChange={(e) => setGender(e.target.value)}
            /> Other
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
        </fieldset>
        <label className="do">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <label className="do1">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <br />
        <button type="button" onClick={calculateBmi} className="uu">
          Calculate
        </button>
        <button type="button" onClick={clearForm} className="ul">
          Reset
        </button>
        {bmi !== null && (
          <div className="result">
            <h3>Your BMI is: {bmi}</h3>
            <p>{category}{ <img src={imageUrl} style={{height:"1px, weight:5px"}}  className="bmi-image" />}</p>
           
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
