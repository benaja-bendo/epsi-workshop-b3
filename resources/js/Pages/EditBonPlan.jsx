import {Link, Head, router,useForm} from "@inertiajs/react";
import {useState} from 'react'

export default function EditBonPlan(props) {
    const {category} = props
    const {
        data, setData, put
    } = useForm({
        name: category.name
    })

    function handleSubmit(e) {
        e.preventDefault()
        put('/BonPlan/edit/' + category.id)
    }

    return (
        <>
            <Head title="Category - Update"/>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <label htmlFor="Category">Category</label>
                    <select name="category_id"                         
                    onChange={e => setCategory_id(e.target.value)}>
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