import React, { useState,useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,setPlants}) {


  return (
    <ul className="cards">{plants.map((plant)=><PlantCard key={plant.id} plant={plant}/>)}</ul>
  );
}

export default PlantList;
