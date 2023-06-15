
export enum Locations {
    MainStage = "Main Stage",
    JupiterJurte = "Jupiter Jurte",
    Content = "Con:tent",
    Werkelwinkel = "Werkelwinkel",
    BatikBucht = "Batik Bucht",
    MicroRave = "Microrave",
    Himmelszelt = "Himmelszelt",

}

export enum GigType {
    Act = 'Act',
    Workshop = 'Workshop',
}

const timetable = [
    {
        "id": "0",
        "artistId": "17",
        "startAt": "2023-06-15T20:00:00",
        "endAt": "2023-06-15T22:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "1",
        "artistId": "1",
        "startAt": "2023-06-16T14:00:00",
        "endAt": "2023-06-16T16:00:00",
        "description": "Ambient Mittag",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    { 
        "id": "2",
        "artistId": "2",
        "startAt": "2023-06-16T19:00:00",
        "endAt": "2023-06-16T20:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "3", 
        "artistId": "3",
        "startAt": "2023-06-16T20:00:00",
        "endAt": "2023-06-16T21:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "4", 
        "artistId": "4",
        "startAt": "2023-06-16T21:00:00",
        "endAt": "2023-06-16T22:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "5", 
        "artistId": "5",
        "startAt": "2023-06-16T22:30:00",
        "endAt": "2023-06-17T00:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "6", 
        "artistId": "6",
        "startAt": "2023-06-17T00:00:00",
        "endAt": "2023-06-17T01:30:00",
        "description": "",
        "openEnd": false,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },
    {
        "id": "101", 
        "artistId": "1",
        "startAt": "2023-06-17T01:30:00",
        "endAt": "2023-06-17T03:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },
    {
        "id": "7", 
        "artistId": "7",
        "startAt": "2023-06-17T03:00:00",
        "endAt": "2023-06-17T06:00:00",
        "description": "",
        "openEnd": true,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },

    {
        "id": "8", 
        "artistId": "8",
        "startAt": "2023-06-17T12:00:00",
        "endAt": "2023-06-17T14:00:00",
        "description": "",
        "openEnd": true,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },
    {
        "id": "9", 
        "artistId": "9",
        "startAt": "2023-06-17T17:00:00",
        "endAt": "2023-06-17T18:00:00",
        "description": "",
        "openEnd": true,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "10", 
        "artistId": "10",
        "startAt": "2023-06-17T18:00:00",
        "endAt": "2023-06-17T19:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "11", 
        "artistId": "11",
        "startAt": "2023-06-17T19:00:00",
        "endAt": "2023-06-17T20:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "12", 
        "artistId": "12",
        "startAt": "2023-06-17T20:00:00",
        "endAt": "2023-06-17T21:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "13", 
        "artistId": "13",
        "startAt": "2023-06-17T21:30:00",
        "endAt": "2023-06-17T22:30:00",
        "description": "",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Act,
    },
    {
        "id": "14", 
        "artistId": "14",
        "startAt": "2023-06-17T22:30:00",
        "endAt": "2023-06-18T00:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },
    {
        "id": "15", 
        "artistId": "15",
        "startAt": "2023-06-18T00:00:00",
        "endAt": "2023-06-18T01:30:00",
        "description": "",
        "openEnd": false,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },
    {
        "id": "16", 
        "artistId": "16",
        "startAt": "2023-06-18T01:30:00",
        "endAt": "2023-06-18T03:00:00",
        "description": "",
        "openEnd": false,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },
    {
        "id": "21", 
        "artistId": "420",
        "startAt": "2023-06-18T03:00:00",
        "endAt": "2023-06-18T06:00:00",
        "description": "",
        "openEnd": true,
        "location": Locations.JupiterJurte,
        "type": GigType.Act,
    },
    
    // Workshops
    {
        "id": "100",
        "startAt": "2023-06-15T22:00:00",
        "endAt": "2023-06-15T06:00:00",
        "description": "Keine Beschreibung",
        "name": "Film: Little Miss Sunshine",
        "openEnd": true,
        "location": Locations.Content,
        "type": GigType.Workshop,
    },
    {
        "id": "101",
        "startAt": "2023-06-16T16:00:00",
        "endAt": "2023-06-16T18:00:00",
        "description": "Es liegen ein paar Tage voller Tanz, Spiel & Abenteuer vor uns. Wir wollen uns gemeinsam mit euch erden, um diese besondere Zeit passend zum Neumond vollends genießen zu dürfen. Begleitet von einer kleinen Yin Yoga-Einheit, werden wir anschließend gemeinsam eine Tasse Kakao im Wald bei den Feen und Gnomen genießen! ✨ Kakaozeremonien sind ein schamanisches Ritual und dienen es vor allem dazu, den Menschen zu mehr Klarheit oder Selbstbestimmung zu verhelfen, sowie innere Blockaden zu lösen. Wir wollen unsere Herzen öffnen und uns in einen harmonischen Zustand versetzen – mit uns Selbst, unserer Umwelt und Mitmenschen! Um gemeinsam eine absolute Wohlfühlatmosphäre und einen geschützten Rahmen zu kreieren, ist die Teilnehmerzahl auf 20 Personen begrenzt. Bitte über Telegram oder Instagram bei @as_mllr anmelden.🔮🫧 Mitzubringen sind eine Yoga-Matte und bequeme Kleidung!",
        "name": "Kakao Zeremonie",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Workshop,
    },
    {
        "id": "102",
        "startAt": "2023-06-16T18:00:00",
        "endAt": "2023-06-16T19:00:00",
        "description": "Lasst uns zusammen das Eis brechen.",
        "name": "(S)pietdating",
        "openEnd": false,
        "location": Locations.Content,
        "type": GigType.Workshop,
    },
    {
        "id": "103",
        "startAt": "2023-06-17T10:00:00",
        "endAt": "2023-06-17T11:00:00",
        "description": "Zwischen tanzwütigen Ekstasen, gemeinsamen grooven und entspannten Momenten in der Sonne - gibt es während der „Tanzwiese“ Yogastunden für euch! Achtsam und dynamisch fließen wir durch unsere Vinyasa Flow Sessions, wobei die unterschiedlichsten Levels integriert werden können. Der Fokus liegt dabei auf euch, euren bewussten Umgang mit dem eigenen Körper und der Möglichkeit in aller Ruhe einen Moment für die gezielte Achtsamkeit zu nehmen, oder auch einfach mal etwas neues auszuprobieren.\nWenn ihr mögt, gibts außerdem am Morgen jeweils noch eine ordentliche Runde Sonnengrüße um zusammen voller Energie in den Tag zu starten! 🌱🧘🏾🍊✨",
        "name": "Morning Yoga",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Workshop,
    },
    {
        "id": "104",
        "startAt": "2023-06-17T11:00:00",
        "endAt": "2023-06-17T13:00:00",
        "description": "Hier gibt es keine Vorgaben, kein Richtig und Falsch. Beim Impro geht es ums freie Theaterspielen. In diesem Workshop werden wir gemeinsam dem improvisierten Theaterspielen näher kommen, mit verschiedenen Aufwärmübungen und Improspielen. Ihr braucht keine Vorkenntnisse im Schauspiel, jeder ist Willkommen ✨ Eure Kiara",
        "name": "Impro Theater",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Workshop,
    },
    {
        "id": "105",
        "startAt": "2023-06-17T13:00:00",
        "endAt": "2023-06-17T15:00:00",
        "description": "Lass dein inneres Zirkuskind raus!",
        "name": "Akrobatik",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Workshop,
    },
    {
        "id": "106",
        "startAt": "2023-06-17T11:00:00",
        "endAt": "2023-06-17T14:00:00",
        "description": "Hochdruck! - funktioniert im Grunde wie jeder Stempel. Was dann auf Papierkarten, Taschen, T-Shirts, Tabaksbeutel... gedruckt werden soll liegt in unserer Hand.\n\nAls Druckplatten bring ich eine Sammlung an Linol-, Holz- und Gummiresten mit. In diese werden mit Hohlmessern nach Lust und, Laune die Motive geschnitten, um sie nachher mit einer Presse z.B. auf Karten, oder mit einem Löffel auf Textilien zu drucken. Das kann schwarzweiß oder (mehr-)farbig passieren und oft wiederholt werden. Sobald Motive vorhanden sind könnte man diese also austauschen und kombinieren.\n\nBringt gerne auch eigene Druckstöcke oder Werkzeug mit, falls ihr welche habt und dies vorher lest. Freu mich drauf!🎨🖼🧑‍🎨",
        "name": "Druckpresse",
        "openEnd": false,
        "location": Locations.Werkelwinkel,
        "type": GigType.Workshop,
    },
    {
        "id": "107",
        "startAt": "2023-06-17T14:00:00",
        "endAt": "2023-06-17T17:00:00",
        "description": "Ein kunterbuntes Fest mit Stoff und Farbe.",
        "name": "Batiken",
        "openEnd": false,
        "location": Locations.BatikBucht,
        "type": GigType.Workshop,
    },
    {
        "id": "108",
        "startAt": "2023-06-17T15:00:00",
        "endAt": "2023-06-17T18:00:00",
        "description": "Mit SIEBDRUCK bringen wir die verschiedensten Designs auf eure T-Shirts, Taschen oder was auch immer ihr zum Festival mitbringt. Bei unserem Siebdruck-Workshop lernt ihr, wie ihr Farben mixt und damit tolle Prints zaubert. Perfekt um ein Andenken an die Tanzwiese zu gestalten, welches ihr mit nach Hause nehmen könnt. 👚🌈🎨 ⚡️ Denkt daran Textilien mitzubringen. Gerne auch mehrere um mit anderen zu tauschen. Am besten in hellen Farben, damit der Print sich gut vom Hintergrund abhebt.",
        "name": "Siebdruck",
        "openEnd": false,
        "location": Locations.BatikBucht,
        "type": GigType.Workshop,
    },
    {
        "id": "109",
        "startAt": "2023-06-17T11:00:00",
        "endAt": "2023-06-17T14:00:00",
        "description": "Keine Beschreibung",
        "name": "Töpfern",
        "openEnd": false,
        "location": Locations.Werkelwinkel,
        "type": GigType.Workshop,
    },
    {
        "id": "110",
        "startAt": "2023-06-17T13:00:00",
        "endAt": "2023-06-17T17:00:00",
        "description": "Verwandlungskünstler*innen: Stoffreste werden zu Schutzhüllen für Lebensmittel, over-loved-Shirts zum Lebens(mittel)retter und dazu gibt es einen individuell bedruckten Beutel fürs Vesper! Workshop zum Einkaufen ohne Verpackungsmüll mit @parents4future.hohenlohe und @einmal.ohne.bitte \n\nWenn du magst, kannst du auch ein eigenes ausgemustertes T-Shirt oder einen schönen Stoffrest mitbringen, den wir dann gemeinsam upcyclen und ein zweites Leben schenken.",
        "name": "Upcycling",
        "openEnd": false,
        "location": Locations.Werkelwinkel,
        "type": GigType.Workshop,
    },
    {
        "id": "113",
        "startAt": "2023-06-17T12:00:00",
        "endAt": "2023-06-17T14:00:00",
        "description": "Keine Beschreibung",
        "name": "Aktives Zuhören",
        "openEnd": false,
        "location": Locations.Content,
        "type": GigType.Workshop,
    },
    {
        "id": "114",
        "startAt": "2023-06-17T14:00:00",
        "endAt": "2023-06-17T16:00:00",
        "description": "⚡️ Wie gehe ich am besten damit um, wenn ich Belästigungen im öffentlichen Raum als Außenstehende mitbekomme?\n\n⚡️ Was kann ich machen um die Situation zu entschärfen?\n\n⚡️ Was für Möglichkeiten habe ich als Betroffene? - Wie ist die aktuelle Rechtslage?\n\nUm all diese Fragen geht es im Workshop mit Sandra, der Leitung von @catcallsoffr und dem Vorstandsmitglied des deutschlandweiten Vereins Chalk Back Deutschland e.V..Ihr habt die Möglichkeit etwas über sexuelle Straßenbelästigung und Grenzüberschreitendes Verhalten zu lernen und in einen gemeinsamen Austausch zu kommen. Außerdem könnt ihr im Rahmen dieses Workshops eure Erfahrungen wortwörtlich mit Kreide an einer Tafel 'ankreiden'. Die Tafel mit euren gesammelten Erfahrungen, die während des Festivals stehen bleibt, soll zum Nachdenken und Diskutieren anregen.Ziel des Workshops ist es, das eigene Verhalten zu reflektieren und ein besseres Bewusstsein für persönliche Grenzen und die Grenzen anderer zu entwickeln.",
        "name": "Catcalling",
        "openEnd": false,
        "location": Locations.Content,
        "type": GigType.Workshop,
    },
    {
        "id": "115",
        "startAt": "2023-06-17T16:00:00",
        "endAt": "2023-06-17T18:00:00",
        "description": "In diesem Workshop werden wir uns mit verschiedenen Diskriminierungen auseinandersetzen und mit unseren eigenen Privilegien beschäftigen. Zusätzlich wollen wir gemeinsame Handlungsmöglichkeiten entwickeln gegenüber diskriminierenden Äußerungen und Handlungen.\n\nMit Farida Boukari, 1. Vorsitzende des Change Networks e.V., welches sich intersektional mit Schwerpunkt auf Anti-Rassismus Arbeit in Saarbrücken engagiert.",
        "name": "Diskriminierung",
        "openEnd": false,
        "location": Locations.Content,
        "type": GigType.Workshop,
    },
    {
        "id": "116",
        "startAt": "2023-06-18T10:00:00",
        "endAt": "2023-06-18T11:00:00",
        "description": "Zwischen tanzwütigen Ekstasen, gemeinsamen grooven und entspannten Momenten in der Sonne - gibt es während der „Tanzwiese“ Yogastunden für euch! Achtsam und dynamisch fließen wir durch unsere Vinyasa Flow Sessions, wobei die unterschiedlichsten Levels integriert werden können. Der Fokus liegt dabei auf euch, euren bewussten Umgang mit dem eigenen Körper und der Möglichkeit in aller Ruhe einen Moment für die gezielte Achtsamkeit zu nehmen, oder auch einfach mal etwas neues auszuprobieren.\nWenn ihr mögt, gibts außerdem am Morgen jeweils noch eine ordentliche Runde Sonnengrüße um zusammen voller Energie in den Tag zu starten! 🌱🧘🏾🍊✨",
        "name": "Morning Yoga",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Workshop,
    },
    {
        "id": "117",
        "startAt": "2023-06-18T14:00:00",
        "endAt": "2023-06-18T16:00:00",
        "description": "Let it flow, let it go, Shake it out. Erschaffe eine Verbindung zu dir selbst, zur Erde und zu deinen Mitmenschen. Lass alle Erwartungen an die Schönheit deiner Bewegungen los und gib dir Raum, das zu entfalten, was für dich da ist. Ob TänzerInnen oder linke Füße, ihr seid alle willkommen, euren einzigartigen Ausdruck zu entdecken. From my Heart to yours Fredi",
        "name": "Impro Tanz",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Workshop,
    },
    {
        "id": "118",
        "startAt": "2023-06-18T11:00:00",
        "endAt": "2023-06-18T13:00:00",
        "description": "Mit SIEBDRUCK bringen wir die verschiedensten Designs auf eure T-Shirts, Taschen oder was auch immer ihr zum Festival mitbringt. Bei unserem Siebdruck-Workshop lernt ihr, wie ihr Farben mixt und damit tolle Prints zaubert. Perfekt um ein Andenken an die Tanzwiese zu gestalten, welches ihr mit nach Hause nehmen könnt. 👚🌈🎨 ⚡️ Denkt daran Textilien mitzubringen. Gerne auch mehrere um mit anderen zu tauschen. Am besten in hellen Farben, damit der Print sich gut vom Hintergrund abhebt.",
        "name": "Siebdruck",
        "openEnd": false,
        "location": Locations.BatikBucht,
        "type": GigType.Workshop,
    },
    {
        "id": "119",
        "startAt": "2023-06-18T13:00:00",
        "endAt": "2023-06-18T15:00:00",
        "description": "Keine Beschreibung",
        "name": "Töpfern",
        "openEnd": false,
        "location": Locations.Werkelwinkel,
        "type": GigType.Workshop,
    },
    {
        "id": "120",
        "startAt": "2023-06-18T16:00:00",
        "endAt": "2023-06-18T18:00:00",
        "description": "Keine Beschreibung",
        "name": "Aktives Zuhören",
        "openEnd": false,
        "location": Locations.Content,
        "type": GigType.Workshop,
    },
    {
        "id": "121",
        "startAt": "2023-06-18T18:00:00",
        "endAt": "2023-06-18T21:00:00",
        "description": "Hier können sich alle Künstler*innen, welche sich auf der Bühne mal ausprobieren wollen, die Chance ergreifen!",
        "name": "Open Stage",
        "openEnd": false,
        "location": Locations.MainStage,
        "type": GigType.Workshop,
    },
    {
        "id": "122",
        "startAt": "2023-06-18T13:00:00",
        "endAt": "2023-06-18T15:00:00",
        "description": "Ein herausstechendes Erlebnis!",
        "name": "Akupunktur",
        "openEnd": false,
        "location": Locations.Content,
        "type": GigType.Workshop,
    },
]


const useTimeTable = (idFilter: string[] | null = null) => {
    if (idFilter === null) return timetable

    return timetable.filter(gig => {
        return idFilter.indexOf(gig.id) >= 0
    })
}   

const useArtistGigs = (artistId?: string ) => {
    if (!artistId) return []
    return timetable.filter(gig => {
        return gig.artistId === artistId
    })
}

const useTimeTableEvent = (id?: string) => {
    if (!id) return undefined
    return timetable.filter(gig => {
        return gig.id === id
    })[0]
}

export { useTimeTable, useArtistGigs, useTimeTableEvent }