import React from "react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";

export default function Description ({association, auth}) {
    console.log(association);
    const {image, name, description, logo, author} = association;
    return (
        <SiteLayout auth = {auth}>
            <section id={"description"}>
                <img className={"imagePrincipal"} src={image} alt={`image de fond représentant la marque ${name}`}/>
                <div>
                    <img className={"logo"} src={logo} alt={`logo représentant la marque ${name}`}/>
                    <h1>{name}</h1>
                    <p>{author}</p>
                    <p>{description}</p>
                </div>
            </section>
            </SiteLayout>

    )
}
