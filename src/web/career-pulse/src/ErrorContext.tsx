import React, {useState, ReactNode, createContext, useEffect} from 'react';
import {Snackbar} from '@mui/material';
import {setErrorHandler} from "./errorManager.ts";

interface ErrorProviderProps {
    children: ReactNode;
}

interface ErrorContextType {
    showError: (message: string) => void;
}

export const ErrorContext = createContext<ErrorContextType>({
    showError: () => {
    }
});

export const ErrorProvider: React.FC<ErrorProviderProps> = ({children}) => {
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const showError = (msg: string) => {
        setMessage(msg);
        setOpen(true);
    };

    useEffect(() => {
        setErrorHandler(showError);
    }, []);

    const handleClose = () => setOpen(false);

    return (
        <ErrorContext.Provider value={{showError}}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={message}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            />
        </ErrorContext.Provider>
    );
};
