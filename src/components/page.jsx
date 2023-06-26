import DoTheFetch from "./fetch"
import { useEffect, useState } from "react";

export default function Page() {
    const [currentPokemon, setCurrentPokemon] = useState([])
    const [currentPokemonList, setCurrentPokemonList] = useState()
    const [currentTypePokemon, setCurrentTypePokemon] = useState()
    const [currentWeaknessPokemon, setCurrentWeaknessPokemon] = useState()
    const [filteredPokemon, setFilteredPokemon] = useState([])
    const [start, setStart] = useState(false);
    const [currentDisplay, setCurrentDisplay] = useState([])



    const filterPokemon = ()=>{
        let tempArr = [];
        let tempList = currentPokemonList
        let correctType = false;
        let correctWeakness = false;
        if (tempList){
        tempList.map((value)=>{
            value.type.forEach((type)=>{
                if (currentTypePokemon){
                    console.log(currentTypePokemon)
                    if (type == currentTypePokemon){
                        correctType = true;
                    }
                }
                else {
                    correctType = true;
                }
            })
            value.weaknesses.forEach((weakness)=>{
                if (currentWeaknessPokemon){
                    console.log(currentWeaknessPokemon)
                    if (weakness == currentWeaknessPokemon){
                        correctWeakness = true;
                    }
                }
                else {
                    correctWeakness = true;
                }
            })
                if (correctWeakness == true && correctType == true){
                    tempArr.push(value)
                }
                correctWeakness = false;
                correctType = false;
            })
        setFilteredPokemon(tempArr);
        }
    }



    const changePokemon = (data)=>{
        setCurrentPokemon(data)
    }

    const changePokemonList = (data)=>{
        setCurrentPokemonList(data)
    }

    const changeTypePokemon = (data)=>{
        setCurrentTypePokemon(data)
    }

    const changeWeaknessPokemon = (data)=>{
        setCurrentWeaknessPokemon(data)
    }

    const startImg = ()=>{
        setStart(true);
    }

    const renderPokemon = ()=>{
        let pokeList = [];
        pokeList.push(<div className="card"><img src={start ? currentPokemon.sprites.front_default : ""} className="image"></img><p>{start ? currentPokemon.name : ""}</p><p>Types: {start ? currentPokemon.types.map((value)=>{return value.type.name + " "}) : ""}</p></div>)
        setCurrentDisplay(pokeList)
    }

    useEffect(() => {
     renderPokemon();
    }, [currentPokemon])

    useEffect(() => {
        if (currentPokemonList){
        filterPokemon();
        }
       }, [currentPokemonList])

    const renderPokemonList = ()=>{
        let pokeList = [];
        console.log(filteredPokemon)
        if (filteredPokemon){
        filteredPokemon.map((pokemon)=>{
        pokeList.push(<div className="card"><img src={start ? pokemon.img : ""} className="image"></img><p>{pokemon.name}</p><p>Num: {pokemon.num}</p><p>Types: {pokemon.type.map((value)=>{return value + " "})}</p><p>Weaknesses: {pokemon.weaknesses.map((value)=>{return value + " "})}</p></div>)
        console.log(pokemon.name)
        })
    }
        setCurrentDisplay(pokeList)
    }

    useEffect(() => {
        renderPokemonList();
    }, [filteredPokemon])


    return(
        <div>
            <DoTheFetch changePokemon={changePokemon} changeTypePokemon={changeTypePokemon} changeWeaknessPokemon={changeWeaknessPokemon} changePokemonList={changePokemonList} startImg={startImg}/>
            <div className="card-list">
            {currentDisplay}
            </div>
        </div>
    )
}


// pokeList.push(<img src={start ? currentPokemon[i].sprites.front_default : ""} className="image"></img>)
// pokeList.push(<p>{currentPokemon[i].name}</p>)