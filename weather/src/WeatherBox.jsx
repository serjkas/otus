import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";

import "./WeatherBox.css";
import CitiesSearch from "./CitiesSearch";

export default function WeatherBox() {
    return (
        <div className="weather-box">
            <CitiesSearch />
            <Outlet />
        </div>
    );
}
