import React from 'react';
import './App.css';
import 'add-to-calendar-button/assets/css/atcb.css'
import Background from './Background';
import { useTransition, a, config } from 'react-spring'
import { useLocation, Routes, Route, useNavigate, Link } from 'react-router-dom'
import {Content, Page, Pages} from './Ui'
import { ThemeProvider } from 'styled-components';
import { Container, ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme, { muiTheme } from './theme';
import GlobalStyles from './globalStyles';
import Startpage from './Startpage';
import Artists, { Artist } from './Artists';
import Impressum from './Impressum';
import Timetable from './Timetable';
import Map from './Map';
import Navigation from './Navigation';
import { NotificationProvider } from './Notification';
import { useSwipeable } from 'react-swipeable';
import { Box } from '@mui/system';
import { NAVIGATION_INDEXES } from './Navigation/NavigationItem/NavigationItem';

const getAnimationSettings = (current: number, previous: number) => {
  if (current <= previous) {
    return {
      enter: { 
        from: {
          transform : `translate3d(-100%,0,0)`,
          opacity: `0`,
        },
        to: {
          transform : `translate3d(0%,0,0)`,
          opacity: `1`,
        },
  
      },
      leave: { 
        from: {
          transform : `translate3d(0,0,0)`,
          opacity: `1`,
        },
        to: {
          transform : `translate3d(100%,0,0)`,
          opacity: `0`,
        }
      },
    }
  } else {
    return {
      enter: { 
        from: {
          transform : `translate3d(100%,0,0)`,
          opacity: `0`,
        },
        to: {
          transform : `translate3d(0%,0,0)`,
          opacity: `1`,
        },
  
      },
      leave: { 
        from: {
          transform : `translate3d(0,0,0)`,
          opacity: `1`,
        },
        to: {
          transform : `translate3d(-100%,0,0)`,
          opacity: `0`,
        }
      },
    }
  }
}
 const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const currentRouteDepth = NAVIGATION_INDEXES.indexOf('/' + location.pathname.split('/')[1]) || 0
  const previousRouteDepth: number = location.state ? location.state.previousRouteDepth || 0 : 0

  const transitions = useTransition(location, {
    ...getAnimationSettings(currentRouteDepth, previousRouteDepth),
    config: { 
      ...config.wobbly,
      mass: 1,
      friction: 15,
      tension: 110,
     }
  })

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      if (currentRouteDepth >= 3 || eventData.deltaX > -40) return
      navigate(NAVIGATION_INDEXES[currentRouteDepth + 1], { state: { previousRouteDepth: currentRouteDepth }})
    },
    onSwipedRight: (eventData) => {
      if (currentRouteDepth <= 0 || eventData.deltaX < 40) return
      navigate(NAVIGATION_INDEXES[currentRouteDepth - 1], { state: { previousRouteDepth: currentRouteDepth }})
    },
    ...config,
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <NotificationProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Background />
          <Content {...handlers}> 
            <Container>
                <Pages>
                  {transitions((styles, item) => {
                    return (
                      <Page as={a.div} style={styles}>
                          <Routes location={item}>
                            <Route index element={<Startpage />} />
                            <Route path="timetable" element={<Timetable />} />
                            <Route path="artists" element={<Artists />} />
                            <Route path="artists/:id" element={<Artist />} />
                            <Route path="map" element={<Map />} />
                            <Route path="impressum" element={<Impressum/>} />
                          </Routes>
                      </Page>
                    )
                  })}
                </Pages>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                  <Link to={"/impressum"}>Impressum</Link>
                </Box>
            </Container>
          </Content>
          <Navigation />
        </ThemeProvider>
      </NotificationProvider>
    </MuiThemeProvider>
  )
}

export default App;
