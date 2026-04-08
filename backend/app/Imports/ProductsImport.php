<?php

namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;

class ProductsImport implements ToModel, WithHeadingRow, WithBatchInserts
{
    public function model(array $row)
    {
        
        if (empty($row['product_code'])) {
            return null;
        }

       
        if (Product::where('product_code', $row['product_code'])->exists()) {
            return null;
        }

        return new Product([
            'chemical_name' => $row['chemical_name'] ?? null,
            'product_code'  => $row['product_code'],
            'brand_name'    => $row['brand_name'] ?? null,
            'cas_number'    => $row['cas_number'] ?? null,
        ]);
    }

    public function batchSize(): int
    {
        return 500;
    }
}
