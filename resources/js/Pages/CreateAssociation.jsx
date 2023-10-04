import {Link, Head, router} from "@inertiajs/react";
import {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CreateAssociation(props) {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [category_id, setCategory_id] = useState('')
    const {categories,auth} = props

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/associations/create', {name, author, description, category_id})
    }
    return (
        <>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                
            }
        >
            <Head title="Association - Create"/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
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
                            type="submit">Create
                    </button>
                </div>
            </form>
            </AuthenticatedLayout>
        </>
    );
}