<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return '(-_-)';
});


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

$router->get('contact', function(Request $request){
    return response()->json([
        'first_name' => 'ashish',
        'last_name' => 'poudel',
        'email' => 'ashish@gmail.com',
        'message' => 'this is a text message'
    ]);
});

$router->get('/{route:.*}', 'PlaceImageController');