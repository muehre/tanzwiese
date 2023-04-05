import React from "react";
import { Box } from '../Ui'
import config from '../config.json'
import AZBox from "./AZBox";
import { Button, Grid } from "@mui/material";
import { FAQ } from '../Database'
import Masonry from '@mui/lab/Masonry';

const Startpage =  () => {
    return  (
        <>
            <h1 style={{ marginBottom: '0' }}>{config.content.title}</h1>
            <h5 style={{ marginTop: '0.4rem', marginLeft: '1.15rem' }}>{config.content.subtitle}</h5>
            <Box>Weitere Infos folgen!</Box>
            <h2 style={{ justifyContent: 'center' }}>A-Z</h2>


            <div style={{ overflow: 'hidden'}}>
                <Grid container spacing={1} sx={{ mb: 2 }}>
                    {FAQ.map((element, index) => (
                        <Grid item key={index} xs={12} sm={"auto"}>
                            <Button startIcon={element.icon} href={`#${element.anchor}`} sx={{
                                margin: 0,
                                textAlign: 'left',
                                justifyContent: 'flex-start',
                                color: 'white',
                            }}>
                                {element.title}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div style={{ overflow: 'hidden'}}>
                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} sx={{ width: 'auto' }}>
                    {FAQ.map((element, index) => (
                        <AZBox title={element.title} image={element.image} anchor={element.anchor} action={element.action} key={index}>
                            {element.content}
                        </AZBox>
                    ))}
                </Masonry>
            </div>
        </>
    )
}

export default Startpage
