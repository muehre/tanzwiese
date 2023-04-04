import { Slide, Snackbar } from "@mui/material"
import React, { PropsWithChildren, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

type Notification = {
    message: string
}

type NavigationContextType = {
    setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>
    notifications: Notification[]
    addNotification: (notification: Notification) => void
}

export const NavigationContext = React.createContext<NavigationContextType>({ 
    notifications: [], 
    setNotifications: () => {},
    addNotification: () => {}
});

type ProcessingState = {
    [key: string]: Notification
}
const NotificationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [processingNotifications, setProcessingNotifications] = useState<ProcessingState>({})

    const addNotification = (notification: Notification) => {
        setNotifications([
            ...notifications,
            notification
        ])
    }

    useEffect(() => {
        if (notifications.length === 0) return
        const proccessQueue: {[key: string]: Notification} = {}
        notifications.forEach(notification => {
            proccessQueue[uuidv4()] = notification
        })

        setTimeout(() => {
            setProcessingNotifications((current) => {
                let rest = current
                Object.keys(proccessQueue).forEach((id) => {
                    const {[id]: removed, ...morerest} = rest;
                    rest = morerest
                })
                return rest
            })
        }, 3000)

        setProcessingNotifications({
            ...processingNotifications,
            ...proccessQueue,
        })
        setNotifications([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notifications])

    return (
        <NavigationContext.Provider value={{ setNotifications: setNotifications, notifications, addNotification: addNotification }}>
            {Object.values(processingNotifications).map((notification, index) => (
                <Snackbar
                    open={true}
                    autoHideDuration={6000}
                    message={notification.message}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    TransitionComponent={Slide}
                    sx={{
                        marginTop: `${index * 54}px`
                    }}
              />
            ))}
            {children}
        </NavigationContext.Provider>
    )
}

export default NotificationProvider