import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useState,useEffect} from "react";

function PlantPage() {
  const [ plants, setPlants ] = useState([]);
  const [search,setSearch]=useState("");


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantList => setPlants(plantList) );
}, []);
  let filteredPlants=[]
  function handleSearching(event){
    setSearch(event.target.value)
  }

  filteredPlants=plants.filter((p)=>search?p.name.toLowerCase().includes((search).toLowerCase()):true)
  //console.log(filteredPlants)
  



  const onAddPlant = event => {
   
    event.preventDefault();
    const newPlant = {
      "name": event.target.name.value,
      "image": event.target.image.value,
      "price": event.target.price.value
    };
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlant)
    }).then(response => response.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  };

  return (
    <main>
      <NewPlantForm handleAddPlant={onAddPlant}/>
      <Search search={search} handleChange={handleSearching}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
