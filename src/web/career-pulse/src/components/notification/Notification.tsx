import {Box, Typography} from "@mui/material";
import {NotificationResponse} from "../../models/notificationsApiModels.ts";

interface NotificationsPageProps {
    notification: NotificationResponse;
}

export const Notification = ({notification}: NotificationsPageProps) => {
    return (
        <Box key={notification.id} sx={{mb: 2, p: 2, border: '1px solid #ddd', borderRadius: '4px'}}>
            <Typography variant="body1">{notification.message}</Typography>
            <Typography variant="body2" color="textSecondary">
                {new Date(notification.date).toLocaleDateString()}
            </Typography>
        </Box>
    );
}
