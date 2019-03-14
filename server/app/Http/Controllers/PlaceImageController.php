<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\PlaceImage\Exceptions\CreatePlaceImageError;
use App\PlaceImage\Jobs\CreatePlaceImage;
use App\asdiahsd\asd;


class PlaceImageController extends Controller
{
	public function __invoke(Request $request, $input_raw)
	{
		$encoded_image = $this->dispatchNow(CreatePlaceImage::fromRequest($input_raw, $request));
		$response = Response::make($encoded_image);
        $response->header('Content-Type', 'jpg');

        return $response;
	}
}