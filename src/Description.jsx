// @ts-check
import { useState } from 'react'
import { DogImage } from './DogImage'

/**
 * @param {{ dogList: string, onBreedClick: () => void; }} props
 */

export const Description = ({ dogList, onBreedClick }) => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  async function fetchDogImg() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogUrl(data.message)
    } catch (error) {
      console.error("画像の取得に失敗しました", error);
    }
  }
  return(
    <>
    <p>犬の画像を表示するサイトです</p>
    <DogImage imageUrl={dogList} />
    <button onClick={fetchDogImg}>更新</button>
    <button onClick={onBreedClick}>表示</button>
    </>
  )
}

export default Description
