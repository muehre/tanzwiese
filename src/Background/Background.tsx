import React, { useEffect, useState } from 'react'

import Stars from './Stars'
import Planets from './Planets'
import Foreground from './Foreground'
import Mountains from './Mountains'
import ScrollShadow from './ScrollShadow'
import { useLocation } from 'react-router-dom'
import Wrapper from './Wrapper.styled'
import { NAVIGATION_INDEXES } from '../Navigation/NavigationItem/NavigationItem'

const isBrowser = typeof window !== `undefined`

const getScrollPosition = () => {
    if (!isBrowser) return { x: 0, y: 0 }
    return { x: window.scrollX, y: window.scrollY }
}

const MAX_SCROLL_NEGATION = 240

const Background = () => {
    const [scrollNegation, setScrollNegation] = useState<number>(0)
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const scrollPosition = getScrollPosition().y
            if (scrollPosition < 14) {
                setScrollNegation(0)
            } else if (scrollPosition > MAX_SCROLL_NEGATION) {
                setScrollNegation(MAX_SCROLL_NEGATION)
            } else {
                setScrollNegation(getScrollPosition().y)
            }
        })
    }, [location]);
    
    useEffect(() => {
        const closure = (event: Event) => {
        const scrollPosition = getScrollPosition().y
        if (scrollPosition < 14) {
            setScrollNegation(0)
        } else if (scrollPosition > MAX_SCROLL_NEGATION) {
            setScrollNegation(MAX_SCROLL_NEGATION)
        } else {
            setScrollNegation(getScrollPosition().y)
        }
      
    }
    window.addEventListener('scroll', closure);
    
    return () => {
        window.removeEventListener('scroll', closure);
    }
  })
  const offset = NAVIGATION_INDEXES.indexOf('/' + location.pathname.split('/')[1]) || 0

return (
    <Wrapper>
        <Stars offset={offset}/>
        <Planets offset={offset} />
        <Mountains offset={offset} scrollNegation={scrollNegation} />
        <Foreground offset={offset} scrollNegation={scrollNegation} />
        <ScrollShadow scrollNegation={scrollNegation} />
    </Wrapper>

)
} 

export default Background