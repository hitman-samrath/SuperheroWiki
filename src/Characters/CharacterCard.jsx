import React from 'react'
import CharacterData from './CharacterData'
import Spinner from '../UI/Spinner'
import '../App.css'

const CharacterCard = ({boxitem, loading, query}) => {
    return (loading) ? (<Spinner/>) : 
    (<div className="flex justify-center flex-wrap gap-[3%]">{ boxitem.map((item) => (<CharacterData item = {item} key={item.id} query={query}/>))}</div>)
}

export default CharacterCard