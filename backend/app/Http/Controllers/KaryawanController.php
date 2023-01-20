<?php

namespace App\Http\Controllers;

use App\Helpers\ApiFormater;
use App\Http\Controllers\Controller;
use App\Models\KaryawanModel;
use Illuminate\Http\Request;

class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    $data = KaryawanModel::all();

    if($data){
        return ApiFormater::createApi(200, 'Success', $data);
    }else{
        return ApiFormater::createApi(400, 'Failled',);
    }
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
                'tempat_lahir' => 'required',
                'tanggal_lahir' => 'required',
                'alamat' => 'required',
                'jenis_kelamin' => 'required',
                'jabatan' => 'required',
                'produk' => 'required',
                'domisili' => 'required',
                'pendidikan' => 'required',
                'status' => 'required',
                'agama' => 'required',
                'gaji_awal' => 'required',
                'gaji_sekarang' => 'required',
                'bank' => 'required',
                'bpjs_kesehatan' => 'required',
                'bpjs_ketenagakerjaan' => 'required',
                'nik' => 'required',
                'npwp' => 'required',
                'kk' => 'required',
                'email_inosoft' => 'required',
                'email_pribadi' => 'required',
                'no_hp' => 'required',
                'status_kepegawaian' => 'required',
                'tanggal_awal_pengangkatan' => 'required',
                'tanggal_kontrak_berakhir' => 'required',
            ]);

            $karyawan = KaryawanModel::create([
                'name' => $request->name,
                'tempat_lahir' => $request->tempat_lahir,
                'tanggal_lahir' => $request->tanggal_lahir,
                'alamat' => $request->alamat,
                'jenis_kelamin' => $request->jenis_kelamin,
                'jabatan' => $request->jabatan,
                'produk' => $request->produk,
                'domisili' => $request->domisili,
                'pendidikan' => $request->pendidikan,
                'status' => $request->status,
                'agama' => $request->agama,
                'gaji_awal' => $request->gaji_awal,
                'gaji_sekarang' => $request->gaji_sekarang,
                'bank' => $request->bank,
                'bpjs_kesehatan' => $request->bpjs_kesehatan,
                'bpjs_ketenagakerjaan' => $request->bpjs_ketenagakerjaan,
                'nik' => $request->nik,
                'npwp' => $request->npwp,
                'kk' => $request->kk,
                'email_inosoft' => $request->email_inosoft,
                'email_pribadi' => $request->email_pribadi,
                'no_hp' => $request->no_hp,
                'status_kepegawaian' => $request->status_kepegawaian,
                'tanggal_awal_pengangkatan' => $request->tanggal_awal_pengangkatan,
                'tanggal_kontrak_berakhir' => $request->tanggal_kontrak_berakhir,
            ]);

            $data = KaryawanModel::where('id', '=', $karyawan->id)->get();

            if($data){
                return ApiFormater::createApi(200, 'Success', $data);
            }else{
                return ApiFormater::createApi(400, 'Failled',);
            }
        } catch (Exception $error) {
            return ApiFormater::createApi(400, 'Failled',);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = KaryawanModel::where('id', '=', $id)->get();

        if($data){
            return ApiFormater::createApi(200, 'Success', $data);
        }else{
            return ApiFormater::createApi(400, 'Failled',);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    try {
            $request->validate([
                'name' => 'required',
                'tempat_lahir' => 'required',
                'tanggal_lahir' => 'required',
                'alamat' => 'required',
                'jenis_kelamin' => 'required',
                'jabatan' => 'required',
                'produk' => 'required',
                'domisili' => 'required',
                'pendidikan' => 'required',
                'status' => 'required',
                'agama' => 'required',
                'gaji_awal' => 'required',
                'gaji_sekarang' => 'required',
                'bank' => 'required',
                'bpjs_kesehatan' => 'required',
                'bpjs_ketenagakerjaan' => 'required',
                'nik' => 'required',
                'npwp' => 'required',
                'kk' => 'required',
                'email_inosoft' => 'required',
                'email_pribadi' => 'required',
                'no_hp' => 'required',
                'status_kepegawaian' => 'required',
                'tanggal_awal_pengangkatan' => 'required',
                'tanggal_kontrak_berakhir' => 'required',
            ]);
            $karyawan = KaryawanModel::findOrFail($id);
            $karyawan ->update([
                'name' => $request->name,
                'tempat_lahir' => $request->tempat_lahir,
                'tanggal_lahir' => $request->tanggal_lahir,
                'alamat' => $request->alamat,
                'jenis_kelamin' => $request->jenis_kelamin,
                'jabatan' => $request->jabatan,
                'produk' => $request->produk,
                'domisili' => $request->domisili,
                'pendidikan' => $request->pendidikan,
                'status' => $request->status,
                'agama' => $request->agama,
                'gaji_awal' => $request->gaji_awal,
                'gaji_sekarang' => $request->gaji_sekarang,
                'bank' => $request->bank,
                'bpjs_kesehatan' => $request->bpjs_kesehatan,
                'bpjs_ketenagakerjaan' => $request->bpjs_ketenagakerjaan,
                'nik' => $request->nik,
                'npwp' => $request->npwp,
                'kk' => $request->kk,
                'email_inosoft' => $request->email_inosoft,
                'email_pribadi' => $request->email_pribadi,
                'no_hp' => $request->no_hp,
                'status_kepegawaian' => $request->status_kepegawaian,
                'tanggal_awal_pengangkatan' => $request->tanggal_awal_pengangkatan,
                'tanggal_kontrak_berakhir' => $request->tanggal_kontrak_berakhir,
            ]);

            $data = KaryawanModel::where('id', '=', $karyawan->id)->get();

            if($data){
                return ApiFormater::createApi(200, 'Success update data', $data);
            } else {
                return ApiFormater::createApi(400, 'Failled', );
            }
            } catch (Exception $error) {
                return ApiFormater::createApi(400, 'Failled',);
            }
        }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $karyawan = KaryawanModel::findOrFail($id);

        $data = $karyawan->delete();

        if($data){
            return ApiFormater::createApi(200, 'Success delete data');
        }else{
            return ApiFormater::createApi(400, 'Failled',);
        }
    }
}
