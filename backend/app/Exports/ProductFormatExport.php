<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ProductFormatExport implements FromArray, WithHeadings
{
    public function array(): array
    {
        // Just one empty example row
        return [
            ['', '', '', '', ''],
        ];
    }

    public function headings(): array
    {
        return [
            'Sr. No.',
            'Chemical Name',
            'Product Code',
            'Brand Name',
            'CAS Number',
        ];
    }
}

