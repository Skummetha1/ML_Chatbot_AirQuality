import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
    const capitalCities = [
        { name: "Kabul", lat: 34.5553, lon: 69.2075 },
        { name: "Tirana", lat: 41.3275, lon: 19.8187 },
        { name: "Algiers", lat: 36.7372, lon: 3.0863 },
        { name: "Andorra la Vella", lat: 42.5078, lon: 1.5211 },
        { name: "Luanda", lat: -8.8390, lon: 13.2894 },
        { name: "Saint John's", lat: 17.1274, lon: -61.8468 },
        { name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
        { name: "Yerevan", lat: 40.1833, lon: 44.5152 },
        { name: "Canberra", lat: -35.2820, lon: 149.1287 },
        { name: "Vienna", lat: 48.2082, lon: 16.3738 },
        { name: "Baku", lat: 40.4093, lon: 49.8671 },
        { name: "Nassau", lat: 25.0343, lon: -77.3963 },
        { name: "Manama", lat: 26.2235, lon: 50.5876 },
        { name: "Dhaka", lat: 23.8103, lon: 90.4125 },
        { name: "Bridgetown", lat: 13.0975, lon: -59.6167 },
        { name: "Minsk", lat: 53.9045, lon: 27.5615 },
        { name: "Brussels", lat: 50.8503, lon: 4.3517 },
        { name: "Belmopan", lat: 17.2514, lon: -88.7669 },
        { name: "Porto-Novo", lat: 6.4969, lon: 2.6289 },
        { name: "Thimphu", lat: 27.4728, lon: 89.6390 },
        { name: "La Paz", lat: -16.5000, lon: -68.1500 },
        { name: "Sarajevo", lat: 43.8563, lon: 18.4131 },
        { name: "Gaborone", lat: -24.6282, lon: 25.9231 },
        { name: "Brasília", lat: -15.8267, lon: -47.9218 },
        { name: "Bandar Seri Begawan", lat: 4.9031, lon: 114.9398 },
        { name: "Sofia", lat: 42.6977, lon: 23.3219 },
        { name: "Ouagadougou", lat: 12.3680, lon: -1.5339 },
        { name: "Gitega", lat: -3.4264, lon: 29.9256 },
        { name: "Praia", lat: 14.9330, lon: -23.5133 },
        { name: "Phnom Penh", lat: 11.5564, lon: 104.9282 },
        { name: "Yaoundé", lat: 3.8480, lon: 11.5021 },
        { name: "Ottawa", lat: 45.4215, lon: -75.6972 },
        { name: "Bangui", lat: 4.3947, lon: 18.5582 },
        { name: "N'Djamena", lat: 12.1348, lon: 15.0557 },
        { name: "Santiago", lat: -33.4489, lon: -70.6693 },
        { name: "Beijing", lat: 39.9042, lon: 116.4074 },
        { name: "Bogotá", lat: 4.7110, lon: -74.0721 },
        { name: "Moroni", lat: -11.6990, lon: 43.2551 },
        { name: "Kinshasa", lat: -4.4419, lon: 15.2663 },
        { name: "Brazzaville", lat: -4.2634, lon: 15.2429 },
        { name: "San José", lat: 9.9281, lon: -84.0907 },
        { name: "Zagreb", lat: 45.8150, lon: 15.9819 },
        { name: "Havana", lat: 23.1136, lon: -82.3666 },
        { name: "Nicosia", lat: 35.1856, lon: 33.3823 },
        { name: "Prague", lat: 50.0755, lon: 14.4378 },
        { name: "Copenhagen", lat: 55.6761, lon: 12.5683 },
        { name: "Djibouti", lat: 11.8251, lon: 42.5903 },
        { name: "Roseau", lat: 15.3092, lon: -61.3790 },
        { name: "Santo Domingo", lat: 18.4861, lon: -69.9312 },
        { name: "Quito", lat: -0.1807, lon: -78.4678 },
        { name: "Cairo", lat: 30.0444, lon: 31.2357 },
        { name: "San Salvador", lat: 13.6929, lon: -89.2182 },
        { name: "Malabo", lat: 3.7500, lon: 8.7833 },
        { name: "Asmara", lat: 15.3229, lon: 38.9251 },
        { name: "Tallinn", lat: 59.4370, lon: 24.7535 },
        { name: "Addis Ababa", lat: 9.1450, lon: 40.4897 },
        { name: "Suva", lat: -18.1416, lon: 178.4419 },
        { name: "Helsinki", lat: 60.1695, lon: 24.9355 },
        { name: "Paris", lat: 48.8566, lon: 2.3522 },
        { name: "Libreville", lat: 0.4162, lon: 9.4673 },
        { name: "Banjul", lat: 13.4549, lon: -16.5790 },
        { name: "Tbilisi", lat: 41.7151, lon: 44.8271 },
        { name: "Berlin", lat: 52.5200, lon: 13.4050 },
        { name: "Accra", lat: 5.6037, lon: -0.1870 },
        { name: "Athens", lat: 37.9838, lon: 23.7275 },
        { name: "Saint George's", lat: 12.0561, lon: -61.7486 },
        { name: "Guatemala City", lat: 14.6349, lon: -90.5069 },
        { name: "Conakry", lat: 9.6412, lon: -13.5784 },
        { name: "Bissau", lat: 11.8817, lon: -15.6170 },
        { name: "Georgetown", lat: 6.8013, lon: -58.1551 },
        { name: "Port-au-Prince", lat: 18.5944, lon: -72.3074 },
        { name: "Tegucigalpa", lat: 14.0723, lon: -87.1921 },
        { name: "Budapest", lat: 47.4979, lon: 19.0402 },
        { name: "Reykjavík", lat: 64.1355, lon: -21.8954 },
        { name: "New Delhi", lat: 28.6139, lon: 77.2090 },
        { name: "Jakarta", lat: -6.2088, lon: 106.8456 },
        { name: "Tehran", lat: 35.6892, lon: 51.3890 },
        { name: "Baghdad", lat: 33.3152, lon: 44.3661 },
        { name: "Dublin", lat: 53.3498, lon: -6.2603 },
        { name: "Jerusalem", lat: 31.7683, lon: 35.2137 },
        { name: "Rome", lat: 41.9028, lon: 12.4964 },
        { name: "Kingston", lat: 18.0179, lon: -76.8099 },
    { name: "Tokyo", lat: 35.682839, lon: 139.759455 },
    { name: "Amman", lat: 31.9454, lon: 35.9284 },
    { name: "Nur-Sultan", lat: 51.1694, lon: 71.4491 },
    { name: "Nairobi", lat: -1.286389, lon: 36.817223 },
    { name: "Tarawa", lat: 1.451817, lon: 172.971662 },
    { name: "Pyongyang", lat: 39.0392, lon: 125.7625 },
    { name: "Seoul", lat: 37.5665, lon: 126.9780 },
    { name: "Pristina", lat: 42.6675, lon: 21.1662 },
    { name: "Kuwait City", lat: 29.3759, lon: 47.9774 },
    { name: "Bishkek", lat: 42.874722, lon: 74.612222 },
    { name: "Vientiane", lat: 17.9757, lon: 102.6331 },
    { name: "Riga", lat: 56.9489, lon: 24.1064 },
    { name: "Beirut", lat: 33.8889, lon: 35.4944 },
    { name: "Maseru", lat: -29.3158, lon: 27.4860 },
    { name: "Monrovia", lat: 6.3156, lon: -10.8067 },
    { name: "Tripoli", lat: 32.8872, lon: 13.1913 },
    { name: "Vaduz", lat: 47.1410, lon: 9.5209 },
    { name: "Vilnius", lat: 54.6872, lon: 25.2797 },
    { name: "Luxembourg", lat: 49.6117, lon: 6.13 },
    { name: "Antananarivo", lat: -18.8792, lon: 47.5079 },
    { name: "Lilongwe", lat: -13.9626, lon: 33.7741 },
    { name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869 },
    { name: "Male", lat: 4.1755, lon: 73.5093 },
    { name: "Bamako", lat: 12.6392, lon: -8.0029 },
    { name: "Valletta", lat: 35.8978, lon: 14.5125 },
    { name: "Majuro", lat: 7.0897, lon: 171.3803 },
    { name: "Nouakchott", lat: 18.0735, lon: -15.9582 },
    { name: "Port Louis", lat: -20.1609, lon: 57.5012 },
    { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
    { name: "Palikir", lat: 6.9147, lon: 158.1610 },
    { name: "Chisinau", lat: 47.0105, lon: 28.8638 },
    { name: "Monaco", lat: 43.7333, lon: 7.4167 },
    { name: "Ulaanbaatar", lat: 47.8864, lon: 106.9057 },
    { name: "Podgorica", lat: 42.4417, lon: 19.2663 },
    { name: "Rabat", lat: 34.020882, lon: -6.84165 },
    { name: "Maputo", lat: -25.9653, lon: 32.5892 },
    { name: "Naypyidaw", lat: 19.7633, lon: 96.0785 },
    { name: "Windhoek", lat: -22.5609, lon: 17.0658 },
    { name: "Yaren", lat: -0.5477, lon: 166.9209 },
    { name: "Kathmandu", lat: 27.7172, lon: 85.3240 },
    { name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
    { name: "Wellington", lat: -41.2865, lon: 174.7762 },
    { name: "Managua", lat: 12.1364, lon: -86.2514 },
    { name: "Niamey", lat: 13.5122, lon: 2.1128 },
    { name: "Abuja", lat: 9.0765, lon: 7.3986 },
    { name: "Oslo", lat: 59.9139, lon: 10.7522 },
    { name: "Muscat", lat: 23.5880, lon: 58.3829 },
    { name: "Islamabad", lat: 33.6844, lon: 73.0479 },
    { name: "Ngerulmud", lat: 7.5000, lon: 134.6242 },
    { name: "Panama City", lat: 8.9824, lon: -79.5199 },
    { name: "Port Moresby", lat: -9.4438, lon: 147.1803 },
    { name: "Asunción", lat: -25.2637, lon: -57.5759 },
    { name: "Lima", lat: -12.0464, lon: -77.0428 },
    { name: "Manila", lat: 14.5995, lon: 120.9842 },
    { name: "Warsaw", lat: 52.2297, lon: 21.0122 },
    { name: "Lisbon", lat: 38.7223, lon: -9.1393 },
    { name: "Doha", lat: 25.276987, lon: 51.520008 },
    { name: "Bucharest", lat: 44.4268, lon: 26.1025 },
    { name: "Moscow", lat: 55.7558, lon: 37.6173 },
    { name: "Kigali", lat: -1.9706, lon: 30.1044 },
    { name: "Basseterre", lat: 17.3026, lon: -62.7177 },
    { name: "Castries", lat: 14.0101, lon: -60.9875 },
    { name: "Kingstown", lat: 13.1600, lon: -61.2248 },
    { name: "Apia", lat: -13.8333, lon: -171.7667 },
    { name: "San Marino", lat: 43.9333, lon: 12.45 },
    { name: "São Tomé", lat: 0.3365, lon: 6.7273 },
    { name: "Riyadh", lat: 24.7136, lon: 46.6753 },
    { name: "Dakar", lat: 14.6928, lon: -17.4467 },
    { name: "Belgrade", lat: 44.7866, lon: 20.4489 },
    { name: "Victoria", lat: -4.6196, lon: 55.4513 },
    { name: "Freetown", lat: 8.4657, lon: -13.2317 },
    { name: "Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Bratislava", lat: 48.1486, lon: 17.1077 },
    { name: "Ljubljana", lat: 46.0569, lon: 14.5058 },
    { name: "Honiara", lat: -9.4280, lon: 159.9495 },
    { name: "Mogadishu", lat: 2.0469, lon: 45.3182 },
    { name: "Pretoria", lat: -25.7479, lon: 28.2293 },
    { name: "Juba", lat: 4.8594, lon: 31.5713 },
    { name: "Madrid", lat: 40.4168, lon: -3.7038 },
    { name: "Colombo", lat: 6.9271, lon: 79.8612 },
    { name: "Khartoum", lat: 15.5007, lon: 32.5599 },
    { name: "Paramaribo", lat: 5.8520, lon: -55.2038 },
];
const fetchAirQuality = async (lat, lon) => {
    try {
        const response = await axios.post('http://localhost:9000/get-aqi', {
            latitude: lat,
            longitude: lon
        });
        return response.data.aqi || 'N/A';
    } catch (error) {
        console.error(`Error fetching air quality data for (${lat}, ${lon}):`, error);
        return 'N/A';
    }
};

const getRandomCities = (cities, count) => {
    const shuffled = cities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const Map = () => {
    const [locations, setLocations] = useState([]);
    const bounds = [[-85, -180], [85, 180]];

    useEffect(() => {
        const updateLocations = async () => {
            const randomCities = getRandomCities(capitalCities, 10); 
            const newLocations = [];
            for (const city of randomCities) {
                const aqi = await fetchAirQuality(city.lat, city.lon);
                newLocations.push({ ...city, aqi });
            }
            setLocations(newLocations);
        };

        updateLocations();
        const interval = setInterval(updateLocations, 8000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <MapContainer
            center={[45, 200]}
            zoom={2}
            minZoom={2}
            maxZoom={10}
            style={{ height: '600px', width: '100%' }}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                detectRetina={true}
            />
            {locations.map((loc, index) => (
                <Marker key={index} position={[loc.lat, loc.lon]}>
                    <Popup>
                        <b>Capital:</b> {loc.name} <br />
                        <b>Latitude:</b> {loc.lat} <br />
                        <b>Longitude:</b> {loc.lon} <br />
                        <b>Air Quality Index:</b> {loc.aqi}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;