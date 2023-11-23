import { useParams } from "react-router-dom"
import useFetch from "../hooks/userFetch"
import { useEffect } from "react"
import '../components/Styles/PokeInfoPage.css'

const PokeInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemons] = useFetch(url)

  useEffect(() => {
    getPokemons()
  }, [])
  console.log(pokemon);
  return (
    <div>
      <div className="box-banner">
        <div className="box-red"></div>
        <div className="cuadrado">
          <div className="cuadradito"></div>
        </div>
        <div className="box-black"></div>
      </div>

      <article className="infoPoke__article">
      <img className="infoPoke__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />

        <div className="infoPoke__div__card">
        <h3 className="infoPoke__id">#{pokemon?.id}</h3>
        <div className="infoPoke__namecanbios">
          <hr className="infoPoke__hr__name"></hr>
          <span className="infoPoke__name">{pokemon?.species.name}</span>
          <hr className="infoPoke__hr__name"></hr>
        </div>
        <ul className="infoPoke__characteristics">
          <li className="infoPoke__weight">Peso</li>
          <li className="infoPoke__height">Altura</li>
          <li className="infoPoke__weight__value">{pokemon?.weight}</li>
          <li className="infoPoke__height__value">{pokemon?.height}</li>
        </ul>
        <div className="infoPoke__powers">
          <h3>Tipo</h3>
          <h3>Habilidades</h3>
          <div>
            <h3>{pokemon?.types[0].type.name}</h3>
          </div>
          <div>
            <h3>{pokemon?.abilities[0].ability.name}</h3>
          </div>
        </div>
        <div>
          <h2>Stats</h2>
        </div>
        </div>
      </article>
    </div>
  )
}

export default PokeInfoPage