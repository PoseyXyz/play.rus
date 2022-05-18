import React, { useEffect, useState } from 'react'
import { FaAndroid, FaApple, FaAppStoreIos, FaLinux, FaPlaystation, FaWindows, FaXbox, FaSteam, FaGooglePlay, FaGlobe } from 'react-icons/fa';
import { SiEpicgames, SiGogdotcom, SiNintendoswitch } from 'react-icons/si'
import { GrAppleAppStore } from 'react-icons/gr'

//initialization of Context API
const GameContext = React.createContext()

let API_KEY = '9df1bae5b88947458cc8431730fbfd9f'

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
        sliderValue: 1,
        sortValue:''
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
        
        setPaginationRange(range)
    }

    //function to return appropriate icons for each game platform
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

    //function to return appropriate icons for each game store
    function parseStoreIcons(storeSlug) {
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

    //function to return color class based on game average rating
    function parseRatingColour(color) {
        if (color < 3) {
            return 'border-red-500 text-red-500'
        } else if (color >= 4) {
            return 'border-green-500 text-green-500'
        } else {
            return 'border-yellow-500 text-yellow-500'
        }
    }
    
    //function to store games user clicks to recently viewed section
    const parseRecents = (gameObject) => {

        //checking if game already exists in recents section
        let tempRecents = [...recents]
        if (tempRecents.some(recentGame => recentGame.id === gameObject.id)) {
            return null
        } else {

            //checking if limit for recents is not reached before adding game to recents (in the event that the limit is reached, the oldest game item is eliminated before the latest is added)
            if (recents.length < 10) {
                let tempArray = [...recents]
                const insert = (arr, index, newItem) => [
                    ...arr.slice(0, index),
                    newItem,
                    ...arr.slice(index)
                ]
                tempArray = insert(tempArray, 0, gameObject)
                setRecents(tempArray)
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
            }
        }
    }

    //async api call to fetch games for explore page
    const getData = async () => {
        //setting loading spinner to true while games are being fetched
        setSpinner(true)

        //calling fetch API and storing fetched games to state hook
        const searchFetch = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${currentPage}&page_size=40`)

        let searchResult = await searchFetch.json()
        let tempResults = searchResult.results
        tempResults = tempResults.map(result => {
            //adding extra field to all fetched API results before storing them into the state (libraryOptionsOpen controls the open and closes status of the tab which displays library folders)
            return { ...result, libraryOptionsOpen: false }
        })
        searchResult.results = tempResults

        setTest(searchResult)

        //setting loading spinner back to false to allow API response to be displayed
        setSpinner(false)
        
    }
    
    // function to return a selected game which a user has clicked
    const getItem = (id) => {
        const item = test.results.find(result => result.id === id)
        return item
    }

    //function to add a game to a library folder/section
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

    //function to toggle tab which displays all library sections/folders when "Add to library" button is clicked
    const toggleLibraryOptions = (id) => {
        const tempResults = { ...test }
        const index = tempResults.results.indexOf(getItem(id))
        const game = tempResults.results[index]

        game.libraryOptionsOpen = !game.libraryOptionsOpen
        setTest(tempResults)
    }

    //function to remove single game from the library
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

    //Sort logic for games on the explore page (selected paramenter determines the sort criteria) 
    const sortGames = (selected) => {
        const tempArray = { ...test }
        let tempResults = tempArray.results
        if (selected === 'relevance') {
            // getData()
            return null
        } else if (selected === "name") {
            tempResults = tempResults.sort((a, b) => (a[selected] > b[selected] ? 1 : -1))
            tempArray.results = tempResults
        } else {
            tempResults = tempResults.sort((a, b) => (b[selected] > a[selected] ? 1 : -1))
            tempArray.results = tempResults
        }
        setTest(tempArray)
    }

    
    //Search logic (returns API data asynchronously based on values entered by user) 
    const getSearchData = async () => {
        setSearchSpinner(true)
        const data = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${formData.searchString}`)
        let res = await data.json()
        setSearchResults(res)
        setSearchSpinner(false)
    }

    //function to fetch list of game genres from API
    const fetchGenres = async () => {

        const data = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            genres: res.results
        })
    }

    //function to fetch list of game developers from API
    const fetchDevelopers = async () => {

        const data = await fetch(`https://api.rawg.io/api/developers?key=${API_KEY}`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            developers: res.results
        })
    }

    //function to fetch list of game storess from API
    const fetchStores = async () => {

        const data = await fetch(`https://api.rawg.io/api/stores?key=${API_KEY}`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            stores: res.results
        })
    }

    //function to fetch list of game platforms from API
    const fetchPlatforms = async () => {

        const data = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        let res = await data.json()
        setCategoryList({
            ...categoryList,
            platforms: res.results
        })
    }

    //function to fetch list of game under each category (e.g. genres, developers, platforms or stores) from API
    const fetchGamesList = async (type, category) => {
        let data = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&${type}=${category}&page=${currentPage}`)
        let res = await data.json()
        setGamesList(res.results)
    }

    
    return (
        <GameContext.Provider value={{
            //exporting all state and functions from context
            test,

            //hooks to handle sidebar state
            sideBarOpen, setSideBarOpen,

            //hooks to handle route page number and pagination range
            currentPage, setCurrentPage, paginationRange,

            //hook for loading spinner
            spinner, 
            
            //hooks and state value for recents page
            recents, parseRecents, 

            //hooks and functions for library component
            addToLibrary, librarySections, toggleLibraryOptions, removeFromLibrary,

            //function handling sort logic
            sortGames,

            //search states
            onChange, searchResults, searchSpinner,

            //hooks for handling form data
            formData, setFormData,

            //genres
            categoryList, setCategoryList, 

            //functions to fetch respective categories
            fetchGenres, fetchDevelopers, fetchStores, fetchPlatforms,

            //hook and function for gamesList component
            gamesList, fetchGamesList,

            //
            pageType, setPageType,

            //functions to parse styles and icons
            parseStoreIcons, parsePlatformIcons, parseRatingColour,

            
        }}>
            {children}
        </GameContext.Provider>
    )
}

const GameConsumer = GameContext.Consumer

export { GameContext, GameProvider, GameConsumer }