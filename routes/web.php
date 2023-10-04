<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AssociationController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', \App\Http\Controllers\HomeController::class)->name('home');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/associations', [AssociationController::class, 'index'])->name('associations.index');

Route::get('/BonPlan', [BonPlanController::class, 'index'])->name('BonPlan.index');
Route::get('/BonPlan/create', [BonPlanController::class, 'create'])->name('BonPlan.create');
Route::post('/BonPlan/create', [BonPlanController::class, 'store'])->name('BonPlan.store');
Route::get('/BonPlan/edit/{id}', [BonPlanController::class, 'edit'])->name('BonPlan.edit');
Route::put('/BonPlan/edit/{id}', [BonPlanController::class, 'update'])->name('BonPlan.update');
Route::delete('/BonPlan/delete/{id}', [BonPlanController::class, 'destroy'])->name('BonPlan.destroy');

Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::get('/categories/create', [CategoryController::class, 'create'])->name('categories.create');
Route::post('/categories/create', [CategoryController::class, 'store'])->name('categories.store');
Route::get('/categories/edit/{id}', [CategoryController::class, 'edit'])->name('categories.edit');
Route::put('/categories/edit/{id}', [CategoryController::class, 'update'])->name('categories.update');
Route::delete('/categories/delete/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy');


Route::get('/BonPlan', [\App\Http\Controllers\BonPlanController::class, 'index'])->name('BonPlan.index');

Route::get('/search', \App\Http\Controllers\SearchController::class)->name('search');
Route::get('/associations', [AssociationController::class, 'index'])->name('associations.index');
Route::get('/associations/create', [AssociationController::class, 'create'])->name('associations.create');
Route::post('/associations/create', [AssociationController::class, 'store'])->name('associations.store');
Route::get('/associations/edit/{id}', [AssociationController::class, 'edit'])->name('associations.edit');
Route::put('/associations/edit/{id}', [AssociationController::class, 'update'])->name('associations.update');
Route::delete('/associations/delete/{id}', [AssociationController::class, 'destroy'])->name('associations.destroy');

Route::get('/associations/list', [AssociationController::class, 'list'])->name('associations.list');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
