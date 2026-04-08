<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'chemical_name',
        'product_code',
        'brand_name',
        'cas_number',
        'status',
        'slug',
        'appearance',
        'description',
        'function',
        'synonyms',
        'storage',
        'packages',
        'industries',
        'product_classes',
        'formula',
        'other',
    ];

    public static function generateUniqueSlug($chemicalName, $productId = null)
    {
     
        $baseSlug = Str::limit(Str::slug($chemicalName), 50, '');

        $slug = $baseSlug;
        $counter = 1;

    
        while (self::where('slug', $slug)
                ->when($productId, fn($query) => $query->where('id', '!=', $productId))
                ->exists()) {
            $slug = $baseSlug . '-' . $counter;
            $counter++;
        }

        return $slug;
    }

}
