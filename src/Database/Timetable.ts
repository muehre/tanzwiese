const timetable = [
    {
        "id": "1",
        "artistId": "1",
        "startAt": "2023-06-16T18:00:00",
        "endAt": "2023-06-16T19:00:00",
        "description": "",
        "openEnd": false,
    },
    { 
        "id": "2",
        "artistId": "2",
        "startAt": "2023-06-16T19:00:00",
        "endAt": "2023-06-16T20:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "3", 
        "artistId": "3",
        "startAt": "2023-06-16T20:00:00",
        "endAt": "2023-06-16T21:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "4", 
        "artistId": "4",
        "startAt": "2023-06-16T21:00:00",
        "endAt": "2023-06-16T22:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "5", 
        "artistId": "5",
        "startAt": "2023-06-16T22:30:00",
        "endAt": "2023-06-16T23:30:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "6", 
        "artistId": "6",
        "startAt": "2023-06-16T23:30:00",
        "endAt": "2023-06-17T00:30:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "7", 
        "artistId": "7",
        "startAt": "2023-06-17T00:30:00",
        "endAt": "2023-06-17T01:30:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "8", 
        "artistId": "8",
        "startAt": "2023-06-17T01:30:00",
        "endAt": "2023-06-17T03:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "9", 
        "artistId": "9",
        "startAt": "2023-06-17T03:00:00",
        "endAt": "2023-06-17T05:00:00",
        "description": "",
        "openEnd": true,
    },
    {
        "id": "10", 
        "artistId": "10",
        "startAt": "2023-06-17T13:00:00",
        "endAt": "2023-06-17T14:00:00",
        "description": "Ambient Mittag",
        "openEnd": false,
    },
    {
        "id": "11", 
        "artistId": "11",
        "startAt": "2023-06-17T15:00:00",
        "endAt": "2023-06-17T17:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "12", 
        "artistId": "12",
        "startAt": "2023-06-17T17:00:00",
        "endAt": "2023-06-17T18:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "13", 
        "artistId": "13",
        "startAt": "2023-06-17T18:00:00",
        "endAt": "2023-06-17T19:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "14", 
        "artistId": "14",
        "startAt": "2023-06-17T19:00:00",
        "endAt": "2023-06-17T20:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "15", 
        "artistId": "15",
        "startAt": "2023-06-17T20:00:00",
        "endAt": "2023-06-17T21:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "16", 
        "artistId": "16",
        "startAt": "2023-06-17T21:30:00",
        "endAt": "2023-06-17T23:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "17", 
        "artistId": "17",
        "startAt": "2023-06-17T23:00:00",
        "endAt": "2023-06-17T24:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "18", 
        "artistId": "18",
        "startAt": "2023-06-18T00:00:00",
        "endAt": "2023-06-18T01:00:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "19", 
        "artistId": "19",
        "startAt": "2023-06-18T01:00:00",
        "endAt": "2023-06-18T02:30:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "20", 
        "artistId": "20",
        "startAt": "2023-06-18T02:30:00",
        "endAt": "2023-06-18T03:30:00",
        "description": "",
        "openEnd": false,
    },
    {
        "id": "21", 
        "artistId": "420",
        "startAt": "2023-06-18T03:30:00",
        "endAt": "2023-06-18T06:00:00",
        "description": "",
        "openEnd": true,
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