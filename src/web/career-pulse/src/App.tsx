import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Container, CssBaseline} from "@mui/material";
import {PageRoute} from "./utils/navigation/PageRoute.tsx";
import './App.css'
import MainPage from "./pages/MainPage.tsx";
import SearchVacancyPage from "./pages/SearchVacancyPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import NavBar from "./components/NavBar.tsx";
import {ReactNode} from "react";
import AdvancedSearchPage from "./pages/AdvancedSearchPage.tsx";
import AppTheme from "./theme/AppTheme.tsx";
import NotificationsPage from "./pages/NotificationsPage.tsx";
import SavedVacanciesPage from "./pages/SavedVacanciesPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";

interface ILayoutProps {
    children: ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
    const location = useLocation();
    const hideNavBar = location.pathname === PageRoute.main;

    return (
        <>
            {!hideNavBar && <NavBar/>}
            {children}
        </>
    );
};

export default function App() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme/>
            <Router>
                <Layout>
                    <AppContent/>
                </Layout>
            </Router>
        </AppTheme>
    );
}

function AppContent() {
    return (
        <Container sx={{display: 'flex', width: '100%', height: '100vh'}}>
            <Container sx={{padding: '20px'}}>
                <Routes>
                    <Route path={PageRoute.main} element={<MainPage/>}/>
                    <Route path={PageRoute.searchVacancy} element={<SearchVacancyPage/>}/>
                    <Route path={PageRoute.advancedSearchVacancy} element={<AdvancedSearchPage/>}/>
                    <Route path={PageRoute.login} element={<LoginPage/>}/>
                    <Route path={PageRoute.register} element={<RegisterPage/>}/>
                    <Route path={PageRoute.saved} element={<SavedVacanciesPage/>}/>
                    <Route path={PageRoute.notifications} element={<NotificationsPage/>}/>
                    <Route path={PageRoute.settings} element={<SettingsPage/>}/>
                    <Route path="*" element={<Navigate replace to={PageRoute.main}/>}/>
                </Routes>
            </Container>
        </Container>
    );
}
