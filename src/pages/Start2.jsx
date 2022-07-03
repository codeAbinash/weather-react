import { repoPath } from "../js/deploy";
import { Link } from "react-router-dom";

//style
import '../styles/pages/screen/start.scss'

//images
import earth from '../images/illustrations/earth.png'

// import modules
import BlueButton from "../components/buttons/BlueButton";


export default function Start() {
   return (
      <div className="startScreen screen">
         <p></p><p></p>
         <img src={ earth } alt="Main Weather" className="mainImage" />
         <h1>Let' s set your Location</h1>
         <p>Set your location using GPS or searching your city name or using coordinations of your location.</p>
         <div className="bottomDiv full-w">

            <Link to={ repoPath('/set-location') } className='full-w'>
               <BlueButton text="Set Location" />
            </Link>
            <p>No data is saved in our servers. Fell Safe.</p>
         </div>
      </div>
   )
}