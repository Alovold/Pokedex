import { useState, useEffect } from "react";


export default function DoTheFetch({changePokemon, changeTypePokemon, changeWeaknessPokemon, changePokemonList, startImg}){
  const [userInput, setUserInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [weaknessInput, setWeaknessInput] = useState("");
  const [currentPoke, setCurrentPoke] = useState()
  const [currentListPoke, setCurrentListPoke] = useState()

  
  
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
        setCurrentListPoke(data.pokemon);
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
        <p>Individual Pokemon Search</p>
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
        <p>List Pokemon Search</p>
        <div className="searchDiv">
            <label>Filter by Pokemon Type</label>
            <select
            name="selectedType"
            onChange={handleTypeChange}
            
            >
                <option value=""></option>
                <option value="Normal">Normal</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Grass">Grass</option>
                <option value="Flying">Flying</option>
                <option value="Fighting">Fighting</option>
                <option value="Poison">Poison</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Rock">Rock</option>
                <option value="Psychic">Psychic</option>
                <option value="Ice">Ice</option>
                <option value="Bug">Bug</option>
                <option value="Ghost">Ghost</option>
                <option value="Steel">Steel</option>
                <option value="Dragon">Dragon</option>
                <option value="Dark">Dark</option>
                <option value="Fairy">Fairy</option>
            </select>
            
        </div>
        <div className="searchDiv">
            <label>Filter by Pokemon Weakness</label>
            <select
            name="selectedWeakness"
            onChange={handleWeaknessChange}
            
            >
                <option value=""></option>
                <option value="Normal">Normal</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Grass">Grass</option>
                <option value="Flying">Flying</option>
                <option value="Fighting">Fighting</option>
                <option value="Poison">Poison</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Rock">Rock</option>
                <option value="Psychic">Psychic</option>
                <option value="Ice">Ice</option>
                <option value="Bug">Bug</option>
                <option value="Ghost">Ghost</option>
                <option value="Steel">Steel</option>
                <option value="Dragon">Dragon</option>
                <option value="Dark">Dark</option>
                <option value="Fairy">Fairy</option>
            </select>
            {/* <button onClick={weaknessSearch}>Search</button> */}
        </div>
        </>
    )
  }