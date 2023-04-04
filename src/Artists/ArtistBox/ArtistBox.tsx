import { Avatar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useArtist } from "../../Database";
import AvatarWrapper from "./AvatarWrapper.styled";
import Wrapper from "./Wrapper.styled";
import NameWrapper from "./NameWrapper.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION_INDEXES } from "../../Navigation/NavigationItem/NavigationItem";
import { useSpring, config, to } from "react-spring";


type Props = {
    id: string
    hue?: number
    container: HTMLDivElement | null
}

const ArtistBox: React.FC<Props> = ({ id, hue = 0, container }) => {
    const artist = useArtist(id)
    const navigate = useNavigate()
    const location = useLocation()
    const currentRouteDepth : number =  NAVIGATION_INDEXES.indexOf('/' + location.pathname.split('/')[1]) || 0
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState<number>(0)
    const [styles, api] = useSpring(() => ({
        size: '1',
        x: '0px',
        y: '0px',
        blur: '0',
        opacity: '1',
        config: {
          ...config.wobbly,
          mass: 1,
          friction: 14,
          tension: 70,
        },
      }))
    
      useEffect(() => {
        api.stop()
        let size = offset > 0 ? 1 : 1 - (offset < -700 ? 0.7 : offset * -0.002)
        if (size < 0.5) size = 0.5
        api.start({ 
            size: `${size}`,
            x: `${Math.round(offset > 0 ? 0 : (Math.sin(offset * parseInt(id, 10) / 200) * 60) * (offset / - 500))}px`,
            y: `${Math.round(offset > 0 ? 0 : (Math.sin(offset * parseInt(id, 10) / 200) * 35) * (offset / - 500))}px`,
            blur: `${(1 - size) * 6}`,
            opacity: `${offset > 0 ? 1 : 1 - (offset * -0.002)}`,

        })
       }, [offset, api, id])

    useEffect(() => {
        if (wrapperRef.current !== null && container !== null) {
            console.log(wrapperRef.current.offsetTop)
        }
    }, [wrapperRef, container])

    useEffect(() => {
        if (wrapperRef.current === null) return
        
        const listener = () => {
                if (wrapperRef.current === null) return
                setOffset(wrapperRef.current.offsetTop - window.scrollY - 180)
        }

        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    })

    const navigateToArtist = () => {
        navigate('/artists/' + id, {state: { from: '/timetable', previousRouteDepth: currentRouteDepth }})
    }

    if (!artist) return null
    return (
        <Wrapper onClick={navigateToArtist} ref={wrapperRef}>
            <AvatarWrapper hue={hue}>
                <Avatar src={artist.image} sx={{ width: '35vw', height: "35vw", boxShadow: '50px -20px 50px rgba(80, 20, 100, 0.2), -50px -30px 60px rgba(255, 170, 90, 0.1), -40px 60px 80px rgba(255, 255, 255, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.4)' }} />
                <NameWrapper>{artist.name}</NameWrapper>
            </AvatarWrapper>
        </Wrapper>
    )
}

export default ArtistBox