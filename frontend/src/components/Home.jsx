import React from "react";
import { Container } from "react-bootstrap";

function Home(props) {
  return (
    <>
      <div align="center">
        <br />
        <h2>Our Story</h2>
      </div>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad
          error, perspiciatis hic nisi sint aperiam animi tempore impedit,
          repudiandae corrupti dignissimos porro praesentium odit sed dolore
          reprehenderit sequi molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad
          error, perspiciatis hic nisi sint aperiam animi tempore impedit,
          repudiandae corrupti dignissimos porro praesentium odit sed dolore
          reprehenderit sequi molestiae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
          fermentum iaculis eu non. In hac habitasse platea dictumst. Fames ac
          turpis egestas integer eget. Volutpat sed cras ornare arcu dui vivamus
          arcu felis. Aenean sed adipiscing diam donec. Nisl purus in mollis
          nunc sed. Massa tincidunt nunc pulvinar sapien et ligula. Enim ut sem
          viverra aliquet eget sit amet tellus. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. In aliquam sem fringilla ut.
        </p>
        <div style={{borderBottom:"1px solid rgba(17,17,17,0.349)"}} className="extra"></div>
        <div className="d-flex flex-row mt-5">
          <img
            src="https://jessiespizzapakenham.com.au/wp-content/uploads/sites/26/2019/11/img-1800-pizza-011.jpg"
            alt="indgredients"
            width={400}
            height={300}
          />
          <div style={{ marginLeft: "5%" }}>
            <h4>Ingredients</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
              fermentum iaculis eu non. In hac habitasse platea dictumst. Fames
              ac turpis egestas integer eget. Volutpat sed cras ornare arcu dui
              vivamus arcu felis. Aenean sed adipiscing diam donec. Nisl purus
              in mollis nunc sed. Massa tincidunt nunc pulvinar sapien et
              ligula. Enim ut sem viverra aliquet eget sit amet tellus. Lorem
              ipsum dolor sit amet consectetur adipiscing elit. In aliquam sem
              fringilla ut.
            </p>
          </div>
        </div>
        <div style={{borderBottom:"1px solid rgba(17,17,17,0.349)"}} className="extra"></div>
        <div className="d-flex flex-row mt-5">
          <div style={{ marginRight: "5%" }}>
            <h4>Our Chefs</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
              fermentum iaculis eu non. In hac habitasse platea dictumst. Fames
              ac turpis egestas integer eget. Volutpat sed cras ornare arcu dui
              vivamus arcu felis. Aenean sed adipiscing diam donec. Nisl purus
              in mollis nunc sed. Massa tincidunt nunc pulvinar sapien et
              ligula. Enim ut sem viverra aliquet eget sit amet tellus. Lorem
              ipsum dolor sit amet consectetur adipiscing elit. In aliquam sem
              fringilla ut.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="chef's img"
            width={390}
            height={300}
          />
        </div>
        <div style={{borderBottom:"1px solid rgba(17,17,17,0.349)"}} className="extra"></div>
        <div className="d-flex flex-row mt-5">
          <img
            src="https://st.depositphotos.com/2789119/4192/v/950/depositphotos_41923899-stock-illustration-timer-icon-45-minutes.jpg"
            alt="45mins"
            width={270}
            height={300}
          />
          <div style={{ marginLeft: "5%" }}>
            <br /><br /><br /><br /><br /><br />
            <h4>45 min Delivery</h4>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
