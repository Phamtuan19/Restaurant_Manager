<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\api\Auth\GoogleController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/chinh-sach-quyen-rieng-tu', function () {
    return 'chinh sach quyen rieng tu';
});

Route::get('auth/google', [GoogleController::class, 'loginUrl']);

// Route::get('/auth/google/callback', [GoogleController::class, 'loginCallback']);
