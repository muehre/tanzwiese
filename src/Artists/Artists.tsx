import React from 'react'
import ArtistBox from './ArtistBox'

const Artists: React.FC = () => {


    return (
        <>
         <h1>Artists</h1>
         <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            <ArtistBox hue={45}></ArtistBox>
            <ArtistBox hue={-85}></ArtistBox>
            <ArtistBox hue={125}></ArtistBox>
            <ArtistBox hue={263}></ArtistBox>
            <ArtistBox hue={124}></ArtistBox>
            <ArtistBox hue={-613}></ArtistBox>
            <ArtistBox hue={2356}></ArtistBox>
            <ArtistBox hue={-324}></ArtistBox>
            <ArtistBox hue={235}></ArtistBox>
            <ArtistBox hue={-2637}></ArtistBox>
            <ArtistBox hue={6231}></ArtistBox>
            <ArtistBox hue={-6231}></ArtistBox>
         </div>
        </>
    )
}

export default Artists