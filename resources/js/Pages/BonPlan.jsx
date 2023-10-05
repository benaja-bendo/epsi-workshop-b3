import React from "react";
import { Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function BonPlan(props) {

    const {
        data, setData, delete: destroy,
    } = useForm({});
    const {bonplans, auth} = props

    const destroyBonPlan = (id) => {
        if (confirm('Are you sure you want to delete this BonPlan?')) {
            destroy('/BonPlan/delete/' + id)
        }
    }
    return (<>
    <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Bons Plans</h2>

            }
 
        >
        <h1>
        BonPlan
        </h1>
        <Link href={"/BonPlan/create"}>
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                Create
            </button>
        </Link>
        <div>
            {bonplans.map((BonPlan, index) => {
                return (<div key={index} className={"flex justify-between items-center border-b border-gray-300 py-4"}>
                    <p>{BonPlan.name}</p>
                    <div className={"flex"}>
                        <Link href={"/BonPlan/edit/" + BonPlan.id}>
                            <button
                                className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                                Edit
                            </button>
                        </Link>
                        
                        <button onClick={() => destroyBonPlan(BonPlan.id)}
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
