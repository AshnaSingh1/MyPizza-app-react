import React from "react";
import axios from "axios";
import {useState} from "react";
import "./Order.css";
const url = "http://localhost:4000/shopping-cart/delete";

function PizzaCards(props) {
  let pizzas = props.pizzas;
  let handleClick = props.handleClick;
  let [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  // let isChanged = props.isChanged;
  // let setIsChanged = props.setIsChanged;

  //   isClicked ? (
  //     <button className="btn btn-warning">Remove</button>
  //   ) : (
  //     <button className="btn btn-warning">Add to Cart</button>
  //   );

  const handleMouseEnter = () => {
    setIsHover(true);
 };
 const handleMouseLeave = () => {
    setIsHover(false);
 };

 const boxStyle = {
    backgroundColor: isHover ? '#FFEAE6' : 'white',
 };
  let handleDelete = async (item) => {
    var data = JSON.stringify({
      id: item.id,
    });
    console.log(item);
    var config = {
      method: "delete",
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

  return (
    // <>
    <div className="card d-flex flex-row mt-3" style={boxStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div className="top">
        <h3>{pizzas.name}</h3>
        {(() => {
          if (pizzas.type === "veg") {
            return (
              <div style={{ width: "15px", height: "15px" }}>
                <img width={30} height={30} src="../assets/veg.png" alt="veg" />
              </div>
            );
          } else {
            return (
              <div style={{ width: "15px", height: "15px" }}>
                <img
                  width={30}
                  height={30}
                  src="../assets/nonveg.png"
                  alt="nonveg"
                />
              </div>
            );
          }
        })()}
        <br />
        <br />
        <span>
          <strong>₹{pizzas.price}.00</strong>
        </span>
      </div>
      <div className="bottom" style={{ marginRight: "5%" }}>
        <p className="info">{pizzas.description}</p>
        <p className="info">
          <strong>Ingredients : </strong>
          {pizzas.ingredients}
        </p>
        <p className="info">
          <strong>Toppings : </strong>
          {pizzas.topping}
        </p>
      </div>
      <div>
        <img className="side-img" src={pizzas.image} alt="pizza_img" />
        {/* ---------------------------------BUTTON------------------------------------------- */}
        {isClicked ? (
          <button
            style={{ color: "whitesmoke" }}
            className="btn btn-danger"
            onClick={() => {
                handleDelete(pizzas);
              setIsClicked(!isClicked);
              alert(pizzas.name+" removed from cart!");
              props.setIsChanged(!props.isChanged);
            }}
          >
            Remove
          </button>
        ) : (
          <button
            style={{ color: "whitesmoke" }}
            className="btn btn-warning"
            onClick={() => {
              handleClick(pizzas);
              setIsClicked(!isClicked);
              alert(pizzas.name+" added to cart!");
              props.setIsChanged(!props.isChanged);
            }}
          >
            Add to Cart
          </button>
        )}

        <br />
      </div>
    </div>
    // </>
  );
}

export default PizzaCards;
