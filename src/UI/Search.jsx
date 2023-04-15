import './../App.css'
import React, { useState } from 'react'


const Search = ({receivequery}) => {
const [text, setText] = useState('')

const changes = (typed) => {
        setText(typed)
        receivequery(typed)
}

    return (
        <section className="pt-12 h-24">
            <form>
                <input className=" block m-auto text-lg p-2.5 w-[65%] border-0 rounded-md outline-none text-black" 
                type="text" 
                placeholder="Search Character Name"
                value={text}
                autoFocus
                onChange= {(e) => changes(e.target.value)} />
            </form>
        </section>
    )
}

export default Search