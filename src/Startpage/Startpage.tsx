import React from "react";
import { Box } from '../Ui'
import config from '../config.json'
import AZBox from "./AZBox";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import startpageInfos from './az'


const Startpage =  () => {
    return  (
        <>
            <h1 style={{ marginBottom: '0' }}>{config.content.title}</h1>
            <h5 style={{ marginTop: '0.4rem', marginLeft: '1.15rem' }}>{config.content.subtitle}</h5>
            <Box>Weitere Infos folgen!</Box>
            <h2 style={{ justifyContent: 'center' }}>A-Z</h2>
            <Box>
                <List sx={{ width: "100%"}}>
                    {startpageInfos.map(element => (
                        <ListItemButton component="a" href={`#${element.anchor}`} sx={{ padding: 0.2 }}>
                            <ListItemIcon sx={{ color: "white"}}>
                                {element.icon}
                            </ListItemIcon>
                            <ListItem disablePadding>
                                <ListItemText primary={element.title}/>
                            </ListItem>
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            {startpageInfos.map(element => (
                <AZBox title={element.title} image={element.image} anchor={element.anchor} action={element.action}>
                    {element.content}
                </AZBox>
            ))}
        </>
    )
}

export default Startpage