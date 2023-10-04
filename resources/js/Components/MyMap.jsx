import React, {useEffect, useRef} from "react";
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import {MAPS_API_KEY} from "../Pages/config.js";

const render = (status) => {
    switch (status) {
        case Status.LOADING:
            return <p>Loading...</p>;
        case Status.FAILURE:
            return <p>Failed to load map!</p>;
        case Status.SUCCESS:
            return <MyMapComponent center={{lat: 48.8566, lng: 2.3522}} zoom={10}/>;
    }
};

// export default function MyMap(props) {
//     return <Wrapper apiKey={MAPS_API_KEY} render={render} {...props} />;
// }
const MyMap = React.memo(function MyMap(props) {
    return <Wrapper apiKey={MAPS_API_KEY} render={render} {...props} />;
});

function MyMapComponent({center, zoom}) {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });

    return <div className={"w-full h-96"}
                ref={ref} id="map"/>;
}

export default MyMap;
