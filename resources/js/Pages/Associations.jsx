import { Link, Head } from '@inertiajs/react';

export default function Associations(props) {
    const{categories} = props;
    return (
        <>
            <Head title="Associations" />
            <div> 
                {categories.map((categorie) => (
                <p key={categorie.id}>{categorie.name}</p>
                ))}
            </div>
        </>
    );
}
