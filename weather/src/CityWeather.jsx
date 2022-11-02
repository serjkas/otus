import "./WeatherBox.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CityWeather.css";

const CityWeather = () => {
    let { city } = useParams();
    // console.log(city);

    const cities = JSON.parse(localStorage.getItem("cities"));
    // console.log(cities);
    // const city_obj =
    // console.log(city_obj, "city_obj");

    const [cityObj, setCityObj] = useState([]);
    console.log(cityObj);

    useEffect(() => {
        function fetchData() {
            let a = cities.find((c) => c.label === city);
            console.log(a?.latitude, "aasa");
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${a?.latitude}&lon=${a?.longitude}&appid=${apiKey}`;
            if (a) {
                fetch(url)
                    .then((response) => response.json())
                    .then((res) => {
                        // console.log(res);
                        setCityObj(res);
                    });
            }
        }
        fetchData();
    }, []);

    const apiKey = "33babf34df7f7a714bc1812bb8445f04";

    return (
        <>
            <article className="weather-info">
                <span> Город: {city}</span>
                <span> Температура: {cityObj}</span>
            </article>
        </>
    );
};

export default CityWeather;
