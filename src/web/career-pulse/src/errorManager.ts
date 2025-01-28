let globalErrorHandler = null;

export const setErrorHandler = (handler) => {
    globalErrorHandler = handler;
};

export const triggerError = (msg: string) => {
    if (globalErrorHandler) {
        globalErrorHandler(msg);
    } else {
        console.error("Error handler not set:", msg);
    }
};
