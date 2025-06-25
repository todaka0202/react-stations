import { useState, useEffect } from "react"
import BreedsSelect from "./BreedsSelect";
import Description from "./Description";
import { data } from "browserslist";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogList, setDoglist] = useState([]);

  useEffect(() => {
    async function fetchDogList () {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    }
    fetchDogList();
  }, []);

  async function fetchDogImgList() {
    if(!selectedBreed) return;
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/5`);
      const data = await response.json();
      console.log(data)
      setDoglist(data.message)
    } catch (error) {
      console.error("画像の取得に失敗しました", error);
    }
  }

  return (
    <>
    <BreedsSelect
    breeds={breeds}
    selectedBreed={selectedBreed}
    onChangeBreed={(e) => setSelectedBreed(e.target.value)}
    />
    <Description
    dogList={dogList}
    onBreedClick={fetchDogImgList}
    />
    </>
  );
};

export default DogListContainer
