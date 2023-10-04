import React from "react";
import {Link, useForm} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Association(props) {
    const {
        data, setData, delete: destroy,
    } = useForm({});
    const {associations, auth} = props

    const destroyAssociation = (id) => {
        if (confirm('Are you sure you want to delete this association?')) {
            destroy('/associations/delete/' + id)
        }
    }
    return (<>
     <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Associations</h2>
                
            }
 
        >
        <h1>
        Association
        </h1>
        <Link href={"/associations/create"}>
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                Create
            </button>
        </Link>
        <div>
            {associations.map((association, index) => {
                return (<div key={index} className={"flex justify-between items-center border-b border-gray-300 py-4"}>
                    <p>{association.name}</p>
                    <div className={"flex"}>
                        <Link href={"/associations/edit/" + association.id}>
                            <button
                                className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                                Edit
                            </button>
                        </Link>

                        <button onClick={() => destroyAssociation(association.id)}
                                className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}>
                            Delete

                        </button>
                    </div>
                </div>)
            })}
        </div>
        </AuthenticatedLayout>
    </>);
}
