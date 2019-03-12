<?php

namespace App\PlaceImage\Jobs;

use App\Jobs\Job;
use Illuminate\Http\Request;
use Image;

final class CreatePlaceImage extends Job
{
    private $width;
    private $height;
    private $background;
    private $foreground;
    private $text;

    public function __construct(array $attributes = [])
    {
        $this->width = (int) $attributes['width'];
        $this->height = (int) $attributes['height'];
        $this->background = $attributes['background'];
        $this->foreground = $attributes['foreground'];
        $this->text = $attributes['text'];
    }

    public static function fromRequest(string $input_raw, Request $request)
    {
        $width = null;
        $height = null;
        $background = null;
        $foreground = null;
        $text = null;

        $input_raw_array = explode('/', $input_raw);

        if (isset($input_raw_array[0])) {
          $width_height_array = explode('x', $input_raw_array[0]);
          
          if (count($width_height_array) === 2) {
            $width = $width_height_array[0];
            $height = $width_height_array[1];
          } else {
            $width = $height = $width_height_array[0];
          }
        }

        $background = isset($input_raw_array[1]) ? $input_raw_array[1] : '#cccc';
        $foreground = isset($input_raw_array[2]) ? $input_raw_array[2] : '#A0A0A0';

        $text = $request->has('text')
            ? $request->input('text')
            : ($width && $height ? "{$width} x {$height}" : "{$width} x {$width}");

        return new static([
            'width' => $width,
            'height' => $height,
            'background' => $background,
            'foreground' => $foreground,
            'text' => $text
        ]);

    }

    public function handle()
    {
        $canvas = Image::canvas($this->width, $this->height, $this->background);

        $font_size = 17;
        
        $pos_x = ($this->width/2);
        $pos_y = ($this->height/2) - ($font_size/2);

        $foreground = $this->foreground;

        $canvas->text($this->text, $pos_x, $pos_y, function($text) use ($font_size, $foreground) {
            $text->file('./static/fonts/ubuntu/Ubuntu-R.ttf');
            $text->size($font_size);
            $text->color($foreground);
            $text->valign('top');
            $text->align('center');
        });

        return $canvas->encode('jpg');
    }
}
