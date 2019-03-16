<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\PlaceImage\Exceptions\CreatePlaceImageError;
use App\PlaceImage\Jobs\CreatePlaceImage;

class PlaceImageController extends Controller
{
	public function __construct(Request $request)
	{
		$this->request = $request;
	}

	public function __invoke($input_raw)
	{
		try {
			$encoded_image = $this->dispatchNow(CreatePlaceImage::fromRequest($input_raw, $this->request));

			$response = Response::make($encoded_image);
			$response->header('Content-Type', $encoded_image->mime);

			return $response;

		} catch (CreatePlaceImageError $exception) {
			return $exception->getMessage();
		}
	}
}