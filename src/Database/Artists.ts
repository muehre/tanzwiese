import antonyjamesrobson from './ArtistImages/antonyjamesrobson.jpg'
import cinemagraph from './ArtistImages/cinemagraph.jpg'
import djthuglday from './ArtistImages/djthuglday.jpg'
import joeback from './ArtistImages/joeback.jpg'
import konstrukt from './ArtistImages/konstrukt.jpg'
import leirum from './ArtistImages/leirum.jpg'
import lilith from './ArtistImages/lilith.jpg'
import olympiadiamanti from './ArtistImages/olympiadiamanti.jpg'
import pipikk from './ArtistImages/pipikk.jpg'
import poppy from './ArtistImages/poppy.jpg'

export enum SocialPlatforms {
    Spotify = 'spotify',
    SoundCloud = 'soundcloud',
    Instagram = 'instagram',
}

type Artist = {
    id: string,
    name: string,
    description?: string
    image?: string
    urls?: {
        [key in SocialPlatforms]?: string
    }
}

const artists: Artist[] = [
    {
        "id": "1",
        "name": "yugsnocer",
        "description": "make yourself uncomfortable",
        "urls": {
            "spotify": "https://open.spotify.com/artist3nY3hVwHaIQQ7yKrfaB8zW",
            "instagram": "https://instagram.com/yugsnocer",
        }
    },
    {
        "id": "2",
        "name": "Supreme Blend",
        "description": "Die junge Band Supreme Blend aus dem Raum Stuttgart bietet eine explosive Mischung aus eingängigen Pop-Melodien, rockigen Riffs und Songtexten, die direkt ins Herz gehen. Der erste offizielle Release der Band ist im Jahr 2022 mit der EP „Pale Colors“ erschienen, die die Band im DropD Studio produzierte.",
        "urls": {
            "spotify": "https://open.spotify.com/artist/4sdWbpaVcLvBq7mpITyCAO",
            "instagram": "https://instagram.com/supreme.blend",
        }
    },
    {
        "id": "3",
        "name": "Kollektiv Kowalsky",
        "description": "Kollektiv-Rock? Der Duden schreibt: Kollektiv, das: Gruppe, in der Menschen im Team zusammenarbeiten.\n\nGenau das ist Kollektiv Kowalsky: Fünf Würzburger aus unterschiedlichen Musikrichtungen, die nun gemeinsam Musik machen. Heraus kommt ihr eigenes Genre: Kollektiv-Rock. Ein Mix aus Post-Rock, Alternative, Punk und Pop.",
        "urls": {
            "spotify": "https://open.spotify.com/artist/1HGmadYAeHhGiKAIiwiouQ",
            "instagram": "https://instagram.com/kollektivkowalsky",
        }
    },
    {
        "id": "4",
        "name": "Peppermint Peanuts",
        "description": "Wir sind Peppermint Peanuts!\n\nWir sind eine Indie-Band aus Kassel und spielen am Liebsten vor betrunkenen Leuten.",
        "urls": {
            "instagram": "https://instagram.com/peppermint_peanuts",
        }
    },
    {
        "id": "5",
        "name": "POPPY",
        "image": poppy,
        "description": "Poppys ganz klare Devise: der Bass muss bouncen. Und wie er das tut! Am besten macht ihr euch selbst ein Bild davon. Mit ihrem industriell-funkigen Set eröffnet Poppy die DJ-Stage am Freitagabend",
        "urls": {
            "soundcloud": "https://on.soundcloud.com/F5CCP",
            "instagram": "https://instagram.com/djitspoppy",
        }
    },
    {
        "id": "6",
        "name": "concrete composite",
    },
    {
        "id": "7",
        "name": "TJ+SPINELLI",
        "description": "Irgendwo zwischen 90 und 125 BPM spielen Flux Yara Hits aus Synthwave und Disco. Wir werden sehen ob sie die Tanzwiese am Freitagabend erneut als TJ& Spinelli direkt zurück in die 80er katapultieren",
    },
    {
        "id": "8",
        "name": "Pippi KK",
        "image": pipikk,
        "description": "I live in Berlin and started DJing electronic music in winter 2021.\n\nNormally my focus was on classical music, because I play violin and piano. Since electronic music is widespread in Berlin, I also became interested in dealing with it musically. My goal is to DJ and play the violin together. My music should go in the direction of good mood, happiness and sunshine, so my focus is mainly on Afro House, Funky House und Indie Dance.",
        "urls": {
            "soundcloud": "https://soundcloud.com/pippikk",
            "instagram": "https://www.instagram.com/pippi_kk_/",
        }
    },
    {
        "id": "9",
        "name": "Thea's Roomie",
    },
    {
        "id": "10",
        "name": "Joey",
    },
    {
        "id": "11",
        "name": "LEIRUM",
        "description": "Achtung, jetzt schmeißen wir mit Fachbegriffen um uns: Tribal, Technoid und Indie Dance sind nur ein paar der Stile, mit denen die Stuttgarter DJ ihr Set beschreibt. Wenn ihr genauso neugierig seid wie wir, solltet ihr Leirums Auftritt am Samstagnachmittag nicht verpassen.",
        "image": leirum,
        "urls": {
            "soundcloud": "https://on.soundcloud.com/8kC5g",
            "instagram": "https://instagram.com/leirum.music",
        }
    },
    {
        "id": "12",
        "name": "suppersach",
    },
    {
        "id": "13",
        "name": "Olympia Diamanti",
        "image": olympiadiamanti,
        "urls": {
            "instagram": "https://instagram.com/olympia_diamanti",
            "spotify": "https://open.spotify.com/artist/4EeRGD5VD9TnJn8DAg9MdI",
        }
    },
    {
        "id": "14",
        "name": "Anthony James Robson",
        "image": antonyjamesrobson,
        "urls": {
            "instagram": "https://instagram.com/anthonyjamesrobson",
            "spotify": "https://open.spotify.com/artist/30uQ7fv6uGqVnfRRteTnBZ",
        }
    },
    {
        "id": "15",
        "name": "Good looking Wilson",
        "description": "Don`t be decieved the Band is not good looking. All songs are produced by extremly good looking David Turco.",
        "urls": {
            "instagram": "https://instagram.com/goodlookingwilson",
            "spotify": "https://open.spotify.com/artist/0SwVcddjYoQCmw7HDyw3iG",
        }
    },
    {
        "id": "16",
        "name": "CINEMAGRAPH",
        "description": "Mit Cinemagraph sind 2023 ein paar richtige Indie-Rock-Steilgänger am Start auf der Tanzwiese.\n\nVerwunderlich ist der Triumph der Mannheimer Band nicht. Die Verbindung aus verträumten Synths und energischen Gitarren macht einfach Spaß.",
        "image": cinemagraph,
        "urls": {
            "instagram": "https://instagram.com/cinemagraphband",
            "spotify": "https://open.spotify.com/artist/7zMxkD6FhVkm8hBRy7jyJP",
        }
    
    },
    {
        "id": "17",
        "name": "philip ebert",
    },
    {
        "id": "18",
        "name": "lilith",
        "image": lilith,
        "urls": {
            "instagram": "https://instagram.com/lilithk_",
        }
    },
    {
        "id": "19",
        "name": "Joe Back",
        "image": joeback,
        "description": "Wir freuen uns wieder auf Musik von Joe Back, ein DJ aus Köln, der von Funk-House, zu Italo-Disco, bis Melodic-Techno alles auflegt. Mit seiner Musik kreiert er eine Feelgood-Tanzstimmung.",
        "urls": {
            "instagram": "https://instagram.com/joe_back",
            "soundcloud": "https://soundcloud.com/user-464192258",
            "spotify": "https://open.spotify.com/artist/2Lab68D8csyvP4YYVXvck5"
        }
    },
    {
        "id": "20",
        "name": "dj thug lady",
        "image": djthuglday,
        "urls": {
            "instagram": "https://instagram.com/_thuglady",
            "soundcloud": "https://soundcloud.com/w-lkschen",
        }
    },
    {
        "id": "420",
        "name": "Konstrukt",
        "image": konstrukt,
        "description": "Kommt noch",
        "urls": {
            "soundcloud": "https://soundcloud.com/konstrukt-hh",
            "spotify": "https://open.spotify.com/artist/1vJqDoYHCd9cFqGK6ztMfP?si=fqk2y2usQtOwIZaeJaYouQ",
            "instagram": "https://www.instagram.com/konstrukt.hh/",
        }
    },
]

const useArtists: () => Artist[] = () => {
    return artists
}

const useArtist: (id: string) => Artist | null = (id) => {
    return artists.find(artist => artist.id === id) || null
}


export { useArtists, useArtist }
