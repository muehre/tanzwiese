import React, { useEffect } from 'react'
import { animated, useSpring, config, easings } from 'react-spring'
import styled from 'styled-components'

type Props = {
  scrollNegation: number,
}

const Wrapper =  styled(animated.div)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: 110;
    background-image: linear-gradient(0deg,rgba(86,50,100,0) ,rgba(86,50,100,0.4) 60%, rgba(56,38,70,0.5) 100%);
    opacity: 0;
    backdrop-filter: brightness(1) hue-rotate(-10deg) grayscale(0.1) contrast(1.05);
`

const Planets: React.FC<Props> = ({ scrollNegation }) => {
  const [styles, api] = useSpring(() => ({
    opacity: `0`,
    config: {
      ...config.wobbly,
      mass: 1.5,
      friction: 12,
      tension: 120,
      easing: easings.easeInOutBounce,
    },
  }))

  useEffect(() => {
    api.start({ 
      opacity: `${1/120*scrollNegation}`,
    })
  }, [scrollNegation, api])

  return (
    <Wrapper style={{
        opacity: styles.opacity,
    }} />
  )
  
}

export default Planets