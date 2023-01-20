<?php

use App\Http\Controllers\API\InternController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('intern', [InternController::class ,'index']);
Route::post('intern/store', [InternController::class ,'store']);
Route::get('intern/show/{id}', [InternController::class ,'show']);
Route::post('intern/update/{id}', [InternController::class ,'update']);
Route::get('intern/delete/{id}', [InternController::class ,'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('karyawan', [KaryawanController::class ,'index']);
Route::post('karyawan/store', [KaryawanController::class ,'store']);
Route::get('karyawan/show/{id}', [KaryawanController::class ,'show']);
Route::post('karyawan/update/{id}', [KaryawanController::class ,'update']);
Route::get('karyawan/delete/{id}', [KaryawanController::class ,'destroy']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'
], function ($router){
    Route::post('login', [LoginController::class, 'login']);
    // Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [LoginController::class, 'logout']);
    Route::post('refresh', [LoginController::class, 'refresh']);
    Route::post('me', [LoginController::class, 'me']);
});