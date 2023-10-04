import React from "react";
import {Link, useForm} from "@inertiajs/react";


export default function Category(props) {
    const {
        data, setData, delete: destroy,
    } = useForm({});
    const {categories} = props

    const destroyCategory = (id) => {
        if (confirm('Are you sure you want to delete this category?')) {
            destroy('/categories/delete/' + id)
        }
    }
    return (<>
        <h1>
            Category
        </h1>
        <Link href={"/categories/create"}>
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                Create
            </button>
        </Link>
        <div>
            {categories.map((category, index) => {
                return (<div key={index} className={"flex justify-between items-center border-b border-gray-300 py-4"}>
                    <p>{category.name}</p>
                    <div className={"flex"}>
                        <Link href={"/categories/edit/" + category.id}>
                            <button
                                className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                                Edit
                            </button>
                        </Link>

                        <button onClick={() => destroyCategory(category.id)}
                                className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}>
                            Delete

                        </button>
                    </div>
                </div>)
            })}
        </div>
    </>);
}
