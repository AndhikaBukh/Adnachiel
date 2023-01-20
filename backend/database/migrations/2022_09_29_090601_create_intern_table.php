<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInternTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('intern', function (Blueprint $table) {
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
            $table->string('agama');
            $table->string('nik');
            $table->string('kk');
            $table->string('email_pribadi')->unique();
            $table->string('no_hp');
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
        Schema::dropIfExists('intern');
    }
}
