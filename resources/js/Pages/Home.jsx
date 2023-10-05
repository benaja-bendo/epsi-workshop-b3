import React from "react";
import {Head, Link} from "@inertiajs/react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import "../../css/home.css"
import asso from "../../image/DALL·E 2023-10-04 09.33.23.png"
import bpimg from "../../image/DALL·E 2023-10-04 09.37.35 - Créez une image joyeuse représentant des étudiatns qui étudies.png"

export default function Home({auth}) {
    return (<>
        <SiteLayout auth={auth}>
            <Head title="Accueil"/>

            <section id={"home"}>
        <div className={"pagehomecenter"}>
            <Link id={"association"} href={route('associations.list')} as='a'>
                <div>
                    <img src={asso} alt={"image représentant des étudiants qui discutes"}/>
                    <p>Association</p>
                </div>
            </Link>
            <Link id={"bonPlans"} href={route('BonPlan.list')} as='a'>

                <div>
                    <img src={bpimg} alt={"image représentant des étudiants qui discutes"}/>
                    <p>Bon Plans</p>
                </div>
            </Link>
        </div>
    </section>
        </SiteLayout>
    </>);
}
