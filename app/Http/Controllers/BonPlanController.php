<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\BonPlan;
use App\Models\Category;

class BonPlanController extends Controller
{
    public function list()
    {

        $BonPlans = \App\Models\BonPlan::all();
        $categories = \App\Models\Category::all();
        return Inertia::render('ListBonPlan', [
            'BonPlans' => $BonPlans,
            'categories' => $categories
        ]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = \App\Models\Category::all();
        $BonPlans = \App\Models\BonPlan::all();

        return Inertia::render('BonPlan',[
            'categories' => $categories,
            'bonplans' => $BonPlans,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $categories = \App\Models\Category::all();

        return Inertia::render('CreateBonPlan',[
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => ['required','max:255'],
            'description' => ['required','max:255'],
            'category_id' => ['required']
            //'image' => ['required','max:2550']
        ]);

        $bonPlan = BonPlan::create([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bobby_Brown_on_Sister_Circle_Live.jpg/640px-Bobby_Brown_on_Sister_Circle_Live.jpg',
            // 'logo' => 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Ville_de_Bordeaux_%28logo%29.svg/1200px-Ville_de_Bordeaux_%28logo%29.svg.png'
        ]);
        return redirect()->route('BonPlan.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $BonPlan = BonPlan::findOrfail($id);
        return Inertia::render('ShowBonPlan', [
            'BonPlan' => $BonPlan,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $BonPlan = BonPlan::findOrfail($id);
        $categories = Category::all();
        return Inertia::render('EditBonPlan', [
            'BonPlan' => $BonPlan,
            'categories'=> $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $bonPlan =BonPlan::findOrfail($id);
        $bonPlan->name = $request->name;
        $bonPlan->description = $request->description;
        $bonPlan->image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bobby_Brown_on_Sister_Circle_Live.jpg/640px-Bobby_Brown_on_Sister_Circle_Live.jpg';
        $bonPlan->category_id = $request->category_id;
        $bonPlan->save();

        return redirect()->route('BonPlan.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $BonPlan = BonPlan::findOrfail($id);
        $BonPlan->delete();
        return redirect()->route('BonPlan.index');
    }
}
