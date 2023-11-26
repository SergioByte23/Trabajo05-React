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




  const url = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0'
  const [pokemons, getPokemons, getByTypePokemons] = useFetch(url)
  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getPokemons()
      setPage(1)
    }
    else {
      getByTypePokemons(selectValue)
      setPage(1)

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

  // Logica paginación
  const [page, setPage] = useState(1)
  const pokemonsFiltered = pokemons?.results.filter(cbFilter)

  const totalPokemon = pokemonsFiltered?.length
  const pokePerPage = 12
  const quantityPages = Math.ceil(totalPokemon / pokePerPage)
  let arrPages = []
  for (let i = 1; i <= quantityPages; i++) {
    if (pokemonsFiltered) {
      arrPages.push(i)
    }
  } 
  const firstIndex = pokePerPage * (page - 1)
  const finalIndex = pokePerPage * page
  //Final de la paginacion 


  return (
    <div>
      <div className="box-banner box-banner-Page">
        <div className="box-red"></div>
        <img className='title__pokedex title__pokedex--Page' src="/banner.png" alt="" />
        <div className="cuadrado">
          <div className="cuadradito"></div>
        </div>
        <div className="box-black"></div>
      </div>

      <p className="subtitle__pokedexPage">Welcome {trainerName}, <span className="span__subtitle">here you can find your favorite pokemon. Let's go!</span></p>
      <div className="box__Search__pokedexPage">
        <form onSubmit={handleSubmit} action="">
          <input className=" input__pokedex input__pokedexPage" ref={inputSearch} type="text" placeholder="Search Pokemon..." />
          <button className=" button__pokedex button__pokedexPage">Search</button>
        </form>
        <div>
          <SelectType
            setSelectValue={setSelectValue}
            setPage={setPage}
          />
        </div>
      </div>

      <div className="div__box__cards">
        {
          pokemonsFiltered?.slice(firstIndex, finalIndex).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
      {
        /*Paginación*/
      }

      <ul className="paginacion">
        <li style={{ display: `${page <= 1 ? "none" : "block"}` }} className="paginacion__block" onClick={() => {
          if (page >= 2) {
            setPage(page - 1)
          }
        }} >&lt;</li>
        {          
          arrPages.map(e => (
            <li className={`paginacion__block ${e === page ? "paginacion__block--selected" : ""}`} onClick={() => setPage(e)} key={e}>{e}</li>
          ))
        }
        <li style={{ display: `${page >= quantityPages ? "none" : "block"}` }} className="paginacion__block" onClick={() => {
          if (page < quantityPages) {
            setPage(page + 1)
          }
        }}>&gt;</li>
      </ul>
      {
        /*término Paginación*/
      }
    </div>
  )
}

export default PokedexPage