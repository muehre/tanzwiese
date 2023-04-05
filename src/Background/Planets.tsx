import React, { useEffect, useRef } from 'react'
import { config, animated, useSpring, easings } from 'react-spring'
import styled from 'styled-components'

type Props = {
  offset: number
}

const OFFSET_MULTIPLIER = 22

const Wrapper =  styled(animated.div)`
    position: fixed;
    top: 0vh;
    bottom: 0vh;
    left: 0;
    width: 300vw;
    background-position: top left;
    background-size: cover;
    z-index: 102;
    background-image: url("/background/2x/planets@2x.png");  
    background-image: -webkit-image-set(    
      url(/background/1x/planets.png) 1x,    
      url(/background/2x/planets@2x.png) 2x,
    );  
    background-image: image-set(    
      url(/background/1x/planets.png) 1x,    
      url(/background/2x/planets@2x.png) 2x,
    );

    @media (min-width: 768px) {
      width 140vw;
      background-position: top center;
    }
`

const Planets: React.FC<Props> = ({ offset }) => {
  const [styles, api] = useSpring(() => ({
    left: `0vw`,
    config: {
      ...config.wobbly,
      mass: 1.5,
      friction: 12,
      tension: 120,
      easing: easings.easeInOutBounce,
    },
  }))
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current === null) return
    const max = Math.floor((imageRef.current.clientWidth / window.innerWidth - 1) * -100);
    let relativeOffset = offset * -OFFSET_MULTIPLIER -6
    if (relativeOffset < max) relativeOffset = max

   api.start({ left: `${relativeOffset}vw`})
  }, [offset, api])

  return (
    <Wrapper ref={imageRef} style={{ 
      left: styles.left
     }} />
  )
  
}

export default Planets