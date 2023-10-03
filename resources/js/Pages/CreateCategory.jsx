import {Link, Head, router} from "@inertiajs/react";
import {useState} from 'react'

export default function CreateCategory(props) {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/categories/create', {name})
    }

    return (
        <>
            <Head title="Category - Create"/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                            type="submit">Create
                    </button>
                </div>
            </form>
        </>
    );
}
