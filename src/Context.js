import React, { useEffect, useState } from 'react'

const GameContext = React.createContext()

const GameProvider = ({ children }) => {
    const [test] = useState('Hell from context')
    useEffect(() => {
        getData()
    }, [])
    const getData = async()=>{
        // const searchFetch= await fetch(`https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f`)

        // let searchResult = await searchFetch.json()
        // console.log(searchResult);
    }
    return (
        <GameContext.Provider value={{
            test
        }}>
            {children}
        </GameContext.Provider>
    )
}

const GameConsumer = GameContext.Consumer

export { GameContext, GameProvider, GameConsumer }