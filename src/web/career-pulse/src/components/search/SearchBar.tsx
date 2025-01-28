import {Box, Button, TextField} from "@mui/material";
import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import {Tune} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {PageRoute} from "../../utils/navigation/PageRoute.tsx";

interface ISearchBarProps {
    onSearch: (query: string) => void;
    searchQuery?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({onSearch, searchQuery}) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState(searchQuery ?? "");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleAdvancedSearch = () => {
        navigate(PageRoute.advancedSearchVacancy);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" textAlign="center"
             alignContent="center" gap={1}>
            <TextField
                label="Поиск по вакансиям"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                fullWidth
                style={{
                    borderRadius: "16px",
                    flexGrow: 1,
                    height: "48px"
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                startIcon={<SearchIcon/>}
                style={{
                    height: "48px",
                    borderRadius: "8px",
                    padding: "0 16px",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleAdvancedSearch}
                startIcon={<Tune/>}
                style={{
                    height: "48px",
                    borderRadius: "8px",
                    padding: "0 16px",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
        </Box>
    );
};

export default SearchBar;
