import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = ({ setLng, setLat }) => {
    const ctrl = new MapBoxGeocoder({
        accessToken: import.meta.env.VITE_MAPBOX,
        marker: false,
        // collapsed: true,
    });
    useControl(() => ctrl);
    ctrl.on('result', (e) => {
        console.log(e.result.place_name);
        const coords = e.result.geometry.coordinates;

        setLng(coords[0]);
        setLat(coords[1]);

    });
    return null;
};

export default Geocoder;
