import {AppBar, Toolbar, Box, Typography, Button, Menu, MenuItem, IconButton, Badge} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useState, useRef} from 'react';
import {PageRoute} from "../utils/navigation/PageRoute.tsx";
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
    const timerRef = useRef(null);

    let email = localStorage.getItem("email");

    const handleLogout = () => {
        localStorage.removeItem("email");
        navigate(PageRoute.main);
    };

    const handleMenuOpen = (event: any) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleButtonMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            handleMenuClose();
        }, 20000);
    };

    const handleMenuEnter = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleNotificationsClick = (event: any) => {
        setNotificationsAnchorEl(event.currentTarget);
    };

    const handleNotificationsClose = () => {
        setNotificationsAnchorEl(null);
    };

    const notifications = [
        {id: 1, text: "Новое сообщение от работодателя"},
        {id: 2, text: "Вакансия обновлена"},
        {id: 3, text: "Приглашение на собеседование"}
    ];

    return (
        <AppBar position="static" color="transparent" style={{boxShadow: "none"}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box
                    sx={{display: "flex", alignItems: "center", cursor: "pointer"}}
                    onClick={() => navigate(PageRoute.main)}
                >
                    <Typography variant="h6" fontWeight="bold" sx={{mr: 2}}>
                        CareerPulse
                    </Typography>
                </Box>

                {email === null ? (
                    <Button color="inherit" onClick={() => navigate(PageRoute.login)}>
                        Войти
                    </Button>
                ) : (
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <IconButton
                            color="inherit"
                            onClick={handleNotificationsClick}
                            sx={{mr: 2}}
                        >
                            <Badge badgeContent={notifications.length} color="error">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <Menu
                            anchorEl={notificationsAnchorEl}
                            open={Boolean(notificationsAnchorEl)}
                            onClose={handleNotificationsClose}
                        >
                            {notifications.length > 0 ? (
                                notifications.map((notification) => (
                                    <MenuItem key={notification.id} onClick={handleNotificationsClose}>
                                        {notification.text}
                                    </MenuItem>
                                ))
                            ) : (
                                <MenuItem onClick={handleNotificationsClose}>
                                    Уведомлений нет
                                </MenuItem>
                            )}
                        </Menu>
                        <Button
                            color="inherit"
                            onMouseEnter={handleMenuOpen}
                            onMouseLeave={handleButtonMouseLeave}
                        >
                            {email}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                onMouseEnter: handleMenuEnter,
                                onMouseLeave: handleMenuClose,
                            }}
                        >
                            <MenuItem>Сохраненные вакансии</MenuItem>
                            <MenuItem>Все уведомления</MenuItem>
                            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                        </Menu>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
