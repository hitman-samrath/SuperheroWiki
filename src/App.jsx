import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './UI/Header'
import Footer from './UI/Footer'
import Search from './UI/Search'
import CharacterCard from './Characters/CharacterCard.jsx'
import './App.css'

const App = () => {
  const [boxitem, setboxitem] = useState([])
  const [loading, setloading] = useState(false)
  const [query, getquery] = useState('')


  useEffect(()=>{
    const fetchItem=async()=>{
      setloading(true)
      const result=await axios('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      console.log(result.data)
      setboxitem(result.data)
      setloading(false)
    }
    fetchItem()
  },[])


  return (
    <div className="m-0 p-0 box-border w-full h-[100vh] text-white">
      <Header/>
      <Search receivequery={(typed) => getquery(typed)} />
      <CharacterCard loading={loading} boxitem={boxitem} query={query}/>
      <Footer/>
    </div>
  )
}

export default App;