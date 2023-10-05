import React, {useEffect, useRef} from "react";
import {Head, Link} from "@inertiajs/react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import {MAPS_API_KEY} from "./config.js";

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

export default function ListBonPlan({auth, bonPlan}) {
    return (<>
        <SiteLayout auth={auth}>
            <Head title="Liste des Bons Plans"/>
            <MyApp/>
        </SiteLayout>
    </>);
}
const MyApp = () => <Wrapper apiKey={MAPS_API_KEY} render={render}/>;

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
