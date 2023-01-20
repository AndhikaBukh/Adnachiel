<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class KaryawanModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'karyawan';
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
        'status',
        'agama',
        'gaji_awal',
        'gaji_sekarang',
        'bank',
        'bpjs_kesehatan',
        'bpjs_ketenagakerjaan',
        'nik',
        'npwp',
        'kk',
        'email_inosoft',
        'email_pribadi',
        'no_hp',
        'status_kepegawaian',
        'tanggal_awal_pengangkatan',
        'tanggal_kontrak_berakhir'

    ];

    protected $hidden = [];
}
