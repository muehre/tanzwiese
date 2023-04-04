import React, { useEffect } from 'react'
import Wrapper from './Wrapper.styled'
import HistoryWrapper from './HistoryWrapper.styled'
import BackButton from './BackButton.styled'
import NavigationItem from './NavigationItem'
import DeckIcon from '@mui/icons-material/DeckRounded';
import CalendarMonth from '@mui/icons-material/CalendarMonthRounded';
import Diversity1Rounded from '@mui/icons-material/Diversity1Rounded';
import MapRounded from '@mui/icons-material/MapRounded';
import { useLocation } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from "react-router-dom";

type Props = {

}

const Navigation: React.FC<Props> = () => {
    const { pathname, hash } = useLocation();
    const navigate = useNavigate()
    const { state } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    useEffect(() => {
        if (!hash || hash === '') {
            window.scrollTo(0, 0);
        }
      }, [hash]);

    return (
        <>
            {state && state.from && (
                <HistoryWrapper>
                    <BackButton aria-label="back" onClick={() => { navigate(-1)}}>
                        <KeyboardArrowLeftIcon sx={{ fontSize: "2rem"}} />
                    </BackButton>
                </HistoryWrapper>
            )}
            <Wrapper>
                <NavigationItem to="/" label="Übersicht" icon={<DeckIcon />}/>
                <NavigationItem to="/timetable" label="Timetable" icon={<CalendarMonth />}/>
                <NavigationItem to="/artists" label="Artists" icon={<Diversity1Rounded />}/>
                <NavigationItem to="/map" label="Map" icon={<MapRounded />}/>
            </Wrapper>
        </>
    )
}

export default Navigation