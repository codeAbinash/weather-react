import { repoPath } from "../js/deploy";
import { Link } from "react-router-dom";

//style
import '../styles/pages/screen/start.scss'


//images
import weather_main from '../images/illustrations/weather_main.png'

// import modules
import BlueButton from "../components/buttons/BlueButton";


export default function Start() {
   return (
      <div className="startScreen screen">
         <img src={ weather_main } alt="Main Weather" className="mainImage" />
         <h1>Welcome to Weather</h1>
         <p>Explore precipitation, temperature, air quality etc in your location and all over the world.</p>
         <div className="bottomDiv full-w">

            <Link to={ repoPath('/set-location') } className='full-w'>
               <BlueButton text="Continue" />
            </Link>
            <p>Read <Link to={ repoPath('/terms-and-conditions') }>Terms & Conditions</Link> before you continue.</p>
         </div>
      </div>
   )
}