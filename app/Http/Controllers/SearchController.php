<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $search = $request->input('search');

        $bonplans = \App\Models\BonPlan::query()
            ->where('name', 'LIKE', "%{$search}%")
            ->orWhere('description', 'LIKE', "%{$search}%")
            ->get();

        return Inertia::render('Search', [
            'bonplans' => $bonplans,
        ]);
    }
}
