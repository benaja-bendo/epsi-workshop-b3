import React from "react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import {Head} from "@inertiajs/react";

export default function Search({auth}) {
    return (<>
        <SiteLayout
            auth={auth}>
            <Head title="Recherche"/>
            <div>
                recherche
            </div>
        </SiteLayout>
    </>);
}
