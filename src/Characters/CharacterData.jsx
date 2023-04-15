import React from 'react'
import '../App.css'

const CharacterData = ({ item, query }) => {
    return (
        query.length == 0 ? (
            <div className="card w-[40vh] h-[50vh] mt-[5%] cursor-pointer perspective-1000">
                <div className="card-inner  relative w-full h-full transition-transform-0_8 transform-style-preserve3D">
                    <div className="card-front w-full h-full absolute back-visibility">
                        <img className="w-[40vh] h-[50vh] object-cover" src={item.images.md} alt='failed to load' />
                    </div>
                    <div className="card-back w-full h-full relative bg-black text-white p-2.5 transform-rotateY back-visibility">
                        <h1 className='text-center text-[30px]'>{item.name}</h1>
                        <ul>
                            <li><strong>Actor Name: </strong>{item.biography.fullName}</li>
                            <li><strong>Publisher: </strong>{item.biography.publisher}</li>
                            <li><strong>Intelligence: </strong>{item.powerstats.intelligence}</li>
                            <li><strong>Strength: </strong>{item.powerstats.strength}</li>
                            <li><strong>Power: </strong>{item.powerstats.power}</li>
                            <li><strong>Speed: </strong>{item.powerstats.speed}</li>
                            <li><strong>Combat: </strong>{item.powerstats.combat}</li>
                            <li><strong>Durability: </strong>{item.powerstats.durability}</li>
                        </ul>

                    </div>
                </div>
            </div>
        ) : (
            <> {(item.name.toLowerCase()).includes(query) ? (
                <div className="card w-[40vh] h-[50vh] mt-[5%] cursor-pointer perspective-1000">
                    <div className="card-inner  relative w-full h-full transition-transform-0_8 transform-style-preserve3D">
                        <div className="card-front w-full h-full absolute back-visibility">
                            <img className="w-[40vh] h-[50vh] object-cover" src={item.images.md} alt='failed to load' />
                        </div>
                        <div className="card-back w-full h-full relative bg-black text-white p-2.5 transform-rotateY back-visibility">
                            <h1 className='text-center text-[30px]'>{item.name}</h1>
                            <ul>
                            <li><strong>Actor Name: </strong>{item.biography.fullName}</li>
                            <li><strong>Publisher: </strong>{item.biography.publisher}</li>
                            <li><strong>Intelligence: </strong>{item.powerstats.intelligence}</li>
                            <li><strong>Strength: </strong>{item.powerstats.strength}</li>
                            <li><strong>Power: </strong>{item.powerstats.power}</li>
                            <li><strong>Speed: </strong>{item.powerstats.speed}</li>
                            <li><strong>Combat: </strong>{item.powerstats.combat}</li>
                            <li><strong>Durability: </strong>{item.powerstats.durability}</li>
                            </ul>

                        </div>
                    </div>
                </div>) : (null)}
            </>

        )
    )
}
// card = w-[40vh] h-[50vh] mt-[5%] flex cursor-pointer bg-transparent rounded-lg perspective-1000 transform-rotateY-hover
// card-inner = w-full h-full transition-transform-0_8 transform-style-preserve3D transform-rotateY
// card-front = absolute w-full h-full back-visibility
// img tag = w-[40vh] h-[50vh] object-cover
// card-back = relative bg-black text-white p-2.5 w-full h-full  transform-rotateY
// h1 yag = text-center text-[30px]
// ul tag = text-xl mt-4 no-underline



export default CharacterData