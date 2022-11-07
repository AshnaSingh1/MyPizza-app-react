import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CartIngredients from "./CartIngredients";
import { Link } from "react-router-dom";
// import { Container } from 'react-bootstrap';
const url = "http://localhost:4000/shopping-cart/delete";
// const url1 = "http://localhost:4000/my-cart/delete";
const url2 = "http://localhost:4000/shopping-cart/update";

function ShoppingCart(props) {
  // eslint-disable-next-line no-lone-blocks
  {/*// console.log(props)
  // let cart = props.cart;
  // let setCart = props.cart;
  // let handleClick = props.handleClick;
  */}

  // ----------------------------------------------------------------------------------------
  // let [isClicked, setIsClicked] = useState();
  let [isLoading, setIsLoading] = useState(false);
  let handleQuantity = async (id, quantity) => {
    setIsLoading(true);
    var data = JSON.stringify({
      id: id,
      quantity: quantity
    });
    // console.log("q:"+id);
    var config = {
      method: "post",
      url: url2,
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
        if(res){setIsLoading(false)}
      });
  };

  // -----------------------------------HANDLE DELETE FOR PIZZA------------------------------------------------
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
  // -----------------------------------AXIOS-----------------------------------------------------------
  let [cart, setCart] = useState([]);
  let [pizzaprice, setPizzaPrice] = useState(0);
  let [isClicked, setIsClicked] = useState();
  useEffect(() => {
    console.log("Hello isClicked")
    axios
      .get("http://localhost:4000/shopping-cart/")
      .then((response) => {
        setCart(response.data);
        // response.data.map((item)=>{
        //   console.log("price:"+item.price)
        //   console.log("pizzaprice:"+pizzaprice)
        //   setPizzaPrice(pizzaprice + item.price)
        //   })
        let pizzatotal = 0;
        response.data.map((item) => {
          // console.log("price:"+typeof(item.price))
          pizzatotal = pizzatotal + parseInt(item.price)*(item.quantity);
        });

        setPizzaPrice(pizzatotal);
      })
      .catch((err) => console.log(err));
  }, [isClicked]);
// ------------------------------------------------------------------------------------------------------
  // eslint-disable-next-line no-lone-blocks
  let [mycart, setMyCart] = useState([]);
  let [ingredientPrice, setIngredientPrice] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/my-cart/")
      .then((response) => {
        setMyCart(response.data);
      })
      .catch((err) => console.log(err));
}, []);

  return (
    <>
    <i><h2 className="m-2" style={{color:"orangered", textAlign:"center"}}>MY CART🛒</h2></i>
    <div className="d-flex">
      <div className="m-2">
        <i>
          <h4 className="m-2" style={{ color: "orangered", fontSize: "large" }}>
            Real Pizza, Real Good🍕
          </h4>
        </i>
        {cart.length &&
          cart.map((items) => (
            <div class="table-responsive">
              <table style={{ width: "650px" }} class="table table-striped table-hover m-1">
                {/* <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead> */}
                <tbody>
                  <tr>
                    {/* <th scope="row">1</th> */}
                    <td>
                      <img
                        width={50}
                        height={50}
                        src={items.image}
                        alt="pizza"
                      />
                    </td>
                    {/* <td>{items.type}</td> */}
                    <td>
                    {(() => {
                if (items.type === "veg") {
                  return (
                    <div style={{ width: "8px", height: "8px" }}>
                      <img
                        width={30}
                        height={30}
                        src="../assets/veg.png"
                        alt="veg"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div style={{ width: "8px", height: "8px" }}>
                      <img
                        width={30}
                        height={30}
                        src="../assets/nonveg.png"
                        alt="nonveg"
                      />
                    </div>
                  );
                }
              })()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>
                      <strong>{items.name}</strong>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;₹{items.price}
                    </td>
                    {/* <td>{items.type}</td> */}
                    <td>
                      <button
                        class="btn btn-sm rounded-0"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        onClick={() => {
                          !isLoading && handleQuantity(items.id,items.quantity+1);
                          setIsClicked(!isClicked); 
                          alert("Item Incremented");
                        }}
                      >
                        ➕
                      </button>
                      <button>{items.quantity}</button>
                      <button
                        class="btn btn-sm rounded-0"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        onClick={() => {
                          !isLoading && handleQuantity(items.id,items.quantity-1);
                          setIsClicked(!isClicked);
                          alert("Item Decremented");
                        }}
                      >
                        ➖
                      </button>
                    </td>
                    <td>
                      <strong>
                        <i>₹{items.price * items.quantity}.00</i>
                      </strong>
                    </td>
                    <td>
                      <button
                        class="btn btn-sm rounded-0"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        onClick={() => {
                          handleDelete(items);
                          alert(items.name +" Deleted Successfully")
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
        <i>
          <h6 style={{ color: "green" }}>
            Total cost of Pizza: Rs. {pizzaprice}.00
          </h6>
        </i>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      {/* Ingreidents Cart Table */}
      <CartIngredients ingredientPrice={ingredientPrice} setIngredientPrice={setIngredientPrice} />
    </div>
    
    <div className="m-3" style={{color:"blue", textAlign:"center"}}>
      <div style={{borderBottom:"1px solid rgba(17,17,17,0.349)"}} className="extra"></div> <br />
      <h4>Sub Total💸: Rs. {pizzaprice+ingredientPrice}.00</h4><br />
      <div style={{borderBottom:"1px solid rgba(17,17,17,0.349)"}} className="extra"></div> <br />
      <Link to="/check-out">
      <button className="btn btn-success">Check Out✔️</button>
      </Link>
    </div>
    </>
  );
}

export default ShoppingCart;
