import React from 'react'
import Wrapper from './Wrapper.styled'
import Label from './Label.styled'
import Icon from './Icon.styled'
import { Link, useLocation } from 'react-router-dom'

type Props = {
    label: string
    icon: React.ReactElement
    to: string
}

const NAVIGATION_INDEXES = [
    '/',
    '/timetable',
    '/artists',
    '/map',
  ]


const getIsActive = (pathname: string, to: string): boolean => {
    if (to === '/' && pathname !== to) return false
    return pathname.startsWith(to)
}

const NavigationItem: React.FC<Props> = ({ label, icon, to }) => {
    const location = useLocation()
    const active = getIsActive(location.pathname, to)
    const currentRouteDepth : number =  NAVIGATION_INDEXES.indexOf('/' + location.pathname.split('/')[1]) || 0

    return (
        <Wrapper isactive={active ? 1 : 0} as={Link} to={to} state={{ previousRouteDepth: currentRouteDepth }}>
            <Icon>
                {icon}
            </Icon>
            <Label>{label}</Label>
        </Wrapper>
    )
}

export default NavigationItem