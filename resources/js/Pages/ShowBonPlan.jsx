import React from "react";

export default function Description ({BonPlan}) {
    console.log(BonPlan);
    const {image, name, description} = BonPlan;
    return (
        <section id={"description"}>
            <img className={"imagePrincipal"} src={image} alt={`image de fond représentant la marque ${name}`}/>
            <div>
                <img className={"logo"} src={image} alt={`logo représentant la marque ${name}`}/>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}