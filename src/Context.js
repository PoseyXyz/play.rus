import React, { useEffect, useState } from 'react'
import { FaAndroid, FaApple, FaAppStoreIos, FaLinux, FaPlaystation, FaWindows, FaXbox, FaSteam, FaGooglePlay, FaGlobe } from 'react-icons/fa';
import { SiEpicgames, SiGogdotcom, SiNintendoswitch } from 'react-icons/si'
import { GrAppleAppStore } from 'react-icons/gr'

//initialization of Context API
const GameContext = React.createContext()

const GameProvider = ({ children }) => {

    //all state data in context API
    //state data for all games in the explore page
    const [test, setTest] = useState({})

    //hook to determine if game results on page load are completely fetched (set to true on page load and back to false when all api data has been fetched)
    const [spinner, setSpinner] = useState(false)

    //state data for all games in the recents page
    const [recents, setRecents] = useState([])

    //state data for all sections and games in the library page
    const [librarySections, setLibrarySections] = useState({
        uncategorized: [],
        currently_playing: [],
        completed: [],
        played: [],
        not_played: []
    })

    //state data for all game categories (e.g. developers, genres, stores and platforms )
    const [categoryList, setCategoryList] = useState({
        genres: [],
        developers: [],
        stores: [],
        platforms: []
    })
    
    //state data to determine the category for which games should be fetched
    const [pageType, setPageType] = useState()

    //state to hold all games fetched under each game category
    const [gamesList, setGamesList] = useState()

    //state data to store the current pagination range values
    const [paginationRange, setPaginationRange] = useState([])

    //state data to control state of sidebar on mobile devices
    const [sideBarOpen, setSideBarOpen] = useState(false)

    //state data to determine the currentPage of the list of games being displayed on the explore page
    const [currentPage, setCurrentPage] = useState(1)

    //state hook for storing all form states
    const [formData, setFormData] = useState({
        searchString: '',
        review: '',
        sliderValue: 1
    })

    //hook to determine if game search results are fully populated or not
    const [searchSpinner, setSearchSpinner] = useState(false)

    //state data for all results generated from game search
    const [searchResults, setSearchResults] = useState()

    //effect hook to fetch search data when search input field is typed into    
    useEffect(() => {
        getSearchData()
    }, [formData.searchString])

    //effect hook to fetch api data and genrate pagination range for explore page (happens both on page load and when page number changes)
    useEffect(() => {
        getData()
        generatePageRange(currentPage, 30)
    }, [currentPage])

    //function to handle all form and input events
    const onChange = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setFormData({
            ...formData,
            [name]: value
        })
    }

    //function to generate pagination number range based on current page of game results being displayed to users
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

    function parsePlatformIcons(platform) {

        if (platform === "PC") {
            return <FaWindows />
        } else if (platform === "PlayStation") {
            return <FaPlaystation />
        } else if (platform === "Apple Macintosh") {
            return <FaApple />
        } else if (platform === "Linux") {
            return <FaLinux />
        } else if (platform === "Android") {
            return <FaAndroid />
        } else if (platform === "iOS") {
            return <FaAppStoreIos />
        } else if (platform === "Xbox") {
            return <FaXbox />
        } else if (platform === 'Nintendo') {
            return <SiNintendoswitch />
        } else if (platform === 'Web') {
            return <FaGlobe />
        }
    }
    function parseStore(storeSlug) {
        if (storeSlug === 'playstation-store') {
            return <FaPlaystation />
        } else if (storeSlug === 'steam') {
            return <FaSteam />
        } else if (storeSlug === 'xbox-store') {
            return <FaXbox />
        } else if (storeSlug === 'xbox360') {
            return <FaXbox />
        } else if (storeSlug === 'epic-games') {
            return <SiEpicgames />
        } else if (storeSlug === 'gog') {
            return <SiGogdotcom />
        } else if (storeSlug === 'nintendo') {
            return <SiNintendoswitch />
        } else if (storeSlug === 'apple-appstore') {
            return <GrAppleAppStore />
        } else if (storeSlug === 'google-play') {
            return <FaGooglePlay />
        }
    }

    function parseRatingColour(color) {
        if (color < 3) {
            return 'border-red-500 text-red-500'
        } else if (color >= 4) {
            return 'border-green-500 text-green-500'
        } else {
            return 'border-yellow-500 text-yellow-500'
        }
    }
    
    const parseRecents = (gameObject) => {

        //checking if game already exists in recents section
        let tempRecents = [...recents]
        if (tempRecents.some(recentGame => recentGame.id === gameObject.id)) {
            return null
        } else {

            //checking if limit for recents is not reached then adding game to recents (in the event that the limit is reached, the oldest game item is eliminated before the latest is added)
            if (recents.length < 10) {
                let tempArray = [...recents]
                const insert = (arr, index, newItem) => [
                    ...arr.slice(0, index),
                    newItem,
                    ...arr.slice(index)
                ]
                tempArray = insert(tempArray, 0, gameObject)
                setRecents(tempArray)
                console.log(recents);
            } else if (recents.length === 10) {
                let tempArray = [...recents]
                tempArray = tempArray.filter((number, i) => number !== tempArray[tempArray.length - 1])
                const insert = (arr, index, newItem) => [
                    ...arr.slice(0, index),
                    newItem,
                    ...arr.slice(index)
                ]
                tempArray = insert(tempArray, 0, gameObject)
                setRecents(tempArray)
                console.log(recents);
            }
        }
    }


    const getData = async () => {
        setSpinner(true)
        const searchFetch = await fetch(`https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f&page=${currentPage}&page_size=40`)

        let searchResult = await searchFetch.json()
        let tempResults = searchResult.results
        tempResults = tempResults.map(result => {
            return { ...result, libraryOptionsOpen: false }
        })
        searchResult.results = tempResults

        setTest(searchResult)
        setSpinner(false)
        console.log(searchResult);
    }

    

    const getItem = (id) => {
        const item = test.results.find(result => result.id === id)
        return item
    }

    const addToLibrary = (id, section) => {
        const tempArray = { ...test }
        const index = tempArray.results.indexOf(getItem(id))
        let game = tempArray.results[index]
        game = { ...game, section, inLibrary: true }
        tempArray.results[index] = game

        let tempSections = { ...librarySections }
        let tempElement = tempSections[section]
        tempElement = [...tempElement, tempArray.results[index]]
        tempSections[section] = tempElement

        setLibrarySections(tempSections)
    }

    const toggleLibraryOptions = (id) => {
        const tempResults = { ...test }
        const index = tempResults.results.indexOf(getItem(id))
        const game = tempResults.results[index]

        game.libraryOptionsOpen = !game.libraryOptionsOpen
        setTest(tempResults)
    }

    const removeFromLibrary = (id, section) => {
        let tempSections = { ...librarySections }
        let sectionWhereGameExists = tempSections[section]

        let index = sectionWhereGameExists.indexOf(sectionWhereGameExists.find(game => game.id === id))
        tempSections[section][index].inLibrary = false
        console.log(tempSections[section][index].inLibrary);

        sectionWhereGameExists = sectionWhereGameExists.filter(game => game.id !== id)

        tempSections[section] = sectionWhereGameExists
        setLibrarySections(tempSections)
    }


    //Sort logic 
    const sortGames = (selected) => {
        const tempArray = { ...test }
        let tempResults = tempArray.results
        if (selected === 'relevance') {
            // getData()
        } else if (selected === "name") {
            tempResults = tempResults.sort((a, b) => (a[selected] > b[selected] ? 1 : -1))
            tempArray.results = tempResults
        } else {
            tempResults = tempResults.sort((a, b) => (b[selected] > a[selected] ? 1 : -1))
            tempArray.results = tempResults
        }
        setTest(tempArray)
    }

    //search logic
 
    const getSearchData = async () => {
        setSearchSpinner(true)
        const data = await fetch(`https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f&search=${formData.searchString}`)
        let res = await data.json()
        setSearchResults(res)
        setSearchSpinner(false)
        console.log(searchResults);
    }

   

    const fetchGenres = async () => {

        const data = await fetch(`https://api.rawg.io/api/genres?key=9df1bae5b88947458cc8431730fbfd9f`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            genres: res.results
        })
    }

    const fetchDevelopers = async () => {

        const data = await fetch(`https://api.rawg.io/api/developers?key=9df1bae5b88947458cc8431730fbfd9f`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            developers: res.results
        })
    }

    const fetchStores = async () => {

        const data = await fetch(`https://api.rawg.io/api/stores?key=9df1bae5b88947458cc8431730fbfd9f`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            stores: res.results
        })
    }

    const fetchPlatforms = async () => {

        const data = await fetch(`https://api.rawg.io/api/platforms?key=9df1bae5b88947458cc8431730fbfd9f`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            platforms: res.results
        })
    }

    const fetchGamesList = async (type, category) => {
        let data = await fetch(`https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f&${type}=${category}&page=${currentPage}`)
        let res = await data.json()
        setGamesList(res.results)
        console.log(gamesList);
    }

    
    return (
        <GameContext.Provider value={{
            test,
            sideBarOpen,
            setSideBarOpen,
            currentPage, setCurrentPage,
            paginationRange,
            spinner, recents, parseRecents, parsePlatformIcons, parseRatingColour,
            addToLibrary, librarySections,
            toggleLibraryOptions, removeFromLibrary,

            sortGames,
            //search states
            onChange, formData, searchResults, searchSpinner,

            //genres
            categoryList, setCategoryList, fetchGenres,

            //developers
            fetchDevelopers,

            //stores
            fetchStores,

            //platforms
            fetchPlatforms,

            //obtain gamesList
            gamesList, fetchGamesList,

            //
            pageType, setPageType,

            //parseStoreIcon
            parseStore,

            setFormData
        }}>
            {children}
        </GameContext.Provider>
    )
}

const GameConsumer = GameContext.Consumer

export { GameContext, GameProvider, GameConsumer }