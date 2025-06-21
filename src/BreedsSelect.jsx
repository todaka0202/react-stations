//@ts-check
/**
 * @param {{breeds: string[], selectedBreed:string, handleSelectChenge:any }} props
 */


export const BreedsSelect = ({ breeds, selectedBreed, handleSelectChenge }) => {
  return (
    <select value={selectedBreed} onChange={e => handleSelectChenge(e.target.value)} >
      {breeds?.map((breed) => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
  );
}

export default BreedsSelect
