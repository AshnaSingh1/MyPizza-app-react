import React from 'react';
import { useState } from 'react';

function CheckOut(props) {
    let [uname, setUname] = useState('');
    let [email, setEmail] = useState('');

    let submitHandler = (e) => {
        e.preventDefault();
        alert("Thank you "+ uname+" !!! Payment link is sent to "+email)
    }
    
    return (
        <div style={{ backgroundImage:"url(../assets/pizzabg.jpg)", height:"100vh", marginTop:"-70px", fontSize:"50px", backgroundSize:"cover", backgroundRepeat:"no-repeat" }} className='d-flex m-0'>
            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Basic Information</h4>
                                </div>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">First Name</label>
                                                <input type="text" name='firstname' className='form-control' 
                                                 value={uname} onChange={(e) => setUname(e.target.value)}
                                                 />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Last Name</label>
                                                <input type="text" name='lastname' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Phone Number</label>
                                                <input type="text" name='phone' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Email Address</label>
                                                <input type="text" name='email' className='form-control' 
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Full Address</label>
                                                <textarea rows="2" className='form-control'></textarea>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">City</label>
                                                <input type="text" name='city' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">State</label>
                                                <input type="text" name='state' className='form-control' />
                                            </div>
                                        </div>
                                        {/* <div className='col-md-6'>
                                            <div className='form-group mb-3'>
                                                <label htmlFor="">Zip Code</label>
                                                <input type="text" name='zipcode' className='form-control' />
                                            </div>
                                        </div> */}
                                        <div className='col-md-12'>
                                            <div className='form-group text-end'>
                                                <button type='submit' onClick={submitHandler} className='btn btn-primary'>Place Order</button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='col-md-5'><br />
                <img width={740} height={550} src="../assets/background.jpg" alt="" />
            </div> */}
            <div className='col-md-5'>
                <br /><br />
                {/* <h3  style={{color:"whitesmoke", textAlign:"center",}}>Thankyou...</h3> */}
                <div className='ml-5' style={{border:"2px dotted white"}}>
               <h3 style={{color:"whitesmoke", textAlign:"center",}}> Your Favorites, Your Pizzeria</h3>
                <i><h4 style={{color:"whitesmoke", textAlign:"center",}}>Flat ₹30 CASHBACK</h4></i>
                <p></p>
                <i><h3 style={{color:"red", textAlign:"center"}}>on min. ₹500 value once per user txn</h3></i>
                <h4 style={{color:"whitesmoke", textAlign:"center"}}>On orders via &nbsp;
                <img width={200} height={35} style={{backgroundColor:"whitesmoke"}} src="../assets/amazonpay.png" alt="" />
                </h4>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;