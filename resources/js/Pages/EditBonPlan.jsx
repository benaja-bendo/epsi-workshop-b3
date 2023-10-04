import {Link, Head, router,useForm} from "@inertiajs/react";
import {useState} from 'react'

export default function EditBonPlan(props) {
    const {BonPlan,categories} = props;
    const {
        data, setData, put
    } = useForm({
        name: BonPlan.name,
        description: BonPlan.description,
        category_id: BonPlan.category_id
    });

    function handleSubmit(e) {
        e.preventDefault()
        put('/BonPlan/edit/' + BonPlan.id)
    }

    return (
        <>
            <Head title="BonPlan - update"/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id='name'
                            value={data.name}
                            onChange={e => setData('name',e.target.value)}
                        />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id='description'
                        value={data.description}
                        onChange={e => setData('description',e.target.value)}
                    />
                    <label htmlFor="Category">Category</label>
                    <select name="category_id"                         
                    onChange={e => setData('category_id',e.target.value)}>
                        {
                            categories.map((categorie)=>
                                <option key={categorie.id} 
                                value={categorie.id}
                                >{categorie.name}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                            type="submit">Edit
                    </button>
                </div>
            </form>
        </>
    );
}