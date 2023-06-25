import DoTheFetch from "./fetch"
import { useEffect, useState } from "react";

export default function Page() {
    const [currentPokemon, setCurrentPokemon] = useState([])
    const [currentTypePokemon, setCurrentTypePokemon] = useState()
    const [start, setStart] = useState(false);
    const [currentDisplay, setCurrentDisplay] = useState([])

    const changePokemon = (data)=>{
        setCurrentPokemon(data)
    }

    const changeTypePokemon = (data)=>{
        setCurrentTypePokemon(data)
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

    const renderTypePokemon = ()=>{
        let pokeList = [];
        console.log(currentTypePokemon)
        if (currentTypePokemon){
        for (let i = 0; i < currentTypePokemon.pokemon.length; i++){

        //pokeList.push(<img src={start ? currentPokemon[i].sprites.front_default : ""} className="image"></img>)
        pokeList.push(<div className="card"><p>{currentTypePokemon.pokemon[i].pokemon.name}</p></div>)
        console.log(currentTypePokemon.pokemon[i].pokemon.name)
        }
    }
        setCurrentDisplay(pokeList)
    }

    useEffect(() => {
        renderTypePokemon();
    }, [currentTypePokemon])


    return(
        <div>
            <DoTheFetch changePokemon={changePokemon} changeTypePokemon={changeTypePokemon} startImg={startImg}/>
            <div className="card-list">
            {currentDisplay}
            </div>
        </div>
    )
}


// pokeList.push(<img src={start ? currentPokemon[i].sprites.front_default : ""} className="image"></img>)
// pokeList.push(<p>{currentPokemon[i].name}</p>)