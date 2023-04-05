import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useTimeTable } from '../Database'
import TimetableBox from './TimetableBox'
import TimetableEvent from './TimetableEvent'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { db } from '../db'
import { NavigationContext } from '../Notification/NotificationProvider';


const dayMap = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
]

const boxSettings = {
    'morning': {
        hue: 90,
        contrast: 0.8,
        brightness: 2.5,
        grayscale: 0.3,
        saturate: 1,
    },
    
    'day': {
        hue: -52,
        contrast: 1.1,
        brightness: 2.2,
        grayscale: 0.4,
        saturate: 1.2,
    },
    
    'night': {
        hue: -45,
        contrast: 1.5,
        brightness: 1.8,
        grayscale: 0.7,
        saturate: 1,
    },

}

  
const Timetable: React.FC = () => {
    const [favorites, setFavorites] = useState<string[]>([])
    const [showFavorites, setShowFavorites] = useState<boolean>(false)
    const timetable = useTimeTable(null)
    const { addNotification } = useContext(NavigationContext)

    useEffect(() => {
        db.favorites.toArray().then(data => {
            let newFavorites: string[] = []
            data.forEach(storedFavorite => {
                if (storedFavorite.isFavorite) {
                    newFavorites.push(storedFavorite.id)
                }
            })

            setFavorites(newFavorites)
        })
    }, [])

    let daylieSortedTimetable: { [key: string] : { [key: string]: typeof timetable} } = {}

    Object.values(timetable).map(gig => {
        if ((new Date(gig.startAt)).getHours() >= 8) return {
            ...gig,
            showDate: gig.startAt,
        }
        const polyfillStartDate = new Date(gig.startAt)
        polyfillStartDate.setDate(polyfillStartDate.getDate() - 1)
        return {
            ...gig,
            showDate: polyfillStartDate.toString(),
        }
    }).sort((a,b) => (a.showDate > b.showDate) ? 1 : ((b.showDate > a.showDate) ? -1 : 0)).forEach((gig) => {
        let startAtDate = new Date(gig.showDate)
        let playTime = 'night'
        if (startAtDate.getHours() >= 8 && startAtDate.getHours() < 13) playTime = 'morning'
        if (startAtDate.getHours() >= 13 && startAtDate.getHours() < 20) playTime = 'day'

        const playDay = `${startAtDate.getFullYear()}-${startAtDate.getUTCMonth().toString().padStart(2, '0')}-${startAtDate.getDay().toString().padStart(2, '0')}`

        if (typeof daylieSortedTimetable[playDay] === "undefined") daylieSortedTimetable[playDay] = {}
        if (typeof daylieSortedTimetable[playDay][playTime] === "undefined") daylieSortedTimetable[playDay][playTime] = []
        daylieSortedTimetable[playDay][playTime].push(gig)
    })
    const [selectedDay, setSelectedDay] = useState<string>(Object.keys(daylieSortedTimetable).sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))[0])

    if (!daylieSortedTimetable[selectedDay]) daylieSortedTimetable[selectedDay] = {}

    const handleAddFavorite = async (id: string) => {
        let newFavorites: string[] = []
        if (favorites.indexOf(id) >= 0) {
            newFavorites = [...favorites]
            newFavorites.splice(favorites.indexOf(id), 1)
            db.favorites.delete(id)
            addNotification({ message: 'Von den Favoriten entfernt'})
        } else {
            newFavorites = [...favorites, id]
            db.favorites.add({
                id,
                isFavorite: true
            })
            addNotification({ message: 'Zu den Favoriten hinzugefügt'})
        }



        setFavorites(newFavorites)
    }

    const toggleShowFavorites = () => {
        if (showFavorites) {
            addNotification({ message: 'Alle Gig\'s anzeigen'})
        } else {
            addNotification({ message: 'Favoriten anzeigen'})
        }
        setShowFavorites(!showFavorites)
    }


    return (
        <Box sx={{
            overflow: 'hidden',
            borderRadius: '20px',
        }}>
        <Box sx={{
            background: 'rgba(45,140,200,0.1)',
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backdropFilter: 'blur(1px)',
        }}>
            <Box sx={{
                display: 'flex',
                p: 1,
                pt: 2,
                pb: 2,
                opacity: 0.5,
            }}>
                <CalendarMonthIcon />
            </Box>
            <Box sx={{
                display: 'flex',
                flex: 1,
                p: 1,
            }}>      
                <FormControl fullWidth sx={{
                }}>
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Tag</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedDay}
                    defaultValue={selectedDay}
                    label="Tag"
                    onChange={(event: SelectChangeEvent) => setSelectedDay(event.target.value as string)}
                    sx={{
                        color: '#eee'
                    }}
                    >
                        {Object.keys(daylieSortedTimetable).sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0)).map((dayString: string) => (
                            <MenuItem value={dayString} key={dayString}>
                                {dayMap[(new Date(dayString)).getDay()]}
                                {' '}
                                {(new Date(dayString)).toLocaleDateString('de-DE', { day: 'numeric', month: 'long'})}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{
                display: 'flex',
                p: 1,
                pt: 2,
                pb: 2,
            }}>
                <IconButton aria-label="like" onClick={() => toggleShowFavorites()}>
                    {showFavorites ? 
                    <FavoriteIcon sx={{ color: '#ff572a'}} /> :
                    <FavoriteBorderIcon sx={{ color: 'white'}} />
                    }
                </IconButton>
            </Box>
        </Box>

        {Object.keys(daylieSortedTimetable[selectedDay]).map((timeString: string) => (
            <TimetableBox key={timeString} {...boxSettings[timeString as 'day' | 'night']}>
                {daylieSortedTimetable[selectedDay][timeString].map(gig => (
                    <Fragment key={gig.id}>
                        {((showFavorites && favorites.indexOf(gig.id) >= 0) || !showFavorites) && (
                            <TimetableEvent 
                                endAt={gig.endAt}
                                startAt={gig.startAt} 
                                artistId={gig.artistId}
                                description={gig.description}
                                key={gig.id}
                                openEnd={gig.openEnd}
                                isFavorite={favorites.indexOf(gig.id) >= 0}
                                onFavorize={() => handleAddFavorite(gig.id)}
                            />
                        )}
                    </Fragment>
                ))}
            </TimetableBox>
        ))}
        </Box>
    )
}

export default Timetable