import '../styles/pages/screen/SetLocation.scss'

//Components
import Header from '../components/header/Header'
import BlueButton from '../components/buttons/BlueButton'



//images
// import locationImage from '../images/illustrations/location_pink.png'
import backImage from '../images/icons/back.svg'


export default function SetLocation() {

   return (
      <div className='setLocation'>
         <div className="topDiv">
            <Header text="Search Your Location" back={ true } />
            <div className="searchDiv">
               <input type="text" placeholder='Search Your City' value='Bankura'/>
            </div>
            {/* <img src={ locationImage } alt="Location" /> */ }
            <div className="cities">
               <p className='countResult'>4 Results Found for "Bankura"</p>
               <div className="city tap2">
                  <div className="left">
                     <p className="name">Bankura, <span className='smallText'>West Bengal, India</span></p>
                  </div>
                  <div className="right">
                     <img src={ backImage } alt="Forward" />
                  </div>
               </div>
               <div className="city tap2">
                  <div className="left">
                     <p className="name">Bankura, <span className='smallText'>Jharkhand, India</span></p>
                  </div>
                  <div className="right">
                     <img src={ backImage } alt="Forward" />
                  </div>
               </div>
               <div className="city tap2">
                  <div className="left">
                     <p className="name">Bankura, <span className='smallText'>Rajshahi, Bangladesh</span></p>
                  </div>
                  <div className="right">
                     <img src={ backImage } alt="Forward" />
                  </div>
               </div>
               <div className="city tap2">
                  <div className="left">
                     <p className="name">Bankura, <span className='smallText'>West Bengal, India</span></p>
                  </div>
                  <div className="right">
                     <img src={ backImage } alt="Forward" />
                  </div>
               </div>

            </div>
         </div>
         <section>
            <div className="bottomDiv">
               <BlueButton text="Use GPS" />
               <p>Turn on Location to Locate</p>
            </div>
         </section>


      </div>
   )
}