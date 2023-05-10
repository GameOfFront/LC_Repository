import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

  /*const getApiData = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/2"
    ).then((response) => response.json());
  
    console.log(response)
    setData(response);
  };
  useEffect(()=>{
    getApiData()
  },[])*/
  useEffect(() => {
    async function getCharacter() {
       const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
       )
       console.log(response.data)
       setData(response.data)
    }

    getCharacter()
 }, [id])
  
  
  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name}/>
      <button onClick={() =>setId(id ===1? 1 : id-1)}>Prev</button>
      <button onClick={() =>setId(id+1)}>Next</button>
    </div>
  )
}

export default App
