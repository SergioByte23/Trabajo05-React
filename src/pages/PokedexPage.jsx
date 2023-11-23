import { useSelector } from "react-redux"
import useFetch from "../hooks/userFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
// import '../components/Styles/PokedexPage.css'


const PokedexPage = () => {
  const trainerName = useSelector(store => store.trainerName)
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
  const [pokemons, getPokemons, getByTypePokemons] = useFetch(url)
  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getPokemons()
    }
    else {
      getByTypePokemons(selectValue)

    }

  }, [selectValue])
  const inputSearch = useRef()
  const handleSubmit = e => {
    e.preventDefault()//para que no recargue en automatico
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }
  const cbFilter = poke => {
    //filto por nombre ebn el input
    const nameFiltered = poke.name.includes(inputValue)

    return nameFiltered
  }


  return (
    <div>
      <div className="box-banner">
        <div className="box-red"></div>
        <div className="cuadrado">
          <div className="cuadradito"></div>
        </div>
        <div className="box-black"></div>
      </div>

      <p className="subtitle__pokedexPage">Welcome {trainerName}, <span className="span__subtitle">here you can find your favorite pokemon. Let's go!</span></p>
      <div className="prueba">
        <form onSubmit={handleSubmit} action="">
          <input className=" input__pokedex input__pokedexPage" ref={inputSearch} type="text" placeholder="Search Pokemon..." />
          <button className=" button__pokedex button__pokedexPage">Search</button>
        </form>
        <div>
          <SelectType
            setSelectValue={setSelectValue}

          />
        </div>
      </div>
      <div className="div__box__cards">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage