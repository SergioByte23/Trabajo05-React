import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecetedRoutes = () => {
    const trainerName=useSelector(store=>store.trainerName)
  if(trainerName.length>3){
    return <Outlet/>
  }
  else{
    return <Navigate to='/' />
  }
}

export default ProtecetedRoutes