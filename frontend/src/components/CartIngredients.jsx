import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://localhost:4000/my-cart/delete";

function CartIngredients(props) {

  let ingredientPrice = props.ingredientPrice;
  let setIngredientPrice = props.setIngredientPrice;
  
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
    let [mycart, setMyCart] = useState([]);
    // let [ingredientPrice, setIngredientPrice] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/my-cart/")
      .then((response) => {
        setMyCart(response.data);
        let pizzatotal = 0;
        response.data.map((item) => {
          console.log("price:"+typeof(item.price))
          pizzatotal = pizzatotal + parseInt(item.price);
        });

        setIngredientPrice(pizzatotal);
      })
      .catch((err) => console.log(err));
  }, []);

    return (
        <div className="m-2">
        <i>
          <h4 className="m-2" style={{ color: "orangered", fontSize: "large" }}>
            Ingredients
          </h4>
        </i>
        {mycart.length &&
          mycart.map((ingredient) => (
            <div class="table-responsive">
              <table style={{ width: "470px" }} class="table table-striped table-hover m-1">
                <tbody>
                  <tr>
                    <td>
                      <strong>{ingredient.tname}</strong>
                    </td>
                    <td>
                      <i>₹{ingredient.price}.00</i>
                    </td>
                    <td>
                      <button
                        class="btn btn-sm rounded-0"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        onClick={() => {
                          handleDelete(ingredient);
                          alert(ingredient.tname +" Deleted🗑️");
                        }}
                      >
                        <img
                          width={20}
                          height={20}
                          src="../assets/delete.png"
                          alt=""
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          <i><h6 style={{color:"green"}}>Total cost of Ingredient: Rs. {ingredientPrice}.00</h6></i>
      </div>
    );
}

export default CartIngredients;