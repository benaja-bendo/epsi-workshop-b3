import React from "react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import {Head} from "@inertiajs/react";
import {useState} from 'react'

export default function Search(props) {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { auth } = props;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/search?query=${search}`);
            // console.log(response.data.results)
            setSearchResults(response.data.results); // Mettez à jour les résultats de recherche avec la réponse de l'API
        } catch (error) {
            console.error(error);
        }
    };
    return (<>
        <SiteLayout
            auth={auth}>
            <Head title="Recherche"/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Rechercher</button>
            </form>
            <div>
                {searchResults.map((result) => (
                    <div key={result.id}>{result.name}</div>
                ))}
            </div>
        </SiteLayout>
    </>);
}
