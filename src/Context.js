import React, { useEffect, useState } from 'react'
import { FaAndroid, FaApple, FaAppStoreIos, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa';


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

    function parsePlatform(platform) {

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



    useEffect(() => {
        generatePageRange(currentPage, 30)
        // getData()
    }, [currentPage])


    // for (let i = 1, l = 20; i <= l; i++)
    //     console.log(`Selected page ${i}:`, pagination(i, l));



    const [test, setTest] = useState({
        "count": 698206,
        "next": "https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f&page=2&page_size=40",
        "previous": null,
        "results": [
            {
                "id": 3498,
                "slug": "grand-theft-auto-v",
                "name": "Grand Theft Auto V",
                "released": "2013-09-17",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                "rating": 4.48,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 3266,
                        "percent": 59.02
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1822,
                        "percent": 32.92
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 353,
                        "percent": 6.38
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 93,
                        "percent": 1.68
                    }
                ],
                "ratings_count": 5464,
                "reviews_text_count": 39,
                "added": 16898,
                "added_by_status": {
                    "yet": 417,
                    "owned": 9987,
                    "beaten": 4557,
                    "toplay": 486,
                    "dropped": 844,
                    "playing": 607
                },
                "metacritic": 97,
                "playtime": 71,
                "suggestions_count": 405,
                "updated": "2021-08-20T12:42:02",
                "user_game": null,
                "reviews_count": 5534,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 186,
                            "name": "Xbox Series S/X",
                            "slug": "xbox-series-x",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 412,
                            "image_background": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 187,
                            "name": "PlayStation 5",
                            "slug": "playstation5",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 474,
                            "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": {
                            "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
                            "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 290375,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 438095,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    },
                    {
                        "id": 290376,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 290377,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 290378,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8293,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2111,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 62349,
                        "name": "vr mod",
                        "slug": "vr-mod",
                        "language": "eng",
                        "games_count": 17,
                        "image_background": "https://media.rawg.io/media/games/645/64578c2a6daa30995692525172fd13ef.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 1827221,
                        "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
                    },
                    {
                        "id": 1827222,
                        "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
                    },
                    {
                        "id": 1827223,
                        "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
                    },
                    {
                        "id": 1827225,
                        "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
                    },
                    {
                        "id": 1827226,
                        "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
                    },
                    {
                        "id": 1827227,
                        "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
                    }
                ]
            },
            {
                "id": 3328,
                "slug": "the-witcher-3-wild-hunt",
                "name": "The Witcher 3: Wild Hunt",
                "released": "2015-05-18",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                "rating": 4.67,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 3987,
                        "percent": 77.93
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 800,
                        "percent": 15.64
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 207,
                        "percent": 4.05
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 122,
                        "percent": 2.38
                    }
                ],
                "ratings_count": 5043,
                "reviews_text_count": 51,
                "added": 15529,
                "added_by_status": {
                    "yet": 854,
                    "owned": 9032,
                    "beaten": 3598,
                    "toplay": 633,
                    "dropped": 671,
                    "playing": 741
                },
                "metacritic": 92,
                "playtime": 48,
                "suggestions_count": 674,
                "updated": "2022-01-02T10:49:58",
                "user_game": null,
                "reviews_count": 5116,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 186,
                            "name": "Xbox Series S/X",
                            "slug": "xbox-series-x",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 412,
                            "image_background": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 187,
                            "name": "PlayStation 5",
                            "slug": "playstation5",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 474,
                            "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 354780,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 3565,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 305376,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 312313,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 676022,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Nudity",
                        "slug": "nudity",
                        "language": "eng",
                        "games_count": 3488,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 336,
                        "name": "controller support",
                        "slug": "controller-support",
                        "language": "eng",
                        "games_count": 294,
                        "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 1994,
                        "image_background": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 2226,
                        "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 3840,
                        "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 6178,
                        "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 4728,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 30336,
                        "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
                    },
                    {
                        "id": 30337,
                        "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
                    },
                    {
                        "id": 30338,
                        "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
                    },
                    {
                        "id": 30339,
                        "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
                    },
                    {
                        "id": 30340,
                        "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
                    },
                    {
                        "id": 30342,
                        "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
                    }
                ]
            },
            {
                "id": 4200,
                "slug": "portal-2",
                "name": "Portal 2",
                "released": "2011-04-18",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
                "rating": 4.62,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 3203,
                        "percent": 70.5
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1124,
                        "percent": 24.74
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 123,
                        "percent": 2.71
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 93,
                        "percent": 2.05
                    }
                ],
                "ratings_count": 4504,
                "reviews_text_count": 26,
                "added": 14708,
                "added_by_status": {
                    "yet": 485,
                    "owned": 9111,
                    "beaten": 4279,
                    "toplay": 282,
                    "dropped": 432,
                    "playing": 119
                },
                "metacritic": 95,
                "playtime": 11,
                "suggestions_count": 557,
                "updated": "2020-08-03T02:17:38",
                "user_game": null,
                "reviews_count": 4543,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": null,
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": null,
                        "requirements_en": null,
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
                            "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2011-04-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 80852,
                        "image_background": "https://media.rawg.io/media/screenshots/6ac/6ac143af704c95c774af432785ff9762.jpeg"
                    }
                ],
                "stores": [
                    {
                        "id": 465889,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 13134,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 4526,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 33916,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7678,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8293,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 75,
                        "name": "Local Co-Op",
                        "slug": "local-co-op",
                        "language": "eng",
                        "games_count": 4340,
                        "image_background": "https://media.rawg.io/media/games/21b/21babfc41e2a6972290833d1b860f13e.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3989,
                        "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1176,
                        "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
                    },
                    {
                        "id": 25,
                        "name": "Space",
                        "slug": "space",
                        "language": "eng",
                        "games_count": 34368,
                        "image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1467,
                        "image_background": "https://media.rawg.io/media/games/192/1921ec949024a5fbd1e1c7008f54b5af.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1120,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 238,
                        "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
                    },
                    {
                        "id": 87,
                        "name": "Science",
                        "slug": "science",
                        "language": "eng",
                        "games_count": 1255,
                        "image_background": "https://media.rawg.io/media/games/4a1/4a1ee7cf3792722dcd11638e542405c3.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 2,
                    "name": "Everyone 10+",
                    "slug": "everyone-10-plus"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 99018,
                        "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
                    },
                    {
                        "id": 99019,
                        "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
                    },
                    {
                        "id": 99020,
                        "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
                    },
                    {
                        "id": 99021,
                        "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
                    },
                    {
                        "id": 99022,
                        "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
                    },
                    {
                        "id": 99023,
                        "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
                    }
                ]
            },
            {
                "id": 5286,
                "slug": "tomb-raider",
                "name": "Tomb Raider (2013)",
                "released": "2013-03-05",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
                "rating": 4.05,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1941,
                        "percent": 60.54
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 811,
                        "percent": 25.3
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 362,
                        "percent": 11.29
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 92,
                        "percent": 2.87
                    }
                ],
                "ratings_count": 3185,
                "reviews_text_count": 9,
                "added": 13232,
                "added_by_status": {
                    "yet": 518,
                    "owned": 8706,
                    "beaten": 3322,
                    "toplay": 199,
                    "dropped": 394,
                    "playing": 93
                },
                "metacritic": 86,
                "playtime": 11,
                "suggestions_count": 636,
                "updated": "2021-12-31T12:52:20",
                "user_game": null,
                "reviews_count": 3206,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "i486-100, 8 Мб",
                            "recommended": "Pentium 166, 16 Мб"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": {
                            "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 713685,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    },
                    {
                        "id": 33824,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 13151,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 5640,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 218233,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    },
                    {
                        "id": 79036,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7678,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 74,
                        "name": "Retro",
                        "slug": "retro",
                        "language": "eng",
                        "games_count": 29086,
                        "image_background": "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 10233,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 797,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 269,
                        "name": "Quick-Time Events",
                        "slug": "quick-time-events",
                        "language": "eng",
                        "games_count": 232,
                        "image_background": "https://media.rawg.io/media/games/643/6431f15213a854efd273943f2cf6a925.jpg"
                    },
                    {
                        "id": 306,
                        "name": "Lara Croft",
                        "slug": "lara-croft",
                        "language": "eng",
                        "games_count": 14,
                        "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
                    },
                    {
                        "id": 126,
                        "name": "Dinosaurs",
                        "slug": "dinosaurs",
                        "language": "eng",
                        "games_count": 1373,
                        "image_background": "https://media.rawg.io/media/screenshots/c0e/c0eedcbffda05d872e98f32f9aac12fc.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 99160,
                        "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
                    },
                    {
                        "id": 99161,
                        "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
                    },
                    {
                        "id": 99162,
                        "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
                    },
                    {
                        "id": 99163,
                        "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
                    },
                    {
                        "id": 99164,
                        "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
                    },
                    {
                        "id": 99165,
                        "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
                    }
                ]
            },
            {
                "id": 5679,
                "slug": "the-elder-scrolls-v-skyrim",
                "name": "The Elder Scrolls V: Skyrim",
                "released": "2011-11-11",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
                "rating": 4.42,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 2185,
                        "percent": 57.26
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1213,
                        "percent": 31.79
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 341,
                        "percent": 8.94
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 77,
                        "percent": 2.02
                    }
                ],
                "ratings_count": 3785,
                "reviews_text_count": 22,
                "added": 12863,
                "added_by_status": {
                    "yet": 410,
                    "owned": 7875,
                    "beaten": 2922,
                    "toplay": 311,
                    "dropped": 1018,
                    "playing": 327
                },
                "metacritic": 94,
                "playtime": 46,
                "suggestions_count": 605,
                "updated": "2020-07-06T04:26:04",
                "user_game": null,
                "reviews_count": 3816,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
                            "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 6037,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 15144,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 32919,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 49792,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1176,
                        "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 468,
                        "name": "role-playing",
                        "slug": "role-playing",
                        "language": "eng",
                        "games_count": 1329,
                        "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
                    },
                    {
                        "id": 121,
                        "name": "Character Customization",
                        "slug": "character-customization",
                        "language": "eng",
                        "games_count": 2256,
                        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 2226,
                        "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 3840,
                        "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 6178,
                        "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
                    },
                    {
                        "id": 205,
                        "name": "Lore-Rich",
                        "slug": "lore-rich",
                        "language": "eng",
                        "games_count": 405,
                        "image_background": "https://media.rawg.io/media/screenshots/49a/49a3868cd3d21f99943fd08fa68db4c7.jpg"
                    },
                    {
                        "id": 215,
                        "name": "Dragons",
                        "slug": "dragons",
                        "language": "eng",
                        "games_count": 2065,
                        "image_background": "https://media.rawg.io/media/screenshots/535/53584aa10ed2619b73fce62e77a6ef57.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    },
                    {
                        "id": 118307,
                        "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
                    },
                    {
                        "id": 118308,
                        "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
                    },
                    {
                        "id": 118309,
                        "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
                    },
                    {
                        "id": 118310,
                        "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
                    },
                    {
                        "id": 118311,
                        "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
                    },
                    {
                        "id": 118312,
                        "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
                    }
                ]
            },
            {
                "id": 4291,
                "slug": "counter-strike-global-offensive",
                "name": "Counter-Strike: Global Offensive",
                "released": "2012-08-21",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
                "rating": 3.57,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1280,
                        "percent": 47.22
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 720,
                        "percent": 26.56
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 423,
                        "percent": 15.6
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 288,
                        "percent": 10.62
                    }
                ],
                "ratings_count": 2687,
                "reviews_text_count": 18,
                "added": 12609,
                "added_by_status": {
                    "yet": 205,
                    "owned": 9664,
                    "beaten": 718,
                    "toplay": 60,
                    "dropped": 1438,
                    "playing": 524
                },
                "metacritic": 81,
                "playtime": 63,
                "suggestions_count": 598,
                "updated": "2020-08-07T06:18:15",
                "user_game": null,
                "reviews_count": 2711,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2012-08-21",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
                            "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2012-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2012-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4619,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 11489,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 49169,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2985,
                        "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3989,
                        "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1176,
                        "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 5168,
                        "image_background": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg"
                    },
                    {
                        "id": 70,
                        "name": "War",
                        "slug": "war",
                        "language": "eng",
                        "games_count": 7498,
                        "image_background": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1619,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 941,
                        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 131,
                        "name": "Fast-Paced",
                        "slug": "fast-paced",
                        "language": "eng",
                        "games_count": 8651,
                        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
                    },
                    {
                        "id": 40856,
                        "name": "Valve Anti-Cheat enabled",
                        "slug": "valve-anti-cheat-enabled",
                        "language": "eng",
                        "games_count": 104,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 81,
                        "name": "Military",
                        "slug": "military",
                        "language": "eng",
                        "games_count": 912,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 170,
                        "name": "Competitive",
                        "slug": "competitive",
                        "language": "eng",
                        "games_count": 872,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 77,
                        "name": "Realistic",
                        "slug": "realistic",
                        "language": "eng",
                        "games_count": 2267,
                        "image_background": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg"
                    },
                    {
                        "id": 73,
                        "name": "e-sports",
                        "slug": "e-sports",
                        "language": "eng",
                        "games_count": 80,
                        "image_background": "https://media.rawg.io/media/screenshots/316/31651e0ec39c6718c5136ab624431e7f.jpg"
                    },
                    {
                        "id": 245,
                        "name": "Trading",
                        "slug": "trading",
                        "language": "eng",
                        "games_count": 805,
                        "image_background": "https://media.rawg.io/media/screenshots/0d7/0d749b669f8b97b576deb2cd109dc00c_hRr8ZwH.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 81644,
                        "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
                    },
                    {
                        "id": 81645,
                        "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
                    },
                    {
                        "id": 81646,
                        "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
                    },
                    {
                        "id": 81647,
                        "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
                    },
                    {
                        "id": 81648,
                        "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
                    },
                    {
                        "id": 81649,
                        "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
                    }
                ]
            },
            {
                "id": 12020,
                "slug": "left-4-dead-2",
                "name": "Left 4 Dead 2",
                "released": "2009-11-17",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
                "rating": 4.09,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1405,
                        "percent": 53.32
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 830,
                        "percent": 31.5
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 307,
                        "percent": 11.65
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 93,
                        "percent": 3.53
                    }
                ],
                "ratings_count": 2621,
                "reviews_text_count": 8,
                "added": 12568,
                "added_by_status": {
                    "yet": 315,
                    "owned": 9262,
                    "beaten": 1953,
                    "toplay": 77,
                    "dropped": 842,
                    "playing": 119
                },
                "metacritic": 89,
                "playtime": 9,
                "suggestions_count": 595,
                "updated": "2021-11-24T08:44:34",
                "user_game": null,
                "reviews_count": 2635,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2009-11-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2009-11-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2009-11-17",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
                            "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2009-11-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 13208,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 34000,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5728,
                        "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
                    },
                    {
                        "id": 75,
                        "name": "Local Co-Op",
                        "slug": "local-co-op",
                        "language": "eng",
                        "games_count": 4340,
                        "image_background": "https://media.rawg.io/media/games/21b/21babfc41e2a6972290833d1b860f13e.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2985,
                        "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3989,
                        "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1176,
                        "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 8139,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 2447,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1120,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Replay Value",
                        "slug": "replay-value",
                        "language": "eng",
                        "games_count": 1047,
                        "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
                    },
                    {
                        "id": 17,
                        "name": "Survival Horror",
                        "slug": "survival-horror",
                        "language": "eng",
                        "games_count": 5718,
                        "image_background": "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 941,
                        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 40856,
                        "name": "Valve Anti-Cheat enabled",
                        "slug": "valve-anti-cheat-enabled",
                        "language": "eng",
                        "games_count": 104,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 238,
                        "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
                    },
                    {
                        "id": 40839,
                        "name": "Includes Source SDK",
                        "slug": "includes-source-sdk",
                        "language": "eng",
                        "games_count": 55,
                        "image_background": "https://media.rawg.io/media/screenshots/4e5/4e5e71d53468bcf5d6686c46fec95d78.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 99748,
                        "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
                    },
                    {
                        "id": 99749,
                        "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
                    },
                    {
                        "id": 99750,
                        "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
                    },
                    {
                        "id": 99751,
                        "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
                    },
                    {
                        "id": 99752,
                        "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
                    },
                    {
                        "id": 99753,
                        "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
                    }
                ]
            },
            {
                "id": 13536,
                "slug": "portal",
                "name": "Portal",
                "released": "2007-10-09",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
                "rating": 4.51,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 2321,
                        "percent": 61.3
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1237,
                        "percent": 32.67
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 153,
                        "percent": 4.04
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 75,
                        "percent": 1.98
                    }
                ],
                "ratings_count": 3757,
                "reviews_text_count": 20,
                "added": 12443,
                "added_by_status": {
                    "yet": 337,
                    "owned": 7725,
                    "beaten": 3848,
                    "toplay": 186,
                    "dropped": 283,
                    "playing": 64
                },
                "metacritic": 90,
                "playtime": 4,
                "suggestions_count": 290,
                "updated": "2021-11-24T09:14:31",
                "user_game": null,
                "reviews_count": 3786,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": {
                            "minimum": "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
                            "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 45406,
                            "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": {
                            "minimum": "4.4 and up"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 80852,
                        "image_background": "https://media.rawg.io/media/screenshots/6ac/6ac143af704c95c774af432785ff9762.jpeg"
                    }
                ],
                "stores": [
                    {
                        "id": 14890,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 40973,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7678,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8293,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1467,
                        "image_background": "https://media.rawg.io/media/games/192/1921ec949024a5fbd1e1c7008f54b5af.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 38787,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1120,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 114,
                        "name": "Physics",
                        "slug": "physics",
                        "language": "eng",
                        "games_count": 15035,
                        "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1936,
                        "image_background": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 238,
                        "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
                    },
                    {
                        "id": 40839,
                        "name": "Includes Source SDK",
                        "slug": "includes-source-sdk",
                        "language": "eng",
                        "games_count": 55,
                        "image_background": "https://media.rawg.io/media/screenshots/4e5/4e5e71d53468bcf5d6686c46fec95d78.jpg"
                    },
                    {
                        "id": 87,
                        "name": "Science",
                        "slug": "science",
                        "language": "eng",
                        "games_count": 1255,
                        "image_background": "https://media.rawg.io/media/games/4a1/4a1ee7cf3792722dcd11638e542405c3.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                    },
                    {
                        "id": 115793,
                        "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
                    },
                    {
                        "id": 115794,
                        "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
                    },
                    {
                        "id": 115795,
                        "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
                    },
                    {
                        "id": 115796,
                        "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
                    },
                    {
                        "id": 115797,
                        "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
                    },
                    {
                        "id": 115798,
                        "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
                    }
                ]
            },
            {
                "id": 4062,
                "slug": "bioshock-infinite",
                "name": "BioShock Infinite",
                "released": "2013-03-26",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
                "rating": 4.39,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1872,
                        "percent": 55.34
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1130,
                        "percent": 33.4
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 296,
                        "percent": 8.75
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 85,
                        "percent": 2.51
                    }
                ],
                "ratings_count": 3352,
                "reviews_text_count": 20,
                "added": 12302,
                "added_by_status": {
                    "yet": 650,
                    "owned": 7422,
                    "beaten": 3490,
                    "toplay": 298,
                    "dropped": 363,
                    "playing": 79
                },
                "metacritic": 94,
                "playtime": 12,
                "suggestions_count": 611,
                "updated": "2020-08-03T02:19:32",
                "user_game": null,
                "reviews_count": 3383,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
                            "recommended": "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 71727,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    },
                    {
                        "id": 440409,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 461035,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 4382,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 13084,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 33810,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 115,
                        "name": "Controller",
                        "slug": "controller",
                        "language": "eng",
                        "games_count": 6881,
                        "image_background": "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1357,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 154,
                        "name": "Steampunk",
                        "slug": "steampunk",
                        "language": "eng",
                        "games_count": 883,
                        "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
                    },
                    {
                        "id": 305,
                        "name": "Linear",
                        "slug": "linear",
                        "language": "eng",
                        "games_count": 2058,
                        "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
                    },
                    {
                        "id": 208,
                        "name": "Alternate History",
                        "slug": "alternate-history",
                        "language": "eng",
                        "games_count": 1140,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 317,
                        "name": "Time Travel",
                        "slug": "time-travel",
                        "language": "eng",
                        "games_count": 1342,
                        "image_background": "https://media.rawg.io/media/screenshots/cd1/cd1dedeafe91fa1d9034dba0c3dcb1f7.jpg"
                    },
                    {
                        "id": 287,
                        "name": "Political",
                        "slug": "political",
                        "language": "eng",
                        "games_count": 403,
                        "image_background": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 98549,
                        "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
                    },
                    {
                        "id": 98550,
                        "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
                    },
                    {
                        "id": 98551,
                        "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
                    },
                    {
                        "id": 98552,
                        "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
                    },
                    {
                        "id": 98553,
                        "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
                    },
                    {
                        "id": 98554,
                        "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
                    }
                ]
            },
            {
                "id": 3439,
                "slug": "life-is-strange-episode-1-2",
                "name": "Life is Strange",
                "released": "2015-01-29",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
                "rating": 4.11,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1341,
                        "percent": 43.74
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1113,
                        "percent": 36.3
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 414,
                        "percent": 13.5
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 198,
                        "percent": 6.46
                    }
                ],
                "ratings_count": 3035,
                "reviews_text_count": 21,
                "added": 12263,
                "added_by_status": {
                    "yet": 653,
                    "owned": 7940,
                    "beaten": 2755,
                    "toplay": 280,
                    "dropped": 498,
                    "playing": 137
                },
                "metacritic": 83,
                "playtime": 7,
                "suggestions_count": 534,
                "updated": "2020-06-29T10:40:03",
                "user_game": null,
                "reviews_count": 3066,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 73307,
                            "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": {
                            "minimum": "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 45406,
                            "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": {
                            "minimum": "6.0 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 451321,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 3702,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 35603,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 35602,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 217695,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    },
                    {
                        "id": 245823,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 44714,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7678,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 141,
                        "name": "Point & Click",
                        "slug": "point-click",
                        "language": "eng",
                        "games_count": 9030,
                        "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 38787,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                        "id": 117,
                        "name": "Mystery",
                        "slug": "mystery",
                        "language": "eng",
                        "games_count": 8964,
                        "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 1994,
                        "image_background": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 1323,
                        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
                    },
                    {
                        "id": 91,
                        "name": "Walking Simulator",
                        "slug": "walking-simulator",
                        "language": "eng",
                        "games_count": 4946,
                        "image_background": "https://media.rawg.io/media/games/54a/54a3e4c617217848dc43c4de9989fe37.jpg"
                    },
                    {
                        "id": 406,
                        "name": "Story",
                        "slug": "story",
                        "language": "eng",
                        "games_count": 9875,
                        "image_background": "https://media.rawg.io/media/games/289/289951d92239d05f2a663d632aa3888a.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 4728,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 232,
                        "name": "Episodic",
                        "slug": "episodic",
                        "language": "eng",
                        "games_count": 400,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 317,
                        "name": "Time Travel",
                        "slug": "time-travel",
                        "language": "eng",
                        "games_count": 1342,
                        "image_background": "https://media.rawg.io/media/screenshots/cd1/cd1dedeafe91fa1d9034dba0c3dcb1f7.jpg"
                    },
                    {
                        "id": 295,
                        "name": "Soundtrack",
                        "slug": "soundtrack",
                        "language": "eng",
                        "games_count": 2435,
                        "image_background": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg"
                    },
                    {
                        "id": 302,
                        "name": "Time Manipulation",
                        "slug": "time-manipulation",
                        "language": "eng",
                        "games_count": 259,
                        "image_background": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg"
                    },
                    {
                        "id": 992,
                        "name": "student",
                        "slug": "student",
                        "language": "eng",
                        "games_count": 1266,
                        "image_background": "https://media.rawg.io/media/screenshots/a40/a40fa5436dda847cde5e108c21607ff4.jpg"
                    },
                    {
                        "id": 2682,
                        "name": "strange",
                        "slug": "strange",
                        "language": "eng",
                        "games_count": 318,
                        "image_background": "https://media.rawg.io/media/screenshots/cf0/cf0475a39086b6bdc8fb804271fd6a56.jpg"
                    },
                    {
                        "id": 3197,
                        "name": "photography",
                        "slug": "photography",
                        "language": "eng",
                        "games_count": 169,
                        "image_background": "https://media.rawg.io/media/screenshots/251/251e97dcc352b3d5a943c6d8fdb3bb0d.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 1826487,
                        "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
                    },
                    {
                        "id": 1826488,
                        "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
                    },
                    {
                        "id": 1826489,
                        "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
                    },
                    {
                        "id": 1826490,
                        "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
                    },
                    {
                        "id": 1826491,
                        "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
                    },
                    {
                        "id": 1826492,
                        "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
                    }
                ]
            },
            {
                "id": 802,
                "slug": "borderlands-2",
                "name": "Borderlands 2",
                "released": "2012-09-18",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
                "rating": 4.04,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1287,
                        "percent": 47.7
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 859,
                        "percent": 31.84
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 449,
                        "percent": 16.64
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 103,
                        "percent": 3.82
                    }
                ],
                "ratings_count": 2682,
                "reviews_text_count": 12,
                "added": 12254,
                "added_by_status": {
                    "yet": 484,
                    "owned": 8563,
                    "beaten": 1857,
                    "toplay": 155,
                    "dropped": 994,
                    "playing": 201
                },
                "metacritic": 89,
                "playtime": 10,
                "suggestions_count": 666,
                "updated": "2020-08-07T02:30:06",
                "user_game": null,
                "reviews_count": 2698,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
                            "recommended": "Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4000,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 213037,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    },
                    {
                        "id": 11088,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 34042,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 71617,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    },
                    {
                        "id": 817,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8293,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3112,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 1323,
                        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1936,
                        "image_background": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg"
                    },
                    {
                        "id": 98,
                        "name": "Loot",
                        "slug": "loot",
                        "language": "eng",
                        "games_count": 1488,
                        "image_background": "https://media.rawg.io/media/screenshots/91c/91c1591ddd37ca1b8c1d3f5cd2fcde72.jpg"
                    },
                    {
                        "id": 166,
                        "name": "Stylized",
                        "slug": "stylized",
                        "language": "eng",
                        "games_count": 2483,
                        "image_background": "https://media.rawg.io/media/games/8e7/8e79a8e6bd4e71c8ce0006544a17aaf2.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7041,
                        "image": "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg"
                    },
                    {
                        "id": 7062,
                        "image": "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg"
                    },
                    {
                        "id": 7070,
                        "image": "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg"
                    },
                    {
                        "id": 7072,
                        "image": "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg"
                    },
                    {
                        "id": 7081,
                        "image": "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg"
                    },
                    {
                        "id": 7088,
                        "image": "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg"
                    }
                ]
            },
            {
                "id": 28,
                "slug": "red-dead-redemption-2",
                "name": "Red Dead Redemption 2",
                "released": "2018-10-26",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
                "rating": 4.58,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 2837,
                        "percent": 72.82
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 724,
                        "percent": 18.58
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 220,
                        "percent": 5.65
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 115,
                        "percent": 2.95
                    }
                ],
                "ratings_count": 3820,
                "reviews_text_count": 60,
                "added": 11633,
                "added_by_status": {
                    "yet": 702,
                    "owned": 6059,
                    "beaten": 2251,
                    "toplay": 1381,
                    "dropped": 450,
                    "playing": 790
                },
                "metacritic": 96,
                "playtime": 21,
                "suggestions_count": 616,
                "updated": "2020-11-23T02:33:54",
                "user_game": null,
                "reviews_count": 3896,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2018-10-26",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2018-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2018-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 257732,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 374316,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    },
                    {
                        "id": 384218,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 48782,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 34,
                        "name": "Violent",
                        "slug": "violent",
                        "language": "eng",
                        "games_count": 5068,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 5168,
                        "image_background": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1619,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 89,
                        "name": "Historical",
                        "slug": "historical",
                        "language": "eng",
                        "games_count": 1807,
                        "image_background": "https://media.rawg.io/media/games/193/19390fa5e75e9048b22c9a736cf9992f.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 797,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 77,
                        "name": "Realistic",
                        "slug": "realistic",
                        "language": "eng",
                        "games_count": 2267,
                        "image_background": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2111,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 478,
                        "name": "3rd-Person Perspective",
                        "slug": "3rd-person-perspective",
                        "language": "eng",
                        "games_count": 86,
                        "image_background": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg"
                    },
                    {
                        "id": 270,
                        "name": "Blood",
                        "slug": "blood",
                        "language": "eng",
                        "games_count": 1650,
                        "image_background": "https://media.rawg.io/media/screenshots/e0a/e0abaefbcc99ef995be57d857806f2d2.jpeg"
                    },
                    {
                        "id": 45878,
                        "name": "Online PvP",
                        "slug": "online-pvp",
                        "language": "eng",
                        "games_count": 1970,
                        "image_background": "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg"
                    },
                    {
                        "id": 78,
                        "name": "America",
                        "slug": "america",
                        "language": "eng",
                        "games_count": 295,
                        "image_background": "https://media.rawg.io/media/screenshots/794/7943eb38a763c014c84ddae7378b865c.jpg"
                    },
                    {
                        "id": 578,
                        "name": "Masterpiece",
                        "slug": "masterpiece",
                        "language": "eng",
                        "games_count": 216,
                        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
                    },
                    {
                        "id": 577,
                        "name": "Beautiful",
                        "slug": "beautiful",
                        "language": "eng",
                        "games_count": 1727,
                        "image_background": "https://media.rawg.io/media/games/22a/22a3b2ddb5b344b1081cc28768f8ac84.jpg"
                    },
                    {
                        "id": 181,
                        "name": "Hunting",
                        "slug": "hunting",
                        "language": "eng",
                        "games_count": 717,
                        "image_background": "https://media.rawg.io/media/screenshots/c01/c01c5d03b66381ebc97d30580627761e.jpg"
                    },
                    {
                        "id": 152,
                        "name": "Western",
                        "slug": "western",
                        "language": "eng",
                        "games_count": 1003,
                        "image_background": "https://media.rawg.io/media/games/f43/f43c9742f8e8300e5a4d22ffa2d7ac08.jpg"
                    },
                    {
                        "id": 5452,
                        "name": "3rd-person",
                        "slug": "3rd-person",
                        "language": "eng",
                        "games_count": 85,
                        "image_background": "https://media.rawg.io/media/screenshots/867/867dfc639f8018d403401973ff1ae88d.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 778173,
                        "image": "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg"
                    },
                    {
                        "id": 778174,
                        "image": "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg"
                    },
                    {
                        "id": 778175,
                        "image": "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg"
                    },
                    {
                        "id": 778176,
                        "image": "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg"
                    },
                    {
                        "id": 778177,
                        "image": "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg"
                    },
                    {
                        "id": 778178,
                        "image": "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
                    }
                ]
            },
            {
                "id": 13537,
                "slug": "half-life-2",
                "name": "Half-Life 2",
                "released": "2004-11-16",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
                "rating": 4.49,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1991,
                        "percent": 63.55
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 869,
                        "percent": 27.74
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 187,
                        "percent": 5.97
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 86,
                        "percent": 2.74
                    }
                ],
                "ratings_count": 3120,
                "reviews_text_count": 11,
                "added": 11251,
                "added_by_status": {
                    "yet": 522,
                    "owned": 7123,
                    "beaten": 2903,
                    "toplay": 228,
                    "dropped": 398,
                    "playing": 77
                },
                "metacritic": 96,
                "playtime": 7,
                "suggestions_count": 564,
                "updated": "2019-09-17T15:58:20",
                "user_game": null,
                "reviews_count": 3133,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": {
                            "minimum": "Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет",
                            "recommended": "Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 80,
                            "name": "Xbox",
                            "slug": "xbox-old",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 704,
                            "image_background": "https://media.rawg.io/media/games/bc7/bc77b1eb8e35df2d90b952bac5342c75.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 45406,
                            "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": {
                            "minimum": "4.4 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 14891,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 41441,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 8139,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1120,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 114,
                        "name": "Physics",
                        "slug": "physics",
                        "language": "eng",
                        "games_count": 15035,
                        "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
                    },
                    {
                        "id": 172,
                        "name": "Aliens",
                        "slug": "aliens",
                        "language": "eng",
                        "games_count": 5206,
                        "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1357,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 40839,
                        "name": "Includes Source SDK",
                        "slug": "includes-source-sdk",
                        "language": "eng",
                        "games_count": 55,
                        "image_background": "https://media.rawg.io/media/screenshots/4e5/4e5e71d53468bcf5d6686c46fec95d78.jpg"
                    },
                    {
                        "id": 319,
                        "name": "Silent Protagonist",
                        "slug": "silent-protagonist",
                        "language": "eng",
                        "games_count": 67,
                        "image_background": "https://media.rawg.io/media/screenshots/5ce/5ce17393fdcd1a4356187e388fa21723.jpeg"
                    },
                    {
                        "id": 62349,
                        "name": "vr mod",
                        "slug": "vr-mod",
                        "language": "eng",
                        "games_count": 17,
                        "image_background": "https://media.rawg.io/media/games/645/64578c2a6daa30995692525172fd13ef.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 115804,
                        "image": "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg"
                    },
                    {
                        "id": 115805,
                        "image": "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg"
                    },
                    {
                        "id": 115806,
                        "image": "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg"
                    },
                    {
                        "id": 115807,
                        "image": "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg"
                    },
                    {
                        "id": 115808,
                        "image": "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg"
                    },
                    {
                        "id": 115809,
                        "image": "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg"
                    }
                ]
            },
            {
                "id": 4286,
                "slug": "bioshock",
                "name": "BioShock",
                "released": "2007-08-21",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
                "rating": 4.38,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1497,
                        "percent": 53.71
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1013,
                        "percent": 36.35
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 191,
                        "percent": 6.85
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 86,
                        "percent": 3.09
                    }
                ],
                "ratings_count": 2755,
                "reviews_text_count": 21,
                "added": 11240,
                "added_by_status": {
                    "yet": 503,
                    "owned": 7215,
                    "beaten": 2605,
                    "toplay": 250,
                    "dropped": 564,
                    "playing": 103
                },
                "metacritic": 96,
                "playtime": 3,
                "suggestions_count": 658,
                "updated": "2022-02-11T13:42:23",
                "user_game": null,
                "reviews_count": 2787,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": {
                            "minimum": "<h2 class=\"bb_tag\"><strong>Minimum: </strong></h2><ul class=\"bb_ul\"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>",
                            "recommended": "<h2 class=\"bb_tag\"><strong>Recommended: </strong></h2><ul class=\"bb_ul\"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение",
                            "recommended": "Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 73307,
                            "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4614,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 79531,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    },
                    {
                        "id": 440407,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 20580,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 33844,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1357,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 154,
                        "name": "Steampunk",
                        "slug": "steampunk",
                        "language": "eng",
                        "games_count": 883,
                        "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
                    },
                    {
                        "id": 208,
                        "name": "Alternate History",
                        "slug": "alternate-history",
                        "language": "eng",
                        "games_count": 1140,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 287,
                        "name": "Political",
                        "slug": "political",
                        "language": "eng",
                        "games_count": 403,
                        "image_background": "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg"
                    },
                    {
                        "id": 250,
                        "name": "Underwater",
                        "slug": "underwater",
                        "language": "eng",
                        "games_count": 1602,
                        "image_background": "https://media.rawg.io/media/screenshots/75c/75c109a3b66c84787f137d948292c44a_DIwNRKi.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 170993,
                        "image": "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg"
                    },
                    {
                        "id": 170994,
                        "image": "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg"
                    },
                    {
                        "id": 170995,
                        "image": "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg"
                    },
                    {
                        "id": 170996,
                        "image": "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg"
                    },
                    {
                        "id": 170997,
                        "image": "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg"
                    },
                    {
                        "id": 170998,
                        "image": "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg"
                    }
                ]
            },
            {
                "id": 1030,
                "slug": "limbo",
                "name": "Limbo",
                "released": "2010-07-21",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
                "rating": 4.17,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1435,
                        "percent": 52.14
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 975,
                        "percent": 35.43
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 259,
                        "percent": 9.41
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 83,
                        "percent": 3.02
                    }
                ],
                "ratings_count": 2720,
                "reviews_text_count": 21,
                "added": 11046,
                "added_by_status": {
                    "yet": 465,
                    "owned": 7099,
                    "beaten": 2616,
                    "toplay": 236,
                    "dropped": 546,
                    "playing": 84
                },
                "metacritic": 88,
                "playtime": 3,
                "suggestions_count": 185,
                "updated": "2021-08-13T19:30:26",
                "user_game": null,
                "reviews_count": 2752,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 19,
                            "name": "PS Vita",
                            "slug": "ps-vita",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 1946,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 45406,
                            "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "4.4 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 73307,
                            "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
                            "recommended": "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 51,
                        "name": "Indie",
                        "slug": "indie",
                        "games_count": 42945,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 80852,
                        "image_background": "https://media.rawg.io/media/screenshots/6ac/6ac143af704c95c774af432785ff9762.jpeg"
                    },
                    {
                        "id": 83,
                        "name": "Platformer",
                        "slug": "platformer",
                        "games_count": 81187,
                        "image_background": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 1054,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    },
                    {
                        "id": 3679,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 7493,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 10311,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 26852,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 33137,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 49142,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 40035,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    },
                    {
                        "id": 335541,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 45,
                        "name": "2D",
                        "slug": "2d",
                        "language": "eng",
                        "games_count": 150641,
                        "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 10359,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 115,
                        "name": "Controller",
                        "slug": "controller",
                        "language": "eng",
                        "games_count": 6881,
                        "image_background": "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 336,
                        "name": "controller support",
                        "slug": "controller-support",
                        "language": "eng",
                        "games_count": 294,
                        "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 38787,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                        "id": 113,
                        "name": "Side Scroller",
                        "slug": "side-scroller",
                        "language": "eng",
                        "games_count": 7274,
                        "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
                    },
                    {
                        "id": 114,
                        "name": "Physics",
                        "slug": "physics",
                        "language": "eng",
                        "games_count": 15035,
                        "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 797,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 83,
                        "name": "Puzzle-Platformer",
                        "slug": "puzzle-platformer",
                        "language": "eng",
                        "games_count": 8355,
                        "image_background": "https://media.rawg.io/media/screenshots/2d9/2d9f74addd8f5b5f83459c2cb700aaf4.jpg"
                    },
                    {
                        "id": 46,
                        "name": "Surreal",
                        "slug": "surreal",
                        "language": "eng",
                        "games_count": 3517,
                        "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
                    },
                    {
                        "id": 112,
                        "name": "Minimalist",
                        "slug": "minimalist",
                        "language": "eng",
                        "games_count": 10934,
                        "image_background": "https://media.rawg.io/media/screenshots/d12/d120394357e553b88f5dedf5fe79210c.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                        "id": 30985,
                        "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
                    },
                    {
                        "id": 30986,
                        "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
                    },
                    {
                        "id": 30987,
                        "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
                    },
                    {
                        "id": 30988,
                        "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
                    },
                    {
                        "id": 30989,
                        "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
                    },
                    {
                        "id": 30991,
                        "image": "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
                    }
                ]
            },
            {
                "id": 2454,
                "slug": "doom",
                "name": "DOOM (2016)",
                "released": "2016-05-13",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
                "rating": 4.39,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1568,
                        "percent": 52.74
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1126,
                        "percent": 37.87
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 216,
                        "percent": 7.27
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 63,
                        "percent": 2.12
                    }
                ],
                "ratings_count": 2939,
                "reviews_text_count": 25,
                "added": 10647,
                "added_by_status": {
                    "yet": 463,
                    "owned": 6692,
                    "beaten": 2263,
                    "toplay": 400,
                    "dropped": 551,
                    "playing": 278
                },
                "metacritic": 85,
                "playtime": 11,
                "suggestions_count": 644,
                "updated": "2021-10-31T22:57:16",
                "user_game": null,
                "reviews_count": 2973,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 650<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GTX 770<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "i386-33, 4 Мб",
                            "recommended": "i486-40, 8 Мб"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 355582,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 2571,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 38659,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 8223,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 10359,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 8139,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 1323,
                        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
                    },
                    {
                        "id": 131,
                        "name": "Fast-Paced",
                        "slug": "fast-paced",
                        "language": "eng",
                        "games_count": 8651,
                        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
                    },
                    {
                        "id": 271,
                        "name": "Remake",
                        "slug": "remake",
                        "language": "eng",
                        "games_count": 1376,
                        "image_background": "https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg"
                    },
                    {
                        "id": 270,
                        "name": "Blood",
                        "slug": "blood",
                        "language": "eng",
                        "games_count": 1650,
                        "image_background": "https://media.rawg.io/media/screenshots/e0a/e0abaefbcc99ef995be57d857806f2d2.jpeg"
                    },
                    {
                        "id": 187,
                        "name": "Demons",
                        "slug": "demons",
                        "language": "eng",
                        "games_count": 1350,
                        "image_background": "https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 22393,
                        "image": "https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg"
                    },
                    {
                        "id": 22394,
                        "image": "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg"
                    },
                    {
                        "id": 22398,
                        "image": "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg"
                    },
                    {
                        "id": 22400,
                        "image": "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg"
                    },
                    {
                        "id": 22402,
                        "image": "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg"
                    },
                    {
                        "id": 22404,
                        "image": "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg"
                    }
                ]
            },
            {
                "id": 3070,
                "slug": "fallout-4",
                "name": "Fallout 4",
                "released": "2015-11-09",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
                "rating": 3.78,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1305,
                        "percent": 47.73
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 728,
                        "percent": 26.63
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 557,
                        "percent": 20.37
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 144,
                        "percent": 5.27
                    }
                ],
                "ratings_count": 2709,
                "reviews_text_count": 17,
                "added": 10495,
                "added_by_status": {
                    "yet": 492,
                    "owned": 6614,
                    "beaten": 1765,
                    "toplay": 309,
                    "dropped": 1050,
                    "playing": 265
                },
                "metacritic": 84,
                "playtime": 43,
                "suggestions_count": 443,
                "updated": "2020-07-06T04:52:40",
                "user_game": null,
                "reviews_count": 2734,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2015-11-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2015-11-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2015-11-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 3252,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 9047,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 13248,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5728,
                        "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 2447,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 27994,
                        "image": "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg"
                    },
                    {
                        "id": 27996,
                        "image": "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg"
                    },
                    {
                        "id": 28000,
                        "image": "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg"
                    },
                    {
                        "id": 28002,
                        "image": "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg"
                    },
                    {
                        "id": 28004,
                        "image": "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg"
                    },
                    {
                        "id": 28006,
                        "image": "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg"
                    }
                ]
            },
            {
                "id": 32,
                "slug": "destiny-2",
                "name": "Destiny 2",
                "released": "2017-09-06",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
                "rating": 3.58,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 994,
                        "percent": 45.89
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 688,
                        "percent": 31.76
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 305,
                        "percent": 14.08
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 179,
                        "percent": 8.26
                    }
                ],
                "ratings_count": 2141,
                "reviews_text_count": 19,
                "added": 10358,
                "added_by_status": {
                    "yet": 344,
                    "owned": 7733,
                    "beaten": 654,
                    "toplay": 133,
                    "dropped": 1119,
                    "playing": 375
                },
                "metacritic": 82,
                "playtime": 5,
                "suggestions_count": 1202,
                "updated": "2021-08-10T12:37:08",
                "user_game": null,
                "reviews_count": 2166,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2017-09-06",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2017-09-06",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2017-09-06",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 171,
                            "name": "Web",
                            "slug": "web",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 195162,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        },
                        "released_at": "2017-09-06",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 186,
                            "name": "Xbox Series S/X",
                            "slug": "xbox-series-x",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 412,
                            "image_background": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
                        },
                        "released_at": "2017-09-06",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 187,
                            "name": "PlayStation 5",
                            "slug": "playstation5",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 474,
                            "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                        },
                        "released_at": "2017-09-06",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Web",
                            "slug": "web"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 59,
                        "name": "Massively Multiplayer",
                        "slug": "massively-multiplayer",
                        "games_count": 2791,
                        "image_background": "https://media.rawg.io/media/games/a39/a392d867d88f20448ddcdce099ae07ee.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 32,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 808,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 326831,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 4294,
                        "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
                    },
                    {
                        "id": 397,
                        "name": "Online multiplayer",
                        "slug": "online-multiplayer",
                        "language": "eng",
                        "games_count": 3802,
                        "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 10233,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 25,
                        "name": "Space",
                        "slug": "space",
                        "language": "eng",
                        "games_count": 34368,
                        "image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 5168,
                        "image_background": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3112,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 172,
                        "name": "Aliens",
                        "slug": "aliens",
                        "language": "eng",
                        "games_count": 5206,
                        "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
                    },
                    {
                        "id": 406,
                        "name": "Story",
                        "slug": "story",
                        "language": "eng",
                        "games_count": 9875,
                        "image_background": "https://media.rawg.io/media/games/289/289951d92239d05f2a663d632aa3888a.jpg"
                    },
                    {
                        "id": 1465,
                        "name": "combat",
                        "slug": "combat",
                        "language": "eng",
                        "games_count": 6459,
                        "image_background": "https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg"
                    },
                    {
                        "id": 478,
                        "name": "3rd-Person Perspective",
                        "slug": "3rd-person-perspective",
                        "language": "eng",
                        "games_count": 86,
                        "image_background": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg"
                    },
                    {
                        "id": 413,
                        "name": "online",
                        "slug": "online",
                        "language": "eng",
                        "games_count": 6110,
                        "image_background": "https://media.rawg.io/media/screenshots/6ef/6ef50ac830a130c61fd237015b70e145.jpg"
                    },
                    {
                        "id": 158,
                        "name": "MMORPG",
                        "slug": "mmorpg",
                        "language": "eng",
                        "games_count": 1043,
                        "image_background": "https://media.rawg.io/media/screenshots/999/9996d2692128d717880d2be9f9351765.jpg"
                    },
                    {
                        "id": 98,
                        "name": "Loot",
                        "slug": "loot",
                        "language": "eng",
                        "games_count": 1488,
                        "image_background": "https://media.rawg.io/media/screenshots/91c/91c1591ddd37ca1b8c1d3f5cd2fcde72.jpg"
                    },
                    {
                        "id": 171,
                        "name": "PvE",
                        "slug": "pve",
                        "language": "eng",
                        "games_count": 1690,
                        "image_background": "https://media.rawg.io/media/games/724/72465528abeee31c16502e947a1a9e13.jpg"
                    },
                    {
                        "id": 2030,
                        "name": "city",
                        "slug": "city",
                        "language": "eng",
                        "games_count": 8379,
                        "image_background": "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg"
                    },
                    {
                        "id": 205,
                        "name": "Lore-Rich",
                        "slug": "lore-rich",
                        "language": "eng",
                        "games_count": 405,
                        "image_background": "https://media.rawg.io/media/screenshots/49a/49a3868cd3d21f99943fd08fa68db4c7.jpg"
                    },
                    {
                        "id": 744,
                        "name": "friends",
                        "slug": "friends",
                        "language": "eng",
                        "games_count": 14256,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 5816,
                        "name": "console",
                        "slug": "console",
                        "language": "eng",
                        "games_count": 1328,
                        "image_background": "https://media.rawg.io/media/games/f39/f3971e0dfde68f234c56ae789433b219.jpg"
                    },
                    {
                        "id": 578,
                        "name": "Masterpiece",
                        "slug": "masterpiece",
                        "language": "eng",
                        "games_count": 216,
                        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
                    },
                    {
                        "id": 3109,
                        "name": "weapons",
                        "slug": "weapons",
                        "language": "eng",
                        "games_count": 1359,
                        "image_background": "https://media.rawg.io/media/games/d51/d51ada3b94bfd617bf91d4344ab81ce9.jpg"
                    },
                    {
                        "id": 1484,
                        "name": "skill",
                        "slug": "skill",
                        "language": "eng",
                        "games_count": 3249,
                        "image_background": "https://media.rawg.io/media/games/415/41563ce6cb061a210160687a4e5d39f6.jpg"
                    },
                    {
                        "id": 3046,
                        "name": "destroy",
                        "slug": "destroy",
                        "language": "eng",
                        "games_count": 4178,
                        "image_background": "https://media.rawg.io/media/games/792/7924eba36daf05ceca74b297a8340343.jpg"
                    },
                    {
                        "id": 1743,
                        "name": "collect",
                        "slug": "collect",
                        "language": "eng",
                        "games_count": 7261,
                        "image_background": "https://media.rawg.io/media/games/201/201feb4db3118c1440ebdce03e61e3fb.jpg"
                    },
                    {
                        "id": 2184,
                        "name": "hunt",
                        "slug": "hunt",
                        "language": "eng",
                        "games_count": 2146,
                        "image_background": "https://media.rawg.io/media/games/01d/01d11db2547230520414e4af1790cd94.jpg"
                    },
                    {
                        "id": 754,
                        "name": "gun",
                        "slug": "gun",
                        "language": "eng",
                        "games_count": 2834,
                        "image_background": "https://media.rawg.io/media/screenshots/49f/49f87f5734ae632e67c5eac45b17b1b5.jpg"
                    },
                    {
                        "id": 1527,
                        "name": "rain",
                        "slug": "rain",
                        "language": "eng",
                        "games_count": 798,
                        "image_background": "https://media.rawg.io/media/screenshots/0bb/0bb76fa3aab5359e2564132587b0c0b9.jpg"
                    },
                    {
                        "id": 691,
                        "name": "quick",
                        "slug": "quick",
                        "language": "eng",
                        "games_count": 861,
                        "image_background": "https://media.rawg.io/media/screenshots/bea/bea1023e8dd15c694fc466c727922d3e.jpg"
                    },
                    {
                        "id": 18426,
                        "name": "enemy",
                        "slug": "enemy",
                        "language": "eng",
                        "games_count": 1623,
                        "image_background": "https://media.rawg.io/media/screenshots/399/399fc6a2a51d4bcad25c9d9d56e94bd3.jpg"
                    },
                    {
                        "id": 2863,
                        "name": "darkness",
                        "slug": "darkness",
                        "language": "eng",
                        "games_count": 294,
                        "image_background": "https://media.rawg.io/media/screenshots/442/4423ebc56022769d611c60de7455e981_KXtPUJe.jpg"
                    },
                    {
                        "id": 6580,
                        "name": "defender",
                        "slug": "defender",
                        "language": "eng",
                        "games_count": 135,
                        "image_background": "https://media.rawg.io/media/screenshots/72a/72ac51424ecfbc0effb58e003eb5ea3e.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2629150,
                        "image": "https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg"
                    },
                    {
                        "id": 2629151,
                        "image": "https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg"
                    },
                    {
                        "id": 2629152,
                        "image": "https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg"
                    },
                    {
                        "id": 2629153,
                        "image": "https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg"
                    },
                    {
                        "id": 2629154,
                        "image": "https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg"
                    },
                    {
                        "id": 2629155,
                        "image": "https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg"
                    }
                ]
            },
            {
                "id": 11859,
                "slug": "team-fortress-2",
                "name": "Team Fortress 2",
                "released": "2007-10-10",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
                "rating": 3.67,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1071,
                        "percent": 45.27
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 585,
                        "percent": 24.73
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 482,
                        "percent": 20.37
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 228,
                        "percent": 9.64
                    }
                ],
                "ratings_count": 2345,
                "reviews_text_count": 18,
                "added": 10310,
                "added_by_status": {
                    "yet": 145,
                    "owned": 8003,
                    "beaten": 627,
                    "toplay": 33,
                    "dropped": 1365,
                    "playing": 137
                },
                "metacritic": 92,
                "playtime": 9,
                "suggestions_count": 518,
                "updated": "2020-07-08T03:57:06",
                "user_game": null,
                "reviews_count": 2366,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2007-10-10",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)<br></li><li><strong>Processor:</strong> Pentium 4 processor (3.0GHz, or better)<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
                            "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2007-10-10",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Leopard 10.5.8 and above<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2007-10-10",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 13018,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8293,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 4294,
                        "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2985,
                        "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3989,
                        "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1176,
                        "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1467,
                        "image_background": "https://media.rawg.io/media/games/192/1921ec949024a5fbd1e1c7008f54b5af.jpg"
                    },
                    {
                        "id": 40832,
                        "name": "Cross-Platform Multiplayer",
                        "slug": "cross-platform-multiplayer",
                        "language": "eng",
                        "games_count": 1879,
                        "image_background": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1120,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1619,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 941,
                        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 125,
                        "name": "Crafting",
                        "slug": "crafting",
                        "language": "eng",
                        "games_count": 2433,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 40856,
                        "name": "Valve Anti-Cheat enabled",
                        "slug": "valve-anti-cheat-enabled",
                        "language": "eng",
                        "games_count": 104,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 170,
                        "name": "Competitive",
                        "slug": "competitive",
                        "language": "eng",
                        "games_count": 872,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 197,
                        "name": "Robots",
                        "slug": "robots",
                        "language": "eng",
                        "games_count": 6377,
                        "image_background": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 238,
                        "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
                    },
                    {
                        "id": 164,
                        "name": "Cartoony",
                        "slug": "cartoony",
                        "language": "eng",
                        "games_count": 2205,
                        "image_background": "https://media.rawg.io/media/games/725/725eb4171c8aacee030a2d050ebf9fad.jpg"
                    },
                    {
                        "id": 179,
                        "name": "Cartoon",
                        "slug": "cartoon",
                        "language": "eng",
                        "games_count": 3019,
                        "image_background": "https://media.rawg.io/media/screenshots/ac6/ac662ae439dfa894da4abbc5e707b6b1.jpg"
                    },
                    {
                        "id": 265,
                        "name": "Class-Based",
                        "slug": "class-based",
                        "language": "eng",
                        "games_count": 230,
                        "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
                    },
                    {
                        "id": 245,
                        "name": "Trading",
                        "slug": "trading",
                        "language": "eng",
                        "games_count": 805,
                        "image_background": "https://media.rawg.io/media/screenshots/0d7/0d749b669f8b97b576deb2cd109dc00c_hRr8ZwH.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 97905,
                        "image": "https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg"
                    },
                    {
                        "id": 97906,
                        "image": "https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg"
                    },
                    {
                        "id": 97907,
                        "image": "https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg"
                    },
                    {
                        "id": 97908,
                        "image": "https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg"
                    },
                    {
                        "id": 97909,
                        "image": "https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg"
                    },
                    {
                        "id": 97910,
                        "image": "https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg"
                    }
                ]
            },
            {
                "id": 3939,
                "slug": "payday-2",
                "name": "PAYDAY 2",
                "released": "2013-08-13",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
                "rating": 3.5,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 870,
                        "percent": 51.3
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 474,
                        "percent": 27.95
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 180,
                        "percent": 10.61
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 172,
                        "percent": 10.14
                    }
                ],
                "ratings_count": 1684,
                "reviews_text_count": 10,
                "added": 10180,
                "added_by_status": {
                    "yet": 392,
                    "owned": 8022,
                    "beaten": 564,
                    "toplay": 71,
                    "dropped": 1031,
                    "playing": 100
                },
                "metacritic": 79,
                "playtime": 9,
                "suggestions_count": 420,
                "updated": "2019-11-05T16:34:08",
                "user_game": null,
                "reviews_count": 1696,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2013-08-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2013-08-13",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 7<br>\t</li><li><strong>Processor:</strong>2 GHz Intel Dual Core Processor<br>\t</li><li><strong>Memory:</strong>4 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (512MB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>31 GB HD space <br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 10<br>\t</li><li><strong>Processor:</strong>2.3 GHz Intel Quad Core Processor<br>\t</li><li><strong>Memory:</strong>8 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (1GB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>45 GB HD space<br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2013-08-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4258,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 10780,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 27939,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 34027,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2985,
                        "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1619,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 941,
                        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2111,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 216,
                        "name": "Heist",
                        "slug": "heist",
                        "language": "eng",
                        "games_count": 322,
                        "image_background": "https://media.rawg.io/media/screenshots/7c0/7c0c75c3ce1a82a680522c5255ff7c5f.jpg"
                    },
                    {
                        "id": 171,
                        "name": "PvE",
                        "slug": "pve",
                        "language": "eng",
                        "games_count": 1690,
                        "image_background": "https://media.rawg.io/media/games/724/72465528abeee31c16502e947a1a9e13.jpg"
                    },
                    {
                        "id": 274,
                        "name": "Gun Customization",
                        "slug": "gun-customization",
                        "language": "eng",
                        "games_count": 230,
                        "image_background": "https://media.rawg.io/media/screenshots/c52/c52af9e979bba47f4ee006ae6f8a2576.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 5,
                    "name": "Adults Only",
                    "slug": "adults-only"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 74194,
                        "image": "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg"
                    },
                    {
                        "id": 74195,
                        "image": "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg"
                    },
                    {
                        "id": 74196,
                        "image": "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg"
                    },
                    {
                        "id": 74197,
                        "image": "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg"
                    },
                    {
                        "id": 74198,
                        "image": "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg"
                    },
                    {
                        "id": 74199,
                        "image": "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg"
                    }
                ]
            },
            {
                "id": 58175,
                "slug": "god-of-war-2",
                "name": "God of War",
                "released": "2018-04-20",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
                "rating": 4.6,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 2711,
                        "percent": 73.39
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 709,
                        "percent": 19.19
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 156,
                        "percent": 4.22
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 118,
                        "percent": 3.19
                    }
                ],
                "ratings_count": 3626,
                "reviews_text_count": 55,
                "added": 10058,
                "added_by_status": {
                    "yet": 526,
                    "owned": 5198,
                    "beaten": 2827,
                    "toplay": 967,
                    "dropped": 189,
                    "playing": 351
                },
                "metacritic": 94,
                "playtime": 20,
                "suggestions_count": 596,
                "updated": "2022-01-17T02:56:14",
                "user_game": null,
                "reviews_count": 3694,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420000,
                            "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                        },
                        "released_at": "2018-04-20",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 187,
                            "name": "PlayStation 5",
                            "slug": "playstation5",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 474,
                            "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                        },
                        "released_at": "2018-04-20",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2018-04-20",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 46917,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 677451,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 677452,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 34,
                        "name": "Violent",
                        "slug": "violent",
                        "language": "eng",
                        "games_count": 5068,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 10233,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 68,
                        "name": "Hack and Slash",
                        "slug": "hack-and-slash",
                        "language": "eng",
                        "games_count": 2450,
                        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                    },
                    {
                        "id": 37796,
                        "name": "exclusive",
                        "slug": "exclusive",
                        "language": "eng",
                        "games_count": 4514,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 125,
                        "name": "Crafting",
                        "slug": "crafting",
                        "language": "eng",
                        "games_count": 2433,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 37797,
                        "name": "true exclusive",
                        "slug": "true-exclusive",
                        "language": "eng",
                        "games_count": 3996,
                        "image_background": "https://media.rawg.io/media/games/c5b/c5b3b6aa220050f7f504f4477cb51d3b.jpg"
                    },
                    {
                        "id": 1465,
                        "name": "combat",
                        "slug": "combat",
                        "language": "eng",
                        "games_count": 6459,
                        "image_background": "https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg"
                    },
                    {
                        "id": 478,
                        "name": "3rd-Person Perspective",
                        "slug": "3rd-person-perspective",
                        "language": "eng",
                        "games_count": 86,
                        "image_background": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg"
                    },
                    {
                        "id": 270,
                        "name": "Blood",
                        "slug": "blood",
                        "language": "eng",
                        "games_count": 1650,
                        "image_background": "https://media.rawg.io/media/screenshots/e0a/e0abaefbcc99ef995be57d857806f2d2.jpeg"
                    },
                    {
                        "id": 571,
                        "name": "3D",
                        "slug": "3d",
                        "language": "eng",
                        "games_count": 56498,
                        "image_background": "https://media.rawg.io/media/games/3e3/3e355e1b8a5ee47f4c76e28e3055236d.jpg"
                    },
                    {
                        "id": 171,
                        "name": "PvE",
                        "slug": "pve",
                        "language": "eng",
                        "games_count": 1690,
                        "image_background": "https://media.rawg.io/media/games/724/72465528abeee31c16502e947a1a9e13.jpg"
                    },
                    {
                        "id": 108,
                        "name": "Mythology",
                        "slug": "mythology",
                        "language": "eng",
                        "games_count": 1214,
                        "image_background": "https://media.rawg.io/media/games/6e9/6e9136f09bb9daaaed5a0e6d508028b4.jpg"
                    },
                    {
                        "id": 572,
                        "name": "Emotional",
                        "slug": "emotional",
                        "language": "eng",
                        "games_count": 962,
                        "image_background": "https://media.rawg.io/media/games/e0f/e0f8d58079f6a0c6afb25d91422a98fc.jpg"
                    },
                    {
                        "id": 580,
                        "name": "Souls-like",
                        "slug": "souls-like",
                        "language": "eng",
                        "games_count": 524,
                        "image_background": "https://media.rawg.io/media/games/2d8/2d84abb8b5e5ca1611048f682a61f93b.jpg"
                    },
                    {
                        "id": 43374,
                        "name": "Remote Play on TV",
                        "slug": "remote-play-on-tv",
                        "language": "eng",
                        "games_count": 213,
                        "image_background": "https://media.rawg.io/media/screenshots/e12/e1255bab51a84896dbcffbb267a2cbf7.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 766263,
                        "image": "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg"
                    },
                    {
                        "id": 766264,
                        "image": "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg"
                    },
                    {
                        "id": 766265,
                        "image": "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg"
                    },
                    {
                        "id": 766266,
                        "image": "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg"
                    },
                    {
                        "id": 766267,
                        "image": "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg"
                    },
                    {
                        "id": 766268,
                        "image": "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg"
                    }
                ]
            },
            {
                "id": 4459,
                "slug": "grand-theft-auto-iv",
                "name": "Grand Theft Auto IV",
                "released": "2008-04-29",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
                "rating": 4.25,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1071,
                        "percent": 45.21
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 998,
                        "percent": 42.13
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 246,
                        "percent": 10.38
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 54,
                        "percent": 2.28
                    }
                ],
                "ratings_count": 2352,
                "reviews_text_count": 12,
                "added": 10003,
                "added_by_status": {
                    "yet": 280,
                    "owned": 6512,
                    "beaten": 2146,
                    "toplay": 170,
                    "dropped": 803,
                    "playing": 92
                },
                "metacritic": 95,
                "playtime": 9,
                "suggestions_count": 501,
                "updated": "2020-08-03T02:25:58",
                "user_game": null,
                "reviews_count": 2369,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": {
                            "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista - Service Pack 1 / Windows XP - Service Pack 3                    <br>\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Core 2 Duo 1.8GHz, AMD Athlon X2 64 2.4GHz                    <br>\t\t\t\t\t</li><li><strong>Memory:</strong> 1.5GB XP / 1.5GB Vista                    <br>\t\t\t\t\t</li><li><strong>Graphics:</strong> 256MB Nvidia 7900 / 256MB ATI X1900                    <br>\t\t\t\t\t</li><li><strong>DirectX Version:</strong> DirectX 9.0c Compliant Card                     <br>\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 16GB of Hard Disc Space                     <br>\t\t\t\t\t</li><li><strong>Sound Card:</strong> 5.1 Channel Audio Card                     <br>\t\t\t\t\t</li><li><strong>Other Requirements:</strong> Initial activation requires internet connection; Online play requires log-in to Games For Windows - Live and Rockstar Games Social Club (13+ to register); software installations required including Adobe Flash, DirectX, Microsoft’s .NET Framework 3.0, Games For Windows - LIVE, and Internet Explorer.                    </li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon X2 64 2 ГГц, 1 Гб памяти, GeForce 7900/Radeon X1900,17 Гб на винчестере,XP SP3/Vista SP1,интернет-соединение",
                            "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,2 Гб памяти, GeForce GTX 280/Radeon HD 4870,17 Гб на винчестере,XP SP3/Vista SP1,интернет-соединение"
                        }
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4787,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 465944,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 17290,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 42864,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2111,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1936,
                        "image_background": "https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg"
                    },
                    {
                        "id": 153,
                        "name": "Satire",
                        "slug": "satire",
                        "language": "eng",
                        "games_count": 939,
                        "image_background": "https://media.rawg.io/media/screenshots/be1/be17f78d80b50121fa2ed6d4562d403e.jpg"
                    },
                    {
                        "id": 62348,
                        "name": "first person mod",
                        "slug": "first-person-mod",
                        "language": "eng",
                        "games_count": 15,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 321,
                        "name": "Bowling",
                        "slug": "bowling",
                        "language": "eng",
                        "games_count": 138,
                        "image_background": "https://media.rawg.io/media/screenshots/d15/d15d8beeba74a774e247d360f5338d5f.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                    },
                    {
                        "id": 139042,
                        "image": "https://media.rawg.io/media/screenshots/07f/07f7cf80741ff306e4eca982c3e64ac8.jpg"
                    },
                    {
                        "id": 139043,
                        "image": "https://media.rawg.io/media/screenshots/fef/fefd51ec13aa33acbd796ef79bcef7cb.jpg"
                    },
                    {
                        "id": 139044,
                        "image": "https://media.rawg.io/media/screenshots/b78/b78ffd258d5793be704c380e572748bc.jpg"
                    },
                    {
                        "id": 139045,
                        "image": "https://media.rawg.io/media/screenshots/17c/17c85ab9dfc4fda8e1e5ba72932ef2bf.jpg"
                    },
                    {
                        "id": 139046,
                        "image": "https://media.rawg.io/media/screenshots/a12/a12ca99cc74c1e7eba7100b0891dd1e0.jpg"
                    },
                    {
                        "id": 139047,
                        "image": "https://media.rawg.io/media/screenshots/b25/b254f9729ae3f36a9ccffccaa01d5cf6.jpg"
                    }
                ]
            },
            {
                "id": 3272,
                "slug": "rocket-league",
                "name": "Rocket League",
                "released": "2015-07-07",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
                "rating": 3.98,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1287,
                        "percent": 54.95
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 611,
                        "percent": 26.09
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 339,
                        "percent": 14.47
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 105,
                        "percent": 4.48
                    }
                ],
                "ratings_count": 2325,
                "reviews_text_count": 13,
                "added": 9952,
                "added_by_status": {
                    "yet": 161,
                    "owned": 7336,
                    "beaten": 664,
                    "toplay": 93,
                    "dropped": 1203,
                    "playing": 495
                },
                "metacritic": 86,
                "playtime": 19,
                "suggestions_count": 605,
                "updated": "2021-09-26T09:01:42",
                "user_game": null,
                "reviews_count": 2342,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2015-07-07",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2015-07-07",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2015-07-07",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 or Newer<br></li><li><strong>Processor:</strong> 2.4 GHz Dual core<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 260 or ATI 4850<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 7 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 or Newer<br></li><li><strong>Processor:</strong> 2.5+ GHz Quad core<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 660 or better, ATI 7950 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 7 GB available space<br></li><li><strong>Additional Notes:</strong> Gamepad or Controller Recommended</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2015-07-07",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> MacOS X 10.8.5<br></li><li><strong>Processor:</strong> Intel Core i5 2.4 GHz<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> OpenGL 4.1 - ATI Radeon HD 5670, NVIDIA GeForce GT 640M, Intel HD Graphics 4000 or Iris Pro Graphics<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 7 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> MacOS X 10.8.5 or Newer<br></li><li><strong>Processor:</strong> Intel Core i7 2.4 GHz+<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> OpenGL 4.1 - ATI Radeon HD 5670, NVIDIA GeForce GT 640M<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 7 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2015-07-07",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>Processor:</strong> 2.4+ GHz Quad core<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 260 or ATI 4850<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 7 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>Processor:</strong> 2.5+ GHz Quad core<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 660 or better, ATI 7950 or better<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 7 GB available space<br></li><li><strong>Additional Notes:</strong> Gamepad or Controller Recommended</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2015-07-07",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 15,
                        "name": "Sports",
                        "slug": "sports",
                        "games_count": 18466,
                        "image_background": "https://media.rawg.io/media/games/d16/d160819f22de73d29813f7b6dad815f9.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Racing",
                        "slug": "racing",
                        "games_count": 21017,
                        "image_background": "https://media.rawg.io/media/games/fc0/fc076b974197660a582abd34ebccc27f.jpg"
                    },
                    {
                        "id": 51,
                        "name": "Indie",
                        "slug": "indie",
                        "games_count": 42945,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 9319,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 10618,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 3499,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 36994,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 573307,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 198,
                        "name": "Split Screen",
                        "slug": "split-screen",
                        "language": "eng",
                        "games_count": 4671,
                        "image_background": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg"
                    },
                    {
                        "id": 75,
                        "name": "Local Co-Op",
                        "slug": "local-co-op",
                        "language": "eng",
                        "games_count": 4340,
                        "image_background": "https://media.rawg.io/media/games/21b/21babfc41e2a6972290833d1b860f13e.jpg"
                    },
                    {
                        "id": 72,
                        "name": "Local Multiplayer",
                        "slug": "local-multiplayer",
                        "language": "eng",
                        "games_count": 10932,
                        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3989,
                        "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1176,
                        "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
                    },
                    {
                        "id": 40832,
                        "name": "Cross-Platform Multiplayer",
                        "slug": "cross-platform-multiplayer",
                        "language": "eng",
                        "games_count": 1879,
                        "image_background": "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 941,
                        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 131,
                        "name": "Fast-Paced",
                        "slug": "fast-paced",
                        "language": "eng",
                        "games_count": 8651,
                        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
                    },
                    {
                        "id": 170,
                        "name": "Competitive",
                        "slug": "competitive",
                        "language": "eng",
                        "games_count": 872,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 182,
                        "name": "4 Player Local",
                        "slug": "4-player-local",
                        "language": "eng",
                        "games_count": 702,
                        "image_background": "https://media.rawg.io/media/screenshots/f81/f81fd968a3161e7d35612d8c4232923e.jpg"
                    },
                    {
                        "id": 191,
                        "name": "Football",
                        "slug": "football",
                        "language": "eng",
                        "games_count": 1827,
                        "image_background": "https://media.rawg.io/media/games/df4/df415b18835f91a1b4db1da294996ee5.jpg"
                    },
                    {
                        "id": 190,
                        "name": "Soccer",
                        "slug": "soccer",
                        "language": "eng",
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/games/2ed/2ed38a102fe66a0ea98a8e09c660a458.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 1,
                    "name": "Everyone",
                    "slug": "everyone"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 29880,
                        "image": "https://media.rawg.io/media/screenshots/6a0/6a0745d9dcd0f7a368d372260baf91aa.jpg"
                    },
                    {
                        "id": 29881,
                        "image": "https://media.rawg.io/media/screenshots/5ea/5ea8ab6a35f189489b2ec8713d4f1619.jpg"
                    },
                    {
                        "id": 29882,
                        "image": "https://media.rawg.io/media/screenshots/508/5083fd170bf10606afd12afc7d17db04.jpg"
                    },
                    {
                        "id": 29883,
                        "image": "https://media.rawg.io/media/screenshots/02d/02d36e8e01a9f1063c6431ce09324e24.jpg"
                    },
                    {
                        "id": 29884,
                        "image": "https://media.rawg.io/media/screenshots/036/036ddade8156ac52ecf8de593123d12c.jpg"
                    },
                    {
                        "id": 29885,
                        "image": "https://media.rawg.io/media/screenshots/861/8615727f6e52f1632ae38d71e9e4c800.jpg"
                    }
                ]
            },
            {
                "id": 278,
                "slug": "horizon-zero-dawn",
                "name": "Horizon Zero Dawn",
                "released": "2017-02-28",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
                "rating": 4.34,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1606,
                        "percent": 52.31
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1063,
                        "percent": 34.63
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 318,
                        "percent": 10.36
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 83,
                        "percent": 2.7
                    }
                ],
                "ratings_count": 3026,
                "reviews_text_count": 37,
                "added": 9952,
                "added_by_status": {
                    "yet": 550,
                    "owned": 5504,
                    "beaten": 2222,
                    "toplay": 698,
                    "dropped": 529,
                    "playing": 449
                },
                "metacritic": 89,
                "playtime": 10,
                "suggestions_count": 628,
                "updated": "2020-07-04T12:35:23",
                "user_game": null,
                "reviews_count": 3070,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2017-02-28",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2017-02-28",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 278,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 408950,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 452496,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7678,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 468,
                        "name": "role-playing",
                        "slug": "role-playing",
                        "language": "eng",
                        "games_count": 1329,
                        "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
                    },
                    {
                        "id": 37796,
                        "name": "exclusive",
                        "slug": "exclusive",
                        "language": "eng",
                        "games_count": 4514,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 2447,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3112,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 797,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 478,
                        "name": "3rd-Person Perspective",
                        "slug": "3rd-person-perspective",
                        "language": "eng",
                        "games_count": 86,
                        "image_background": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg"
                    },
                    {
                        "id": 197,
                        "name": "Robots",
                        "slug": "robots",
                        "language": "eng",
                        "games_count": 6377,
                        "image_background": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg"
                    },
                    {
                        "id": 209,
                        "name": "Drama",
                        "slug": "drama",
                        "language": "eng",
                        "games_count": 1663,
                        "image_background": "https://media.rawg.io/media/games/e35/e355efef97722d50bec3482a2263b962.jpg"
                    },
                    {
                        "id": 205,
                        "name": "Lore-Rich",
                        "slug": "lore-rich",
                        "language": "eng",
                        "games_count": 405,
                        "image_background": "https://media.rawg.io/media/screenshots/49a/49a3868cd3d21f99943fd08fa68db4c7.jpg"
                    },
                    {
                        "id": 5452,
                        "name": "3rd-person",
                        "slug": "3rd-person",
                        "language": "eng",
                        "games_count": 85,
                        "image_background": "https://media.rawg.io/media/screenshots/867/867dfc639f8018d403401973ff1ae88d.jpg"
                    },
                    {
                        "id": 324,
                        "name": "Experience",
                        "slug": "experience",
                        "language": "eng",
                        "games_count": 236,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    },
                    {
                        "id": 43574,
                        "name": "open-world",
                        "slug": "open-world-2",
                        "language": "eng",
                        "games_count": 8,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    },
                    {
                        "id": 6498,
                        "name": "atmosphere",
                        "slug": "atmosphere",
                        "language": "eng",
                        "games_count": 23,
                        "image_background": "https://media.rawg.io/media/screenshots/e6e/e6e2d407ff06884b18cc47dd37b4bd8a.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    },
                    {
                        "id": 2281,
                        "image": "https://media.rawg.io/media/screenshots/9cc/9cc79c34d70e437f3931f8476c384f43.jpg"
                    },
                    {
                        "id": 2283,
                        "image": "https://media.rawg.io/media/screenshots/898/898c2b3a6985f964cd65d55d9d323dbd.jpg"
                    },
                    {
                        "id": 2285,
                        "image": "https://media.rawg.io/media/screenshots/c44/c44b7da5fcbf57d740a7bafe435d555e.jpg"
                    },
                    {
                        "id": 2287,
                        "image": "https://media.rawg.io/media/screenshots/c8c/c8cbefacf83746eadc23f19531676304.jpg"
                    },
                    {
                        "id": 2289,
                        "image": "https://media.rawg.io/media/screenshots/e53/e534a3e2c61f57b41ad1d1389d5b126f.jpg"
                    },
                    {
                        "id": 2293,
                        "image": "https://media.rawg.io/media/screenshots/120/12094e8cdcdc97a607d711e9c923ab64.jpg"
                    }
                ]
            },
            {
                "id": 10213,
                "slug": "dota-2",
                "name": "Dota 2",
                "released": "2013-07-09",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg",
                "rating": 3.07,
                "rating_top": 3,
                "ratings": [
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 702,
                        "percent": 32.58
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 584,
                        "percent": 27.1
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 542,
                        "percent": 25.15
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 327,
                        "percent": 15.17
                    }
                ],
                "ratings_count": 2132,
                "reviews_text_count": 17,
                "added": 9551,
                "added_by_status": {
                    "yet": 159,
                    "owned": 7436,
                    "beaten": 348,
                    "toplay": 19,
                    "dropped": 1274,
                    "playing": 315
                },
                "metacritic": 90,
                "playtime": 13,
                "suggestions_count": 413,
                "updated": "2020-05-29T04:46:17",
                "user_game": null,
                "reviews_count": 2155,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2013-07-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 or newer<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> DirectX Compatible</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2013-07-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X Mavericks 10.9 or newer<br></li><li><strong>Processor:</strong> Dual core from Intel<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> nVidia 320M or higher, or Radeon HD 2400 or higher, or Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2013-07-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Ubuntu 12.04 or newer<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> nVidia Geforce 8600/9600GT (Driver v331), AMD HD 2xxx-4xxx (Driver mesa 10.5.9), AMD HD 5xxx+ (Driver mesa 10.5.9 or Catalyst 15.7), Intel HD 3000 (Driver mesa 10.6)<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 59,
                        "name": "Massively Multiplayer",
                        "slug": "massively-multiplayer",
                        "games_count": 2791,
                        "image_background": "https://media.rawg.io/media/games/a39/a392d867d88f20448ddcdce099ae07ee.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 11168,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 10359,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 4294,
                        "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1176,
                        "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 5168,
                        "image_background": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Replay Value",
                        "slug": "replay-value",
                        "language": "eng",
                        "games_count": 1047,
                        "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
                    },
                    {
                        "id": 121,
                        "name": "Character Customization",
                        "slug": "character-customization",
                        "language": "eng",
                        "games_count": 2256,
                        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1619,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 941,
                        "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 168,
                        "name": "RTS",
                        "slug": "rts",
                        "language": "eng",
                        "games_count": 1413,
                        "image_background": "https://media.rawg.io/media/games/249/249cb9b8c402ed713358fcf434bcca11.jpg"
                    },
                    {
                        "id": 40856,
                        "name": "Valve Anti-Cheat enabled",
                        "slug": "valve-anti-cheat-enabled",
                        "language": "eng",
                        "games_count": 104,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 170,
                        "name": "Competitive",
                        "slug": "competitive",
                        "language": "eng",
                        "games_count": 872,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 65,
                        "name": "Tower Defense",
                        "slug": "tower-defense",
                        "language": "eng",
                        "games_count": 5069,
                        "image_background": "https://media.rawg.io/media/screenshots/ca3/ca31ca841afd79e9af9eeea0592b0e2f.jpg"
                    },
                    {
                        "id": 169,
                        "name": "MOBA",
                        "slug": "moba",
                        "language": "eng",
                        "games_count": 419,
                        "image_background": "https://media.rawg.io/media/screenshots/4e0/4e0ea16d3362361791100bcbd7a1bf1b.jpg"
                    },
                    {
                        "id": 73,
                        "name": "e-sports",
                        "slug": "e-sports",
                        "language": "eng",
                        "games_count": 80,
                        "image_background": "https://media.rawg.io/media/screenshots/316/31651e0ec39c6718c5136ab624431e7f.jpg"
                    },
                    {
                        "id": 40909,
                        "name": "SteamVR Collectibles",
                        "slug": "steamvr-collectibles",
                        "language": "eng",
                        "games_count": 44,
                        "image_background": "https://media.rawg.io/media/screenshots/ed7/ed776abe33fe959af934a4f3fa64a123.jpg"
                    }
                ],
                "esrb_rating": null,
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 78326,
                        "image": "https://media.rawg.io/media/screenshots/cef/cefd0f45c88be2d6e2ff7eed94c16cf3.jpg"
                    },
                    {
                        "id": 78327,
                        "image": "https://media.rawg.io/media/screenshots/e2a/e2a1a6c8b07bcdb91d7c6050b16854c5.jpg"
                    },
                    {
                        "id": 78328,
                        "image": "https://media.rawg.io/media/screenshots/55e/55e2c2ff16229eef87cfd8728ca537ac.jpg"
                    },
                    {
                        "id": 78329,
                        "image": "https://media.rawg.io/media/screenshots/601/601ceb08d04da42f4de5d8b9016f31a6.jpg"
                    },
                    {
                        "id": 78330,
                        "image": "https://media.rawg.io/media/screenshots/f02/f02a389dafd748b801cb4ff971a868af.jpg"
                    },
                    {
                        "id": 78331,
                        "image": "https://media.rawg.io/media/screenshots/da6/da6e4cba4e5787674d0e6877d1fc426a.jpg"
                    }
                ]
            },
            {
                "id": 29028,
                "slug": "metro-2033",
                "name": "Metro 2033",
                "released": "2010-03-16",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
                "rating": 3.91,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 926,
                        "percent": 52.55
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 455,
                        "percent": 25.82
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 263,
                        "percent": 14.93
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 118,
                        "percent": 6.7
                    }
                ],
                "ratings_count": 1757,
                "reviews_text_count": 2,
                "added": 9550,
                "added_by_status": {
                    "yet": 514,
                    "owned": 7144,
                    "beaten": 1396,
                    "toplay": 114,
                    "dropped": 352,
                    "playing": 30
                },
                "metacritic": 79,
                "playtime": 2,
                "suggestions_count": 581,
                "updated": "2020-04-17T13:50:03",
                "user_game": null,
                "reviews_count": 1762,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2010-03-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420002,
                            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                        },
                        "released_at": "2010-03-16",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br>\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP, Vista, or 7<br>\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual core CPU (any Core 2 Duo or better)<br>\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1GB RAM<br>\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> DirectX 9, Shader Model 3 compliant graphics cards (GeForce 8800, GeForce GT220 and above)<br>\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> DirectX 9.0c\t<br>\t\t\t\t\t\t</li></ul>Enabling 3D Vision:<br>\t\t\t\t\t\tMetro 2033 utilizes NVIDIA 3D Vision with compatible cards and hardware. To play Metro 2033 in 3D you will require:<br>\t\t\t\t\t\t<ul class=\"bb_ul\"><li>NVIDIA GeForce GTX 275 and above recommended <br>\t\t\t\t\t\t</li><li>A 120Hz (or above) monitor<br>\t\t\t\t\t\t</li><li>NVIDIA 3D Vision kit Microsoft Windows Vista or Windows 7<br>\t\t\t\t\t\t</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br>\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Any Quad Core or 3.0+ GHz Dual Core CPU<br>\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB RAM<br>\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> DirectX 10 compliant graphics card (GeForce GTX 260 and above)<br>\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> DirectX 10 or higher\t<br>\t\t\t\t\t\t</li></ul>Optimum Requirements:<br>\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Core i7 CPU<br>\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 8GB RAM or higher<br>\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> NVIDIA DirectX 11 compliant graphics card (GeForce GTX 480 and 470)<br>\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> DirectX 11\t<br>\t\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon 64 X2 2.5 ГГц,1 Гб памяти,GeForce 8800/Radeon HD 2800,7.5 Гб на винчестере,интернет-соединение",
                            "recommended": "Core 2 Quad/Phenom X4 3 ГГц,2 Гб памяти,GeForce GTX 275/Radeon HD 5870,7.5 Гб на винчестере,интернет-соединение"
                        }
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 255112,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 34644,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5728,
                        "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 2447,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 17,
                        "name": "Survival Horror",
                        "slug": "survival-horror",
                        "language": "eng",
                        "games_count": 5718,
                        "image_background": "https://media.rawg.io/media/games/f6f/f6f39c5b56413f7f4513b25989a1b747.jpg"
                    },
                    {
                        "id": 133,
                        "name": "3D Vision",
                        "slug": "3d-vision",
                        "language": "eng",
                        "games_count": 360,
                        "image_background": "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg"
                    },
                    {
                        "id": 305,
                        "name": "Linear",
                        "slug": "linear",
                        "language": "eng",
                        "games_count": 2058,
                        "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
                    },
                    {
                        "id": 283,
                        "name": "Based On A Novel",
                        "slug": "based-on-a-novel",
                        "language": "eng",
                        "games_count": 40,
                        "image_background": "https://media.rawg.io/media/games/799/7998aecf4825c69310b961e365a91bcd.jpg"
                    },
                    {
                        "id": 296,
                        "name": "Benchmark",
                        "slug": "benchmark",
                        "language": "eng",
                        "games_count": 30,
                        "image_background": "https://media.rawg.io/media/screenshots/d60/d6014eb058a24c9e3028568ace16f229.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 462425,
                        "image": "https://media.rawg.io/media/screenshots/e79/e7946cab379370fdef03c2e2c9dfcce3.jpg"
                    },
                    {
                        "id": 462426,
                        "image": "https://media.rawg.io/media/screenshots/ad4/ad433938bd2377b1beaa8a184bb67405.jpg"
                    },
                    {
                        "id": 462427,
                        "image": "https://media.rawg.io/media/screenshots/28e/28e63b7f13e9ec24ad64ef5ae75e258c.jpg"
                    },
                    {
                        "id": 462428,
                        "image": "https://media.rawg.io/media/screenshots/b99/b99a0bf0f09991d76ad13c65f7e64562.jpg"
                    },
                    {
                        "id": 462429,
                        "image": "https://media.rawg.io/media/screenshots/df1/df1aa556c727ad4f4753dbb9e43875c0.jpg"
                    },
                    {
                        "id": 462430,
                        "image": "https://media.rawg.io/media/screenshots/94b/94bcd09e75c34712fa85ea6b4945a57c.jpg"
                    }
                ]
            },
            {
                "id": 3192,
                "slug": "metal-gear-solid-v-the-phantom-pain",
                "name": "Metal Gear Solid V: The Phantom Pain",
                "released": "2015-09-01",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
                "rating": 4.17,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 944,
                        "percent": 44.44
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 794,
                        "percent": 37.38
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 287,
                        "percent": 13.51
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 99,
                        "percent": 4.66
                    }
                ],
                "ratings_count": 2110,
                "reviews_text_count": 13,
                "added": 9495,
                "added_by_status": {
                    "yet": 657,
                    "owned": 6232,
                    "beaten": 1319,
                    "toplay": 323,
                    "dropped": 725,
                    "playing": 239
                },
                "metacritic": 91,
                "playtime": 27,
                "suggestions_count": 513,
                "updated": "2020-11-30T07:56:53",
                "user_game": null,
                "reviews_count": 2124,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2015-09-01",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2015-09-01",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2015-09-01",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2015-09-01",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2015-09-01",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7x64, Windows 8x64, Windows 10x64 (64-bit OS Required)<br></li><li><strong>Processor:</strong> Intel Core i5-4460 (3.40 GHz) or better; Quad-core or better<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 650 (2GB) or better (DirectX 11 card Required)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 28 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7x64, Windows 8x64, Windows 10x64 (64-bit OS Required)<br></li><li><strong>Processor:</strong> Intel Core i7-4790 (3.60GHz) or better; Quad-core or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 760 (DirectX 11 graphic card required)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 28 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card (Surround Sound 5.1)</li></ul>"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 3401,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 13543,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 33982,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 7903,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 40850,
                        "name": "Steam Leaderboards",
                        "slug": "steam-leaderboards",
                        "language": "eng",
                        "games_count": 5122,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2985,
                        "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1120,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Replay Value",
                        "slug": "replay-value",
                        "language": "eng",
                        "games_count": 1047,
                        "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 797,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 216,
                        "name": "Heist",
                        "slug": "heist",
                        "language": "eng",
                        "games_count": 322,
                        "image_background": "https://media.rawg.io/media/screenshots/7c0/7c0c75c3ce1a82a680522c5255ff7c5f.jpg"
                    },
                    {
                        "id": 128,
                        "name": "Horses",
                        "slug": "horses",
                        "language": "eng",
                        "games_count": 118,
                        "image_background": "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 29085,
                        "image": "https://media.rawg.io/media/screenshots/fa0/fa0cb095629729fb990079d0ec135dae.jpg"
                    },
                    {
                        "id": 29086,
                        "image": "https://media.rawg.io/media/screenshots/768/768087f6fbfae3b1fa7533c38bda35a0.jpg"
                    },
                    {
                        "id": 29087,
                        "image": "https://media.rawg.io/media/screenshots/40b/40bf3a64adc8e3b6ffadd1420b1bd250.jpg"
                    },
                    {
                        "id": 29089,
                        "image": "https://media.rawg.io/media/screenshots/344/3447022b021fb337970aaa16e9adfa1f.jpg"
                    },
                    {
                        "id": 29090,
                        "image": "https://media.rawg.io/media/screenshots/410/41074cb7d1a80e15b16e5166f121c0e0.jpg"
                    },
                    {
                        "id": 29091,
                        "image": "https://media.rawg.io/media/screenshots/535/5358bcad9e3c51816ffb923fcdd9938a.jpg"
                    }
                ]
            },
            {
                "id": 766,
                "slug": "warframe",
                "name": "Warframe",
                "released": "2013-03-25",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
                "rating": 3.43,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 691,
                        "percent": 41.43
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 541,
                        "percent": 32.43
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 224,
                        "percent": 13.43
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 212,
                        "percent": 12.71
                    }
                ],
                "ratings_count": 1659,
                "reviews_text_count": 8,
                "added": 9392,
                "added_by_status": {
                    "yet": 242,
                    "owned": 7533,
                    "beaten": 183,
                    "toplay": 52,
                    "dropped": 1167,
                    "playing": 215
                },
                "metacritic": 73,
                "playtime": 7,
                "suggestions_count": 720,
                "updated": "2020-08-03T05:50:28",
                "user_game": null,
                "reviews_count": 1668,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 186,
                            "name": "Xbox Series S/X",
                            "slug": "xbox-series-x",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 412,
                            "image_background": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
                        },
                        "released_at": "2013-03-25",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 187,
                            "name": "PlayStation 5",
                            "slug": "playstation5",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 474,
                            "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                        },
                        "released_at": "2013-03-25",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2013-03-25",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2013-03-25",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2013-03-25",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2013-03-25",
                        "requirements_en": {
                            "minimum": "OS: Windows 7/8/10 64-Bit (32-bit not supported)\r\n    Processor: Intel Core 2 Duo e6400 or AMD Athlon x64 4000+ (~2.2Ghz dual core CPU)\r\n    Memory: 4 GB System RAM.\r\n    Graphics: DirectX 10+ compatible video card.\r\n    Hard Drive: 35 GB free HD space."
                        },
                        "requirements_ru": {
                            "minimum": "Win Xp 32\nCore 2 Duo E4300/Athlon 64 X2 Dual 4200+\nGeForce 605/Radeon HD 5450\n2 GB RAM\n7.5 GB HDD",
                            "recommended": "Win 7 64\nCore 2 Quad Q6400/Athlon II X4 605e\nGeForce GTS 450/Radeon HD 5750\n4 GB RAM\n7.5 GB HDD"
                        }
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 59,
                        "name": "Massively Multiplayer",
                        "slug": "massively-multiplayer",
                        "games_count": 2791,
                        "image_background": "https://media.rawg.io/media/games/a39/a392d867d88f20448ddcdce099ae07ee.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4171,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 12122,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 776,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 49441,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3253,
                        "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 4294,
                        "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 25,
                        "name": "Space",
                        "slug": "space",
                        "language": "eng",
                        "games_count": 34368,
                        "image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
                    },
                    {
                        "id": 468,
                        "name": "role-playing",
                        "slug": "role-playing",
                        "language": "eng",
                        "games_count": 1329,
                        "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
                    },
                    {
                        "id": 68,
                        "name": "Hack and Slash",
                        "slug": "hack-and-slash",
                        "language": "eng",
                        "games_count": 2450,
                        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1619,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3112,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 188,
                        "name": "Parkour",
                        "slug": "parkour",
                        "language": "eng",
                        "games_count": 2383,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 226,
                        "name": "Cyberpunk",
                        "slug": "cyberpunk",
                        "language": "eng",
                        "games_count": 3147,
                        "image_background": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg"
                    },
                    {
                        "id": 171,
                        "name": "PvE",
                        "slug": "pve",
                        "language": "eng",
                        "games_count": 1690,
                        "image_background": "https://media.rawg.io/media/games/724/72465528abeee31c16502e947a1a9e13.jpg"
                    },
                    {
                        "id": 186,
                        "name": "Ninja",
                        "slug": "ninja",
                        "language": "eng",
                        "games_count": 1967,
                        "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
                    },
                    {
                        "id": 38844,
                        "name": "looter shooter",
                        "slug": "looter-shooter",
                        "language": "eng",
                        "games_count": 187,
                        "image_background": "https://media.rawg.io/media/screenshots/e4c/e4ced0a301518e5889cfbe19a827376a.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
                    },
                    {
                        "id": 6718,
                        "image": "https://media.rawg.io/media/screenshots/2e1/2e15c9f4cca692ebca67b7652e559f6d.jpg"
                    },
                    {
                        "id": 6730,
                        "image": "https://media.rawg.io/media/screenshots/70d/70de629465e39f8108aa533df9cff554.jpg"
                    },
                    {
                        "id": 6734,
                        "image": "https://media.rawg.io/media/screenshots/b3a/b3a368123558e7f4010e8b68518d6412.jpg"
                    },
                    {
                        "id": 6736,
                        "image": "https://media.rawg.io/media/screenshots/fd2/fd2225327c9dca60c9acea0edca8c5fc.jpg"
                    },
                    {
                        "id": 6740,
                        "image": "https://media.rawg.io/media/screenshots/34e/34e3c0d71551f07c3bb709fe12f18ca2.jpg"
                    },
                    {
                        "id": 6743,
                        "image": "https://media.rawg.io/media/screenshots/977/977735a2fad2bc47917424e20e9dff56.jpg"
                    }
                ]
            },
            {
                "id": 7689,
                "slug": "rise-of-the-tomb-raider",
                "name": "Rise of the Tomb Raider",
                "released": "2015-11-10",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
                "rating": 4.02,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1317,
                        "percent": 60.61
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 505,
                        "percent": 23.24
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 296,
                        "percent": 13.62
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 55,
                        "percent": 2.53
                    }
                ],
                "ratings_count": 2160,
                "reviews_text_count": 10,
                "added": 9326,
                "added_by_status": {
                    "yet": 514,
                    "owned": 6035,
                    "beaten": 2041,
                    "toplay": 302,
                    "dropped": 294,
                    "playing": 140
                },
                "metacritic": 86,
                "playtime": 15,
                "suggestions_count": 668,
                "updated": "2021-12-31T12:53:22",
                "user_game": null,
                "reviews_count": 2173,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2015-11-10",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2015-11-10",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 64bit<br></li><li><strong>Processor:</strong> Intel Core i3-2100 or AMD equivalent<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 650 2GB or AMD HD7770 2GB<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 25 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 10 64 bit<br></li><li><strong>Processor:</strong> Intel Core i7-3770K<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 980Ti 2560x1440  or NVIDIA GTX 970 1920x1080<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 25 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2015-11-10",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2015-11-10",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 713687,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    },
                    {
                        "id": 8374,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 11947,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 33645,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 315625,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 40850,
                        "name": "Steam Leaderboards",
                        "slug": "steam-leaderboards",
                        "language": "eng",
                        "games_count": 5122,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7678,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5728,
                        "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 10233,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 188,
                        "name": "Parkour",
                        "slug": "parkour",
                        "language": "eng",
                        "games_count": 2383,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 269,
                        "name": "Quick-Time Events",
                        "slug": "quick-time-events",
                        "language": "eng",
                        "games_count": 232,
                        "image_background": "https://media.rawg.io/media/games/643/6431f15213a854efd273943f2cf6a925.jpg"
                    },
                    {
                        "id": 306,
                        "name": "Lara Croft",
                        "slug": "lara-croft",
                        "language": "eng",
                        "games_count": 14,
                        "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
                    }
                ],
                "esrb_rating": null,
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 52512,
                        "image": "https://media.rawg.io/media/screenshots/fbf/fbff1fe1f3cbe33dec8b2fc98bbad4a4.jpg"
                    },
                    {
                        "id": 52523,
                        "image": "https://media.rawg.io/media/screenshots/c18/c187789c40eea061a44c3fb497059c01.jpg"
                    },
                    {
                        "id": 52532,
                        "image": "https://media.rawg.io/media/screenshots/256/256472a369b9f52cfe0b8e85eb49ef19.jpg"
                    },
                    {
                        "id": 52543,
                        "image": "https://media.rawg.io/media/screenshots/38a/38a67aab95a0a5f9fe1a40821a63f0c6.jpg"
                    },
                    {
                        "id": 52545,
                        "image": "https://media.rawg.io/media/screenshots/a1f/a1f2d03a0d0f70f4aed355f6e138f2a4.jpg"
                    },
                    {
                        "id": 52551,
                        "image": "https://media.rawg.io/media/screenshots/03d/03df750d5d64eb8bf0121e92e1f701e0.jpg"
                    }
                ]
            },
            {
                "id": 422,
                "slug": "terraria",
                "name": "Terraria",
                "released": "2011-05-16",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
                "rating": 4.03,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 792,
                        "percent": 43.93
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 631,
                        "percent": 35
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 280,
                        "percent": 15.53
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 100,
                        "percent": 5.55
                    }
                ],
                "ratings_count": 1788,
                "reviews_text_count": 9,
                "added": 9305,
                "added_by_status": {
                    "yet": 298,
                    "owned": 6926,
                    "beaten": 828,
                    "toplay": 130,
                    "dropped": 962,
                    "playing": 161
                },
                "metacritic": 81,
                "playtime": 13,
                "suggestions_count": 309,
                "updated": "2022-02-09T09:57:30",
                "user_game": null,
                "reviews_count": 1803,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 45406,
                            "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": {
                            "minimum": "4.0.3 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 19,
                            "name": "PS Vita",
                            "slug": "ps-vita",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 1946,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Nintendo 3DS",
                            "slug": "nintendo-3ds",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 1743,
                            "image_background": "https://media.rawg.io/media/screenshots/be1/be17f78d80b50121fa2ed6d4562d403e.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": {
                            "minimum": "Ubuntu 14.04<br />Processor: 2.0 Ghz<br />Memory: 2.5GB<br />Hard Disk Space: 200MB <br />Video Card: 128mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable)",
                            "recommended": "Ubuntu 14.04 <br />Processor: Dual Core 3.0 Ghz<br />Memory: 4GB<br />Hard Disk Space: 200MB  <br />Video Card: 256mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable)"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": {
                            "minimum": "OS X 10.9.5<br />Processor: 2.0 Ghz<br />Memory: 2.5GB<br />Hard Disk Space: 200MB  <br />Video Card: 128mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable)",
                            "recommended": "OS X 10.10<br />Processor: Dual Core 3.0 Ghz<br />Memory: 4GB<br />Hard Disk Space: 200MB  <br />Video Card: 256mb Video Memory, capable of OpenGL 3.0+ support (2.1 with ARB extensions acceptable)"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": {
                            "minimum": "XP / Vista / 7 / 8 / 10, <br />Processor: 1.6 Ghz, <br />Memory: 2 GB, <br />Hard Disk Space: 1 GB,  <br />Video Card: 128mb Video Memory, capable of Shader Model 1.1, DirectX®: 9.0c or Greater,<br />Mouse, Keyboard.",
                            "recommended": "7 / 8 / 10<br />Processor: Dual Core 3.0 Ghz <br />Memory: 4GB<br />Hard Disk Space: 1 GB  <br />Video Card: 256mb Video Memory, capable of Shader Model 2.0+<br />DirectX®: 9.0c or Greater"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon XP 1.6 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,200 Мб на винчестере",
                            "recommended": "Pentium 4/Athlon XP 2 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти,400 Мб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 73307,
                            "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": {
                            "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 10,
                            "name": "Wii U",
                            "slug": "wii-u",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 1276,
                            "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2011-05-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 51,
                        "name": "Indie",
                        "slug": "indie",
                        "games_count": 42945,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 83,
                        "name": "Platformer",
                        "slug": "platformer",
                        "games_count": 81187,
                        "image_background": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4127,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 9233,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 11525,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 26244,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 28072,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 426,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    },
                    {
                        "id": 40558,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7988,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 45,
                        "name": "2D",
                        "slug": "2d",
                        "language": "eng",
                        "games_count": 150641,
                        "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3332,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5728,
                        "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 397,
                        "name": "Online multiplayer",
                        "slug": "online-multiplayer",
                        "language": "eng",
                        "games_count": 3802,
                        "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
                    },
                    {
                        "id": 122,
                        "name": "Pixel Graphics",
                        "slug": "pixel-graphics",
                        "language": "eng",
                        "games_count": 68545,
                        "image_background": "https://media.rawg.io/media/screenshots/f81/f81fd968a3161e7d35612d8c4232923e.jpg"
                    },
                    {
                        "id": 468,
                        "name": "role-playing",
                        "slug": "role-playing",
                        "language": "eng",
                        "games_count": 1329,
                        "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
                    },
                    {
                        "id": 336,
                        "name": "controller support",
                        "slug": "controller-support",
                        "language": "eng",
                        "games_count": 294,
                        "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Replay Value",
                        "slug": "replay-value",
                        "language": "eng",
                        "games_count": 1047,
                        "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
                    },
                    {
                        "id": 107,
                        "name": "Family Friendly",
                        "slug": "family-friendly",
                        "language": "eng",
                        "games_count": 3178,
                        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
                    },
                    {
                        "id": 125,
                        "name": "Crafting",
                        "slug": "crafting",
                        "language": "eng",
                        "games_count": 2433,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 39,
                        "name": "Building",
                        "slug": "building",
                        "language": "eng",
                        "games_count": 4032,
                        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
                    },
                    {
                        "id": 337,
                        "name": "overlay",
                        "slug": "overlay",
                        "language": "eng",
                        "games_count": 207,
                        "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
                    },
                    {
                        "id": 59698,
                        "image": "https://media.rawg.io/media/screenshots/3af/3afd69426804e7162edbe03cd9f8d0f4.jpg"
                    },
                    {
                        "id": 59703,
                        "image": "https://media.rawg.io/media/screenshots/48c/48c7e3e1268467b91b24c7da7c6539df.jpg"
                    },
                    {
                        "id": 59705,
                        "image": "https://media.rawg.io/media/screenshots/84b/84b447d4df99d42ffe479c7feb438171.jpg"
                    },
                    {
                        "id": 59711,
                        "image": "https://media.rawg.io/media/screenshots/de0/de053efd6104719567d23fb0dad58b92.jpg"
                    },
                    {
                        "id": 59714,
                        "image": "https://media.rawg.io/media/screenshots/490/4907be07a7771c8a7f0eb30c3a1fadc0.jpg"
                    },
                    {
                        "id": 59718,
                        "image": "https://media.rawg.io/media/screenshots/485/485ce1d6c733357664be153777097af1.jpg"
                    }
                ]
            },
            {
                "id": 23027,
                "slug": "the-walking-dead",
                "name": "The Walking Dead: Season 1",
                "released": "2012-04-23",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
                "rating": 4.31,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1013,
                        "percent": 51.16
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 725,
                        "percent": 36.62
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 168,
                        "percent": 8.48
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 74,
                        "percent": 3.74
                    }
                ],
                "ratings_count": 1967,
                "reviews_text_count": 10,
                "added": 9264,
                "added_by_status": {
                    "yet": 282,
                    "owned": 6471,
                    "beaten": 2089,
                    "toplay": 117,
                    "dropped": 270,
                    "playing": 35
                },
                "metacritic": 92,
                "playtime": 9,
                "suggestions_count": 635,
                "updated": "2021-05-26T02:04:11",
                "user_game": null,
                "reviews_count": 1980,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 73307,
                            "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": {
                            "minimum": "iPhone 3G S, iPhone 4, iPod Touch Fourth Gen, iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8,  Watch 4, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": {
                            "minimum": "XP / Vista / 7 / 8 / 10<br />Processor: 2.0 GHz Pentium 4 or equivalent, <br />Memory: 3 GB RAM, <br />Hard Disk Space: 2 GB Space Free, <br />Video Card: ATI or NVidia card w/ 512 MB RAM (Not recommended for Intel integrated graphics),Direct X 9.0c<br />Sound: Direct X 9.0c sound device.<br />Mouse &amp; Keyboard",
                            "recommended": "7 / 8 / 10<br />Processor: Core 2 Duo 2GHz or equivalent<br />Memory: 3 GB RAM <br />Hard Disk Space: 2 GB Space Free<br />Video Card: ATI or NVidia card w/ 1024 MB RAM (Not recommended for Intel integrated graphics), Direct X 9.0c<br />Sound: Direct X 9.0c sound device<br />Mouse &amp; Keyboard"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": {
                            "minimum": "OS X 10.9.0 or later<br />Processor: 2.3 Ghz Intel <br />Memory: 4 GB RAM <br />Hard Disk Space: 2 GB Space Free <br />Video Card: 512 MB NVidia or ATI graphics card <br />Additional: Not recommended for Intel integrated graphics or Mac Minis or early-generation MacBooks<br />Mouse &amp; Keyboard",
                            "recommended": "OS X 10.9.0 or later<br />Processor: Core 2 Duo 2GHz <br />Memory: 4 GB RAM <br />Hard Disk Space: 2 GB Space Free <br />Video Card: 1024 MB NVidia or ATI graphics card <br />Additional: Not recommended for Intel integrated graphics or Mac Minis or early-generation MacBooks<br />Mouse &amp; Keyboard"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 19,
                            "name": "PS Vita",
                            "slug": "ps-vita",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 1946,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 45403,
                            "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                        },
                        "released_at": "2012-04-23",
                        "requirements_en": {
                            "minimum": "2.3.3 and up"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 257751,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 257752,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 257753,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 257754,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8806,
                            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                        }
                    },
                    {
                        "id": 26433,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 27260,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 43950,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16613,
                            "image_background": "https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg"
                        }
                    },
                    {
                        "id": 308532,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    },
                    {
                        "id": 257765,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5728,
                        "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 8139,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 141,
                        "name": "Point & Click",
                        "slug": "point-click",
                        "language": "eng",
                        "games_count": 9030,
                        "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 2447,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 1994,
                        "image_background": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg"
                    },
                    {
                        "id": 90,
                        "name": "Visual Novel",
                        "slug": "visual-novel",
                        "language": "eng",
                        "games_count": 2999,
                        "image_background": "https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg"
                    },
                    {
                        "id": 232,
                        "name": "Episodic",
                        "slug": "episodic",
                        "language": "eng",
                        "games_count": 400,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 209,
                        "name": "Drama",
                        "slug": "drama",
                        "language": "eng",
                        "games_count": 1663,
                        "image_background": "https://media.rawg.io/media/games/e35/e355efef97722d50bec3482a2263b962.jpg"
                    },
                    {
                        "id": 268,
                        "name": "Comic Book",
                        "slug": "comic-book",
                        "language": "eng",
                        "games_count": 485,
                        "image_background": "https://media.rawg.io/media/screenshots/0cd/0cddbca1ecf96f944a218160c7cdead0.jpg"
                    },
                    {
                        "id": 269,
                        "name": "Quick-Time Events",
                        "slug": "quick-time-events",
                        "language": "eng",
                        "games_count": 232,
                        "image_background": "https://media.rawg.io/media/games/643/6431f15213a854efd273943f2cf6a925.jpg"
                    },
                    {
                        "id": 222,
                        "name": "Choose Your Own Adventure",
                        "slug": "choose-your-own-adventure",
                        "language": "eng",
                        "games_count": 1180,
                        "image_background": "https://media.rawg.io/media/screenshots/fef/fefb9cd7cedb7bf1c2e69f159edb1272.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                    },
                    {
                        "id": 227608,
                        "image": "https://media.rawg.io/media/screenshots/d38/d38c78ec9cc707bf42652452235dbe8c.jpg"
                    },
                    {
                        "id": 227609,
                        "image": "https://media.rawg.io/media/screenshots/bdb/bdb7dd4891bfbb0a80cd49b36ffd1a20.jpg"
                    },
                    {
                        "id": 227610,
                        "image": "https://media.rawg.io/media/screenshots/72b/72b67d15b5ae5538734bac2b195f2976.jpg"
                    },
                    {
                        "id": 227611,
                        "image": "https://media.rawg.io/media/screenshots/74d/74d6a18a7b5592777de8f6a7cdbc91f8.jpg"
                    },
                    {
                        "id": 227612,
                        "image": "https://media.rawg.io/media/screenshots/52a/52aca015b4748b1b0bbbacf33110e983.jpg"
                    },
                    {
                        "id": 227613,
                        "image": "https://media.rawg.io/media/screenshots/94b/94b6701276d06b5b562890601fd6abaa.jpg"
                    }
                ]
            },
            {
                "id": 3287,
                "slug": "batman-arkham-knight",
                "name": "Batman: Arkham Knight",
                "released": "2015-06-22",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
                "rating": 4.22,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1008,
                        "percent": 47.59
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 834,
                        "percent": 39.38
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 225,
                        "percent": 10.62
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 51,
                        "percent": 2.41
                    }
                ],
                "ratings_count": 2103,
                "reviews_text_count": 10,
                "added": 8947,
                "added_by_status": {
                    "yet": 624,
                    "owned": 5784,
                    "beaten": 1794,
                    "toplay": 263,
                    "dropped": 339,
                    "playing": 143
                },
                "metacritic": 81,
                "playtime": 20,
                "suggestions_count": 661,
                "updated": "2020-11-30T02:04:51",
                "user_game": null,
                "reviews_count": 2118,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2015-06-22",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Win 7 SP1, Win 8.1 (64-bit Operating System Required)<br></li><li><strong>Processor:</strong> Intel Core i5-750, 2.67 GHz | AMD Phenom II X4 965, 3.4 GHz<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> Graphics: NVIDIA GeForce GTX 660 (2 GB Memory Minimum)  | AMD Radeon HD 7870 (2 GB Memory Minimum)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 45 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Win 7 SP1, Win 8.1 (64-bit Operating System Required)<br></li><li><strong>Processor:</strong> Intel Core i7-3770, 3.4 GHz | AMD FX-8350, 4.0 GHz<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 760 - 3 GB Memory Recommended | AMD Radeon HD 7950 - 3 GB Memory Recommended<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 55 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2015-06-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2015-06-23",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 3517,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 363768,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    },
                    {
                        "id": 516726,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 9161,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 19503,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 40850,
                        "name": "Steam Leaderboards",
                        "slug": "steam-leaderboards",
                        "language": "eng",
                        "games_count": 5122,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 203,
                        "name": "Beat 'em up",
                        "slug": "beat-em-up",
                        "language": "eng",
                        "games_count": 2124,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 142,
                        "name": "Detective",
                        "slug": "detective",
                        "language": "eng",
                        "games_count": 1944,
                        "image_background": "https://media.rawg.io/media/screenshots/fd4/fd4da6198e718001cd922f13b2e4d5bf.jpeg"
                    },
                    {
                        "id": 268,
                        "name": "Comic Book",
                        "slug": "comic-book",
                        "language": "eng",
                        "games_count": 485,
                        "image_background": "https://media.rawg.io/media/screenshots/0cd/0cddbca1ecf96f944a218160c7cdead0.jpg"
                    },
                    {
                        "id": 234,
                        "name": "Superhero",
                        "slug": "superhero",
                        "language": "eng",
                        "games_count": 1031,
                        "image_background": "https://media.rawg.io/media/screenshots/104/104603a5c863d6fa6be4d4bb1fed6db6.jpeg"
                    },
                    {
                        "id": 328,
                        "name": "Batman",
                        "slug": "batman",
                        "language": "eng",
                        "games_count": 39,
                        "image_background": "https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
                    },
                    {
                        "id": 29984,
                        "image": "https://media.rawg.io/media/screenshots/1ed/1ed7f33789fdb79dbe7ae346f7b24fdf.jpg"
                    },
                    {
                        "id": 29985,
                        "image": "https://media.rawg.io/media/screenshots/c19/c19a4d55f1fa9661b32d43e110a5dbff.jpg"
                    },
                    {
                        "id": 29986,
                        "image": "https://media.rawg.io/media/screenshots/b87/b873d09e51115514cb1445a954dbca9e.jpg"
                    },
                    {
                        "id": 29987,
                        "image": "https://media.rawg.io/media/screenshots/cbe/cbee51d83cafbe75224336859ddfc27e.jpg"
                    },
                    {
                        "id": 29988,
                        "image": "https://media.rawg.io/media/screenshots/d2a/d2ab2d0f10e778c1a867c999515c3f9a.jpg"
                    },
                    {
                        "id": 29989,
                        "image": "https://media.rawg.io/media/screenshots/172/172a4d61d4b6d3b77f19f5826de439f2.jpg"
                    }
                ]
            },
            {
                "id": 16944,
                "slug": "the-witcher-2-assassins-of-kings-enhanced-edition",
                "name": "The Witcher 2: Assassins of Kings Enhanced Edition",
                "released": "2012-04-16",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
                "rating": 4.19,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 871,
                        "percent": 49.97
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 668,
                        "percent": 38.32
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 137,
                        "percent": 7.86
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 67,
                        "percent": 3.84
                    }
                ],
                "ratings_count": 1734,
                "reviews_text_count": 6,
                "added": 8919,
                "added_by_status": {
                    "yet": 664,
                    "owned": 6196,
                    "beaten": 1459,
                    "toplay": 149,
                    "dropped": 375,
                    "playing": 76
                },
                "metacritic": 88,
                "playtime": 7,
                "suggestions_count": 687,
                "updated": "2021-10-17T11:22:46",
                "user_game": null,
                "reviews_count": 1743,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2012-04-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2012-04-16",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP/Vista/7<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel 2.2 GHz Dual-Core or AMD 2.5 GHz Dual-Core<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1.5 GB (Win XP), 2GB (Win Vista/Win 7)<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> GeForce 8800 (512 MB) or Radeon HD3850 (512 MB). Resolution: 1280x720.<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> DirectX 9.29 has to be installed.<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 25GB<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> <br>\t\t\t\t\t\t\t\t\t\t\t\t</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP/Vista/7<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel or AMD Quad-Core<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 3 GB (Win XP), 4GB (Win Vista/Win 7)<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> GeForce 260 (1 GB) or Radeon HD 4850 (1 GB). Resolution: 1440x900.<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> DirectX 9.29 has to be installed.<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 25GB<br>\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> <br>\t\t\t\t\t\t\t\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2012-04-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 18802,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 49468,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 49860,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 676021,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 40850,
                        "name": "Steam Leaderboards",
                        "slug": "steam-leaderboards",
                        "language": "eng",
                        "games_count": 5122,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 10359,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Nudity",
                        "slug": "nudity",
                        "language": "eng",
                        "games_count": 3488,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 1994,
                        "image_background": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 2226,
                        "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 3840,
                        "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 6178,
                        "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 4728,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 283,
                        "name": "Based On A Novel",
                        "slug": "based-on-a-novel",
                        "language": "eng",
                        "games_count": 40,
                        "image_background": "https://media.rawg.io/media/games/799/7998aecf4825c69310b961e365a91bcd.jpg"
                    },
                    {
                        "id": 146,
                        "name": "Nonlinear",
                        "slug": "nonlinear",
                        "language": "eng",
                        "games_count": 852,
                        "image_background": "https://media.rawg.io/media/screenshots/573/573f6403cf6de862ca5b886db8cf449a.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 153356,
                        "image": "https://media.rawg.io/media/screenshots/0c2/0c2a61b9c675c79be87bb3932779062c.jpg"
                    },
                    {
                        "id": 153357,
                        "image": "https://media.rawg.io/media/screenshots/361/36171d84641951be2ca964b667d55d54.jpg"
                    },
                    {
                        "id": 153358,
                        "image": "https://media.rawg.io/media/screenshots/336/3366909fa35d542c7293df9d6b4d0aac.jpg"
                    },
                    {
                        "id": 153359,
                        "image": "https://media.rawg.io/media/screenshots/c67/c672445939555d23ab0acbeba2d4527f.jpg"
                    },
                    {
                        "id": 153360,
                        "image": "https://media.rawg.io/media/screenshots/441/4413f59b847bc08634920b79a2071399.jpg"
                    },
                    {
                        "id": 153361,
                        "image": "https://media.rawg.io/media/screenshots/cb5/cb5517c5b620811050cb791516f2c5da.jpg"
                    }
                ]
            },
            {
                "id": 19103,
                "slug": "half-life-2-lost-coast",
                "name": "Half-Life 2: Lost Coast",
                "released": "2005-10-27",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
                "rating": 3.46,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 451,
                        "percent": 46.45
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 223,
                        "percent": 22.97
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 149,
                        "percent": 15.35
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 148,
                        "percent": 15.24
                    }
                ],
                "ratings_count": 968,
                "reviews_text_count": 1,
                "added": 8854,
                "added_by_status": {
                    "yet": 536,
                    "owned": 7262,
                    "beaten": 863,
                    "toplay": 52,
                    "dropped": 136,
                    "playing": 5
                },
                "metacritic": null,
                "playtime": 1,
                "suggestions_count": 292,
                "updated": "2019-09-17T03:06:39",
                "user_game": null,
                "reviews_count": 971,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2005-10-27",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2005-10-27",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2005-10-27",
                        "requirements_en": {
                            "minimum": "\r\n\t\t\t<p><strong>Minimum:</strong> Pentium 4 2.4GHz or AMD 2800+ Processor, 1GB RAM, DirectX 9 level graphics card, Windows XP, Mouse, Keyboard, Internet Connection<br /></p>\r\n\t\t\t"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 21361,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 4294,
                        "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 38787,
                        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3112,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 172,
                        "name": "Aliens",
                        "slug": "aliens",
                        "language": "eng",
                        "games_count": 5206,
                        "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1357,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 238,
                        "image_background": "https://media.rawg.io/media/screenshots/b6c/b6ca8ba20caa7677aa2f5a506d9d84aa.jpg"
                    },
                    {
                        "id": 178,
                        "name": "Illuminati",
                        "slug": "illuminati",
                        "language": "eng",
                        "games_count": 255,
                        "image_background": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg"
                    },
                    {
                        "id": 319,
                        "name": "Silent Protagonist",
                        "slug": "silent-protagonist",
                        "language": "eng",
                        "games_count": 67,
                        "image_background": "https://media.rawg.io/media/screenshots/5ce/5ce17393fdcd1a4356187e388fa21723.jpeg"
                    },
                    {
                        "id": 296,
                        "name": "Benchmark",
                        "slug": "benchmark",
                        "language": "eng",
                        "games_count": 30,
                        "image_background": "https://media.rawg.io/media/screenshots/d60/d6014eb058a24c9e3028568ace16f229.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 177800,
                        "image": "https://media.rawg.io/media/screenshots/9bf/9bf18c7c6759805fc79aad53f3df6f7d.jpg"
                    },
                    {
                        "id": 177801,
                        "image": "https://media.rawg.io/media/screenshots/9c5/9c5ac8722a23212460d1536e03c5562d.jpg"
                    },
                    {
                        "id": 177802,
                        "image": "https://media.rawg.io/media/screenshots/59d/59d81fcb1b2bff1e56bfe5c489638a46.jpg"
                    },
                    {
                        "id": 177803,
                        "image": "https://media.rawg.io/media/screenshots/259/259239f48f9e32210774b5641527071f.jpg"
                    },
                    {
                        "id": 177804,
                        "image": "https://media.rawg.io/media/screenshots/12b/12b9a7c1311586328718da042e5c16f3.jpg"
                    }
                ]
            },
            {
                "id": 11973,
                "slug": "shadow-of-mordor",
                "name": "Middle-earth: Shadow of Mordor",
                "released": "2014-09-30",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
                "rating": 3.88,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1222,
                        "percent": 59.7
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 371,
                        "percent": 18.12
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 371,
                        "percent": 18.12
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 83,
                        "percent": 4.05
                    }
                ],
                "ratings_count": 2033,
                "reviews_text_count": 11,
                "added": 8843,
                "added_by_status": {
                    "yet": 433,
                    "owned": 5856,
                    "beaten": 1695,
                    "toplay": 252,
                    "dropped": 543,
                    "playing": 64
                },
                "metacritic": 85,
                "playtime": 14,
                "suggestions_count": 646,
                "updated": "2019-11-05T16:13:24",
                "user_game": null,
                "reviews_count": 2047,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2014-09-30",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2014-09-30",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2014-09-30",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2014-09-30",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2014-09-30",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2014-09-30",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2014-09-30",
                        "requirements_en": {
                            "minimum": "OS: 64-bit: Vista SP2, Win 7 SP1, Win 8.1\r\nProcessor: Intel Core i5-750, 2.67 GHz | AMD Phenom II X4 965, 3.4 GHz\r\nMemory: 3 GB RAM\r\nGraphics: NVIDIA GeForce GTX 460 | AMD Radeon HD 5850\r\nDirectX: Version 11\r\nNetwork: Broadband Internet connection\r\nStorage: 44 GB available space",
                            "recommended": "OS: 64-bit: Win 7 SP1, Win 8.1\r\nProcessor: Intel Core i7-3770, 3.4 GHz | AMD FX-8350, 4.0 GHz\r\nMemory: 8 GB RAM\r\nGraphics: NVIDIA GeForce GTX 660 | AMD Radeon HD 7950\r\nDirectX: Version 11\r\nNetwork: Broadband Internet connection\r\nStorage: 57 GB available space"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 13149,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 49397,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 49398,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 284606,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 300508,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4276,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 68,
                        "name": "Hack and Slash",
                        "slug": "hack-and-slash",
                        "language": "eng",
                        "games_count": 2450,
                        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 2226,
                        "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
                    },
                    {
                        "id": 188,
                        "name": "Parkour",
                        "slug": "parkour",
                        "language": "eng",
                        "games_count": 2383,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 6178,
                        "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
                    },
                    {
                        "id": 278,
                        "name": "Assassin",
                        "slug": "assassin",
                        "language": "eng",
                        "games_count": 637,
                        "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
                    },
                    {
                        "id": 205,
                        "name": "Lore-Rich",
                        "slug": "lore-rich",
                        "language": "eng",
                        "games_count": 405,
                        "image_background": "https://media.rawg.io/media/screenshots/49a/49a3868cd3d21f99943fd08fa68db4c7.jpg"
                    },
                    {
                        "id": 283,
                        "name": "Based On A Novel",
                        "slug": "based-on-a-novel",
                        "language": "eng",
                        "games_count": 40,
                        "image_background": "https://media.rawg.io/media/games/799/7998aecf4825c69310b961e365a91bcd.jpg"
                    },
                    {
                        "id": 5842,
                        "name": "steam",
                        "slug": "steam",
                        "language": "eng",
                        "games_count": 719,
                        "image_background": "https://media.rawg.io/media/screenshots/823/82339f9d02a4bd0e3768cbbe120681d0.jpg"
                    },
                    {
                        "id": 7517,
                        "name": "category",
                        "slug": "category",
                        "language": "eng",
                        "games_count": 5,
                        "image_background": "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg"
                    },
                    {
                        "id": 44631,
                        "name": "microtranzations",
                        "slug": "microtranzations",
                        "language": "eng",
                        "games_count": 1,
                        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                    },
                    {
                        "id": 99148,
                        "image": "https://media.rawg.io/media/screenshots/123/1239cbfc3e25664170e8c1d5049a6d91.jpg"
                    },
                    {
                        "id": 99149,
                        "image": "https://media.rawg.io/media/screenshots/47c/47cf2d5a0c37a6262a431a490a57d58d.jpg"
                    },
                    {
                        "id": 99150,
                        "image": "https://media.rawg.io/media/screenshots/9e7/9e7f6fad3ee317a7edf7f3bc6001ba9d.jpg"
                    },
                    {
                        "id": 99151,
                        "image": "https://media.rawg.io/media/screenshots/97f/97fdbb526196705e25ee503bc248b63f.jpg"
                    },
                    {
                        "id": 99152,
                        "image": "https://media.rawg.io/media/screenshots/770/77011e668d64fe192691d56f364fb561.jpg"
                    },
                    {
                        "id": 1827308,
                        "image": "https://media.rawg.io/media/screenshots/1f2/1f2851c47112ca8e1edf7c2c377632a9.jpg"
                    }
                ]
            },
            {
                "id": 416,
                "slug": "grand-theft-auto-san-andreas",
                "name": "Grand Theft Auto: San Andreas",
                "released": "2004-10-26",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
                "rating": 4.51,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1779,
                        "percent": 61.45
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 924,
                        "percent": 31.92
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 141,
                        "percent": 4.87
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 51,
                        "percent": 1.76
                    }
                ],
                "ratings_count": 2886,
                "reviews_text_count": 2,
                "added": 8710,
                "added_by_status": {
                    "yet": 229,
                    "owned": 4880,
                    "beaten": 2627,
                    "toplay": 136,
                    "dropped": 738,
                    "playing": 100
                },
                "metacritic": 93,
                "playtime": 2,
                "suggestions_count": 477,
                "updated": "2021-10-24T15:52:23",
                "user_game": null,
                "reviews_count": 2895,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 80,
                            "name": "Xbox",
                            "slug": "xbox-old",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 704,
                            "image_background": "https://media.rawg.io/media/games/bc7/bc77b1eb8e35df2d90b952bac5342c75.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 45406,
                            "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": {
                            "minimum": "7.0 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 15,
                            "name": "PlayStation 2",
                            "slug": "playstation2",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 1910,
                            "image_background": "https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": {
                            "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Mac OS X Snow Leopard 10.6.8 or higher<br>\t</li><li><strong>Processor:</strong> Intel Core 2 Duo Processor or better<br>\t</li><li><strong>Memory:</strong> 1GB of RAM<br>\t</li><li><strong>Hard Disk Space:</strong> 5.2GB of free hard disk space \t<br>\t</li><li><strong>Video Card:</strong> ATI X1600, NVIDIA 7300GT, Intel X3100 integrated graphics chip, or better<br>\t</li><li><strong>Additional:</strong> This game will NOT run on PowerPC (G3/G4/G5) based Mac systems (PowerMac)\t</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Microsoft® Windows® 2000/XP<br></li><li><strong>Processor:</strong> 1Ghz Pentium III or AMD Athlon Processor<br></li><li><strong>Memory:</strong> 256MB of RAM<br></li><li><strong>Graphics:</strong> 64MB Video Card (Geforce 3 or better)<br></li><li><strong>Hard Drive:</strong> 3.6GB of free hard disk space (minimal install)<br></li><li><strong>Other Requirements:</strong> Software installations required including DirectX and Sony DADC SecuROM<br></li><li><strong>Partner Requirements:</strong> Please check the terms of service of this site before purchasing this software.</li></ul>",
                            "recommended": "Recommended:<br><ul class=\"bb_ul\"><li><strong>Processor:</strong> Intel Pentium 4 or AMD Athlon XP Processor<br></li><li><strong>Memory:</strong> 384MB of RAM (the more the better!)<br></li><li><strong>Graphics:</strong> 128MB (or greater) Video Card (Geforce 6 Series Recommended)<br></li><li><strong>Hard Drive:</strong> 4.7GB of free hard disk space (full install)<br></li><li><strong>Sound Card:</strong> DirectX 9 compatible Sound Card (Sound Blaster Auidgy 2 Recommended)</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium III/Athlon 1 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,3.6 Гб на винчестере",
                            "recommended": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,4.7 Гб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 73307,
                            "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": {
                            "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2004-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 3159,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 466983,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 12383,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 33623,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    },
                    {
                        "id": 420,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    },
                    {
                        "id": 39985,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16616,
                            "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8136,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17488,
                        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8293,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 658,
                        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2111,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 130,
                        "name": "Driving",
                        "slug": "driving",
                        "language": "eng",
                        "games_count": 3956,
                        "image_background": "https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg"
                    },
                    {
                        "id": 62348,
                        "name": "first person mod",
                        "slug": "first-person-mod",
                        "language": "eng",
                        "games_count": 15,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 43578,
                        "name": "Remote Play on Tablet",
                        "slug": "remote-play-on-tablet",
                        "language": "eng",
                        "games_count": 100,
                        "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
                    },
                    {
                        "id": 43577,
                        "name": "Remote Play on Phone",
                        "slug": "remote-play-on-phone",
                        "language": "eng",
                        "games_count": 94,
                        "image_background": "https://media.rawg.io/media/games/61e/61ec0844a59c04cb0b2d2545e464e026.jpg"
                    },
                    {
                        "id": 74338,
                        "name": "karaihb",
                        "slug": "karaihb",
                        "language": "eng",
                        "games_count": 1,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 91290,
                        "image": "https://media.rawg.io/media/screenshots/679/679c267107151f01696d3c8ea71ac650.jpg"
                    },
                    {
                        "id": 91291,
                        "image": "https://media.rawg.io/media/screenshots/560/560610b498ef079e1f45ec83b039cbc7.jpg"
                    },
                    {
                        "id": 91292,
                        "image": "https://media.rawg.io/media/screenshots/c8c/c8cf7ea395e6aa2e46abee36d9d2d699.jpg"
                    },
                    {
                        "id": 91293,
                        "image": "https://media.rawg.io/media/screenshots/191/191445072d9e85b6ad7ffed5152fc17a.jpg"
                    },
                    {
                        "id": 91294,
                        "image": "https://media.rawg.io/media/screenshots/bfe/bfe3c652960e2b6869c608a58d69d327.jpg"
                    },
                    {
                        "id": 91295,
                        "image": "https://media.rawg.io/media/screenshots/436/436134f55bd10cfd7a6fd1ded7487355.jpg"
                    }
                ]
            },
            {
                "id": 41494,
                "slug": "cyberpunk-2077",
                "name": "Cyberpunk 2077",
                "released": "2020-12-10",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
                "rating": 4.03,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 674,
                        "percent": 44.52
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 465,
                        "percent": 30.71
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 249,
                        "percent": 16.45
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 126,
                        "percent": 8.32
                    }
                ],
                "ratings_count": 1451,
                "reviews_text_count": 42,
                "added": 8690,
                "added_by_status": {
                    "yet": 641,
                    "owned": 4371,
                    "beaten": 901,
                    "toplay": 2242,
                    "dropped": 235,
                    "playing": 300
                },
                "metacritic": 73,
                "playtime": 22,
                "suggestions_count": 616,
                "updated": "2021-09-15T16:54:57",
                "user_game": null,
                "reviews_count": 1514,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 186,
                            "name": "Xbox Series S/X",
                            "slug": "xbox-series-x",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 412,
                            "image_background": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
                        },
                        "released_at": "2020-12-10",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 187,
                            "name": "PlayStation 5",
                            "slug": "playstation5",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 474,
                            "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                        },
                        "released_at": "2020-12-10",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2020-12-10",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2020-12-10",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420002,
                            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                        },
                        "released_at": "2020-12-10",
                        "requirements_en": {
                            "minimum": "Minimum:\r\n\r\n\r\nOS: Windows 7 or 10 (64-bit)\r\n\r\nCPU: Intel Core i5-3570K or AMD FX-8310\r\n\r\nRAM: 8GB\r\n\r\nGPU: Nvidia GeForce GTX 780 3GB or AMD Radeon RX 470\r\n\r\nVRAM: 3GB\r\n\r\nDirect X: Version 12\r\n\r\nAvailable Storage Space: 70GB HDD \r\n\r\nGFX Setting Game Can Be Played On: Low",
                            "recommended": "Recommended:\r\n\r\n\r\nOS: Windows 10 (64-bit)\r\n\r\nCPU: Intel Core i7-4790 or AMD Ryzen 3 3200G\r\n\r\nRAM: 12GB\r\n\r\nGPU: Nvidia GeForce GTX 1060 6GB, a GTX 1660 Super, or AMD Radeon RX 590\r\n\r\nVRAM: 6GB\r\n\r\nDirect X: Version 12\r\n\r\nAvailable Storage Space: 70GB SSD\r\n\r\nGFX Setting Game Can Be Played On: High"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107531,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 328185,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 328856,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 328102,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 329088,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    },
                    {
                        "id": 328182,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14250,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 34,
                        "name": "Violent",
                        "slug": "violent",
                        "language": "eng",
                        "games_count": 5068,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 10233,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 468,
                        "name": "role-playing",
                        "slug": "role-playing",
                        "language": "eng",
                        "games_count": 1329,
                        "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Nudity",
                        "slug": "nudity",
                        "language": "eng",
                        "games_count": 3488,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3112,
                        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 797,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 226,
                        "name": "Cyberpunk",
                        "slug": "cyberpunk",
                        "language": "eng",
                        "games_count": 3147,
                        "image_background": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2111,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 478,
                        "name": "3rd-Person Perspective",
                        "slug": "3rd-person-perspective",
                        "language": "eng",
                        "games_count": 86,
                        "image_background": "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg"
                    },
                    {
                        "id": 50,
                        "name": "Sexual Content",
                        "slug": "sexual-content",
                        "language": "eng",
                        "games_count": 3093,
                        "image_background": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg"
                    },
                    {
                        "id": 197,
                        "name": "Robots",
                        "slug": "robots",
                        "language": "eng",
                        "games_count": 6377,
                        "image_background": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg"
                    },
                    {
                        "id": 270,
                        "name": "Blood",
                        "slug": "blood",
                        "language": "eng",
                        "games_count": 1650,
                        "image_background": "https://media.rawg.io/media/screenshots/e0a/e0abaefbcc99ef995be57d857806f2d2.jpeg"
                    },
                    {
                        "id": 78,
                        "name": "America",
                        "slug": "america",
                        "language": "eng",
                        "games_count": 295,
                        "image_background": "https://media.rawg.io/media/screenshots/794/7943eb38a763c014c84ddae7378b865c.jpg"
                    },
                    {
                        "id": 578,
                        "name": "Masterpiece",
                        "slug": "masterpiece",
                        "language": "eng",
                        "games_count": 216,
                        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
                    },
                    {
                        "id": 295,
                        "name": "Soundtrack",
                        "slug": "soundtrack",
                        "language": "eng",
                        "games_count": 2435,
                        "image_background": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg"
                    },
                    {
                        "id": 227,
                        "name": "Hacking",
                        "slug": "hacking",
                        "language": "eng",
                        "games_count": 826,
                        "image_background": "https://media.rawg.io/media/screenshots/f84/f84ce6dafbd0513b61b13e262dad0f54.jpg"
                    },
                    {
                        "id": 467,
                        "name": "Role Playing Game",
                        "slug": "role-playing-game",
                        "language": "eng",
                        "games_count": 17,
                        "image_background": "https://media.rawg.io/media/games/35b/35b2ac9fb20b846488e6b95de02bee61.jpg"
                    },
                    {
                        "id": 683,
                        "name": "Photorealistic",
                        "slug": "photorealistic",
                        "language": "eng",
                        "games_count": 363,
                        "image_background": "https://media.rawg.io/media/screenshots/2f0/2f03c2daf7080d90fcd0be531e42e211.jpg"
                    },
                    {
                        "id": 1500,
                        "name": "immersive",
                        "slug": "immersive",
                        "language": "eng",
                        "games_count": 562,
                        "image_background": "https://media.rawg.io/media/screenshots/04b/04b462a7cd34d53ee2dff00b492cb452.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 5,
                    "name": "Adults Only",
                    "slug": "adults-only"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 779381,
                        "image": "https://media.rawg.io/media/screenshots/814/814c25d6fd1fd34a4e6dade645a3bda7.jpg"
                    },
                    {
                        "id": 779382,
                        "image": "https://media.rawg.io/media/screenshots/622/6220d4a748fd1abd23ece425111e8149.jpg"
                    },
                    {
                        "id": 779383,
                        "image": "https://media.rawg.io/media/screenshots/2ab/2ab0b67e68b6ede6b19d80094b6f7f2a_qTSfS2g.jpg"
                    },
                    {
                        "id": 779384,
                        "image": "https://media.rawg.io/media/screenshots/cd2/cd22af9d6ac593440defac6082760e4a.jpg"
                    },
                    {
                        "id": 779385,
                        "image": "https://media.rawg.io/media/screenshots/9b5/9b51535beb9d9e416cb9aac874091334.jpg"
                    },
                    {
                        "id": 779386,
                        "image": "https://media.rawg.io/media/screenshots/d84/d84d3a16c1e2cb24dcf73e0108d78455.jpg"
                    }
                ]
            },
            {
                "id": 10035,
                "slug": "hitman",
                "name": "Hitman",
                "released": "2016-03-11",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
                "rating": 3.93,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 930,
                        "percent": 55.82
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 391,
                        "percent": 23.47
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 260,
                        "percent": 15.61
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 85,
                        "percent": 5.1
                    }
                ],
                "ratings_count": 1661,
                "reviews_text_count": 3,
                "added": 8668,
                "added_by_status": {
                    "yet": 665,
                    "owned": 6134,
                    "beaten": 891,
                    "toplay": 299,
                    "dropped": 558,
                    "playing": 121
                },
                "metacritic": 83,
                "playtime": 7,
                "suggestions_count": 559,
                "updated": "2021-05-26T02:11:08",
                "user_game": null,
                "reviews_count": 1666,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2016-03-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2016-03-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2016-03-11",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS 64-bit Windows 7<br></li><li><strong>Processor:</strong> Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 660 / Radeon HD 7870<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 50 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS 64-bit Windows 7 / 64-bit Windows 8 (8.1) or Windows 10<br></li><li><strong>Processor:</strong> Intel CPU Core i7 3770 3,4 GHz / AMD CPU AMD FX-8350 4 GHz<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 50 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2016-03-11",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> macOS 10.12.5<br></li><li><strong>Processor:</strong> 2.0Ghz Intel Core i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> 2GB AMD M290 or better (see notes for more details)<br></li><li><strong>Storage:</strong> 68 GB available space<br></li><li><strong>Additional Notes:</strong> <strong>The game is supported on the following Macs. To check your Mac model and when it was released, select About This Mac from the Apple menu on your menu bar.</strong>   <ul class=\"bb_ul\">  <li>*    All 27&quot; iMacs released since Late 2014 </li><li>*    All 15&quot; MacBook Pros released since 2016  </li><li>*    All Mac Pros released since Late 2013 </li></ul>    ——— <strong>The following Macs are capable of running the game but do not consistently meet the standards required for official support.</strong> <ul class=\"bb_ul\">  <li>*    All 15&quot; MacBook Pros with an AMD graphics card released in 2015 </li></ul> ——— <ul class=\"bb_ul\"><strong>Please note: HITMAN for macOS will launch with support for AMD graphics cards only. We hope to announce more details regarding support for Nvidia and Intel graphics cards shortly.</strong></ul></li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63413,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        },
                        "released_at": "2016-03-11",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Ubuntu 16.04 or Steam OS 2.0<br></li><li><strong>Processor:</strong> Intel Core i5-2500K/AMD FX-8350<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 680/AMD R9 270X graphics card or better*<br></li><li><strong>Storage:</strong> 67 GB available space<br></li><li><strong>Additional Notes:</strong> *NVIDIA graphics cards require driver version 375.26. AMD graphics cards require MESA 13.0.3 or better. Intel graphics cards will not be supported on release.</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Ubuntu 16.10 or Steam OS 2.0<br></li><li><strong>Processor:</strong> Intel Core i7 3770<br></li><li><strong>Memory:</strong> 16 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 970/AMD R9 290 graphics card or better*<br></li><li><strong>Storage:</strong> 67 GB available space<br></li><li><strong>Additional Notes:</strong> *NVIDIA graphics cards require driver version 375.26. AMD graphics cards require MESA 13.0.3 or better. Intel graphics cards will not be supported on release.</li></ul>"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 14,
                        "name": "Simulation",
                        "slug": "simulation",
                        "games_count": 54859,
                        "image_background": "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 38172,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 10947,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 35171,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 593095,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 792,
                            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4565,
                        "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4670,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2985,
                        "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Nudity",
                        "slug": "nudity",
                        "language": "eng",
                        "games_count": 3488,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2111,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 278,
                        "name": "Assassin",
                        "slug": "assassin",
                        "language": "eng",
                        "games_count": 637,
                        "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
                    },
                    {
                        "id": 232,
                        "name": "Episodic",
                        "slug": "episodic",
                        "language": "eng",
                        "games_count": 400,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 178,
                        "name": "Illuminati",
                        "slug": "illuminati",
                        "language": "eng",
                        "games_count": 255,
                        "image_background": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg"
                    },
                    {
                        "id": 216,
                        "name": "Heist",
                        "slug": "heist",
                        "language": "eng",
                        "games_count": 322,
                        "image_background": "https://media.rawg.io/media/screenshots/7c0/7c0c75c3ce1a82a680522c5255ff7c5f.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 5,
                    "name": "Adults Only",
                    "slug": "adults-only"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 76082,
                        "image": "https://media.rawg.io/media/screenshots/ef6/ef6c0a92d08a99d2e405cac53c597d10.jpg"
                    },
                    {
                        "id": 76083,
                        "image": "https://media.rawg.io/media/screenshots/fb3/fb3c23014fcb24a28fb94af0a009906c.jpg"
                    },
                    {
                        "id": 76084,
                        "image": "https://media.rawg.io/media/screenshots/202/202293192d1b6245c8a1e252d9df604c.jpg"
                    },
                    {
                        "id": 76085,
                        "image": "https://media.rawg.io/media/screenshots/278/278bd63ee564982e816ec7fe802df420.jpg"
                    },
                    {
                        "id": 76086,
                        "image": "https://media.rawg.io/media/screenshots/002/0021b0e5db6959989d90979abba68c8d.jpg"
                    },
                    {
                        "id": 76087,
                        "image": "https://media.rawg.io/media/screenshots/c8a/c8a537532ab8ce8750293a1fc41ee7f8.jpg"
                    }
                ]
            },
            {
                "id": 17822,
                "slug": "the-witcher-enhanced-edition-directors-cut",
                "name": "The Witcher: Enhanced Edition Director's Cut",
                "released": "2008-09-16",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
                "rating": 4.06,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 716,
                        "percent": 44.47
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 600,
                        "percent": 37.27
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 189,
                        "percent": 11.74
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 105,
                        "percent": 6.52
                    }
                ],
                "ratings_count": 1600,
                "reviews_text_count": 4,
                "added": 8632,
                "added_by_status": {
                    "yet": 574,
                    "owned": 6243,
                    "beaten": 1183,
                    "toplay": 105,
                    "dropped": 432,
                    "playing": 95
                },
                "metacritic": 86,
                "playtime": 5,
                "suggestions_count": 670,
                "updated": "2021-10-17T11:19:53",
                "user_game": null,
                "reviews_count": 1610,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2008-09-16",
                        "requirements_en": {
                            "minimum": "<strong>Minimum: </strong><br>\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Supported OS: </strong>Microsoft® Windows® /XP/Vista<br>\t\t\t\t\t</li><li><strong>DirectX Version: </strong>DirectX 9.0c (included) or higher<br>\t\t\t\t\t</li><li><strong>Processor: </strong>Intel Pentium 4 2.4 GHz or Athlon 64 +2800 (Intel Pentium 4 3.0 GHz or AMD Athlon 64 +3000 recommended). Athlon XP series, such as the Athlon XP +2400, is not supported<br>\t\t\t\t\t</li><li><strong>Graphics: </strong>NVIDIA GeForce 6600 or ATI Radeon 9800 or better (NVIDIA GeForce 7800 GTX or ATI Radeon X1950 XT or better recommended)<br>\t\t\t\t\t</li><li><strong>Memory: </strong>1 GB RAM (2 GB RAM recommended)<br>\t\t\t\t\t</li><li><strong>Sound: </strong>DirectX version 9.0c-compatible sound card<br>\t\t\t\t\t</li><li><strong>Hard Drive: </strong>15 GB Free</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon 64 2.4 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти,8.5 Гб на винчестере",
                            "recommended": "Core 2 Duo E6400/Athlon 64 X2 4200+,2 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2008-09-16",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X 10.8, 10.9, 10.10<br>\t</li><li><strong>Processor:</strong> Intel Core i5<br>\t</li><li><strong>Memory:</strong> 4 GB of RAM<br>\t</li><li><strong>Graphics:</strong> nVidia GeForce GT 650m (1440x900), AMD Radeon HD 6750M (1440x900) or Intel HD 5000 (1366x768)<br>\t</li><li><strong>Hard Drive:</strong> 14.25 GB free space<br><br>Display compatibility notice: 1440x900 resolution is the recommended resolution for best performance. It is not recommended to use native Retina resolutions.</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X 10.8, 10.9, 10.10<br>\t</li><li><strong>Processor:</strong> Intel Core i5 or Core i7<br>\t</li><li><strong>Memory:</strong> 4GB RAM<br>\t</li><li><strong>Graphics:</strong> nVidia GeForce GT 650m (1440x900), AMD Radeon HD 6970M (1920x1080) or Intel Iris Pro 5200 (1440x900)<br>\t</li><li><strong>Hard Drive:</strong> 14.25 GB free space<br><br>Display compatibility notice: 1440x900 resolution is the recommended resolution for best performance. It is not recommended to use native Retina resolutions.</li></ul>"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43884,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 302602,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3978,
                            "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                        }
                    },
                    {
                        "id": 19891,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11377,
                        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4818,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6386,
                        "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 18005,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1651,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Nudity",
                        "slug": "nudity",
                        "language": "eng",
                        "games_count": 3488,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1322,
                        "image_background": "https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 1994,
                        "image_background": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 2226,
                        "image_background": "https://media.rawg.io/media/games/cd7/cd78e63236e86f97f4b2e45f3843eb3d.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 3840,
                        "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 6178,
                        "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 4728,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 283,
                        "name": "Based On A Novel",
                        "slug": "based-on-a-novel",
                        "language": "eng",
                        "games_count": 40,
                        "image_background": "https://media.rawg.io/media/games/799/7998aecf4825c69310b961e365a91bcd.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    },
                    {
                        "id": 164262,
                        "image": "https://media.rawg.io/media/screenshots/6dc/6dc151862452fba8dfb510ba7131cefd.jpg"
                    },
                    {
                        "id": 164263,
                        "image": "https://media.rawg.io/media/screenshots/5c7/5c7f753ec6b9ca51eb477b016e1f6126.jpg"
                    },
                    {
                        "id": 164264,
                        "image": "https://media.rawg.io/media/screenshots/698/6983ac0ee603750b50212a0822a2cab7.jpg"
                    },
                    {
                        "id": 164265,
                        "image": "https://media.rawg.io/media/screenshots/7c5/7c545f5c7ae02355e8b76ee3d28bd12a.jpg"
                    },
                    {
                        "id": 164266,
                        "image": "https://media.rawg.io/media/screenshots/5bf/5bf40b1e7d50240c867a0ca1540b7b07.jpg"
                    },
                    {
                        "id": 164267,
                        "image": "https://media.rawg.io/media/screenshots/39c/39c47322a4dad4f3ac87cc97557c9a2d.jpg"
                    }
                ]
            },
            {
                "id": 4427,
                "slug": "bioshock-2",
                "name": "BioShock 2",
                "released": "2010-02-09",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
                "rating": 4.06,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 844,
                        "percent": 52.75
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 506,
                        "percent": 31.62
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 173,
                        "percent": 10.81
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 77,
                        "percent": 4.81
                    }
                ],
                "ratings_count": 1589,
                "reviews_text_count": 6,
                "added": 8609,
                "added_by_status": {
                    "yet": 612,
                    "owned": 5986,
                    "beaten": 1503,
                    "toplay": 162,
                    "dropped": 307,
                    "playing": 39
                },
                "metacritic": 88,
                "playtime": 3,
                "suggestions_count": 642,
                "updated": "2020-11-20T02:34:40",
                "user_game": null,
                "reviews_count": 1600,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 6256,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        },
                        "released_at": "2010-02-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                        },
                        "released_at": "2010-02-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4712,
                            "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                        },
                        "released_at": "2010-02-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 420003,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        },
                        "released_at": "2010-02-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP, Vista, Windows 7<br></li><li><strong>Processor:</strong> AMD Athlon 64 Processor 3800+ 2.4Ghz or better, Intel Pentium 4 530 3.0Ghz Processor or better<br></li><li><strong>Memory:</strong> 2GB<br></li><li><strong>Graphics:</strong> NVIDIA 7800GT 256MB graphics card or better, ATI Radeon X1900 256MB graphics card or better<br></li><li><strong>DirectX®:</strong> DirectX 9.0c<br></li><li><strong>Hard Drive:</strong> 11GB<br></li><li><strong>Sound:</strong> 100% DirectX 9.0C compliant sound card or onboard sound</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>Processor:</strong> AMD Athlon 64 X2 5200+ Dual Core 2.60Ghz, Intel Core 2 Duo E6420 Dual Core 2.13Ghz<br></li><li><strong>Memory:</strong> 3GB<br></li><li><strong>Graphics:</strong> NVIDIA 8800GT 512MB graphics card or better, ATI Radeon HD4830 512MB graphics card or better<br></li><li><strong>Other Requirements:</strong> Initial installation requires one-time internet connection; software installations required including Microsoft Visual C++2008 Runtime Libraries, Microsoft DirectX.</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4 3 ГГц/Athlon 64 3800+,2 Гб памяти,GeForce 7800 GT/Radeon X1900,11 Гб на винчестере,интернет-соединение",
                            "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,3 Гб памяти,GeForce 8800/Radeon HD 2600,11 Гб на винчестере,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 88074,
                            "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                        },
                        "released_at": "2010-02-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2757,
                            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                        },
                        "released_at": "2010-02-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3635,
                            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                        },
                        "released_at": "2010-02-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 143282,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 49119,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 79405,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71649,
                            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg"
                        }
                    },
                    {
                        "id": 440408,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 4701,
                            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                        }
                    },
                    {
                        "id": 19732,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60625,
                            "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                        }
                    },
                    {
                        "id": 4755,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7733,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 33604,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1917,
                            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                        }
                    }
                ],
                "clip": null,
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 153647,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 25031,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29764,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19965,
                        "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11582,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3191,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13821,
                        "image_background": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13548,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19401,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13347,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 30091,
                        "image_background": "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9847,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4377,
                        "image_background": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9956,
                        "image_background": "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1357,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 154,
                        "name": "Steampunk",
                        "slug": "steampunk",
                        "language": "eng",
                        "games_count": 883,
                        "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
                    },
                    {
                        "id": 305,
                        "name": "Linear",
                        "slug": "linear",
                        "language": "eng",
                        "games_count": 2058,
                        "image_background": "https://media.rawg.io/media/games/d46/d46373f39458670305704ef089387520.jpg"
                    },
                    {
                        "id": 250,
                        "name": "Underwater",
                        "slug": "underwater",
                        "language": "eng",
                        "games_count": 1602,
                        "image_background": "https://media.rawg.io/media/screenshots/75c/75c109a3b66c84787f137d948292c44a_DIwNRKi.jpg"
                    },
                    {
                        "id": 281,
                        "name": "Philisophical",
                        "slug": "philisophical",
                        "language": "eng",
                        "games_count": 39,
                        "image_background": "https://media.rawg.io/media/screenshots/9e9/9e9a37d215d8a0d566ad287707bd403c.jpg"
                    }
                ],
                "esrb_rating": null,
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 162566,
                        "image": "https://media.rawg.io/media/screenshots/a13/a130b342c9830f9c56d65c204638fe17.jpg"
                    },
                    {
                        "id": 162567,
                        "image": "https://media.rawg.io/media/screenshots/f38/f38a519f1545ef5cda66676c155cc5b8.jpg"
                    },
                    {
                        "id": 162568,
                        "image": "https://media.rawg.io/media/screenshots/996/996d1459d3f2ec1f03daba488d96c521.jpg"
                    },
                    {
                        "id": 162569,
                        "image": "https://media.rawg.io/media/screenshots/8da/8daab3b2c3d9e355f636e7d408a08315.jpg"
                    },
                    {
                        "id": 162570,
                        "image": "https://media.rawg.io/media/screenshots/f5c/f5c713b706c6b153b6a22ca1b08a1f5a.jpg"
                    },
                    {
                        "id": 162571,
                        "image": "https://media.rawg.io/media/screenshots/b7c/b7c32275a6be8134744322f1204ce176.jpg"
                    }
                ]
            }
        ],
        "seo_title": "All Games",
        "seo_description": "",
        "seo_keywords": "",
        "seo_h1": "All Games",
        "noindex": false,
        "nofollow": false,
        "description": "",
        "filters": {
            "years": [
                {
                    "from": 2020,
                    "to": 2022,
                    "filter": "2020-01-01,2022-12-31",
                    "decade": 2020,
                    "years": [
                        {
                            "year": 2022,
                            "count": 32144,
                            "nofollow": false
                        },
                        {
                            "year": 2021,
                            "count": 172805,
                            "nofollow": false
                        },
                        {
                            "year": 2020,
                            "count": 132869,
                            "nofollow": false
                        }
                    ],
                    "nofollow": true,
                    "count": 337818
                },
                {
                    "from": 2010,
                    "to": 2019,
                    "filter": "2010-01-01,2019-12-31",
                    "decade": 2010,
                    "years": [
                        {
                            "year": 2019,
                            "count": 79636,
                            "nofollow": false
                        },
                        {
                            "year": 2018,
                            "count": 71476,
                            "nofollow": false
                        },
                        {
                            "year": 2017,
                            "count": 56486,
                            "nofollow": true
                        },
                        {
                            "year": 2016,
                            "count": 41311,
                            "nofollow": true
                        },
                        {
                            "year": 2015,
                            "count": 26429,
                            "nofollow": true
                        },
                        {
                            "year": 2014,
                            "count": 15610,
                            "nofollow": true
                        },
                        {
                            "year": 2013,
                            "count": 6325,
                            "nofollow": true
                        },
                        {
                            "year": 2012,
                            "count": 5362,
                            "nofollow": true
                        },
                        {
                            "year": 2011,
                            "count": 4304,
                            "nofollow": true
                        },
                        {
                            "year": 2010,
                            "count": 3856,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 310795
                },
                {
                    "from": 2000,
                    "to": 2009,
                    "filter": "2000-01-01,2009-12-31",
                    "decade": 2000,
                    "years": [
                        {
                            "year": 2009,
                            "count": 3080,
                            "nofollow": true
                        },
                        {
                            "year": 2008,
                            "count": 1991,
                            "nofollow": true
                        },
                        {
                            "year": 2007,
                            "count": 1532,
                            "nofollow": true
                        },
                        {
                            "year": 2006,
                            "count": 1244,
                            "nofollow": true
                        },
                        {
                            "year": 2005,
                            "count": 1108,
                            "nofollow": true
                        },
                        {
                            "year": 2004,
                            "count": 1127,
                            "nofollow": true
                        },
                        {
                            "year": 2003,
                            "count": 1110,
                            "nofollow": true
                        },
                        {
                            "year": 2002,
                            "count": 969,
                            "nofollow": true
                        },
                        {
                            "year": 2001,
                            "count": 1079,
                            "nofollow": true
                        },
                        {
                            "year": 2000,
                            "count": 970,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 14210
                },
                {
                    "from": 1990,
                    "to": 1999,
                    "filter": "1990-01-01,1999-12-31",
                    "decade": 1990,
                    "years": [
                        {
                            "year": 1999,
                            "count": 758,
                            "nofollow": true
                        },
                        {
                            "year": 1998,
                            "count": 702,
                            "nofollow": true
                        },
                        {
                            "year": 1997,
                            "count": 847,
                            "nofollow": true
                        },
                        {
                            "year": 1996,
                            "count": 720,
                            "nofollow": true
                        },
                        {
                            "year": 1995,
                            "count": 827,
                            "nofollow": true
                        },
                        {
                            "year": 1994,
                            "count": 781,
                            "nofollow": true
                        },
                        {
                            "year": 1993,
                            "count": 731,
                            "nofollow": true
                        },
                        {
                            "year": 1992,
                            "count": 631,
                            "nofollow": true
                        },
                        {
                            "year": 1991,
                            "count": 560,
                            "nofollow": true
                        },
                        {
                            "year": 1990,
                            "count": 516,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 7073
                },
                {
                    "from": 1980,
                    "to": 1989,
                    "filter": "1980-01-01,1989-12-31",
                    "decade": 1980,
                    "years": [
                        {
                            "year": 1989,
                            "count": 416,
                            "nofollow": true
                        },
                        {
                            "year": 1988,
                            "count": 307,
                            "nofollow": true
                        },
                        {
                            "year": 1987,
                            "count": 334,
                            "nofollow": true
                        },
                        {
                            "year": 1986,
                            "count": 245,
                            "nofollow": true
                        },
                        {
                            "year": 1985,
                            "count": 229,
                            "nofollow": true
                        },
                        {
                            "year": 1984,
                            "count": 183,
                            "nofollow": true
                        },
                        {
                            "year": 1983,
                            "count": 206,
                            "nofollow": true
                        },
                        {
                            "year": 1982,
                            "count": 144,
                            "nofollow": true
                        },
                        {
                            "year": 1981,
                            "count": 65,
                            "nofollow": true
                        },
                        {
                            "year": 1980,
                            "count": 35,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 2164
                },
                {
                    "from": 1970,
                    "to": 1979,
                    "filter": "1970-01-01,1979-12-31",
                    "decade": 1970,
                    "years": [
                        {
                            "year": 1979,
                            "count": 15,
                            "nofollow": true
                        },
                        {
                            "year": 1978,
                            "count": 17,
                            "nofollow": true
                        },
                        {
                            "year": 1977,
                            "count": 13,
                            "nofollow": true
                        },
                        {
                            "year": 1976,
                            "count": 7,
                            "nofollow": true
                        },
                        {
                            "year": 1975,
                            "count": 3,
                            "nofollow": true
                        },
                        {
                            "year": 1974,
                            "count": 2,
                            "nofollow": true
                        },
                        {
                            "year": 1973,
                            "count": 1,
                            "nofollow": true
                        },
                        {
                            "year": 1972,
                            "count": 2,
                            "nofollow": true
                        },
                        {
                            "year": 1971,
                            "count": 5,
                            "nofollow": true
                        },
                        {
                            "year": 1970,
                            "count": 1,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 66
                },
                {
                    "from": 1960,
                    "to": 1969,
                    "filter": "1960-01-01,1969-12-31",
                    "decade": 1960,
                    "years": [
                        {
                            "year": 1962,
                            "count": 1,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 1
                },
                {
                    "from": 1950,
                    "to": 1959,
                    "filter": "1950-01-01,1959-12-31",
                    "decade": 1950,
                    "years": [
                        {
                            "year": 1957,
                            "count": 1,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 1
                }
            ]
        },
        "nofollow_collections": [
            "stores"
        ]
    })


    const [spinner, setSpinner] = useState(false)

    const [recents, setRecents] = useState([])
    const parseRecents = (num) => {
        if (recents.length < 10) {
            let tempArray = [...recents]
            const insert = (arr, index, newItem) => [
                ...arr.slice(0, index),
                newItem,
                ...arr.slice(index)
            ]
            tempArray = insert(tempArray, 0, num)
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
            tempArray = insert(tempArray, 0, num)
            setRecents(tempArray)
            console.log(recents);
        }
    }


    // const getData = async()=>{
    //     setSpinner(true)
    //     const searchFetch= await fetch(`https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f&page=${currentPage}&page_size=40`)

    //     let searchResult = await searchFetch.json()
    //     let tempResults = searchResult.results
    //     tempResults =  tempResults.map(result=>{
    //         return {...result, libraryOptionsOpen:false}
    //     })
    //     searchResult.results = tempResults

    //     setTest(searchResult)
    //     setSpinner(false)
    //     console.log(searchResult);
    // }
    const [librarySections, setLibrarySections] = useState({
        uncategorized: [],
        currently_playing: [],
        completed: [],
        played: [],
        not_played: []
    })

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
    const sortGames=(selected)=>{
        const tempArray = {...test}
        const tempResults = tempArray.results
        tempResults = tempResults.sort((a,b)=>(a[selected] > b[selected]?1 :-1))
        tempArray.results = tempResults
        setTest(tempArray)
    }


    useEffect(() => {
        console.log(librarySections);
    }, [librarySections])



    return (
        <GameContext.Provider value={{
            test,
            sideBarOpen,
            setSideBarOpen,
            currentPage, setCurrentPage,
            paginationRange,
            spinner, recents, parseRecents, parsePlatform, parseRatingColour,
            addToLibrary, librarySections,
            toggleLibraryOptions, removeFromLibrary,

            sortGames
        }}>
            {children}
        </GameContext.Provider>
    )
}

const GameConsumer = GameContext.Consumer

export { GameContext, GameProvider, GameConsumer }