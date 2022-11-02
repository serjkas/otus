import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CitiesSearch = () => {
    const cities = JSON.parse(localStorage.getItem("cities"));

    let navigate = useNavigate();

    const [city, setCity] = useState("");

    useEffect(() => {
        if (city !== "") {
            return navigate(`/city/${city.label}`);
        }
    }, [city]);

    return (
        <Autocomplete
            value={city}
            onChange={(_, newValue) => {
                setCity(newValue);
            }}
            isOptionEqualToValue={(option, value) =>
                option.label === value.label
            }
            options={cities ? cities : []}
            sx={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label="Выберите город" />
            )}
        />
    );
};

export default CitiesSearch;
