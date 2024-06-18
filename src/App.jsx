import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ip, setIp] = useState({places:[]});
useEffect(()=>{
const fetchData = async()=>{
  const data = await fetch ("https://api.zippopotam.us/IN/305627");
   const jsonData = await data.json();
   console.log(jsonData);
   setIp(jsonData);
};
fetchData();
},[]);
  return (
    <>

        <h1>{ip.country}</h1>
        <h1>{ip["country abbreviation"]}</h1>
        <h1>{ip["post code"]}</h1>
        {ip.places.map((item,index)=>(
          <div>
          <h1>{item.latitude}</h1>
          <h1>{item.longitude}</h1>
          <h1>{item.state}</h1>
          <h1>{item["place name"]}</h1>
          <h1>{item["state abbreviation"]}</h1>
          </div>
        ))}
      
    </>
  )
}

export default App;
 