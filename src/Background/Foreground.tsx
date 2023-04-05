import React, { useEffect, useRef } from 'react'
import { animated, useSpring, config, SpringRef } from 'react-spring'
import styled from 'styled-components'

type Props = {
  offset: number,
  scrollNegation: number,
}


const OFFSET_MULTIPLIER = 60

const Wrapper = styled(animated.div)`
    position: fixed;
    top: 0vh;
    bottom: 0vh;
    left: 0;
    width: 300vw;
    background-position: top left;
    background-size: cover; 
    z-index: 104;
    background-image: url("/background/2x/foreground@2x.png");  
    background-image: -webkit-image-set(    
      url(/background/1x/foreground.png) 1x,    
      url(/background/2x/foreground@2x.png) 2x,
    );  
    background-image: image-set(    
      url(/background/1x/foreground.png) 1x,    
      url(/background/2x/foreground@2x.png) 2x,
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
      friction: 14,
      tension: 70,
    },
  }))
  const imageRef = useRef<HTMLDivElement>(null)

  const reposition = (currentOffset: number, currentApi: SpringRef<{ left: string; }>, immidiate: boolean = false) => {
    if (imageRef.current === null) return
    const max = Math.floor((imageRef.current.clientWidth / window.innerWidth - 1) * -100) + 3;
    let relativeOffset = currentOffset * -OFFSET_MULTIPLIER + -12
    if (relativeOffset < max) relativeOffset = max

    currentApi.start({ left: `${relativeOffset}vw`, config: { duration: immidiate ? 0 : undefined }})
  }

  useEffect(() => {
    const listener = () => {
      reposition(offset, api, true)
    }
    window.addEventListener("resize", listener)
    return () => {
      window.removeEventListener("resize", listener)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    reposition(offset, api)
  }, [offset, api])

  return (
    <Wrapper ref={imageRef} style={{ 
      left: styles.left, 
      transform: `scale(${scrollNegation / 1850 + 1}) translate3D(0,${Math.floor(Math.log(scrollNegation * 0.1) * 2)}px,0)`,
    }}
    />
  )
  
}

export default Foreground