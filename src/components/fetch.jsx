import { useState, useEffect } from "react";


export default function DoTheFetch({changePokemon, changeTypePokemon, startImg}){
  const [userInput, setUserInput] = useState("");
  const [typeInput, setTypeInput] = useState(1)
  const [currentPoke, setCurrentPoke] = useState()
  const [currentTypePoke, setCurrentTypePoke] = useState()
  
  
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleTypeChange = (event)=>{
    setTypeInput(event.target.value);
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

  const fetchTypeFunction = ()=> {fetch(`https://pokeapi.co/api/v2/type/${typeInput}`)
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
    changeTypePokemon(currentTypePoke);
}, [currentTypePoke])

const typeSearch = ()=>{
    fetchTypeFunction();
    changeTypePokemon(currentTypePoke);

}

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
            <label>Search by Pokemon Type</label>
            <select
            name="selectedType"
            onChange={handleTypeChange}
            value={userInput}
            >
                <option value="1">Normal</option>
            </select>
            <button onClick={typeSearch}>Search</button>
            <div className="error-hidden">
                <p>Invalid Pokemon Name</p>
            </div>
        </div>
        </>
    )
  }