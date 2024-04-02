import "./App.css";
import GoogleMapReact from "google-map-react";
import { googleApiKey } from "./googleAPIKey";
import { IoLocationSharp } from "react-icons/io5";

const AnyReactComponent = (/* { text } */) => (
	<div style={{ color: "red", fontSize: "40px" }}>
		<IoLocationSharp />
	</div>
);

function App() {
	const defaultProps = {
		center: {
			// rangpur park mor
			lat: 25.716949,
			lng: 89.26395,
		},
		zoom: 15,
	};
	return (
		<>
			<div style={{ height: "500px", width: "500px" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: googleApiKey }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<AnyReactComponent
						lat={defaultProps.center.lat}
						lng={defaultProps.center.lng}
						// text="My Marker"
					/>
				</GoogleMapReact>
			</div>
		</>
	);
}

export default App;
