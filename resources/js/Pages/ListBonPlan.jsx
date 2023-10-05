import React from "react";
import {Head, Link} from "@inertiajs/react";
import SiteLayout from "@/Layouts/SiteLayout.jsx";
import MyMap from "@/Components/MyMap.jsx";


export default function ListBonPlan(props) {
    const {auth, BonPlans, categories} = props;          
    const [selectedCategory, setSelectedCategory] = React.useState(0);
    const [filteredBonPlans, setFilteredbonPlans] = React.useState(BonPlans);
    const filterbonPlansByCategory = (categoryId) => {
        if (categoryId === 0) {
            setFilteredbonPlans(BonPlans);
        } else {
            const filtered = BonPlans.filter((bonPlan) => bonPlan.category_id === categoryId);
            setFilteredbonPlans(filtered);
        }
    };
   
React.useEffect(() => {
    filterbonPlansByCategory(selectedCategory);
}, [selectedCategory, BonPlans]);

return (<>
    <SiteLayout auth={auth}>
        <Head title="Liste des Bons Plans"/>
        <div className="flex flex-col justify-center items-center">
            <MyMap/>
            <div>
                <h1 className="text-3xl font-bold text-center">Liste des bons plans</h1>
                <p className="text-lg">Filtrer par bons plans :</p>
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
                {filteredBonPlans.map((bonPlan) =>  (
                    <CardBonPlan key={bonPlan.id} bonPlan={bonPlan}/>
                ))}
            </div>
         </div>
    </SiteLayout>
</>);
}

const CardBonPlan = ({bonPlan}) => {
    const {name, description} = bonPlan;
    return (<>
        <Link href={route('home')} className={"border-2 border-black mb-2"}>
            {/*<Link href={route('bonPlan', {id: bonPlan.id})}>*/}
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
