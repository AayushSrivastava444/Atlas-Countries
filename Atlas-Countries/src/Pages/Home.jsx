import React from 'react';
import worldMap from "../assets/WorldMap.jpg";
import './Home.css';

function Home(){
    return(
        <div className="Home">
        <h2>Welcome to the Home Page</h2>
         <p>Explore information about countries around the world.</p>

         <div className="Container">
          <img src= {worldMap} alt="World Map" className="World-Map"/>
         </div>

         
         </div>
    )
}

export default Home;