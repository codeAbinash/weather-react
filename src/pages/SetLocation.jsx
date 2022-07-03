import '../styles/pages/screen/SetLocation.scss'

//Components
import Header from '../components/header/Header'



export default function SetLocation(){
   return(
      <div className='setLocation'>
         <Header text="Search Your Location" back={true}/>


      </div>
   )
}