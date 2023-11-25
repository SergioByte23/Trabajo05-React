import { useEffect, useRef } from "react"
import useFetch from "../../hooks/userFetch"
import '../Styles/PokedexPage.css'


const SelectType = ({setSelectValue, setPage}) => {
    const url = 'https://pokeapi.co/api/v2/type'

    const [infoTypes,getInfoTypes]= useFetch(url)
    useEffect(()=>{
        getInfoTypes()
    },[])

    const selectElement =useRef()
    
    const handleChange =()=>{
        setSelectValue(selectElement.current.value)
        setPage(1)
    }
  return (
    <select className="option__allPokemon" ref={selectElement} onChange={handleChange}>
        <option  value="allPokemons">All pokemons</option>
        {
            infoTypes?.results.map(type=>(
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType