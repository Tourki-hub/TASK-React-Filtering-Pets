import React from 'react'

const Logic = () => {
  return (<div>  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const changing = (eve) => {
    setSearch(eve.target.value);
  };
  const cataegory = (eve) => {
    setType(eve.target.value);
  };
  const petFilter = pets.filter((pet) => {
    if (pet.name.toLowerCase().includes(search.toLowerCase())) {
    return true;
    } else {
      return false;
    }
  });

  const dropDown = pets.filter((pet) => {
    if (pet.type.toLowerCase().includes(type.toLowerCase())) {
      return true;
    }
  });

  const petList = petFilter.map((pet) => <PetItem pet={pet} key={pet.id} />);</div>
  )
}

export default Logic