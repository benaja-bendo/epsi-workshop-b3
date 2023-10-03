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
Route::get('/associations', [AssociationController::class, 'index'])->name('associations.index');
Route::get('/associations/create', [AssociationController::class, 'create'])->name('associations.create');
Route::post('/associations/create', [AssociationController::class, 'store'])->name('associations.store');
Route::get('/associations/edit/{id}', [AssociationController::class, 'edit'])->name('associations.edit');
Route::put('/associations/edit/{id}', [AssociationController::class, 'update'])->name('associations.update');
Route::delete('/associations/delete/{id}', [AssociationController::class, 'destroy'])->name('associations.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
