export const toQueryString = (filters: Record<string, any>) => {
    return Object.entries(filters)
        .filter(([_, value]) => value !== "" && value !== false)  // Отфильтровываем пустые значения и false
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");
};
