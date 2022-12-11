import React, { useEffect } from 'react'
import { config, animated, useSpring } from 'react-spring'
import styled from 'styled-components'

type Props = {
  offset: number
  scrollNegation: number,
}

const OFFSET_MULTIPLIER = 14

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
    left: `0vh`,
    config: {
      ...config.wobbly,
      mass: 1.5,
      friction: 10,
      tension: 60,
    },
  }))

  useEffect(() => {
   api.start({ left: `${offset * -OFFSET_MULTIPLIER + -10}vh`})
  }, [offset, api])

  return (
    <Wrapper style={{ 
      left: styles.left,
      transform: `translateY(${(scrollNegation / -20)}px)`,
    }} />
  )
  
}

export default Foreground