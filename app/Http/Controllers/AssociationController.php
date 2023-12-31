<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Association;
use App\Models\Category;

class AssociationController extends Controller
{

    public function list()
    {
        $associations = \App\Models\Association::all();
        $categories = \App\Models\Category::all();
        //dd($associations, $categories);
        return Inertia::render('ListAssociations', [
            'associations' => $associations,
            'categories' => $categories
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = \App\Models\Category::all();
        $associations = \App\Models\Association::all();


        return Inertia::render('Associations', [
            //'categories' => $options,
            'categories' => $categories,
            'associations' => $associations
        ]);//

    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = \App\Models\Category::all();

        return Inertia::render('CreateAssociation', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255'],
            'author' => ['required', 'max:25500'],
            'description' => ['required', 'max:255'],
            'category_id' => ['required']
            //'image' => ['required','max:2550']
        ]);


        $association = Association::create([
            'name' => $request->name,
            'author' => $request->author,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bobby_Brown_on_Sister_Circle_Live.jpg/640px-Bobby_Brown_on_Sister_Circle_Live.jpg',
            'logo' => 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Ville_de_Bordeaux_%28logo%29.svg/1200px-Ville_de_Bordeaux_%28logo%29.svg.png'
        ]);
        return redirect()->route('associations.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $association = Association::findOrfail($id);
        return Inertia::render('ShowAssociation', [
            'association' => $association,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categories = Category::all();
        $association = Association::findOrfail($id);
        return Inertia::render('EditAssociation', [
            'association' => $association,
            'categories' => $categories
        ]);//

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {


        $association = Association::findOrfail($id);
        // $association->update([
        //     'name' => $request->name,
        //     'author' => $request->author,
        //     'description' => $request->description,
        //     'category_id' => $request->category_id,
        //     'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bobby_Brown_on_Sister_Circle_Live.jpg/640px-Bobby_Brown_on_Sister_Circle_Live.jpg',
        //     'logo' => 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Ville_de_Bordeaux_%28logo%29.svg/1200px-Ville_de_Bordeaux_%28logo%29.svg.png'
        // ]);
        $association->name = $request->name;
        $association->author = $request->author;
        $association->description = $request->description;
        $association->category_id = $request->category_id;
        $association->image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bobby_Brown_on_Sister_Circle_Live.jpg/640px-Bobby_Brown_on_Sister_Circle_Live.jpg';
        $association->logo = 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Ville_de_Bordeaux_%28logo%29.svg/1200px-Ville_de_Bordeaux_%28logo%29.svg.png';

        $association->save();

        return redirect()->route('associations.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $association = Association::findOrfail($id);
        $association->delete();
        return redirect()->route('associations.index');
    }
}
