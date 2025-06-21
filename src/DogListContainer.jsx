import { useState, useEffect } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectBreed] = useState({BreedsSelect});
  const handleSelectChenge = (setSelectBreed) => {setSelectBreed(selectedBreed)}

  useEffect(() => {
    async function fetchDogList () {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
    }
    fetchDogList();
  }, );
  return (
    <>
    <BreedsSelect breed={breeds} selectedBreed={selectedBreed} handleSelectChenge={handleSelectChenge} />
    </>
  )
}

export default DogListContainer
