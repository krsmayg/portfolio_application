import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps"
import mapStyles from "./mapStyle"
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultOptions={{ styles: mapStyles }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))
export default MyMapComponent;