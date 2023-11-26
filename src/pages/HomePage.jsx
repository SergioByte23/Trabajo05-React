import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'
import '../components/Styles/HomePage.css'
const HomePage = () => {
  const inputName = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate('/pokedex')
  }



  return (
    <>
      <div className='box__HomePage__holi'>
        <div className='pokedex'>
          <img className='title__pokedex' src="/banner.png" alt="" />
          <h2 className='subtitle__pokedex'>¡Hi Trainer!</h2>
          <p className='paragraph'>To start,please give me your trainer name</p>
          <form onSubmit={handleSubmit}>
            <input className='input__pokedex' placeholder="Your name..." ref={inputName} type="text" />
            <button className='button__pokedex'>Start</button>
          </form>
        </div>
        <div className="box-banner__poke box-banner__HomePage">
          <div className="box-red__poke"></div>
          <div className="cuadrado__poke">
            <div className="cuadradito__poke"></div>
          </div>
          <div className="box-black__poke"></div>
        </div>
      </div>
    </>
  )
}

export default HomePage