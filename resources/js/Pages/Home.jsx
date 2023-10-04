import React from "react";
import {Head, Link} from "@inertiajs/react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";

export default function Home({auth}) {
    return (<>
        <SiteLayout auth={auth}>
            <Head title="Accueil"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">

                <div
                    className="flex backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
                    <div className="p-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                               strokeWidth="2">
                                <path d="M3 7h5l3.5 5H21M3 17h5l3.495-5"></path>
                                <path d="m18 15l3-3l-3-3"></path>
                            </g>
                        </svg>

                    </div>
                    <div className="ml-6">
                        <h2 className="text-sm font-semibold leading-6 text-slate-900">Associations</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                            retrouvez toutes les associations de la ville de votre lieu de résidence.
                        </p>
                    </div>
                </div>

                <div
                    className="flex backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
                    <div className="p-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                            <path
                                d="M452.1 49L52.3 265.3c-6 3.3-5.6 12.1.6 14.9l68.2 25.7c4 1.5 7.2 4.5 9 8.4l53 109.1c1 4.8 9.9 6.1 10 1.2l-8.1-90.2c.5-6.7 3-13 7.3-18.2l207.3-203.1c1.2-1.2 2.9-1.6 4.5-1.3 3.4.8 4.8 4.9 2.6 7.6L228 338c-4 6-6 11-7 18l-10.7 77.9c.9 6.8 6.2 9.4 10.5 3.3l38.5-45.2c2.6-3.7 7.7-4.5 11.3-1.9l99.2 72.3c4.7 3.5 11.4.9 12.6-4.9L463.8 58c1.5-6.8-5.6-12.3-11.7-9z"
                                fill="currentColor"></path>
                        </svg>

                    </div>
                    <div className="ml-6">
                        <h2 className="text-sm font-semibold leading-6 text-slate-900">Bon plans</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                            Trouvez les meilleurs bons plans de votre ville.
                        </p>
                    </div>
                </div>

            </div>

        </SiteLayout>
    </>);
}
