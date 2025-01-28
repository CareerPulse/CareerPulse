import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ErrorProvider} from "./ErrorContext.tsx";
import {StyledEngineProvider} from "@mui/material";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StyledEngineProvider injectFirst>
            <ErrorProvider>
                <App/>
            </ErrorProvider>
        </StyledEngineProvider>
    </StrictMode>
)
