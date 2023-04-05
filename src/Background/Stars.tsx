import React, { useEffect, useRef } from 'react'
import { config, animated, useSpring } from 'react-spring'
import styled from 'styled-components'

type Props = {
  offset: number
}

const OFFSET_MULTIPLIER = 4.5

const Wrapper = styled(animated.div)`
    position: fixed;
    top: 0vh;
    bottom: 0vh;
    left: 0;
    width: 300vw;
    background-position: top left;
    background-size: cover;
    z-index: 100;
    background-image: url("/background/2x/stars@2x.png");  
    background-image: -webkit-image-set(    
      url(/background/1x/stars.png) 1x,    
      url(/background/2x/stars.png) 2x,
    );  
    background-image: image-set(    
      url(/background/1x/stars.png) 1x,    
      url(/background/2x/stars@2x.png) 2x,
    );

    @media (min-width: 768px) {
      width 140vw;
      background-position: top center;
    }
`


const Stars: React.FC<Props> = ({ offset }) => {
  const [styles, api] = useSpring(() => ({
    left: `0vh`,
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
    let relativeOffset = offset * -OFFSET_MULTIPLIER - 10
    if (relativeOffset < max) relativeOffset = max
   api.start({ left: `${relativeOffset}vh`})
  }, [offset, api])

  return (
    <Wrapper ref={imageRef} style={{ left: styles.left }} />
  )
  
}

export default Stars