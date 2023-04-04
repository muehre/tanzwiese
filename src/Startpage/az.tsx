
import abreise from './Teaser/abreise.jpg'
import aufbau from './Teaser/aufbau.jpg'
import camping from './Teaser/camping.jpg'
import duschen from './Teaser/duschen.jpg'
import food from './Teaser/food.jpg'
import mitmachen from './Teaser/mitmachen.jpg'
import muell from './Teaser/muell.jpg'
import musik from './Teaser/musik.jpg'
import nachtruhe from './Teaser/nachtruhe.jpg'
import parken from './Teaser/parken.jpg'
import rauchen from './Teaser/rauchen.jpg'
import workshops from './Teaser/workshops.jpg'
import { Button, Link } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShowerIcon from '@mui/icons-material/Shower';
import FestivalIcon from '@mui/icons-material/Festival';
import HardwareIcon from '@mui/icons-material/Hardware';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import CommuteIcon from '@mui/icons-material/Commute';
import PetsIcon from '@mui/icons-material/Pets';
import MapIcon from '@mui/icons-material/Map';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import HubIcon from '@mui/icons-material/Hub';
import PianoIcon from '@mui/icons-material/Piano';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PublicIcon from '@mui/icons-material/Public';
import ShieldIcon from '@mui/icons-material/Shield';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import GavelIcon from '@mui/icons-material/Gavel';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WcIcon from '@mui/icons-material/Wc';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

export type InfoElement = {
    title: string,
    anchor: string,
    content: JSX.Element | string,
    icon: JSX.Element,
    action?: JSX.Element,
    image?: string
}

const startpageInfos: InfoElement[] = [
    {
        title: "Anreise & Abreise",
        anchor: "anreise-abreise",
        image: abreise,
        icon: <CommuteIcon />,
        content: (
            <>
                <div>
                    Der Einlass ist am 12.08.22 ab 14:00 Uhr bis 20:00 Uhr. 
                </div>
                <div>
                    Falls ihr früher oder später anreisen möchtet, meldet euch gerne bei uns. Die Tanzwiese findet in der Nähe von Künzelsau statt. Die genaue Adresse schicken wir euch per Mail, nachdem ihr den Unkostenbeitrag bezahlt habt.
                </div>
                <div>
                    Falls ihr mit dem Zug anreist, ist der nächste Bahnhof in Waldenburg (in Baden-Württemberg). Von dort geht es weiter mit dem Bus zur Haltestelle "Crispenhofen Haiberg Mitte" (siehe online Fahrplan auf <Link href="https://www.nvh.de" target={"_blank"}>www.nvh.de</Link>). Falls ihr am Tag der Anreise irgendwo stecken bleiben solltet, euch auf dem Weg verirrt oder sonst einfach nicht weiterkommt, meldet euch unter: 015236633514 (Tabea).
                </div>
            </>
        ),
    },
    {
        title: "Aufbau & Abbau",
        anchor: "aufbau-abbau",
        image: aufbau,
        icon: <HardwareIcon />,
        content: (
            <>
                <div>
                    Da wir die Tanzwiese in unserer Freizeit organisieren, freuen wir uns über weitere helfende Hände beim Auf-und Abbau. Meldet euch einfach per Mail, falls ihr die Tanzwiese in irgendeiner Form unterstützen wollt. Gerne könnt ihr auch schon vor Beginn der Tanzwiese mit uns auf dem Gelände zelten, beim Aufbau helfen und euch kreativ auf dem Gelände austoben.
                </div>
                <div>   
                    Werkzeug und Materialien warten auf euch.
                </div>
            </>
        ),
    },
    {
        title: "Awareness",
        anchor: "awareness",
        icon: <Diversity2Icon />,
        content: (
            <>
                <div>
                    Wie ihr in unseren Regeln lesen werdet, hat rassistisches, sexistisches, antisemitisches, homophobes und respektlosen Verhalten auf der Tanzwiese nichts verloren!
                </div>
                <div>  
                    Wir wollen alle eine schöne Zeit miteinander verbringen und bitten euch daher aufeinander acht zugeben. Doch auch auf der Tanzwiese kann übergriffiges Verhalten nicht komplett ausgeschlossen werden. Daher wird es während des Festivals ein Awareness-Team geben, das euch bei jeglicher Art von Übergriffen beiseite stehen wird.
                </div>
                <div>  
                    Falls ihr euch unwohl fühlt, sexualisierte Gewalt oder Diskriminierung erlebt, wendet euch an diese Telefonnummer: 0157 / 557 445 93 (Thea) oder sucht eine Tanzbiene auf (erkennbar am T-Shirt mit Biene). Sie werden euch bei Seite stehen und helfen.
                </div>
            </>
        ),
        action: <Button startIcon={<LocalPhoneIcon />} variant="contained" href="tel:+4915755744593">Jetzt Anrufen!</Button>
    },
    {
        title: "Camping",
        anchor: "camping",
        image: camping,
        icon: <FestivalIcon />,
        content: (
            <>
                <div>
                    Geschlafen wird auf der Campingwiese. Damit alle ein Plätzchen für ihr Zelt finden, bitten wir euch keine großen Camps zu errichten und die markierten Wege frei zu lassen. Viel Platz braucht ihr ohnehin nicht, da die Party auf der Wieso nebenan stattfindet.
                </div>
                <div> 
                    Wir bitten euch, eure mega batteriebetriebenen bluetooth Musikanlagen zuhause zu lassen und laden euch stattdessen ein, die Musik auf der Tanzwiese zu genießen.
                </div>
                <div> 
                    Ab 04:00 Uhr bis 10:00 Uhr gilt auf der Campingwiese die Nachtruhe (Siehe Nachtruhe).
                </div>
                <div> 
                    Nehmt euch eine Powerbank für elektronische Geräte mit, da es keine Steckdosen auf dem Festival gibt.
                </div>
                <div> 
                    Falls ihr gesundheitlich auf bestimmte Mittel angewiesen seid, z.B. Strom oder einen Kühlschrank, lasst uns das bitte per Mail im Vorfeld wissen, damit wir eine Lösung finden können
                </div>
            </>
        ),
    },
    {
        title: "Duschen",
        anchor: "duschen",
        image: duschen,
        icon: <ShowerIcon />,
        content: (
            <>
                <div>
                    Haben wir keine. Es gibt aber einen Wasserhahn mit Trinkwasser auf dem Gelände. Er lässt sich öffnen UND auch wieder schließen - denkt da bitte daran. 
                </div>
            </>
        ),
    },
    {
        title: "Essen & Trinken",
        anchor: "essen-und-trinken",
        image: food,
        icon: <FastfoodIcon />,
        content: (
            <>
                <div>
                    Für eure Verpflegung auf der Tanzwiese seid ihr vor allem selbst verantwortlich. Also packt euch euer Lieblingsessen-und trinken ein, damit ihr das Wochenende durchhaltet.
                </div>
                <div> 
                    Bitte achtet darauf, wiederverwendbare Behälter und Pfandflaschen zu nutzen, da wir möglichst wenig Müll produzieren möchten.
                </div>
                <div> 
                    Zusätzlich bieten wir Pommes, Frühlingsrollen, Waffeln, Kuchen. Wassermelonen und weitere Snacks an. Zu Trinken wird es verschiedene Limos, Bier, Radler, Cocktails, Kaffee und Tee geben. Bezahlen könnt ihr mit Planeten (siehe Planeten).
                </div>
                <div> 
                    Den nächsten Supermarkt findet ihr in Niedernhall (ca. 10 Minuten mit dem Auto).  
                </div>
            </>
        ),
    },
    {
        title: "Hunde",
        anchor: "hunde",
        icon: <PetsIcon />,
        content: (
            <>
                <div>
                    Ihr könnt gerne euren Hund mitbringen, müsst euch aber bewusst sein, dass ihr rund um die Uhr für ihn verantwortlich seid. Hunde müssen angeleint sein und dürfen nicht alleine über das Gelände laufen oder im Auto gelassen werden. Beachtet die Temperaturen im August.
                </div>
            </>
        ),
    },
    {
        title: "Lage",
        anchor: "lage",
        icon: <MapIcon />,
        content: (
            <>
                <div>
                    Die Tanzwiese findet in der Nähe von Künzelsau in Baden-Württemberg statt. Die genau Adresse erhaltet ihr nach Überweisung des Unkostenbeitrags per Mail. Um einen Überblick zu bekommen, schicken wir euch außerdem einen Lageplan des Geländes.
                </div>
            </>
        ),
    },
    {
        title: "Kontakt",
        anchor: "kontakt",
        icon: <ConnectWithoutContactIcon />,
        content: (
            <>
                <div>
                    Falls ihr Fragen, Ideen oder Anmerkungen habt, schreibt uns gerne eine E-Mail festival.tanzwiese@gmail.com. In Notfällen könnt ihr uns auch anrufen unter 015755744593 (Thea) und 015236633514 (Tabea). 
                </div>
            </>
        ),
    },
    {
        title: "Du willst mitmachen?",
        anchor: "mitmachen",
        image: mitmachen,
        icon: <HubIcon />,
        content: (
            <>
                <div>
                    Wir freuen uns über weitere Mitglieder:innen im Orga-/ Helfer:innen/Workshop Team, da wir gemeinsam so viel mehr schaffen können. Wir sind offen für Ideen und jede Art von Teilhabe.
                </div>
            </>
        ),
    },
    {
        title: "Müll",
        anchor: "muell",
        image: muell,
        icon: <DeleteIcon />,
        content: (
            <>
                <div>
                    Müll ist schlecht - sowohl auf unserer Wiese als auch bei der Verbrennung, im Meer oder wo immer er landet. Versucht daher, ihn am besten ganz zu vermeiden. Falls das mit dem Vermeiden nicht klappen sollte, stellen wir euch sympathische Mülleimer mit verschiedenen Geschmacksrichtungen (Papier, Plastik, Restmüll) auf. Füttert sie fleißig. Und falls doch etwas mal auf der Wiese liegt, fühlt euch angesprochen es in den Müll zu werfen. Die Pferde, auf deren Nahrung wir tanzen, werden es euch danken.
                </div>
            </>
        ),
    },
    {
        title: "Musik",
        anchor: "musik",
        image: musik,
        icon: <PianoIcon />,
        content: (
            <>
                <div>
                    Wir haben ein vielseitiges Line-Up für euch erstellt, schaut mal auf die Timetable!
                </div>
            </>
        ),
        action: <Button startIcon={<CalendarMonthIcon />} variant="contained" href="/timetable">Timetable</Button>
    },
    {
        title: "Nachtruhe",
        anchor: "nachtruhe",
        icon: <ModeNightIcon />,
        image: nachtruhe,
        content: (
            <>
                <div>
                    Damit jede_r jeden Tag des Festivals ausgeschlafen genießen kann, bitten wir euch die Nachtruho zu respektieren. Das bedeutet, dass zwischen 04.00 Uhr und 10:00 Uhr morgens bitte keine Musik, lauten Gespräche oder anderer Lärm die Campingwiese beschallt. Auf der Tanzwiese beginnt die Nachtruhe mit dem Ende des letzten Musik-Acts, danach könnt ihr gerne noch in gemäßigter Lautstärke am Feuer sitzen.
                </div>
            </>
        ),
    },
    {
        title: "Parken",
        anchor: "parken",
        icon: <LocalParkingIcon />,
        image: parken,
        content: (
            <>
                <div>
                    Parken könnt ihr auf der Parkwiese, auf die ihr durch Schilder und Parkplatzeinweiser_innen geleitet werdet. Wir sind mitten in der Pampa, daher sind viele auf ein Auto angewiesen. Dennoch wäre es super, wenn ihr Fahrgemeinschaften organisieren könntet. Eventuell werden wir dafür noch eine Plattform schaffen, die wir dann per Mail mit euch teilen.
                </div>
            </>
        ),
    },
    {
        title: "Planeten",
        anchor: "planeten",
        icon: <PublicIcon />,
        content: (
            <>
                <div>
                    Um das Hantieren mit Euros auf dem Festival zu vermeiden und damit ihr euch sorgenlos auf den Kosmos Tanzwiese einlassen könnt, werden hier Getränke und Essen nicht mit irdischem Geld sondern mit Planeten beglichen. Damit entspricht ein Planet mindestens einem Euro (eher viel mehr!). Fünf dieser handgepressten Unikate bekommt ihr mit eurem Bändchen am Einlass Falls ihr mehr braucht, kein Problem, wendet euch an die hilfsbereiten Tanzbienen, die ihr am T-Shirt mit Biene erkennt.
                </div>
            </>
        ),
    },
    {
        title: "Privatveranstaltung",
        anchor: "privatveranstaltung",
        icon: <ShieldIcon />,
        content: (
            <>
                <div>
                    Die Tanzwiese ist eine Privatveranstaltung und nur eingeladene Gäste sind berechtigt das Gelände zu betreten. Diese erkennen wir am Festivalbändchen, das ihr am Einlass bekommt, wenn ihr euer Ticket zeigt Spontan mitgebrachtc Personen bekommen keinen Zutritt, da wir nur eine bestimmte Anzahl an Personen auf das Gelände lassen dürfen. Bitte habt dafür Verständnis.
                </div>
            </>
        ),
    },
    {
        title: "Rauchen",
        anchor: "rauchen",
        icon: <SmokingRoomsIcon />,
        image: rauchen,
        content: (
            <>
                <div>
                    Bitte achtet darauf, dass keine Zigarettenstummeln oder -schachteln in der Wiese landen, denn diese wird später Futter für unsere Pferde. Auf den Tischen werden Aschenbecher stehen. Falls ihr einen Taschenaschenbecher braucht, meldet euch gerne bei den Tanzbienen.    
                </div>
            </>
        ),
    },
    {
        title: "Regeln",
        anchor: "regeln",
        icon: <GavelIcon />,
        content: (
            <>
                <div>
                    Mit eurem Kommen willigt ihr automatisch in unsere Regeln ein, die ihr vor dem Festival per Mail zugeschickt bekommt Bei Regelverstoß müssen wir euch bitten dos Fcstivalgcländc zu verlassen.    
                </div>
            </>
        ),
    },
    {
        title: "Spenden",
        anchor: "spenden",
        icon: <VolunteerActivismIcon />,
        content: (
            <>
                <div>
                    Die Tanzwiese wird von uns auf ehrenamtlicher Basis organisiert und veranstaltet, lediglich die Künstlerinnen bekommen Honorare. Eingenommenes Geld fließt in die Finanzierung der nächste Tanzwiese und dient als Puffer, falls etwas kaputt geht
                </div>
            </>
        ),
    },
    {
        title: "Toiletten",
        anchor: "toiletten",
        image: duschen,
        icon: <WcIcon />,
        content: (
            <>
                <div>
                    Wir bitten euch, die freundlichen Komposttoiletten für all eure Geschäfte zu verwenden und nicht in den Wald zu flitzen. Auch wonn es ungewohnt scheint, fragt euch lieber - ist es normal sein Geschäft mit Trinkwasser wegzuspülen?
                </div>
            </>
        ),
    },
    {
        title: "Workshops",
        anchor: "workshops",
        image: workshops,
        icon: <HomeRepairServiceIcon />,
        content: (
            <>
                <div>
                    Auch dieses Jahr bereiten wieder kreative Köpfe mit sehr viel Liebe eine große Auswahl an Workshops für euch vor. Mit dabei sind dieses Jahr zum Beispiel: Siebdruck. Batiken, Yoga, Schmuck, Zirkus.
                </div>
                <div> 
                    ArtAttack, Tonen, Kerzonziehen und vieles mehr. Den Workshop Timetable erhaltet ihr vor dem Festival per Mail und auf unserer Instagramseite Qtanzwiese. Für das Batiken und den Siebdruck-Workshop bringt gerne eigene Klamotten/Stoffe mit, die ihr verschönern wollt.    
                </div>
            </>
        ),
    },
]

export default startpageInfos