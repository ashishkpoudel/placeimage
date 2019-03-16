<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\PlaceImage\Exceptions\CreatePlaceImageError;
use App\PlaceImage\Jobs\CreatePlaceImage;

class PlaceImageController extends Controller
{
	public function __invoke($input_raw, Request $request)
	{
		try {
			$encoded_image = $this->dispatchNow(CreatePlaceImage::fromRequest($input_raw, $request));

			$response = Response::make($encoded_image);
			$response->header('Content-Type', $encoded_image->mime);

			return $response;

		} catch (CreatePlaceImageError $exception) {
			return $exception->getMessage();
		}
	}
}