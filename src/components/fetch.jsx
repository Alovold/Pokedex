import { useState, useEffect } from "react";


export default function DoTheFetch({changePokemon, changeTypePokemon, changeWeaknessPokemon, changePokemonList, startImg}){
  const [userInput, setUserInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [weaknessInput, setWeaknessInput] = useState("");
  const [currentPoke, setCurrentPoke] = useState()
  const [currentListPoke, setCurrentTypePoke] = useState()

  
  
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleTypeChange = (event)=>{
    setTypeInput(event.target.value);
  }

  const handleWeaknessChange = (event)=>{
    setWeaknessInput(event.target.value);
  }

  const fetchFunction = async ()=> {fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        const newData = data
        console.log(newData);
        setCurrentPoke(newData);
        startImg();
    })
    .catch((err)=>{
        console.log(err.message);
    });
}
// useEffect(() => {
//      fetchFunction();
//  }, [])

  const fetchTypeFunction = ()=> {fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        setCurrentTypePoke(data);
        startImg();
    })
    .catch((err)=>{
        console.log(err.message);
    });
}
useEffect(() => {
    changePokemon(currentPoke);
}, [currentPoke])

const pokeSearch = ()=>{
    fetchFunction();
    changePokemon(currentPoke);

}

useEffect(() => {
    changePokemonList(currentListPoke);
}, [currentListPoke])



const typeSearch = ()=>{
    fetchTypeFunction();
    changeTypePokemon(typeInput);
}

useEffect(() => {
    typeSearch();
}, [typeInput])

const weaknessSearch = ()=>{
    fetchTypeFunction();
    changeWeaknessPokemon(weaknessInput);
}

useEffect(() => {
    weaknessSearch();
}, [weaknessInput])

// useEffect(() => {
//     changeWeaknessPokemon(currentTypePoke);
// }, [currentTypePoke])
    
// const weaknessSearch = ()=>{
//     fetchTypeFunction();
//     changeWeaknessPokemon(currentTypePoke);
// }

    return (
        <>
        <div className="searchDiv">
            <label>Search by Pokemon Name</label>
            <input
            type="text"
            onChange={handleChange}
            value={userInput}
            />
            <button onClick={pokeSearch}>Search</button>
            <div className="error-hidden">
                <p>Invalid Pokemon Name</p>
            </div>
        </div>
        <div className="searchDiv">
            <label>Filter by Pokemon Type</label>
            <select
            name="selectedType"
            onChange={handleTypeChange}
            value={typeInput}
            >
                <option value=""></option>
                <option value="Normal">Normal</option>
            </select>
            {/* <button onClick={typeSearch}>Search</button> */}
        </div>
        <div className="searchDiv">
            <label>Filter by Pokemon Weakness</label>
            <select
            name="selectedWeakness"
            onChange={handleWeaknessChange}
            value={weaknessInput}
            >
                <option value=""></option>
                <option value="Normal">Normal</option>
            </select>
            {/* <button onClick={weaknessSearch}>Search</button> */}
        </div>
        </>
    )
  }