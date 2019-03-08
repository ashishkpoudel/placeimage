<?php

namespace App\PlaceImage\Jobs;

use App\Jobs\Job;

final class CreatePlaceImage extends Job
{
    private $input;

    public function __construct(string $input)
    {
        $this->input = $input;
    }

    public static function fromString(string $input)
    {
        return new static($input);
    }

    public function handle()
    {
        /* 
        $router->get('{width_raw}[/{height_raw}]', function($width_raw, $height_raw = null, Request $request){
    
        $width = $width_raw;
        $height = ($height_raw > 0)
            ? $height_raw 
            : $width_raw;

        $canvas = Image::canvas($width, $height, '#cccc');

        $font_size = 16;
        
        $pos_x = ($width/2);
        $pos_y = ($height/2) - ($font_size/2);

        $canvas_text = $request->input('text') ?: "{$width} x {$height}";

        $canvas->text($canvas_text, $pos_x, $pos_y, function($text) use ($font_size) {
            $text->file('./static/fonts/ubuntu/Ubuntu-R.ttf');
            $text->size($font_size);
            $text->color('#A0A0A0');
            $text->valign('top');
            $text->align('center');
        });

        $response = Response::make($canvas->encode('jpg'));
        $response->header('Content-Type', 'jpg');

        dd('exec');

        */

        return 'asdsd';
    }
}
