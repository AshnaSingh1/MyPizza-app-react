// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header';
import OrderPizza from './components/OrderPizza';
import BuildPizza from './components/BuildPizza';
import Home from './components/Home';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';
import { useEffect, useState } from 'react';
// import { useEffect, useState} from "react";

function App() {
  // let [cart, setCart] = useState([]);

  // let handleClick = (item)=>{
  //   console.log(item)
  //   setCart([...cart,item])
  // }
  let [isChanged , setIsChanged] = useState();
  useEffect(()=>{
  })

  return (
    <div>
      <Header setIsChanged={setIsChanged} isChanged={isChanged}/>
      {/* <Header/> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/order-pizza' element={<OrderPizza setIsChanged={setIsChanged} isChanged={isChanged}/>}/>
        <Route path='/build-pizza' element={<BuildPizza/>}/>
        <Route path='/shopping-cart' element={<ShoppingCart/>}/>
        <Route path='/check-out' element={<CheckOut/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


// eslint-disable-next-line no-lone-blocks
{/* <div>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/order-pizza' element={<OrderPizza handleClick={handleClick} />}/>
        <Route path='/build-pizza' element={<BuildPizza/>}/>
        <Route path='/shopping-cart' element={<ShoppingCart handleClick={handleClick} cart={cart} setCart={setCart} />}/>
      </Routes>
      <Footer/>
    </div> */}