import React from 'react'
import Wrapper from './Wrapper.styled'
import NavigationItem from './NavigationItem'
import DeckIcon from '@mui/icons-material/DeckRounded';
import CalendarMonth from '@mui/icons-material/CalendarMonthRounded';
import Diversity1Rounded from '@mui/icons-material/Diversity1Rounded';
import MapRounded from '@mui/icons-material/MapRounded';


type Props = {

}

const Navigation: React.FC<Props> = () => {
    return <Wrapper>
        <NavigationItem to="/" label="Startpage" icon={<DeckIcon />}/>
        <NavigationItem to="/timetable" label="Timetable" icon={<CalendarMonth />}/>
        <NavigationItem to="/artists" label="Artists" icon={<Diversity1Rounded />}/>
        <NavigationItem to="/map" label="Map" icon={<MapRounded />}/>
    </Wrapper>
}

export default Navigation