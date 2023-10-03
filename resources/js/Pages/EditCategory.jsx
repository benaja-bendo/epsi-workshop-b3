import {Link, Head, router, useForm} from "@inertiajs/react";
import {useState} from 'react'

export default function EditCategory(props) {
    const {category} = props
    const {
        data, setData, put
    } = useForm({
        name: category.name
    })

    function handleSubmit(e) {
        e.preventDefault()
        put('/categories/edit/' + category.id)
    }

    return (
        <>
            <Head title="Category - Update"/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
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
