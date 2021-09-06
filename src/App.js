import "./App.css";
import { useState,useEffect } from "react";
import TileContainer from "./components/TileContainer";
function App() {
  const [ContainerArray, setContainerArray] = useState([]);

function AddContainer(){
  var uniqid = Date.now();
  var array= [...ContainerArray] ;
  array.push({id :uniqid})
  setContainerArray(array)
  console.log(ContainerArray)
}
function RemoveContainer(IdRemoved){
 setContainerArray( ContainerArray.filter((element) => {
    return IdRemoved !== element.id;
  }))
  console.log(ContainerArray)
}
  return (
    <div className="App">
      <button title="Double click it!" className='AddContainerButton' onClick={AddContainer}> +</button>
      {ContainerArray.map( (element) => {return <TileContainer key={element.id} id={element.id} RemoveContainer={RemoveContainer} />} ) }

     
    </div>
  );
}

export default App;
