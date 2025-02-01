import {AppBar, Toolbar, Box, Typography, Button, Menu, MenuItem} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useState, useRef} from 'react';
import {PageRoute} from "../utils/navigation/PageRoute.tsx";

const NavBar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
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
        }, 2000);
    };

    const handleMenuEnter = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    return (
        <AppBar position="static" color="transparent" style={{boxShadow: "none"}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                {/* Лого и название */}
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
                    <>
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
                            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
