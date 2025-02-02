export const toQueryString = (filters: Record<string, any>) => {
    return Object.entries(filters)
        .filter(([_, value]) => value !== "" && value !== false && value !== null && value !== undefined)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");
};
