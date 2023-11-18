import { useParams } from "react-router-dom"
import useFetch from "../hooks/userFetch"
import { useEffect } from "react"

const PokeInfoPage = () => {

  const {id} =useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemons] =useFetch(url)

  useEffect(()=>{
    getPokemons()
  },[])
  console.log(pokemon);
  return (
    <div>
      <article>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />

      </article>
    </div>
  )
}

export default PokeInfoPage