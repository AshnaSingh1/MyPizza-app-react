import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./Build.css";
const url = "http://localhost:4000/my-cart/add-ingredient";

function BuildPizza(props) {
  let [ingredient, setingredient] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/build-pizza/")
      .then((response) => {
        setingredient(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  // ---------------------------------HANDLE CHECK---------------------------------------------------------------
  let [totalAmount, setTotalAmount] = useState(0);
  let [selectedIngredientsList, setSelectedIngredientList] = useState([]);

  let handleCheck = (event, selectedIngredients) => {
    console.log("triggered event");
    if (event.target.checked) {
      setSelectedIngredientList((selectedIngredientsList) => [
        ...selectedIngredientsList,
        selectedIngredients,
      ]);
      setTotalAmount(totalAmount + selectedIngredients.price);
    } else {
      console.log("unchecked price");
      let newarray = selectedIngredientsList.filter(function (value) {
        return value !== selectedIngredients;
      });
      setSelectedIngredientList(newarray);
      setTotalAmount(totalAmount - selectedIngredients.price);
    }
  };
  //-----------------------------------HANDLE CLICK-------------------------------------------------------
  let handleClick = () => {
    selectedIngredientsList.map(async (ingredient) => {
      var data = JSON.stringify({
        id: ingredient.id,
        tname: ingredient.tname,
        image: ingredient.image,
        price: ingredient.price,
        totalAmount: ingredient.totalAmount,
      });
      console.log(ingredient);
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
    });
  };
  // -----------------------------------------------------------------------------------------------------
  return (
    <>
      <div>
        <Container>
          <p className="mt-2" style={{ textAlign: "center" }}>
            Pizzeria now gives you options to build your own pizza. Customize
            your pizza by choosing ingredients from the list given below
          </p>
          {ingredient.length &&
            ingredient.map((ingredients) => (
              <div>
                <table>
                  <tr>
                    <td>
                      <img
                        style={{ width: "60px", height: "60px" }}
                        src={ingredients.image}
                        alt="ingredient"
                      />
                    </td>
                    <td>
                      <b>
                        {ingredients.tname} &nbsp; ₹{ingredients.price}.00
                      </b>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(event) => {
                          handleCheck(event, ingredients);
                        }}
                      />{" "}
                      &nbsp;
                      {/* onChange={event => checkboxSelected(event,ingredients)} */}
                      <label style={{ color: "orange" }}>Add</label>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          <div style={{ color: "blue", marginLeft: "20%" }}>
            <h4>Total Cost: ₹{totalAmount}.00</h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                backgroundColor: "black",
                color: "orange",
                padding: "4px",
                border: "2px solid orange",
                borderRadius: "3px",
              }}
              onClick={() => {
                handleClick(ingredient);
                alert("Your Cart is Ready🛒");
              }}
            >
              Build Ur Pizza
            </button>
          </div>
          <br />
        </Container>
      </div>
    </>
  );
}

export default BuildPizza;
