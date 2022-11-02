import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import WeatherBox from "./WeatherBox";
import CityWeather from "./CityWeather";

import "./App.css";

const App = () => {
    const cities = [
        {
            label: "Tokyo–Yokohama",
            latitude: 35.5147457,
            longitude: 139.4839981
        },
        { label: "Manila", latitude: 14.5906216, longitude: 120.9799696 },
        { label: "Jakarta", latitude: -6.1753942, longitude: 106.827183 },
        { label: "Delhi", latitude: 28.6517178, longitude: 77.2219388 },
        {
            label: "Seoul-Incheon",
            latitude: 37.5056926,
            longitude: 126.7358775
        },
        { label: "Mumbai", latitude: 18.9387711, longitude: 72.8353355 },
        { label: "Mexico City", latitude: 19.4326296, longitude: -99.1331785 },
        {
            label: "Guangzhou–Foshan",
            latitude: 23.1592862,
            longitude: 113.4566381
        },
        { label: "New York", latitude: 40.7127281, longitude: -74.0060152 },
        { label: "Dhaka", latitude: 23.7593572, longitude: 90.3788136 },
        {
            label: "Osaka–Kobe–Kyoto",
            latitude: 34.8038695,
            longitude: 135.5156628
        },
        { label: "Moscow", latitude: 55.7504461, longitude: 37.6174943 },
        { label: "Cairo", latitude: 30.048819, longitude: 31.243666 },
        { label: "Beijing", latitude: 39.906217, longitude: 116.3912757 },
        { label: "Karachi", latitude: 24.8667795, longitude: 67.0311286 },
        {
            label: "Buenos Aires",
            latitude: -34.6075682,
            longitude: -58.4370894
        },
        { label: "Los Angeles", latitude: 34.0536909, longitude: -118.2427666 },
        { label: "Bangkok", latitude: 13.7542529, longitude: 100.493087 },
        { label: "São Paulo", latitude: -23.5506507, longitude: -46.6333824 },
        { label: "Lagos", latitude: 6.4550575, longitude: 3.3941795 },
        { label: "Kolkata", latitude: 22.5677459, longitude: 88.3476023 },
        { label: "Shenzhen", latitude: 22.555454, longitude: 114.0543297 },
        { label: "Istanbul", latitude: 41.0096334, longitude: 28.9651646 },
        { label: "Tehran", latitude: 35.7006177, longitude: 51.4013785 },
        { label: "Tianjin", latitude: 39.1235635, longitude: 117.1980785 },
        { label: "Shanghai", latitude: 31.2252985, longitude: 121.4890497 },
        {
            label: "Rio de Janeiro",
            latitude: -22.9110137,
            longitude: -43.2093727
        },
        { label: "Lima", latitude: -12.0621065, longitude: -77.0365256 },
        { label: "Lahore", latitude: 31.5656079, longitude: 74.3141775 },
        {
            label: "Ho Chi Minh City",
            latitude: 10.6497452,
            longitude: 106.7619794
        },
        { label: "London", latitude: 51.5073219, longitude: -0.1276474 },
        { label: "Bangalore", latitude: 12.9791198, longitude: 77.5912997 },
        { label: "Paris", latitude: 48.8566969, longitude: 2.3514616 },
        { label: "Chengdu", latitude: 30.6624205, longitude: 104.0633219 },
        {
            label: "Nagoya (Chūkyō)",
            latitude: 35.1387199,
            longitude: 136.9665068
        },
        { label: "Chennai", latitude: 13.0801721, longitude: 80.2838331 },
        { label: "Hyderabad", latitude: 25.3801017, longitude: 68.3750376 },
        { label: "Bogotá", latitude: 4.59808, longitude: -74.0760439 },
        {
            label: "Taipei-Taoyuan",
            latitude: 24.9929995,
            longitude: 121.3010003
        },
        { label: "Kinshasa", latitude: -4.3217055, longitude: 15.3125974 },
        { label: "Chicago", latitude: 41.8755616, longitude: -87.6244212 },
        { label: "Wuhan", latitude: 30.5951051, longitude: 114.2999353 },
        { label: "Onitsha", latitude: 6.133234, longitude: 6.792318 },
        { label: "Kuala Lumpur", latitude: 3.1516964, longitude: 101.6942371 },
        { label: "Dongguan", latitude: 23.0444712, longitude: 113.7465512 },
        { label: "Hanoi", latitude: 21.0294498, longitude: 105.8544441 },
        { label: "Ahmedabad", latitude: 23.0216238, longitude: 72.5797068 },
        {
            label: "Washington, D.C.-Baltimore",
            latitude: 39.2908816,
            longitude: -76.610759
        },
        { label: "Luanda", latitude: -8.8272699, longitude: 13.2439512 },
        { label: "Baghdad", latitude: 33.3024309, longitude: 44.3787992 },
        {
            label: "Xi'an–Xianyang",
            latitude: 34.3075655,
            longitude: 108.7234362
        },
        { label: "Hong Kong", latitude: 22.2793278, longitude: 114.1628131 },
        {
            label: "Johannesburg–East Rand",
            latitude: 35.3732015,
            longitude: -117.6432874
        },
        {
            label: "Zhengzhou–Xingyang",
            latitude: 34.7891274,
            longitude: 113.3724566
        },
        {
            label: "Boston-Providence",
            latitude: 41.7048225,
            longitude: -71.5483952
        },
        { label: "Shenyang", latitude: 41.8041094, longitude: 123.4276363 },
        { label: "Hangzhou", latitude: 30.2489634, longitude: 120.2052342 },
        {
            label: "Toronto–Hamilton",
            latitude: 43.6706177,
            longitude: -79.3746817
        },
        { label: "Quanzhou", latitude: 24.9038801, longitude: 118.5851458 },
        {
            label: "Dallas–Fort Worth",
            latitude: 32.7379037,
            longitude: -97.2394281
        },
        { label: "Santiago", latitude: 9.8694792, longitude: -83.7980749 },
        { label: "Houston", latitude: 29.7589382, longitude: -95.3676974 },
        { label: "Surat", latitude: 45.9383, longitude: 3.2553 },
        { label: "Madrid", latitude: 40.4167047, longitude: -3.7035825 },
        { label: "Nanjing", latitude: 32.0609736, longitude: 118.7916458 },
        { label: "Pune", latitude: 18.521428, longitude: 73.8544541 },
        { label: "Riyadh", latitude: 24.6319692, longitude: 46.7150648 },
        { label: "Nairobi", latitude: -1.2832533, longitude: 36.8172449 },
        { label: "Qingdao–Jimo", latitude: 36.4660932, longitude: 120.6190022 },
        { label: "Miami", latitude: 25.7742658, longitude: -80.1936589 },
        {
            label: "San Francisco-San Jose",
            latitude: 8.3512768,
            longitude: -81.0390519
        },
        { label: "Philadelphia", latitude: 39.9527237, longitude: -75.1635262 },
        { label: "Khartoum", latitude: 15.593325, longitude: 32.53565 },
        { label: "Amman", latitude: 31.9515694, longitude: 35.9239625 },
        { label: "Atlanta", latitude: 33.7490987, longitude: -84.3901849 },
        { label: "Singapore", latitude: 1.340863, longitude: 103.8303918 },
        { label: "Chongqing", latitude: 29.5585712, longitude: 106.5492822 },
        { label: "Yangon", latitude: 16.7967129, longitude: 96.1609916 },
        { label: "Suzhou", latitude: 31.3016935, longitude: 120.5810725 },
        { label: "Milan", latitude: 45.4668, longitude: 9.1905 },
        { label: "Aleppo", latitude: 36.19924, longitude: 37.1637253 },
        {
            label: "Saint Petersburg",
            latitude: 59.938732,
            longitude: 30.316229
        },
        { label: "Dar es Salaam", latitude: -6.8160837, longitude: 39.2803583 },
        { label: "Bandung", latitude: -6.9344694, longitude: 107.6049539 },
        { label: "Guadalajara", latitude: 20.6720375, longitude: -103.3383962 },
        { label: "Barcelona", latitude: 41.3828939, longitude: 2.1774322 },
        {
            label: "Belo Horizonte",
            latitude: -19.9227318,
            longitude: -43.9450948
        },
        { label: "Alexandria", latitude: 31.199004, longitude: 29.894378 },
        { label: "Kuwait City", latitude: 29.3797091, longitude: 47.9735629 },
        { label: "Harbin", latitude: 45.7656666, longitude: 126.6160584 },
        { label: "Sydney", latitude: -33.8548157, longitude: 151.2164539 },
        { label: "Abidjan", latitude: 5.320357, longitude: -4.016107 },
        { label: "Casablanca", latitude: 33.5950627, longitude: -7.6187768 },
        { label: "Melbourne", latitude: -37.8142176, longitude: 144.9631608 },
        { label: "Phoenix", latitude: 33.4484367, longitude: -112.0741417 },
        { label: "Colombo", latitude: 6.9349969, longitude: 79.8538463 },
        { label: "Monterrey", latitude: 25.6802019, longitude: -100.3152586 },
        { label: "Surabaya", latitude: -7.2459717, longitude: 112.7378266 },
        { label: "Ankara", latitude: 39.9207774, longitude: 32.854067 }
    ];

    localStorage.setItem("cities", JSON.stringify(cities));

    let routes = useRoutes([
        {
            path: "/",
            element: <WeatherBox />,
            children: [{ path: "/city/:city", element: <CityWeather /> }, {}]
        }
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
