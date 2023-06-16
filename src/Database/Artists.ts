import antonyjamesrobson from './ArtistImages/antonyjamesrobson.jpg'
import peppermint from './ArtistImages/peppermint.jpg'
import cinemagraph from './ArtistImages/cinemagraph.jpg'
import djthuglday from './ArtistImages/djthuglday.jpg'
import joeback from './ArtistImages/joeback.jpg'
import leirum from './ArtistImages/leirum.jpg'
import lilith from './ArtistImages/lilith.jpg'
import olympiadiamanti from './ArtistImages/olympiadiamanti.jpg'
import supremeBlend from './ArtistImages/supremeBlend.jpg'
import poppy from './ArtistImages/poppy.jpg'
import kollektivKowalsky from './ArtistImages/kollektivKowalsky.jpg'
import constantcrisis from './ArtistImages/constantcrises.jpg'
import concrete from './ArtistImages/concrete.jpg'
import picaro from './ArtistImages/picaro.jpg'
import sozinhoo from './ArtistImages/sozinhoo.jpg'
import goodlookingwilson from './ArtistImages/goodlookingwilson.jpg'
import tesaKonstrukt from './ArtistImages/tesaKonstrukt.jpg'
import ludschgi from './ArtistImages/ludschgi.jpg'
import gitarrob from './ArtistImages/gitarrob.jpg'

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
        "name": "Joe Back",
        "image": joeback,
        "description": "Am Festival Samstag freuen wir uns wieder auf Musik von langjährigem-treuen-Tanzwiesen-DJ Joe Back.  Mit seinen Sets kreiert er eine Feelgood-Tanzstimmung bei der die Füße nicht stillstehen können!",
        "urls": {
            "instagram": "https://instagram.com/joe_back",
            "soundcloud": "https://soundcloud.com/user-464192258",
            "spotify": "https://open.spotify.com/artist/2Lab68D8csyvP4YYVXvck5"
        }
    },
    {
        "id": "2",
        "name": "Supreme Blend",
        "image": supremeBlend,
        "description": "Back to the roots! Das ist das Motto der Stuttgarter Band Supreme Blend. Damit wird es akustisch-soulful am Freitagabend. Wir freuen uns riesig, dass die vier im Rahmen ihrer 2023er Tour ihren Groove auf die Tanzwiese bringen.",
        "urls": {
            "spotify": "https://open.spotify.com/artist/4sdWbpaVcLvBq7mpITyCAO",
            "instagram": "https://instagram.com/supreme.blend",
        }
    },
    {
        "id": "3",
        "name": "Kollektiv Kowalsky",
        "description": "Kollektiv-Rock nennt das Würzburger Quartett passenderweise seine Musik. Mit Elementen aus Punk, Pop und Post-Rock kommt dabei ein ziemlich einzigartiger Sound heraus. Das solltet ihr am Freitagabend nicht verpassen!",
        "image": kollektivKowalsky,
        "urls": {
            "spotify": "https://open.spotify.com/artist/1HGmadYAeHhGiKAIiwiouQ",
            "instagram": "https://instagram.com/kollektivkowalsky",
        }
    },
    {
        "id": "4",
        "name": "Peppermint Peanuts",
        "description": "Mit Peppermint Peanuts kommt stürmischer Indie-Rock aus Kassel auf die Bühne der Tanzwiese. Die geladenen Jungs machen ihren Gefühlen ordentlich Luft - mal nachdenklich, mal überschwänglich, aber immer abwechslungsreich. Von den Jungs kann man halten, was man will - aber eines steht fest: Peppermint Peanuts haben Spaß auf der Bühne und zerlegen mit euch die Wiese.",
        "image": peppermint,
        "urls": {
            "instagram": "https://instagram.com/peppermint_peanuts",
        }
    },
    {
        "id": "5",
        "name": "lilith",
        "image": lilith,
        "description": "Am Freitagabend erwartet euch mit Lilith ein breites Spektrum an Genres, darunter Techno, Trance oder Pop, wobei sie weibliche Artists besonders feiert. Sie steht für Freiraum und Safe Space auf der Tanzfläche und hinterm DJ-Pult. Lasst auch euren Füßen freien Lauf beim Tanzen!",
        "urls": {
            "instagram": "https://instagram.com/lilithk_",
        }
    },
    {
        "id": "6",
        "name": "Concrete Composite",
        "description": "elektronisches potpourri. Bass bringt Spass. Gute laune und Gummibären. Mehr muss nicht gesagt werden, alles andere seht bzw hört ihr am Freitag!",
        "image": concrete,
    },
    {
        "id": "7",
        "name": "Constant Crisis",
        "description": "Seid ihr bereit für basslastig-bösen Drum'n'Bass? Dann wird euch Constant Crisis mit seinem Set abholen! Von Jump-Up bis zu Neurofunk könnt ihr hier alles erwarten. Fest steht: Tanzen ist Pflicht!",
        "image": constantcrisis,
    },

    {
        "id": "8",
        "name": "LEIRUM",
        "description": "Achtung, jetzt schmeißen wir mit Fachbegriffen um uns: Tribal, Technoid und Indie Dance sind nur ein paar der Stile, mit denen die Stuttgarter DJ ihr Set beschreibt. Wenn ihr genauso neugierig seid wie wir, solltet ihr Leirums Auftritt am Samstagnachmittag nicht verpassen.",
        "image": leirum,
        "urls": {
            "soundcloud": "https://on.soundcloud.com/8kC5g",
            "instagram": "https://instagram.com/leirum.music",
        }
    },
    {
        "id": "9",
        "name": "Gitarro B",
        "description": "Selbstgemacht und holzig; Asphalt-, wiesen- und feuergeeignet; Fetzen, Entdeckungen und Geschichten von Wind, Weite, Tiefe und Breite; Mit Rhythmus und Wärme. Lasst euch mitreißen und ein Schmunzeln ins Gesicht zaubern von Bernhard, seinen Liedern und natürlich seiner Gitarre",
        "image": gitarrob,
    },
    {
        "id": "10",
        "name": "Olympia Diamanti",
        "image": olympiadiamanti,
        "description": "Bei den 5 Lübecker:innen treffen psychedelische Texte auf instrumentale Vielfältigkeit. Dabei kreiert ein wilder Mix aus Genres ihren ganz eigenen Sound. Und den präsentiert die Gruppe zu unserer Freude dieses Jahr auf der Tanzwiese!",
        "urls": {
            "instagram": "https://instagram.com/olympia_diamanti",
            "spotify": "https://open.spotify.com/artist/4EeRGD5VD9TnJn8DAg9MdI",
        }
    },
    {
        "id": "11",
        "name": "Anthony James Robson",
        "image": antonyjamesrobson,
        "description": "“Take a look around, I’m the best dancer in the room” kündigt Anthony James Robson auf seiner neuesten Single an. Ein Bild davon könnt ihr euch bei seinem diesjährigen Set auf der Tanzwiese machen. Und bei seinem tanzbaren Mix aus Indie, Hip-Hop und Disco habt ihr vielleicht sogar das Potenzial, ihm Konkurrenz als “Best Dancer” zu machen.",
        "urls": {
            "instagram": "https://instagram.com/anthonyjamesrobson",
            "spotify": "https://open.spotify.com/artist/30uQ7fv6uGqVnfRRteTnBZ",
        }
    },
    {
        "id": "12",
        "name": "Good looking Wilson",
        "description": "Das Indie-Pop Duo aus Saarbrücken schiebt seit geraumer Zeit den ein oder anderen Hit durch die Spotify-Playlisten und arbeitet kontinuierlich an kommenden Produktionen, die irgendwo zwischen 'Sonnenaufgang nach 'ner durchzechten Nacht' und 'gefühlvoll-gut-gelaunt' einzuordnen sind. Wir freuen uns auf ein warmes Sundowner-Set am Samstagabend ",
        "image": goodlookingwilson,
        "urls": {
            "instagram": "https://instagram.com/goodlookingwilson",
            "spotify": "https://open.spotify.com/artist/0SwVcddjYoQCmw7HDyw3iG",
        }
    },
    {
        "id": "13",
        "name": "Cinemagraph",
        "description": "Mit Cinemagraph sind 2023 ein paar richtige Indie-Rock-Steilgänger am Start auf der Tanzwiese.\n\nVerwunderlich ist der Triumph der Mannheimer Band nicht. Die Verbindung aus verträumten Synths und energischen Gitarren macht einfach Spaß.",
        "image": cinemagraph,
        "urls": {
            "instagram": "https://instagram.com/cinemagraphband",
            "spotify": "https://open.spotify.com/artist/7zMxkD6FhVkm8hBRy7jyJP",
        }
    
    },
    {
        "id": "14",
        "name": "Picaro",
        "description": "Mit seinem Set aus Dub Techno, House und Romanian Minimal wird Picaro die Tanzwiese zum Dancen bringen. Vor zwei Jahren ist er schon einmal aus Leipzig zur Tanzwiese angereist. Wir freuen uns riesig, dass du wieder dabei bist!",
        "image": picaro,
    },
    {
        "id": "15",
        "name": "POPPY",
        "image": poppy,
        "description": "Poppys ganz klare Devise: der Bass muss bouncen. Und wie er das tut! Am besten macht ihr euch selbst ein Bild davon. Mit ihrem industriell-funkigen Set eröffnet Poppy die DJ-Stage am Freitagabend",
        "urls": {
            "soundcloud": "https://on.soundcloud.com/F5CCP",
            "instagram": "https://instagram.com/djitspoppy",
        }
    },
    {
        "id": "16",
        "name": "dj thuglady",
        "image": djthuglday,
        "description": "Seid bereit für DJ thuglady! Am Festival-Samstag erwartet euch ein tanzbarer Mix von feministischem Rap über Breakbeats bis hin zu House. Lasst euch von ihrer langjährigen Erfahrung an den Decks und ihrem außerordentlichen Gespür für guten Sound mitreißen. Wir freuen uns darauf!",
        "urls": {
            "instagram": "https://instagram.com/_thuglady",
            "soundcloud": "https://soundcloud.com/w-lkschen",
        }
    },
    {
        "id": "17",
        "name": "Solzinho",
        "description": "Als leidenschaftliche Tänzerin und Liebhaberin elektronischer Klänge verstärkt uns dieses Jahr auch Solzinho auf der Tanzwiese. Am Donnerstag wagt sie sich für euch das erste Mal hinter die Decks und wir feiern gemeinsam ihr Debüt! Es erwarten euch kunterbunte, saftige Sounds verschiedener Genres, nach dem einfachen Motto: dancing is what to do!",
        "image": sozinhoo,
    },
    {
        "id": "18",
        "name": "Ludschgi",
        "description": "Melodisch treibende Sommer Beats. Packt eure besten Tanzschuhe aus!",
        "image": ludschgi,
    },
    {
        "id": "420",
        "name": "Konstrukt b2b Tesa",
        "image": tesaKonstrukt,
        "description": "Das Hamburger DJ Duo Konstrukt und Tesa bringen euch harte, treibende Beats mit Sexappeal im Unterton.",
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

const useArtist: (id?: string) => Artist | null = (id) => {
    if (!id) return null
    return artists.find(artist => artist.id === id) || null
}


export { useArtists, useArtist }
