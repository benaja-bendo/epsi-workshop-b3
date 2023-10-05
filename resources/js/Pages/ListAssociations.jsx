import React from "react";
import {Head, Link} from "@inertiajs/react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import MyMap from "@/Components/MyMap.jsx";


export default function ListAssociations(props) {
    const {auth, associations, categories} = props;
    const [selectedCategory, setSelectedCategory] = React.useState(0);
    const [filteredAssociations, setFilteredAssociations] = React.useState(associations);

    const filterAssociationsByCategory = (categoryId) => {
        if (categoryId === 0) {
            setFilteredAssociations(associations);
        } else {
            const filtered = associations.filter((association) => association.category_id === categoryId);
            setFilteredAssociations(filtered);
        }
    };

    React.useEffect(() => {
        filterAssociationsByCategory(selectedCategory);
    }, [selectedCategory, associations]);

    return (<>
        <SiteLayout auth={auth}>
            <Head title="Liste des associations"/>
            <div className="flex flex-col justify-center items-center">
                <MyMap/>
                <div>
                    <h1 className="text-3xl font-bold text-center">Liste des associations</h1>
                    <p className="text-lg">Filtrer par catégorie :</p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSelectedCategory(0)}
                            className={"border p-2 rounded-lg"}>Toutes
                        </button>
                        {categories.map((category) => (
                            <CardCategory
                                key={category.id}
                                setSelectedCategory={setSelectedCategory}
                                category={category}
                            />
                        ))}
                    </div>
                    {filteredAssociations.map((association) => (
                        <CardAssociation key={association.id} association={association}/>
                    ))}
                </div>
            </div>
        </SiteLayout>
    </>);
}

const CardAssociation = ({association}) => {
    const {name, description} = association;
    return (<>
        <Link href={route('home')} className={"border-2 border-black mb-2"}>
            {/*<Link href={route('association', {id: association.id})}>*/}
            <div className={"cardCarouselHome"}>
                <p className={"cardCarouselDescription"}>{name} </p>
                <p className={"cardCarouselDescription"}>{description} </p>
            </div>
        </Link>
    </>);
}

const CardCategory = ({category, setSelectedCategory}) => {
    const {name} = category;
    return (<>
        <button
            onClick={() => setSelectedCategory(category.id)}
            className={"border p-2 rounded-lg"}>{name}</button>
    </>);
}
