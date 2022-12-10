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

    const [cityObj, setCityObj] = useState("");
    const [tommorowWeather, setTommorowWeather] = useState("");
    const [dayAfterTomorrow, setdayAfterTomorrow] = useState("");
    console.log(cityObj);

    const apiKey = "33babf34df7f7a714bc1812bb8445f04";

    useEffect(() => {
        let a = cities.find((c) => c.label === city);
        console.log(a?.latitude, "aasa");
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${a?.latitude}&lon=${a?.longitude}&appid=${apiKey}`;
        if (a) {
            fetch(url)
                .then((response) => response.json())
                .then((res) => {
                    setCityObj(res);
                    setTommorowWeather(res?.daily[0])
                    setdayAfterTomorrow(res?.daily[1])
                });
        }
    }, []);

    return (
        <>
            <article className="weather-info">
                <span> Город: {city}</span>
                <span>
                    Температура сейчас:
                    {Math.round(cityObj?.current?.dew_point - 273.15)}
                </span>
                <span>
                    Температура завтра:
                    {Math.round(tommorowWeather?.dew_point - 273.15)}
                </span>
                <span>
                    Температура послезавтра:
                    {Math.round(dayAfterTomorrow?.dew_point - 273.15)}
                </span>
            </article>
        </>
    );
};

export default CityWeather;
