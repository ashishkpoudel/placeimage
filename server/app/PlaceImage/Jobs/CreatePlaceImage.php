<?php

namespace App\PlaceImage\Jobs;

use App\Jobs\Job;
use Illuminate\Http\Request;
use App\PlaceImage\Exceptions\CreatePlaceImageError;
use Exception;
use Image;

final class CreatePlaceImage extends Job
{
    private $width;
    private $height;
    private $background;
    private $foreground;
    private $text;
    private $extension;

    private $extensions_supported = ['jpg', 'gif', 'webp', 'png'];

    public function __construct(array $attributes = [])
    {
        $this->width = (int) $attributes['width'];
        $this->height = (int) $attributes['height'];
        $this->background = $attributes['background'];
        $this->foreground = $attributes['foreground'];
        $this->text = $attributes['text'];
        $this->extension = in_array($attributes['extension'], $this->extensions_supported) 
            ? $attributes['extension']
            : 'jpg';
    }

    public static function fromRequest(string $input_raw, Request $request)
    {
        $width = null;
        $height = null;
        $background = null;
        $foreground = null;
        $text = null;
        $extension = null;

        $input_raw_array = explode('/', $input_raw);

        if (isset($input_raw_array[0])) {
            $image_input_raw = explode('.', $input_raw_array[0]);

            $extension = isset($image_input_raw[1]) ? $image_input_raw[1] : 'jpg';

            if (isset($image_input_raw[0])) {
                $width_height_input = explode('x', $image_input_raw[0]);
                if (count($width_height_input) === 2) {
                    $width = $width_height_input[0];
                    $height = $width_height_input[1];
                } else {
                    $width = $height = $width_height_input[0];
                }
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
            'text' => $text,
            'extension' => $extension
        ]);

    }

    public function handle()
    {
        try {
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
    
            return $canvas->encode($this->extension);
        } catch (Exception $exception) {
            throw new CreatePlaceImageError('unable to create placeimage');
        }
    }
}
