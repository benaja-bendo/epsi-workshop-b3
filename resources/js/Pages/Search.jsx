import React from "react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import {Head} from "@inertiajs/react";
import {useState} from 'react'

export default function Search(props) {
    const [search, setSearch] = useState('')
    const {auth} = props
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(search)
    // }
    console.log(props)
    return (<>
        <SiteLayout
            auth={auth}>
            <Head title="Recherche"/>
            <form method="GET" action = "/search">
                <input
                type = "text"
                value = {search}
                onChange = {e => setSearch(e.target.value)}
                />
                <button type = "submit">
                    Rechercher
                </button>
            </form>
            <div>
                {search}
            </div>
        </SiteLayout>
    </>);
}
