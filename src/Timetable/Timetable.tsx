import React from 'react'
import TimetableBox from './TimetableBox'

const Artists: React.FC = () => {


    return (
        <>
         <h1>Timetable</h1>
         <h2>Freitag</h2>
         <TimetableBox hue={-52} contrast={1.1} brightness={2.2} grayscale={0.4} saturate={1.2}>
            <h3>Tag</h3>
         </TimetableBox>
         <TimetableBox hue={-45} contrast={1.5} brightness={1.8} grayscale={0.7}>
            <h3>Nacht</h3>
         </TimetableBox>
        </>
    )
}

export default Artists