<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlaceImage\Exceptions\CreatePlaceImageError;
use App\PlaceImage\Jobs\CreatePlaceImage;

class PlaceImageController extends Controller
{
	public function __invoke(Request $request, $input)
	{
		$url_string = $this->dispatchNow(CreatePlaceImage::fromString($input));
		dd($request);
	}
}