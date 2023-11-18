import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const inputName =useRef()
    const dispatch=useDispatch()
    const navigate =useNavigate()

    const handleSubmit =e=>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }



  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hi Trainer</h2>
        <p>To start,please give me your trainer name</p>
        <form onSubmit={handleSubmit}>
            <input ref={inputName} type="text" />
            <button>Catch them all</button>
        </form>

    </div>
  )
}

export default HomePage