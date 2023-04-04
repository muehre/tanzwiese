import React, { useRef } from 'react'
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
         <div style={{ display: 'flex', flexWrap: 'wrap'}} ref={containerRef}>
            {artists.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)).map(({ id }, index) => (
                <ArtistBox key={id} hue={hueMap[index % hueMap.length]} id={id} container={containerRef.current}></ArtistBox>
            ))}
         </div>
        </>
    )
}

export default Artists