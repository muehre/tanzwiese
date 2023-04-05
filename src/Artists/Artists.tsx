import React, { useRef } from 'react'
import { Grid } from '@mui/material'
import { useArtists } from '../Database'
import ArtistBox from './ArtistBox'

const hueMap = [
    45,
    -85,
    240,
    60,
    280,
    135
]

const Artists: React.FC = () => {
    const artists = useArtists()
    const containerRef = useRef<HTMLDivElement>(null)


    return (
        <>
         <Grid container ref={containerRef} spacing={{ xs: 1, sm: 2 }}>
            {artists.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)).map(({ id }, index) => (
                <Grid item xs={6} sm={4} md={3} key={id}>
                    <ArtistBox hue={hueMap[index % hueMap.length]} id={id} container={containerRef.current}></ArtistBox>
                </Grid>
            ))}
         </Grid>
        </>
    )
}

export default Artists