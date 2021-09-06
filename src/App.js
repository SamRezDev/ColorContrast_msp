import "./App.css";
import { useState,useEffect } from "react";
import TileContainer from "./components/TileContainer";
function App() {
  const [ContainerArray, setContainerArray] = useState([]);
  const [AddElement, setAddElement] = useState(false)
  useEffect(() => {
    AddElement&& AddContainer()
    
  }, [AddElement])
function AddContainer(){
  var uniqid = Date.now();
  var array= ContainerArray ;
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
      <button title="Double click it!" className='AddContainerButton' onClick={() => AddElement?setAddElement(false):setAddElement(true)}> +</button>
      {ContainerArray.map( (element) => {return <TileContainer key={element.id} id={element.id} RemoveContainer={RemoveContainer} />} ) }

     
    </div>
  );
}

export default App;
