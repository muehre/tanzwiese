import { Avatar, Box, Button, Grid } from '@mui/material'
import { Box as UiBox } from '../Ui' 
import React from 'react'
import { useParams } from 'react-router-dom'
import { useArtist, SocialPlatforms, useArtistGigs } from '../Database'
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ReactPlayer from 'react-player'
import {Spotify} from 'react-spotify-embed'
import { Online } from "react-detect-offline";
import { EventPreview } from '../Timetable'

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
    const gigs = useArtistGigs(id)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 0, sm: 1, md: 2}
        }}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={4} sx={{ 
                    paddingTop: { xs: 0, sm: '4rem !important' },
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {artist && artist.image && (
                            <Avatar 
                                alt="Remy Sharp" 
                                src={artist.image} 
                                sx={{ 
                                    width: '80vw',
                                    height: '80vw',
                                    maxWidth: "260px",
                                    maxHeight: "260px",
                                    boxShadow: '50px -20px 50px rgba(80, 20, 100, 0.2), -50px -30px 60px rgba(255, 170, 90, 0.1), -40px 60px 80px rgba(255, 255, 255, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.4)',
                                }}
                            />
                        )}

                        {artist && artist.name && (
                            <h1 style={{ marginBottom: '0.875rem' }}>{artist.name}</h1>
                        )}

                        {artist && artist.urls && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
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
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <h2 style={{ marginBottom: '0.875rem' }}>Künstler_in</h2>
                    {gigs.map((gig) => (
                        <EventPreview key={gig.id} id={gig.id} />
                    ))}
                    {artist && artist.description && (
                    <UiBox style={{ whiteSpace: "pre-wrap" }}>{artist.description}</UiBox>
                    )}

                    <h2 style={{ marginBottom: '0.875rem' }}>Music Platforms</h2>
                    {artist && artist.urls && typeof artist.urls !== "undefined" && artist.urls.spotify && (
                        <UiBox fullwidth>
                            <Online><Spotify width={"100%"} link={artist.urls.spotify} /></Online>
                        </UiBox>
                    )}

                    {artist && artist.urls && typeof artist.urls !== "undefined" && artist.urls.soundcloud && (
                        <UiBox fullwidth>
                            <Online><ReactPlayer playsinline={true} height="420px" url={artist.urls.soundcloud} width="100%" /></Online>
                        </UiBox>
                    )}
                    </div>
                </Grid>
            </Grid>




                

            
        </Box>
    )
}

export default Artist