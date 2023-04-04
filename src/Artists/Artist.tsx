import { Avatar, Box, Button } from '@mui/material'
import { Box as UiBox } from '../Ui' 
import React from 'react'
import { useParams } from 'react-router-dom'
import { useArtist, SocialPlatforms } from '../Database'
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ReactPlayer from 'react-player'
import {Spotify} from 'react-spotify-embed'

const platformIcons: {
    [key in SocialPlatforms]: JSX.Element
} = {
    soundcloud: <MusicNoteIcon />,
    spotify: <MusicNoteIcon />,
    instagram: <InstagramIcon />
}

const Artist: React.FC = () => {
    const { id } = useParams()
    const artist = useArtist(id || "0")

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {artist && artist.image && (
                <Avatar 
                    alt="Remy Sharp" 
                    src={artist.image} 
                    sx={{ width: '80vw', height: '80vw', boxShadow: '50px -20px 50px rgba(80, 20, 100, 0.2), -50px -30px 60px rgba(255, 170, 90, 0.1), -40px 60px 80px rgba(255, 255, 255, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.4)' }}
                />
            )}

            {artist && artist.name && (
                <h1>{artist.name}</h1>
            )}

            {artist && artist.description && (
                <UiBox style={{ whiteSpace: "pre-wrap" }}>{artist.description}</UiBox>
            )}

            {artist && artist.urls && typeof artist.urls !== "undefined" && artist.urls.spotify && (
                <UiBox fullwidth>
                    <Spotify width={"100%"} link={artist.urls.spotify} />
                </UiBox>
            )}

            {artist && artist.urls && typeof artist.urls !== "undefined" && artist.urls.soundcloud && (
                <UiBox fullwidth>
                    <ReactPlayer playsinline={true} height="420px" url={artist.urls.soundcloud} width="100%" />
                </UiBox>
            )}

            {artist && artist.urls && (
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    {artist && artist.urls && Object.keys(artist.urls).map((platform) => artist.urls && (
                        // @ts-ignore
                        <Button
                            key={platform}
                            startIcon={platformIcons[platform as SocialPlatforms]}
                            href={artist.urls[platform as SocialPlatforms] as string} 
                            target="_blank"
                            variant='text'
                            sx={{ display: 'flex' }}
                        >
                            {platform}
                        </Button>
                    ))}
                </Box>
            )}
        </Box>
    )
}

export default Artist