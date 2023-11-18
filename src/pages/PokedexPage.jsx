import { useSelector } from "react-redux"
import useFetch from "../hooks/userFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"



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
      <p>Welcome <span>{trainerName}</span>, here you can find your favorite pokemon. Let's go!</p>
      <form onSubmit={handleSubmit} action="">
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <SelectType
        setSelectValue={setSelectValue}
      />
      <div>
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