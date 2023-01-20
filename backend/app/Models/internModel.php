<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class internModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'intern';
    protected $fillable = [
        'name',
        'tempat_lahir',
        'tanggal_lahir',
        'alamat',
        'jenis_kelamin',
        'jabatan',
        'produk',
        'domisili',
        'pendidikan',
        'agama',
        'nik',
        'kk',
        'email_pribadi',
        'no_hp'

    ];

    protected $hidden = [];
}
