import React from "react";
import { atcb_action as addToCalendar} from 'add-to-calendar-button';
import { Box } from '../Ui'
import config from '../config.json'


const Startpage =  () => {
    const onAddToCalander = () => {
        addToCalendar({
            "name":"Tanzwiese Festival",
            "description":"Wir laden zum Tanz!",
            "startDate":"2023-07-07",
            "endDate":"2023-07-09",
            "startTime":"10:00",
            "endTime":"23:59",
            "location":"Auf der Wiese",
            "label":"Dem Kalendar hinzufügen",
            "options":[
                "Apple",
                "Google",
                "iCal",
                "Microsoft365",
                "MicrosoftTeams",
                "Outlook.com",
                "Yahoo"
            ],
            "timeZone":"Europe/Berlin",
            "listStyle":"modal",
            "iCalFileName":"Tanzwiesen-Event"
        })
    }
    return  (
        <>
            <h1 style={{ marginBottom: '0' }}>{config.content.title}</h1>
            <h5 style={{ marginTop: '0.4rem', marginLeft: '1.15rem' }}>{config.content.subtitle}</h5>
            <Box><div onClick={onAddToCalander}>Test</div></Box>
        </>
    )
}

export default Startpage