import {Link, Head, router, useForm} from "@inertiajs/react";
import {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import "../../css/home.css"

export default function EditAssociation(props) {
  const { association, categories,auth } = props;
  const {
    data,
    setData,
    put
  } = useForm({
    name: association.name,
    author: association.author,
    description: association.description,
    category_id: association.category_id
  });

  function handleSubmit(e) {
    e.preventDefault();
    put("/associations/edit/" + association.id);
  }

  return (
    <>
    <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>

            }
        >
      <Head title="Association - Update" />
      <form className={"uoeza"} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id='name'
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id='author'
            value={data.author}
            onChange={(e) => setData('author', e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id='description'
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
          />
          <label htmlFor="Category">Category</label>
            <select name="category_id"
            onChange={e => setData('category_id', e.target.value)}>
                {
                    categories.map((categorie)=>
                    <option key={categorie.id}
                    value={categorie.id}>
                        {categorie.name}
                    </option>
                    )
                }
            </select>
        </div>
        <div>
          <button
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }
            type="submit"
          >
            Edit
          </button>
        </div>
      </form>
      </AuthenticatedLayout>

  </>
    );
}
