import React, { useEffect, useRef } from 'react'
import { config, animated, useSpring } from 'react-spring'
import styled from 'styled-components'

type Props = {
  offset: number
  scrollNegation: number,
}

const OFFSET_MULTIPLIER = 30

const Wrapper = styled(animated.div)`
    position: fixed;
    top: 0vh;
    bottom: 0vh;
    left: 0vh;
    width: 300vw;
    background-position: top left;
    background-size: cover;
    z-index: 103;
    background-image: url("/background/2x/mountains@2x.png");  
    background-image: -webkit-image-set(    
      url(/background/1x/mountains.png) 1x,    
      url(/background/2x/mountains@2x.png) 2x,
    );  
    background-image: image-set(    
      url(/background/1x/mountains.png) 1x,    
      url(/background/2x/mountains@2x.png) 2x,
    );

    @media (min-width: 768px) {
      width 140vw;
      background-position: top center;
    }
`



const Foreground: React.FC<Props> = ({ offset, scrollNegation }) => {
  const [styles, api] = useSpring(() => ({
    left: `0vw`,
    config: {
      ...config.wobbly,
      mass: 1.5,
      friction: 10,
      tension: 60,
    },
  }))

  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current === null) return
    const max = Math.floor((imageRef.current.clientWidth / window.innerWidth - 1) * -100);
    let relativeOffset = offset * -OFFSET_MULTIPLIER 
    if (relativeOffset < max) relativeOffset = max

   api.start({ left: `${relativeOffset}vw`})
  }, [offset, api])

  return (
    <Wrapper ref={imageRef} style={{ 
      left: styles.left,
      transform: `translateY(${(scrollNegation / -20)}px)`,
    }} />
  )
  
}

export default Foreground