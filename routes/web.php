<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AssociationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BonPlanController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
