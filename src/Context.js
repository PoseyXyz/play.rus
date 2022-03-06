import React, { useEffect, useState } from 'react'

const GameContext = React.createContext()

const GameProvider = ({ children }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [test] = useState({
        count: 694973,
        next: "https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f&page=2",
        previous: null,
        results: [
            {
                id: 3498,
                slug: "grand-theft-auto-v",
                "name": "Grand Theft Auto V",
                released: "2013-09-17",
                tba: false,
                background_image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                rating: 4.48,
                rating_top: 5,
                ratings: [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 3256,
                        "percent": 58.97
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1819,
                        "percent": 32.95
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 353,
                        "percent": 6.39
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 93,
                        "percent": 1.68
                    }
                ],
                "ratings_count": 5451,
                "reviews_text_count": 39,
                "added": 16876,
                "added_by_status": {
                    "yet": 417,
                    "owned": 9981,
                    "beaten": 4544,
                    "toplay": 486,
                    "dropped": 843,
                    "playing": 605
                },
                "metacritic": 97,
                "playtime": 71,
                "suggestions_count": 405,
                "updated": "2021-08-20T12:42:02",
                "user_game": null,
                "reviews_count": 5521,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            name: "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5180,
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 438095,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 791,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                        }
                    },
                    {
                        "id": 290376,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4790,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6331,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17388,
                        "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4533,
                        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8244,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2082,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 654,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
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
                        "count": 3982,
                        "percent": 77.94
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 799,
                        "percent": 15.64
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 206,
                        "percent": 4.03
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 122,
                        "percent": 2.39
                    }
                ],
                "ratings_count": 5036,
                "reviews_text_count": 51,
                "added": 15500,
                "added_by_status": {
                    "yet": 853,
                    "owned": 9018,
                    "beaten": 3591,
                    "toplay": 631,
                    "dropped": 667,
                    "playing": 740
                },
                "metacritic": 92,
                "playtime": 48,
                "suggestions_count": 674,
                "updated": "2022-01-02T10:49:58",
                "user_game": null,
                "reviews_count": 5109,
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
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
                            "games_count": 4708,
                            "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43661,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
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
                            "games_count": 3972,
                            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                        }
                    },
                    {
                        "id": 3565,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 305376,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 676022,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8805,
                            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4790,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6331,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 17888,
                        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4533,
                        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4355,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ee16f28336821b24ad15e07878f754.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9895,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Nudity",
                        "slug": "nudity",
                        "language": "eng",
                        "games_count": 3455,
                        "image_background": "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg"
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
                        "games_count": 1307,
                        "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 1966,
                        "image_background": "https://media.rawg.io/media/games/23b/23b42b7a896140f4ce1d0df8c42fa012.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 2208,
                        "image_background": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 3807,
                        "image_background": "https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 6144,
                        "image_background": "https://media.rawg.io/media/games/8a3/8a3e91293e38dcc1126ae83d31bfd6e4.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 4696,
                        "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
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
                        "count": 3197,
                        "percent": 70.53
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1120,
                        "percent": 24.71
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
                "ratings_count": 4494,
                "reviews_text_count": 26,
                "added": 14683,
                "added_by_status": {
                    "yet": 481,
                    "owned": 9102,
                    "beaten": 4268,
                    "toplay": 282,
                    "dropped": 432,
                    "playing": 118
                },
                "metacritic": 95,
                "playtime": 11,
                "suggestions_count": 556,
                "updated": "2020-08-03T02:17:38",
                "user_game": null,
                "reviews_count": 4533,
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 80544,
                        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 13134,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 4526,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11332,
                        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17388,
                        "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7610,
                        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8244,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 75,
                        "name": "Local Co-Op",
                        "slug": "local-co-op",
                        "language": "eng",
                        "games_count": 4322,
                        "image_background": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3972,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1173,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 25,
                        "name": "Space",
                        "slug": "space",
                        "language": "eng",
                        "games_count": 34202,
                        "image_background": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1462,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
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
                        "games_count": 1249,
                        "image_background": "https://media.rawg.io/media/games/f03/f030ebc8073430ce93a83c2d93ef163d.jpg"
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
                        "count": 1939,
                        "percent": 60.59
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 809,
                        "percent": 25.28
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 360,
                        "percent": 11.25
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 92,
                        "percent": 2.88
                    }
                ],
                "ratings_count": 3179,
                "reviews_text_count": 9,
                "added": 13215,
                "added_by_status": {
                    "yet": 513,
                    "owned": 8700,
                    "beaten": 3316,
                    "toplay": 200,
                    "dropped": 393,
                    "playing": 93
                },
                "metacritic": 86,
                "playtime": 11,
                "suggestions_count": 635,
                "updated": "2021-12-31T12:52:20",
                "user_game": null,
                "reviews_count": 3200,
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                            "games_count": 791,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
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
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 5640,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 218233,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16490,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 79036,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71638,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6331,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7610,
                        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14148,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4651,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2082,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 74,
                        "name": "Retro",
                        "slug": "retro",
                        "language": "eng",
                        "games_count": 28928,
                        "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 10168,
                        "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 782,
                        "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
                    },
                    {
                        "id": 269,
                        "name": "Quick-Time Events",
                        "slug": "quick-time-events",
                        "language": "eng",
                        "games_count": 227,
                        "image_background": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
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
                        "games_count": 1372,
                        "image_background": "https://media.rawg.io/media/screenshots/5f7/5f72fb91f10f4a1c24fe1861877701c5.jpg"
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
                        "count": 2182,
                        "percent": 57.29
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1209,
                        "percent": 31.74
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 341,
                        "percent": 8.95
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 77,
                        "percent": 2.02
                    }
                ],
                "ratings_count": 3778,
                "reviews_text_count": 22,
                "added": 12847,
                "added_by_status": {
                    "yet": 407,
                    "owned": 7871,
                    "beaten": 2916,
                    "toplay": 310,
                    "dropped": 1017,
                    "playing": 326
                },
                "metacritic": 94,
                "playtime": 46,
                "suggestions_count": 603,
                "updated": "2020-07-06T04:26:04",
                "user_game": null,
                "reviews_count": 3809,
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 4708,
                            "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43661,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 15144,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 32919,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8805,
                            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11332,
                        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4790,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6331,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8109,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 17888,
                        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4533,
                        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4355,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ee16f28336821b24ad15e07878f754.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1173,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 654,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 468,
                        "name": "role-playing",
                        "slug": "role-playing",
                        "language": "eng",
                        "games_count": 1329,
                        "image_background": "https://media.rawg.io/media/games/23b/23b42b7a896140f4ce1d0df8c42fa012.jpg"
                    },
                    {
                        "id": 121,
                        "name": "Character Customization",
                        "slug": "character-customization",
                        "language": "eng",
                        "games_count": 2234,
                        "image_background": "https://media.rawg.io/media/games/5a4/5a4e70bb8a862829dbaa398aa5f66afc.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 2208,
                        "image_background": "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 3807,
                        "image_background": "https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 6144,
                        "image_background": "https://media.rawg.io/media/games/8a3/8a3e91293e38dcc1126ae83d31bfd6e4.jpg"
                    },
                    {
                        "id": 205,
                        "name": "Lore-Rich",
                        "slug": "lore-rich",
                        "language": "eng",
                        "games_count": 400,
                        "image_background": "https://media.rawg.io/media/screenshots/49a/49a3868cd3d21f99943fd08fa68db4c7.jpg"
                    },
                    {
                        "id": 215,
                        "name": "Dragons",
                        "slug": "dragons",
                        "language": "eng",
                        "games_count": 2054,
                        "image_background": "https://media.rawg.io/media/screenshots/a9e/a9e717295c03af6550b66163ed3cc6f3.jpg"
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
                        "count": 1277,
                        "percent": 47.26
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 717,
                        "percent": 26.54
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 421,
                        "percent": 15.58
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 287,
                        "percent": 10.62
                    }
                ],
                "ratings_count": 2678,
                "reviews_text_count": 18,
                "added": 12585,
                "added_by_status": {
                    "yet": 204,
                    "owned": 9655,
                    "beaten": 716,
                    "toplay": 60,
                    "dropped": 1430,
                    "playing": 520
                },
                "metacritic": 81,
                "playtime": 63,
                "suggestions_count": 598,
                "updated": "2020-08-07T06:18:15",
                "user_game": null,
                "reviews_count": 2702,
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 11489,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2959,
                        "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3972,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1173,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 654,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 5130,
                        "image_background": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg"
                    },
                    {
                        "id": 70,
                        "name": "War",
                        "slug": "war",
                        "language": "eng",
                        "games_count": 7472,
                        "image_background": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1610,
                        "image_background": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 932,
                        "image_background": "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg"
                    },
                    {
                        "id": 131,
                        "name": "Fast-Paced",
                        "slug": "fast-paced",
                        "language": "eng",
                        "games_count": 8615,
                        "image_background": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg"
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
                        "games_count": 907,
                        "image_background": "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg"
                    },
                    {
                        "id": 170,
                        "name": "Competitive",
                        "slug": "competitive",
                        "language": "eng",
                        "games_count": 870,
                        "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
                    },
                    {
                        "id": 77,
                        "name": "Realistic",
                        "slug": "realistic",
                        "language": "eng",
                        "games_count": 2246,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
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
                        "games_count": 804,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                        "percent": 53.34
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 829,
                        "percent": 31.47
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 307,
                        "percent": 11.66
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 93,
                        "percent": 3.53
                    }
                ],
                "ratings_count": 2620,
                "reviews_text_count": 8,
                "added": 12555,
                "added_by_status": {
                    "yet": 311,
                    "owned": 9258,
                    "beaten": 1950,
                    "toplay": 78,
                    "dropped": 839,
                    "playing": 119
                },
                "metacritic": 89,
                "playtime": 9,
                "suggestions_count": 595,
                "updated": "2021-11-24T08:44:34",
                "user_game": null,
                "reviews_count": 2634,
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11332,
                        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 29889,
                        "image_background": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4266,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5709,
                        "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
                    },
                    {
                        "id": 75,
                        "name": "Local Co-Op",
                        "slug": "local-co-op",
                        "language": "eng",
                        "games_count": 4322,
                        "image_background": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2959,
                        "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3972,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1173,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 8111,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 654,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 2429,
                        "image_background": "https://media.rawg.io/media/games/c73/c73c4ffebfe968ba0982a56c2b5020ef.jpg"
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
                        "games_count": 1045,
                        "image_background": "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg"
                    },
                    {
                        "id": 17,
                        "name": "Survival Horror",
                        "slug": "survival-horror",
                        "language": "eng",
                        "games_count": 5683,
                        "image_background": "https://media.rawg.io/media/games/9d5/9d5aa70db8c16566d79712df6417d13a.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 932,
                        "image_background": "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg"
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
                        "percent": 61.35
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1234,
                        "percent": 32.62
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
                "ratings_count": 3754,
                "reviews_text_count": 20,
                "added": 12428,
                "added_by_status": {
                    "yet": 336,
                    "owned": 7719,
                    "beaten": 3844,
                    "toplay": 185,
                    "dropped": 282,
                    "playing": 62
                },
                "metacritic": 90,
                "playtime": 4,
                "suggestions_count": 289,
                "updated": "2021-11-24T09:14:31",
                "user_game": null,
                "reviews_count": 3783,
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 45111,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
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
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 80544,
                        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
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
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 40973,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16490,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8109,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17388,
                        "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7610,
                        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8244,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1462,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 38544,
                        "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
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
                        "games_count": 14975,
                        "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1919,
                        "image_background": "https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg"
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
                        "games_count": 1249,
                        "image_background": "https://media.rawg.io/media/games/f03/f030ebc8073430ce93a83c2d93ef163d.jpg"
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
                        "count": 1873,
                        "percent": 55.4
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1127,
                        "percent": 33.33
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
                "ratings_count": 3350,
                "reviews_text_count": 20,
                "added": 12287,
                "added_by_status": {
                    "yet": 645,
                    "owned": 7419,
                    "beaten": 3483,
                    "toplay": 298,
                    "dropped": 363,
                    "playing": 79
                },
                "metacritic": 94,
                "playtime": 12,
                "suggestions_count": 611,
                "updated": "2020-08-03T02:19:32",
                "user_game": null,
                "reviews_count": 3381,
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
                            "games_count": 4708,
                            "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 71638,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 461035,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8805,
                            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
                        }
                    },
                    {
                        "id": 4382,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 13084,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11332,
                        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 17888,
                        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4266,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 115,
                        "name": "Controller",
                        "slug": "controller",
                        "language": "eng",
                        "games_count": 6825,
                        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1351,
                        "image_background": "https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg"
                    },
                    {
                        "id": 154,
                        "name": "Steampunk",
                        "slug": "steampunk",
                        "language": "eng",
                        "games_count": 880,
                        "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
                    },
                    {
                        "id": 305,
                        "name": "Linear",
                        "slug": "linear",
                        "language": "eng",
                        "games_count": 2020,
                        "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
                    },
                    {
                        "id": 208,
                        "name": "Alternate History",
                        "slug": "alternate-history",
                        "language": "eng",
                        "games_count": 1131,
                        "image_background": "https://media.rawg.io/media/games/c64/c64d2f63cabeab9126693b7d39539c8d.jpg"
                    },
                    {
                        "id": 317,
                        "name": "Time Travel",
                        "slug": "time-travel",
                        "language": "eng",
                        "games_count": 1335,
                        "image_background": "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg"
                    },
                    {
                        "id": 287,
                        "name": "Political",
                        "slug": "political",
                        "language": "eng",
                        "games_count": 400,
                        "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
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
                        "count": 1337,
                        "percent": 43.66
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1113,
                        "percent": 36.35
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 414,
                        "percent": 13.52
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 198,
                        "percent": 6.47
                    }
                ],
                "ratings_count": 3031,
                "reviews_text_count": 21,
                "added": 12244,
                "added_by_status": {
                    "yet": 651,
                    "owned": 7939,
                    "beaten": 2743,
                    "toplay": 278,
                    "dropped": 496,
                    "playing": 137
                },
                "metacritic": 83,
                "playtime": 7,
                "suggestions_count": 534,
                "updated": "2020-06-29T10:40:03",
                "user_game": null,
                "reviews_count": 3062,
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                            "games_count": 73294,
                            "image_background": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg"
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
                            "games_count": 45111,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                            "games_count": 3972,
                            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                        }
                    },
                    {
                        "id": 3702,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 35603,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 217695,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16490,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 71638,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6331,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 7610,
                        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9895,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 141,
                        "name": "Point & Click",
                        "slug": "point-click",
                        "language": "eng",
                        "games_count": 8978,
                        "image_background": "https://media.rawg.io/media/games/99d/99d7fadd2342f575d238a4e1f5c542b6.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 38544,
                        "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                    },
                    {
                        "id": 117,
                        "name": "Mystery",
                        "slug": "mystery",
                        "language": "eng",
                        "games_count": 8913,
                        "image_background": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 1966,
                        "image_background": "https://media.rawg.io/media/games/23b/23b42b7a896140f4ce1d0df8c42fa012.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 1315,
                        "image_background": "https://media.rawg.io/media/games/c88/c88463dcf1b3fc79c54a59c30076344a.jpg"
                    },
                    {
                        "id": 91,
                        "name": "Walking Simulator",
                        "slug": "walking-simulator",
                        "language": "eng",
                        "games_count": 4916,
                        "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
                    },
                    {
                        "id": 406,
                        "name": "Story",
                        "slug": "story",
                        "language": "eng",
                        "games_count": 9857,
                        "image_background": "https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 4696,
                        "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
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
                        "games_count": 1335,
                        "image_background": "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg"
                    },
                    {
                        "id": 295,
                        "name": "Soundtrack",
                        "slug": "soundtrack",
                        "language": "eng",
                        "games_count": 2429,
                        "image_background": "https://media.rawg.io/media/screenshots/d78/d780252de14a2d9d7a53284bd32d6b94.jpg"
                    },
                    {
                        "id": 302,
                        "name": "Time Manipulation",
                        "slug": "time-manipulation",
                        "language": "eng",
                        "games_count": 256,
                        "image_background": "https://media.rawg.io/media/screenshots/f28/f28b1fb1d63cfcbeb3aaced527604497.jpg"
                    },
                    {
                        "id": 992,
                        "name": "student",
                        "slug": "student",
                        "language": "eng",
                        "games_count": 1261,
                        "image_background": "https://media.rawg.io/media/screenshots/167/167a2c507dd06237e6d975f7828cd205.jpg"
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
                        "count": 1286,
                        "percent": 47.72
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 857,
                        "percent": 31.8
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 449,
                        "percent": 16.66
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 103,
                        "percent": 3.82
                    }
                ],
                "ratings_count": 2679,
                "reviews_text_count": 12,
                "added": 12237,
                "added_by_status": {
                    "yet": 477,
                    "owned": 8560,
                    "beaten": 1853,
                    "toplay": 155,
                    "dropped": 991,
                    "playing": 201
                },
                "metacritic": 89,
                "playtime": 10,
                "suggestions_count": 666,
                "updated": "2020-08-07T02:30:06",
                "user_game": null,
                "reviews_count": 2695,
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43661,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 213037,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16490,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 11088,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "games_count": 71638,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11332,
                        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4790,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17388,
                        "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8244,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4355,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ee16f28336821b24ad15e07878f754.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3080,
                        "image_background": "https://media.rawg.io/media/games/bcd/bcd9896b7c3b9fa80e5dcb67c961e2be.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 1315,
                        "image_background": "https://media.rawg.io/media/games/c88/c88463dcf1b3fc79c54a59c30076344a.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1919,
                        "image_background": "https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg"
                    },
                    {
                        "id": 98,
                        "name": "Loot",
                        "slug": "loot",
                        "language": "eng",
                        "games_count": 1475,
                        "image_background": "https://media.rawg.io/media/screenshots/333/333e7121b588929dcf08eb99aff39ce5.jpg"
                    },
                    {
                        "id": 166,
                        "name": "Stylized",
                        "slug": "stylized",
                        "language": "eng",
                        "games_count": 2448,
                        "image_background": "https://media.rawg.io/media/screenshots/a46/a46801970d3b30d7fc63d6db72b3dc0e.jpg"
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
                        "count": 2832,
                        "percent": 72.86
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 721,
                        "percent": 18.55
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 220,
                        "percent": 5.66
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 114,
                        "percent": 2.93
                    }
                ],
                "ratings_count": 3811,
                "reviews_text_count": 60,
                "added": 11620,
                "added_by_status": {
                    "yet": 700,
                    "owned": 6052,
                    "beaten": 2245,
                    "toplay": 1384,
                    "dropped": 449,
                    "playing": 790
                },
                "metacritic": 96,
                "playtime": 21,
                "suggestions_count": 615,
                "updated": "2020-11-23T02:33:54",
                "user_game": null,
                "reviews_count": 3887,
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
                            "games_count": 417863,
                            "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 142715,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 374316,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 791,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                        }
                    },
                    {
                        "id": 384218,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60344,
                            "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4790,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6331,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8109,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4266,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4533,
                        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14148,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    },
                    {
                        "id": 34,
                        "name": "Violent",
                        "slug": "violent",
                        "language": "eng",
                        "games_count": 5056,
                        "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2082,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 5130,
                        "image_background": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1610,
                        "image_background": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 1308,
                        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
                    },
                    {
                        "id": 89,
                        "name": "Historical",
                        "slug": "historical",
                        "language": "eng",
                        "games_count": 1791,
                        "image_background": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 782,
                        "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
                    },
                    {
                        "id": 77,
                        "name": "Realistic",
                        "slug": "realistic",
                        "language": "eng",
                        "games_count": 2246,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
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
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/screenshots/570/5704316c673fab6994db582e0f43f924.jpg"
                    },
                    {
                        "id": 45878,
                        "name": "Online PvP",
                        "slug": "online-pvp",
                        "language": "eng",
                        "games_count": 1955,
                        "image_background": "https://media.rawg.io/media/screenshots/928/928515db0188ec1703eee284d19a4cc0.jpg"
                    },
                    {
                        "id": 78,
                        "name": "America",
                        "slug": "america",
                        "language": "eng",
                        "games_count": 291,
                        "image_background": "https://media.rawg.io/media/screenshots/b79/b797325a14fc62444ca6032d59aa1c75.jpg"
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
                        "games_count": 1002,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 5452,
                        "name": "3rd-person",
                        "slug": "3rd-person",
                        "language": "eng",
                        "games_count": 84,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
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
                        "count": 1988,
                        "percent": 63.55
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 867,
                        "percent": 27.72
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 187,
                        "percent": 5.98
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 86,
                        "percent": 2.75
                    }
                ],
                "ratings_count": 3115,
                "reviews_text_count": 11,
                "added": 11239,
                "added_by_status": {
                    "yet": 518,
                    "owned": 7118,
                    "beaten": 2899,
                    "toplay": 229,
                    "dropped": 398,
                    "playing": 77
                },
                "metacritic": 96,
                "playtime": 7,
                "suggestions_count": 564,
                "updated": "2019-09-17T15:58:20",
                "user_game": null,
                "reviews_count": 3128,
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 45111,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 41441,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16490,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11332,
                        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8109,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 29889,
                        "image_background": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 8111,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 654,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
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
                        "games_count": 14975,
                        "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
                    },
                    {
                        "id": 172,
                        "name": "Aliens",
                        "slug": "aliens",
                        "language": "eng",
                        "games_count": 5185,
                        "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1351,
                        "image_background": "https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg"
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
                        "percent": 53.79
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1010,
                        "percent": 36.29
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 190,
                        "percent": 6.83
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 86,
                        "percent": 3.09
                    }
                ],
                "ratings_count": 2751,
                "reviews_text_count": 21,
                "added": 11230,
                "added_by_status": {
                    "yet": 499,
                    "owned": 7216,
                    "beaten": 2602,
                    "toplay": 248,
                    "dropped": 563,
                    "playing": 102
                },
                "metacritic": 96,
                "playtime": 3,
                "suggestions_count": 658,
                "updated": "2022-02-11T13:42:23",
                "user_game": null,
                "reviews_count": 2783,
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 4708,
                            "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
                            "games_count": 73294,
                            "image_background": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 79531,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 71638,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 20580,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8109,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 29889,
                        "image_background": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4355,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ee16f28336821b24ad15e07878f754.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9895,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 1351,
                        "image_background": "https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg"
                    },
                    {
                        "id": 154,
                        "name": "Steampunk",
                        "slug": "steampunk",
                        "language": "eng",
                        "games_count": 880,
                        "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
                    },
                    {
                        "id": 208,
                        "name": "Alternate History",
                        "slug": "alternate-history",
                        "language": "eng",
                        "games_count": 1131,
                        "image_background": "https://media.rawg.io/media/games/c64/c64d2f63cabeab9126693b7d39539c8d.jpg"
                    },
                    {
                        "id": 287,
                        "name": "Political",
                        "slug": "political",
                        "language": "eng",
                        "games_count": 400,
                        "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
                    },
                    {
                        "id": 250,
                        "name": "Underwater",
                        "slug": "underwater",
                        "language": "eng",
                        "games_count": 1596,
                        "image_background": "https://media.rawg.io/media/screenshots/cb2/cb20ef935f2eb18c73e382ee6c3e00b4.jpg"
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
                        "count": 1433,
                        "percent": 52.15
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 975,
                        "percent": 35.48
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 257,
                        "percent": 9.35
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 83,
                        "percent": 3.02
                    }
                ],
                "ratings_count": 2716,
                "reviews_text_count": 21,
                "added": 11037,
                "added_by_status": {
                    "yet": 464,
                    "owned": 7097,
                    "beaten": 2611,
                    "toplay": 236,
                    "dropped": 545,
                    "playing": 84
                },
                "metacritic": 88,
                "playtime": 3,
                "suggestions_count": 185,
                "updated": "2021-08-13T19:30:26",
                "user_game": null,
                "reviews_count": 2748,
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 45111,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 4708,
                            "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
                            "games_count": 73294,
                            "image_background": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                    },
                    {
                        "id": 51,
                        "name": "Indie",
                        "slug": "indie",
                        "games_count": 42738,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 80544,
                        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
                    },
                    {
                        "id": 83,
                        "name": "Platformer",
                        "slug": "platformer",
                        "games_count": 80783,
                        "image_background": "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg"
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
                            "games_count": 71638,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 3679,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 10311,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 26852,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3972,
                            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
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
                            "games_count": 8805,
                            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
                        }
                    },
                    {
                        "id": 40035,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16490,
                            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                        }
                    },
                    {
                        "id": 335541,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 791,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 45,
                        "name": "2D",
                        "slug": "2d",
                        "language": "eng",
                        "games_count": 149842,
                        "image_background": "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 29889,
                        "image_background": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 10317,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 115,
                        "name": "Controller",
                        "slug": "controller",
                        "language": "eng",
                        "games_count": 6825,
                        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 9895,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
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
                        "games_count": 38544,
                        "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                    },
                    {
                        "id": 113,
                        "name": "Side Scroller",
                        "slug": "side-scroller",
                        "language": "eng",
                        "games_count": 7225,
                        "image_background": "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg"
                    },
                    {
                        "id": 114,
                        "name": "Physics",
                        "slug": "physics",
                        "language": "eng",
                        "games_count": 14975,
                        "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 782,
                        "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
                    },
                    {
                        "id": 83,
                        "name": "Puzzle-Platformer",
                        "slug": "puzzle-platformer",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
                    },
                    {
                        "id": 46,
                        "name": "Surreal",
                        "slug": "surreal",
                        "language": "eng",
                        "games_count": 3469,
                        "image_background": "https://media.rawg.io/media/games/0a3/0a3a4838159eaf02f7b3d9a805d516d3.jpg"
                    },
                    {
                        "id": 112,
                        "name": "Minimalist",
                        "slug": "minimalist",
                        "language": "eng",
                        "games_count": 10875,
                        "image_background": "https://media.rawg.io/media/screenshots/c5a/c5aeaed5c1c58e57de76341ed746345b.jpeg"
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
                        "count": 1566,
                        "percent": 52.8
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1122,
                        "percent": 37.83
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 216,
                        "percent": 7.28
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 62,
                        "percent": 2.09
                    }
                ],
                "ratings_count": 2932,
                "reviews_text_count": 25,
                "added": 10632,
                "added_by_status": {
                    "yet": 460,
                    "owned": 6687,
                    "beaten": 2257,
                    "toplay": 400,
                    "dropped": 551,
                    "playing": 277
                },
                "metacritic": 85,
                "playtime": 11,
                "suggestions_count": 644,
                "updated": "2021-10-31T22:57:16",
                "user_game": null,
                "reviews_count": 2966,
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 4708,
                            "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 2571,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 38659,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8805,
                            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8109,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 29889,
                        "image_background": "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 10317,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 4266,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 8111,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 1315,
                        "image_background": "https://media.rawg.io/media/games/c88/c88463dcf1b3fc79c54a59c30076344a.jpg"
                    },
                    {
                        "id": 131,
                        "name": "Fast-Paced",
                        "slug": "fast-paced",
                        "language": "eng",
                        "games_count": 8615,
                        "image_background": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg"
                    },
                    {
                        "id": 271,
                        "name": "Remake",
                        "slug": "remake",
                        "language": "eng",
                        "games_count": 1372,
                        "image_background": "https://media.rawg.io/media/games/d54/d54f0267a042f44c032d8ca264584ecf.jpg"
                    },
                    {
                        "id": 270,
                        "name": "Blood",
                        "slug": "blood",
                        "language": "eng",
                        "games_count": 1646,
                        "image_background": "https://media.rawg.io/media/screenshots/570/5704316c673fab6994db582e0f43f924.jpg"
                    },
                    {
                        "id": 187,
                        "name": "Demons",
                        "slug": "demons",
                        "language": "eng",
                        "games_count": 1341,
                        "image_background": "https://media.rawg.io/media/games/202/2023cb28ef354720a2ca4652727687d0.jpg"
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
                        "count": 1303,
                        "percent": 47.73
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 727,
                        "percent": 26.63
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 556,
                        "percent": 20.37
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 144,
                        "percent": 5.27
                    }
                ],
                "ratings_count": 2705,
                "reviews_text_count": 17,
                "added": 10486,
                "added_by_status": {
                    "yet": 492,
                    "owned": 6612,
                    "beaten": 1758,
                    "toplay": 309,
                    "dropped": 1049,
                    "playing": 266
                },
                "metacritic": 84,
                "playtime": 43,
                "suggestions_count": 443,
                "updated": "2020-07-06T04:52:40",
                "user_game": null,
                "reviews_count": 2730,
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 43661,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 13248,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 11332,
                        "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 13762,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 13459,
                        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4790,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 6331,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 4533,
                        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 5709,
                        "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14148,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 4355,
                        "image_background": "https://media.rawg.io/media/games/a0e/a0ee16f28336821b24ad15e07878f754.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 2082,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 2429,
                        "image_background": "https://media.rawg.io/media/games/c73/c73c4ffebfe968ba0982a56c2b5020ef.jpg"
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
                "rating": 3.57,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 993,
                        "percent": 45.93
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 686,
                        "percent": 31.73
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 304,
                        "percent": 14.06
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 179,
                        "percent": 8.28
                    }
                ],
                "ratings_count": 2137,
                "reviews_text_count": 19,
                "added": 10342,
                "added_by_status": {
                    "yet": 343,
                    "owned": 7722,
                    "beaten": 655,
                    "toplay": 133,
                    "dropped": 1116,
                    "playing": 373
                },
                "metacritic": 82,
                "playtime": 5,
                "suggestions_count": 1202,
                "updated": "2021-08-10T12:37:08",
                "user_game": null,
                "reviews_count": 2162,
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 6254,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                            "games_count": 194037,
                            "image_background": "https://media.rawg.io/media/games/0e5/0e5e869f2e8f496b3f09e00187ea94fc.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 107006,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                    },
                    {
                        "id": 59,
                        "name": "Massively Multiplayer",
                        "slug": "massively-multiplayer",
                        "games_count": 2779,
                        "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                        }
                    },
                    {
                        "id": 326831,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 19807,
                        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 4790,
                        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 13274,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 14148,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 4270,
                        "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
                    },
                    {
                        "id": 397,
                        "name": "Online multiplayer",
                        "slug": "online-multiplayer",
                        "language": "eng",
                        "games_count": 3802,
                        "image_background": "https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 10168,
                        "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
                    },
                    {
                        "id": 25,
                        "name": "Space",
                        "slug": "space",
                        "language": "eng",
                        "games_count": 34202,
                        "image_background": "https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 5130,
                        "image_background": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 3080,
                        "image_background": "https://media.rawg.io/media/games/bcd/bcd9896b7c3b9fa80e5dcb67c961e2be.jpg"
                    },
                    {
                        "id": 172,
                        "name": "Aliens",
                        "slug": "aliens",
                        "language": "eng",
                        "games_count": 5185,
                        "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
                    },
                    {
                        "id": 406,
                        "name": "Story",
                        "slug": "story",
                        "language": "eng",
                        "games_count": 9857,
                        "image_background": "https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg"
                    },
                    {
                        "id": 1465,
                        "name": "combat",
                        "slug": "combat",
                        "language": "eng",
                        "games_count": 6409,
                        "image_background": "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg"
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
                        "games_count": 6098,
                        "image_background": "https://media.rawg.io/media/games/4d3/4d36d90fd20f0c0e7e66a99fd624b03a.jpg"
                    },
                    {
                        "id": 158,
                        "name": "MMORPG",
                        "slug": "mmorpg",
                        "language": "eng",
                        "games_count": 1039,
                        "image_background": "https://media.rawg.io/media/screenshots/d68/d684c5ec81b8ea46bfd4b5c3bae4007f.jpg"
                    },
                    {
                        "id": 98,
                        "name": "Loot",
                        "slug": "loot",
                        "language": "eng",
                        "games_count": 1475,
                        "image_background": "https://media.rawg.io/media/screenshots/333/333e7121b588929dcf08eb99aff39ce5.jpg"
                    },
                    {
                        "id": 171,
                        "name": "PvE",
                        "slug": "pve",
                        "language": "eng",
                        "games_count": 1669,
                        "image_background": "https://media.rawg.io/media/screenshots/a65/a65e9f01832997a4d913b3ea86319af4.jpg"
                    },
                    {
                        "id": 2030,
                        "name": "city",
                        "slug": "city",
                        "language": "eng",
                        "games_count": 8373,
                        "image_background": "https://media.rawg.io/media/games/4a5/4a5ce21f529cf8fd4670b4c3188b25df.jpg"
                    },
                    {
                        "id": 205,
                        "name": "Lore-Rich",
                        "slug": "lore-rich",
                        "language": "eng",
                        "games_count": 400,
                        "image_background": "https://media.rawg.io/media/screenshots/49a/49a3868cd3d21f99943fd08fa68db4c7.jpg"
                    },
                    {
                        "id": 744,
                        "name": "friends",
                        "slug": "friends",
                        "language": "eng",
                        "games_count": 14246,
                        "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
                    },
                    {
                        "id": 5816,
                        "name": "console",
                        "slug": "console",
                        "language": "eng",
                        "games_count": 1327,
                        "image_background": "https://media.rawg.io/media/games/d04/d040389a4450e86fdf00face1dd84276.jpg"
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
                        "games_count": 1353,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 1484,
                        "name": "skill",
                        "slug": "skill",
                        "language": "eng",
                        "games_count": 3247,
                        "image_background": "https://media.rawg.io/media/games/4a5/4a5ce21f529cf8fd4670b4c3188b25df.jpg"
                    },
                    {
                        "id": 3046,
                        "name": "destroy",
                        "slug": "destroy",
                        "language": "eng",
                        "games_count": 4173,
                        "image_background": "https://media.rawg.io/media/screenshots/164/164d779b57110998e8033be05e86cf49.jpg"
                    },
                    {
                        "id": 1743,
                        "name": "collect",
                        "slug": "collect",
                        "language": "eng",
                        "games_count": 7245,
                        "image_background": "https://media.rawg.io/media/screenshots/833/833ed43c10cdcb03981b988c57786739.jpg"
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
                        "games_count": 2828,
                        "image_background": "https://media.rawg.io/media/games/aeb/aeb33772a46dfe88fa9bd2f93068c91c.jpg"
                    },
                    {
                        "id": 1527,
                        "name": "rain",
                        "slug": "rain",
                        "language": "eng",
                        "games_count": 797,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 691,
                        "name": "quick",
                        "slug": "quick",
                        "language": "eng",
                        "games_count": 858,
                        "image_background": "https://media.rawg.io/media/screenshots/952/9522f259c79b8139915765c621c2b4c9.jpg"
                    },
                    {
                        "id": 18426,
                        "name": "enemy",
                        "slug": "enemy",
                        "language": "eng",
                        "games_count": 1614,
                        "image_background": "https://media.rawg.io/media/screenshots/203/20345d9164f477415f7c118a540797ed.jpg"
                    },
                    {
                        "id": 2863,
                        "name": "darkness",
                        "slug": "darkness",
                        "language": "eng",
                        "games_count": 292,
                        "image_background": "https://media.rawg.io/media/screenshots/ead/eadedfa15d4d08212995d06aca94e3f0.jpg"
                    },
                    {
                        "id": 6580,
                        "name": "defender",
                        "slug": "defender",
                        "language": "eng",
                        "games_count": 134,
                        "image_background": "https://media.rawg.io/media/screenshots/d3d/d3d9d183c713eb29abbd6d4821e14759.jpg"
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
                        "count": 1066,
                        "percent": 45.19
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 584,
                        "percent": 24.76
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 481,
                        "percent": 20.39
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 228,
                        "percent": 9.67
                    }
                ],
                "ratings_count": 2338,
                "reviews_text_count": 18,
                "added": 10297,
                "added_by_status": {
                    "yet": 144,
                    "owned": 8000,
                    "beaten": 625,
                    "toplay": 33,
                    "dropped": 1359,
                    "playing": 136
                },
                "metacritic": 92,
                "playtime": 9,
                "suggestions_count": 518,
                "updated": "2020-07-08T03:57:06",
                "user_game": null,
                "reviews_count": 2359,
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "games_count": 87710,
                            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
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
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 8109,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17388,
                        "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 8244,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 4270,
                        "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2959,
                        "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3972,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1173,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 654,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1462,
                        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
                    },
                    {
                        "id": 40832,
                        "name": "Cross-Platform Multiplayer",
                        "slug": "cross-platform-multiplayer",
                        "language": "eng",
                        "games_count": 1874,
                        "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
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
                        "games_count": 1610,
                        "image_background": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 932,
                        "image_background": "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg"
                    },
                    {
                        "id": 125,
                        "name": "Crafting",
                        "slug": "crafting",
                        "language": "eng",
                        "games_count": 2415,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
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
                        "games_count": 870,
                        "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
                    },
                    {
                        "id": 197,
                        "name": "Robots",
                        "slug": "robots",
                        "language": "eng",
                        "games_count": 6355,
                        "image_background": "https://media.rawg.io/media/screenshots/bac/bac1670a3d55d603171224368cb8bed8.jpg"
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
                        "games_count": 2169,
                        "image_background": "https://media.rawg.io/media/games/f39/f394c09e4760251c58e9ab9f45d7718c.jpg"
                    },
                    {
                        "id": 179,
                        "name": "Cartoon",
                        "slug": "cartoon",
                        "language": "eng",
                        "games_count": 2994,
                        "image_background": "https://media.rawg.io/media/screenshots/e43/e4322029541bfafde4c3f9e78c91cb10.jpg"
                    },
                    {
                        "id": 265,
                        "name": "Class-Based",
                        "slug": "class-based",
                        "language": "eng",
                        "games_count": 226,
                        "image_background": "https://media.rawg.io/media/games/28a/28a895c2e05e508dca8fd73c51492d59.jpg"
                    },
                    {
                        "id": 245,
                        "name": "Trading",
                        "slug": "trading",
                        "language": "eng",
                        "games_count": 804,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                        "count": 869,
                        "percent": 51.36
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 473,
                        "percent": 27.96
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 180,
                        "percent": 10.64
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 170,
                        "percent": 10.05
                    }
                ],
                "ratings_count": 1680,
                "reviews_text_count": 10,
                "added": 10165,
                "added_by_status": {
                    "yet": 388,
                    "owned": 8020,
                    "beaten": 562,
                    "toplay": 71,
                    "dropped": 1025,
                    "playing": 99
                },
                "metacritic": 79,
                "playtime": 9,
                "suggestions_count": 420,
                "updated": "2019-11-05T16:34:08",
                "user_game": null,
                "reviews_count": 1692,
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
                            "games_count": 63091,
                            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
                            "games_count": 417838,
                            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                            "image_background": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
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
                        "games_count": 142709,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 48847,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                            "games_count": 7732,
                            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        }
                    },
                    {
                        "id": 10780,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 60341,
                            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                        }
                    },
                    {
                        "id": 27939,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8805,
                            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
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
                        "games_count": 152739,
                        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 24915,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 29649,
                        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7584,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 11526,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3190,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 7946,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 3239,
                        "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 19237,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 9795,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 3313,
                        "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 17388,
                        "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 4651,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 2959,
                        "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1610,
                        "image_background": "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 932,
                        "image_background": "https://media.rawg.io/media/games/388/388935d851846f8ec747fffc7c765800.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 2104,
                        "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
                    },
                    {
                        "id": 216,
                        "name": "Heist",
                        "slug": "heist",
                        "language": "eng",
                        "games_count": 320,
                        "image_background": "https://media.rawg.io/media/games/006/0069de15664d51d22285c18ab516a089.jpg"
                    },
                    {
                        "id": 171,
                        "name": "PvE",
                        "slug": "pve",
                        "language": "eng",
                        "games_count": 1669,
                        "image_background": "https://media.rawg.io/media/screenshots/a65/a65e9f01832997a4d913b3ea86319af4.jpg"
                    },
                    {
                        "id": 274,
                        "name": "Gun Customization",
                        "slug": "gun-customization",
                        "language": "eng",
                        "games_count": 226,
                        "image_background": "https://media.rawg.io/media/screenshots/98d/98d1fdaf30e3fb5dfd3f0fad2e8e9d6e.jpg"
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
                            "count": 29198,
                            "nofollow": false
                        },
                        {
                            "year": 2021,
                            "count": 172792,
                            "nofollow": false
                        },
                        {
                            "year": 2020,
                            "count": 132857,
                            "nofollow": false
                        }
                    ],
                    "nofollow": true,
                    "count": 334847
                },
                {
                    "from": 2010,
                    "to": 2019,
                    "filter": "2010-01-01,2019-12-31",
                    "decade": 2010,
                    "years": [
                        {
                            "year": 2019,
                            "count": 79631,
                            "nofollow": false
                        },
                        {
                            "year": 2018,
                            "count": 71468,
                            "nofollow": false
                        },
                        {
                            "year": 2017,
                            "count": 56472,
                            "nofollow": true
                        },
                        {
                            "year": 2016,
                            "count": 41292,
                            "nofollow": true
                        },
                        {
                            "year": 2015,
                            "count": 26403,
                            "nofollow": true
                        },
                        {
                            "year": 2014,
                            "count": 15577,
                            "nofollow": true
                        },
                        {
                            "year": 2013,
                            "count": 6312,
                            "nofollow": true
                        },
                        {
                            "year": 2012,
                            "count": 5350,
                            "nofollow": true
                        },
                        {
                            "year": 2011,
                            "count": 4299,
                            "nofollow": true
                        },
                        {
                            "year": 2010,
                            "count": 3849,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 310653
                },
                {
                    "from": 2000,
                    "to": 2009,
                    "filter": "2000-01-01,2009-12-31",
                    "decade": 2000,
                    "years": [
                        {
                            "year": 2009,
                            "count": 3075,
                            "nofollow": true
                        },
                        {
                            "year": 2008,
                            "count": 1982,
                            "nofollow": true
                        },
                        {
                            "year": 2007,
                            "count": 1521,
                            "nofollow": true
                        },
                        {
                            "year": 2006,
                            "count": 1236,
                            "nofollow": true
                        },
                        {
                            "year": 2005,
                            "count": 1104,
                            "nofollow": true
                        },
                        {
                            "year": 2004,
                            "count": 1125,
                            "nofollow": true
                        },
                        {
                            "year": 2003,
                            "count": 1107,
                            "nofollow": true
                        },
                        {
                            "year": 2002,
                            "count": 968,
                            "nofollow": true
                        },
                        {
                            "year": 2001,
                            "count": 1078,
                            "nofollow": true
                        },
                        {
                            "year": 2000,
                            "count": 968,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 14164
                },
                {
                    "from": 1990,
                    "to": 1999,
                    "filter": "1990-01-01,1999-12-31",
                    "decade": 1990,
                    "years": [
                        {
                            "year": 1999,
                            "count": 753,
                            "nofollow": true
                        },
                        {
                            "year": 1998,
                            "count": 700,
                            "nofollow": true
                        },
                        {
                            "year": 1997,
                            "count": 843,
                            "nofollow": true
                        },
                        {
                            "year": 1996,
                            "count": 715,
                            "nofollow": true
                        },
                        {
                            "year": 1995,
                            "count": 825,
                            "nofollow": true
                        },
                        {
                            "year": 1994,
                            "count": 775,
                            "nofollow": true
                        },
                        {
                            "year": 1993,
                            "count": 730,
                            "nofollow": true
                        },
                        {
                            "year": 1992,
                            "count": 629,
                            "nofollow": true
                        },
                        {
                            "year": 1991,
                            "count": 558,
                            "nofollow": true
                        },
                        {
                            "year": 1990,
                            "count": 516,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 7044
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
                            "count": 306,
                            "nofollow": true
                        },
                        {
                            "year": 1987,
                            "count": 333,
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
                            "count": 204,
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
                    "count": 2160
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
    // useEffect(() => {
    //     getData()
    // }, [])
    // const getData = async()=>{
    //     const searchFetch= await fetch(`https://api.rawg.io/api/games?key=9df1bae5b88947458cc8431730fbfd9f`)

    //     let searchResult = await searchFetch.json()
    //     console.log(searchResult);
    // }
    

    return (
        <GameContext.Provider value={{
            test,
            sideBarOpen,
            setSideBarOpen
        }}>
            {children}
        </GameContext.Provider>
    )
}

const GameConsumer = GameContext.Consumer

export { GameContext, GameProvider, GameConsumer }