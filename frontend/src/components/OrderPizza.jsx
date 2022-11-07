import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Order.css";
import PizzaCards from "./PizzaCards";
const url = "http://localhost:4000/shopping-cart/add-item";

function OrderPizza(props) {
  let isChanged = props.isChanged;
  let setIsChanged = props.setIsChanged;

  let handleClick = async (pizzas) => {
    var data = JSON.stringify({
      id: pizzas.id,
      name: pizzas.name,
      image: pizzas.image,
      type: pizzas.type,
      price: pizzas.price,
      quantity:1,
    });
    console.log(pizzas)
    var config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    let res = await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // let handleClick = props.handleClick 
  let [pizza, setPizza] = useState([]);
  useEffect(() => {
    // console.log("hello setpizza")m
    axios
      .get("http://localhost:4000/order-pizza/")
      .then((response) => {
        setPizza(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
   // <>
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {pizza.length &&
        pizza.map((pizzas) => (
         <PizzaCards pizzas={pizzas} handleClick={handleClick} isChanged={isChanged} setIsChanged={setIsChanged}/>
        ))}
    </div> 
    // </> */}
  );
}

export default OrderPizza;
