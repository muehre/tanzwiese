import React, { useState } from 'react'
import { SecondaryBox } from '../../Ui'
import { Box as MuiBox } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';


type Props = {
    startAt: string,
    endAt: string,
    description?: string,
    openEnd: boolean,
    onFavorize?: () => void
    isFavorite?: boolean
    location: string,
    type: string
    name: string
}

const TimetableEvent: React.FC<Props> = ({ startAt, endAt, openEnd, description, onFavorize = () => {}, isFavorite = false, name, location: locationName }) => {
    const [isExtended, setIsExtended] = useState<boolean>(false)

    const handleExtendToggle = () => {
        setIsExtended(!isExtended)
    }

    return (
        <SecondaryBox>
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
                        <MuiBox sx={{ 
                                display: 'flex',
                                fontSize: '0.8em',
                                opacity: '0.5',
                            }}>
                                Workshop
                        </MuiBox>
                        <h5 style={{ 
                            fontWeight: 'bold',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            margin: 0,
                            display: 'flex'
                        }}>
                            {name}
                        </h5> 
                        <MuiBox sx={{ 
                                display: 'flex',
                                fontSize: '0.8em',
                            }}>
                                {locationName}
                        </MuiBox>
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
                {isExtended && (
                    <MuiBox sx={{
                        display: 'flex',
                        maxWidth: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                         <MuiBox sx={{
                                display: 'flex',
                                mb: 2,
                                mt: 0.5,
                                flexDirection: 'column',
                                whiteSpace: "pre-wrap",
                                width: "100%",
                            }}>
                                {description}
                            </MuiBox>

                        <MuiBox sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: "100%"
                        }}>
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
        </SecondaryBox>
    )
}

export default TimetableEvent