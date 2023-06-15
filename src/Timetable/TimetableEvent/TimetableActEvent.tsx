import React, { useState } from 'react'
import { Box, PrimaryBox } from '../../Ui'
import { Box as MuiBox, Link } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useArtist } from '../../Database';
import Button from '@mui/material/Button';
import Diversity1Rounded from '@mui/icons-material/Diversity1Rounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION_INDEXES } from '../../Navigation/NavigationItem/NavigationItem';


type Props = {
    artistId: string,
    startAt: string,
    endAt: string,
    description?: string,
    openEnd: boolean,
    onFavorize?: () => void
    isFavorite?: boolean
    location: string,
    type: string
}

const TimetableEvent: React.FC<Props> = ({ startAt, endAt, artistId, openEnd, description, onFavorize = () => {}, isFavorite = false, type, location: locationName }) => {
    const [isExtended, setIsExtended] = useState<boolean>(false)
    const artist = useArtist(artistId)
    const navigate = useNavigate()
    const location = useLocation()
    const currentRouteDepth : number =  NAVIGATION_INDEXES.indexOf('/' + location.pathname.split('/')[1]) || 0

    const handleExtendToggle = () => {
        setIsExtended(!isExtended)
    }

    const navigateToArtist = () => {
        navigate('/artists/' + artistId, {state: { from: '/timetable', previousRouteDepth: currentRouteDepth }})
    }

    return (
        <PrimaryBox>
            <MuiBox sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <MuiBox onClick={handleExtendToggle} sx={{
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
                        minWidth: '80px',
                    }}>
                        {openEnd ? 'ab ' : ''}
                        {(new Date(startAt)).getHours().toString().padStart(2, '0')}:{(new Date(startAt)).getMinutes().toString().padStart(2, '0')}
                        {openEnd ? '' : `-${(new Date(endAt)).getHours().toString().padStart(2, '0')}:${(new Date(endAt)).getMinutes().toString().padStart(2, '0')}`}
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
                        <MuiBox sx={{ 
                                display: 'flex',
                                fontSize: '0.8em',
                            }}>
                                {locationName}
                            </MuiBox>
                        {description && description !== '' && (

                            <MuiBox sx={{ 
                                display: 'flex',
                                fontSize: '0.8em',
                                opacity: '0.6'
                            }}>
                                {description}
                            </MuiBox>
                        )}
                    </MuiBox>
                    {!isExtended && (
                        <MuiBox sx={{
                            fontWeight: 'bold',
                            display: 'flex',
                        }}>
                            <IconButton aria-label="like" onClick={(e) => {onFavorize(); e.stopPropagation()}}>
                                {isFavorite ? 
                                <FavoriteIcon sx={{ color: '#ff572a'}} /> :
                                <FavoriteBorderIcon sx={{ color: 'white'}} />
                                }
                            </IconButton>
                        </MuiBox>
                    )}
                </MuiBox>
                {isExtended && artist && (
                    <MuiBox sx={{
                        display: 'flex',
                        maxWidth: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        {artist.description ? (
                            <MuiBox sx={{
                                display: 'flex',
                                mb: 2,
                                mt: 0.5,
                                flexDirection: 'column',
                                whiteSpace: "pre-wrap",
                                width: "100%",
                            }}>
                                {artist.description.length > 140 ? artist.description.substring(0, 140) + '...' : artist.description}
                                <br />
                                <br />
                                <Link onClick={navigateToArtist}>Mehr erfahren...</Link>
                            </MuiBox>

                        ) : (
                            <MuiBox sx={{
                                display: 'flex',
                                mb: 2,
                                mt: 0.5,
                                flexDirection: 'column',
                                whiteSpace: "pre-wrap",
                                width: "100%",
                            }}>
                                Der oder die Künstler_in hat keine Beschreibung angegeben.
                                <br />
                                <br />
                                <Link onClick={navigateToArtist}>Mehr erfahren...</Link>
                            </MuiBox>
                        )}
                        <MuiBox sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: "100%"
                        }}>
                            <Button 
                                variant="contained"
                                sx={{ display: 'flex'}}
                                startIcon={<Diversity1Rounded />}
                                onClick={navigateToArtist}
                            >
                                    Künstler_in
                            </Button>
                            <Button 
                                variant={isFavorite ? 'outlined' : 'outlined'} 
                                onClick={() => onFavorize()}
                                sx={{ display: 'flex', ml: 1, fontWeight: isFavorite ? 'bold' : '300' }}
                                color="secondary"
                                endIcon={isFavorite ? 
                                    <FavoriteIcon /> :
                                    <FavoriteBorderIcon />
                                }
                                >
                                Fav_in
                            </Button>
                        </MuiBox>
                    </MuiBox>
                )}

            </MuiBox>
        </PrimaryBox>
    )
}

export default TimetableEvent