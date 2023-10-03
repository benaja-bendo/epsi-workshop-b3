import { Link, Head } from "@inertiajs/react";

export default function BonPlan(props) {
    const { bonplans} = props;
    return (
        <>
            <Head title="Bon Plan" />
            <div>
                {bonplans.map((BonPlan) => (
                    <><p key={BonPlan.id}>{BonPlan.name}</p><p key={BonPlan.id}>{BonPlan.description}</p><p key={BonPlan.id}>{BonPlan.image}</p></>
                ))}
            </div>
        </>
    );
}
