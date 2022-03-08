import React, { useEffect, useState } from 'react'

const GameContext = React.createContext()

const GameProvider = ({ children }) => {
    const [paginationRange, setPaginationRange] = useState([])
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
   function generatePageRange(currentPage, lastPage) {
        const delta = 3;
    
        const range = [];
        for (let i = Math.max(2, (currentPage - delta)); i <= Math.min((lastPage - 1), (currentPage + delta)); i += 1) {
            range.push(i);
        }
    
        if ((currentPage - delta) > 2) {
            range.unshift('...');
        }
        if ((currentPage + delta) < (lastPage - 1)) {
            range.push('...');
        }
    
        range.unshift(1);
        if (lastPage !== 1) range.push(lastPage);
        
        console.log(range);
        setPaginationRange(range)
        return range;
     
    }
   
    useEffect(()=>{
        generatePageRange(currentPage, 30)
        getData()
    }, [currentPage])
    
    
    // for (let i = 1, l = 20; i <= l; i++)
    //     console.log(`Selected page ${i}:`, pagination(i, l));

   
    
    const [test,setTest] = useState()
    const [spinner, setSpinner] = useState(false)
    

   
    // useEffect(() => {
    //     
    // }, [currentPage])
    const getData = async()=>{
        setSpinner(true)
        const searchFetch= await fetch(`https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f&page=${currentPage}&page_size=40`)

        let searchResult = await searchFetch.json()
        
        setTest(searchResult)
        setSpinner(false)
        console.log(searchResult);
    }

    
    

    return (
        <GameContext.Provider value={{
            test,
            sideBarOpen,
            setSideBarOpen,
            currentPage, setCurrentPage,
            paginationRange,
            spinner
        }}>
            {children}
        </GameContext.Provider>
    )
}

const GameConsumer = GameContext.Consumer

export { GameContext, GameProvider, GameConsumer }