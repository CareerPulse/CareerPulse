import {useEffect, useState} from 'react';
import {Box, CircularProgress, Container, Typography} from '@mui/material';
import NotificationService from "../services/NotificationService.ts";
import {NotificationResponse} from "../models/notificationsApiModels.ts";
import {Notification} from "../components/notification/Notification.tsx";

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState<NotificationResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                setLoading(true);
                const notifications = await NotificationService.getAllMock();
                setNotifications(notifications);
            } catch (e) {
                console.error("Ошибка при загрузке уведомлений:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Уведомления
                </Typography>

                {loading ? (
                    <Box display="flex" justifyContent="center" my={4}>
                        <CircularProgress/>
                    </Box>
                ) : notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <Notification key={notification.id} notification={notification}/>
                    ))
                ) : (
                    <Typography variant="h6" textAlign="center">
                        Уведомлений нет
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default NotificationsPage;
