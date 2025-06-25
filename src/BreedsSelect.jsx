//@ts-check
/**
 * @param {{breeds: string[], selectedBreed:string, onChangeBreed:any }} props
 */


export const BreedsSelect = ({ breeds, selectedBreed, onChangeBreed}) => {
  return (
    <>
    <select value={selectedBreed} onChange={onChangeBreed} >
      {breeds?.map((breed) => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
    </>
  );
}

export default BreedsSelect
