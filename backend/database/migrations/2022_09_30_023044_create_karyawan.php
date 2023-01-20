<?php

use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKaryawan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('karyawan', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->longText('alamat');
            $table->string('jenis_kelamin');
            $table->string('jabatan');
            $table->string('produk');
            $table->string('domisili');
            $table->string('pendidikan');
            $table->string('status');
            $table->string('agama');
            $table->bigInteger('gaji_awal');
            $table->bigInteger('gaji_sekarang');
            $table->string('bank');
            $table->string('bpjs_kesehatan');
            $table->string('bpjs_ketenagakerjaan');
            $table->string('nik');
            $table->string('npwp');
            $table->string('kk');
            $table->string('email_inosoft')->unique();
            $table->string('email_pribadi')->unique();
            $table->string('no_hp');
            $table->string('status_kepegawaian');
            $table->date('tanggal_awal_pengangkatan');
            $table->date('tanggal_kontrak_berakhir');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('karyawan');
    }
}
