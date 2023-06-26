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



    const filterPokemon = (data)=>{
        let tempArr = [];
        let correctType = false;
        let correctWeakness = false;
        tempArr = data.map((value)=>{
            value.type.forEach((type)=>{
                if (currentTypePokemon){
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
                    if (weakness == currentWeaknessPokemon){
                        correctWeakness = true;
                    }
                    }
                    else {
                        correctWeakness = true;
                    }
                })
            })
        setFilteredPokemon(tempArr);
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
        pokeList.push(<div className="card"><img src={start ? currentPokemon.sprites.front_default : ""} className="image"></img><p>{start ? currentPokemon.name : ""}</p></div>)
        setCurrentDisplay(pokeList)
    }

    useEffect(() => {
     renderPokemon();
    }, [currentPokemon])

    const renderPokemonList = ()=>{
        let pokeList = [];
        console.log(currentPokemonList)
        if (currentPokemonList){
        for (let i = 0; i < currentPokemonList.pokemon.length; i++){

        //pokeList.push(<img src={start ? currentPokemon[i].sprites.front_default : ""} className="image"></img>)
        pokeList.push(<div className="card"><p>{currentPokemonList.pokemon[i].name}</p></div>)
        console.log(currentPokemonList.pokemon[i].name)
        }
    }
        setCurrentDisplay(pokeList)
    }

    useEffect(() => {
        renderPokemonList();
    }, [currentPokemonList])


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