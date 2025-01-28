import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme.ts";
import {PageRoute} from "./utils/navigation/PageRoute.tsx";
import './App.css'
import MainPage from "./pages/MainPage.tsx";
import SearchVacancyPage from "./pages/SearchVacancyPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import NavBar from "./components/NavBar.tsx";
import {ReactNode} from "react";

interface ILayoutProps {
    children: ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
    const location = useLocation();

    // Проверяем, нужно ли скрывать NavBar
    const hideNavBar = location.pathname === "/";

    return (
        <>
            {!hideNavBar && <NavBar/>}
            {children}
        </>
    );
};

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Layout>
                    <AppContent/>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

function AppContent() {
    return (
        <Container sx={{display: 'flex', width: '100%', height: '100vh'}}>
            <Container sx={{padding: '20px'}}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path={PageRoute.searchVacancy} element={<SearchVacancyPage/>}/>
                    <Route path={PageRoute.login} element={<LoginPage/>}/>
                    <Route path={PageRoute.register} element={<RegisterPage/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>
            </Container>
        </Container>
    );
}
