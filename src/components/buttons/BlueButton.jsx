import './style.scss'

export default function BlueButton(props){
   return(
      <button className="blueButtonComp">{props.text || "Sample Text"}</button>
   )
}