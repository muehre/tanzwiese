import React, { useEffect, useState } from 'react'
import { Box } from '../../Ui'
import { Box as MuiBox, IconButton } from '@mui/material'
import { useArtist, useTimeTableEvent } from '../../Database';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../../db'

const dayMap = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
]

type Props = {
    id: string
}

const TimetableEvent: React.FC<Props> = ({ id }) => {
    const gig = useTimeTableEvent(id)
    const artist = useArtist(gig?.artistId)
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    let startDate = new Date(gig?.startAt || 'now')
    if (gig && (new Date(gig.startAt)).getHours() < 8) {
        startDate.setDate(startDate.getDate() - 1)
    }

    useEffect(() => {
        if (!gig) return
        db.favorites.toArray().then(data => {
            setIsFavorite(data.filter((storedFavorite) => {
                return storedFavorite.id === id && storedFavorite.isFavorite
            }).length > 0)
        })
    }, [id, setIsFavorite, gig])

    const handleToggleFavorite = () => {
        if (isFavorite) {
            db.favorites.delete(id)
        } else {
            db.favorites.add({
                id,
                isFavorite: true
            })
        }
        setIsFavorite(!isFavorite)
    }

    if (!gig) return null

    return (
        <Box>
            <MuiBox sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <MuiBox sx={{
                    display: 'flex',
                    maxWidth: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <MuiBox sx={{
                        whiteSpace: 'nowrap',
                        fontSize: '0.8em',
                        display: 'flex',
                        paddingTop: '3px',
                        paddingRight: '1rem',
                        minWidth: '50px',
                        flexDirection: 'column',
                    }}>
                        <div>{dayMap[(new Date(startDate)).getDay()]}</div>
                        <div>
                            {gig.openEnd ? 'ab ' : ''}
                            {(new Date(gig.startAt)).getHours().toString().padStart(2, '0')}:{(new Date(gig.startAt)).getMinutes().toString().padStart(2, '0')}
                            {gig.openEnd ? '' : `-${(new Date(gig.endAt)).getHours().toString().padStart(2, '0')}:${(new Date(gig.endAt)).getMinutes().toString().padStart(2, '0')}`}
                        </div>
                    </MuiBox>
                    <MuiBox sx={{ 
                        display: 'flex',
                        flex: 1,
                        overflow: 'hidden',
                        m: 1,
                        flexDirection: 'column'
                    }}>
                        <h5 style={{ 
                            fontWeight: 'bold',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            margin: 0,
                            display: 'flex'
                        }}>
                            {artist?.name}
                        </h5> 
                        {gig.description && gig.description !== '' && (

                            <MuiBox sx={{ 
                                display: 'flex',
                                fontSize: '0.8em',
                            }}>
                                {gig.description}
                            </MuiBox>
                        )}
                    </MuiBox>
                    <MuiBox sx={{
                            fontWeight: 'bold',
                            display: 'flex',
                        }}>
                            <IconButton aria-label="like" onClick={handleToggleFavorite}>
                                {isFavorite ? 
                                    <FavoriteIcon sx={{ color: '#ff572a'}} /> :
                                    <FavoriteBorderIcon sx={{ color: 'white'}} />
                                }
                            </IconButton>
                        </MuiBox>
                </MuiBox>
            </MuiBox>
        </Box>
    )
}

export default TimetableEvent