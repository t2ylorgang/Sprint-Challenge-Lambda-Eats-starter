import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Pizza = () => {
    return (
        <div className = "Pizza">
            <h1>BUILD YOUR OWN PIZZA</h1>
            <hr></hr>


            <h2>Name:</h2>
                <p>Required *</p>
                <form>
                    <label>
                        Name
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            <hr></hr>


            <h2>Choice of size:</h2>
                <p>Required *</p>
                <select>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option selected value="large">Large</option>
                </select>
            <hr></hr>


            <h2>Add Toppings:</h2>
            <p>Choose up to 10!</p>
            
            <hr></hr>


            <h2>Special Instructions:</h2>
            <p>Anything else we can do for you?</p>
            <hr></hr>


            <button>Submit Order</button>
        </div>
    );
};
  
export default Pizza;