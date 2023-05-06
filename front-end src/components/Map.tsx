import { MapContainer, TileLayer,useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {atom,useAtom} from "jotai"

export const selectedLocationAtom = atom({})
const LocationFinderDummy = ({setParentLatLng}) => {
    const [sLoc, setSLoc] = useAtom(selectedLocationAtom)

    const map = useMapEvents({
        click(e) {
            setParentLatLng(e.latlng);
            setSLoc(e.latlng);
        },
    });
    return null;
};
const Map = ({setParentLatLng}) => {
    return (
        <MapContainer  style={{width:"100%", height: "100em"}} center={[51.505, -0.09]} zoom={8} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
            <LocationFinderDummy setParentLatLng={setParentLatLng} />
        </MapContainer>
    );
};

export default Map;
