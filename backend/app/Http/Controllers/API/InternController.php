<?php

namespace App\Http\Controllers\API;

use App\Helpers\ApiFormater;
use App\Http\Controllers\Controller;
use App\Models\internModel;
use Illuminate\Http\Request;
use TheSeer\Tokenizer\Exception;

class InternController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = internModel::all();
        // $datakaryawan = karyawanModel::all();
        
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
                'agama' => 'required',
                'nik' => 'required',
                'kk' => 'required',
                'email_pribadi' => 'required',
                'no_hp' => 'required',
            ]);

            $intern = internModel::create([
                'name' => $request->name,
                'tempat_lahir'  => $request->tempat_lahir,
                'tanggal_lahir'  => $request->tanggal_lahir,
                'alamat' => $request->alamat,
                'jenis_kelamin' => $request->jenis_kelamin,
                'jabatan' => $request->jabatan,
                'produk' => $request->produk,
                'domisili' => $request->domisili,
                'pendidikan' => $request->pendidikan,
                'agama' => $request->agama,
                'nik' => $request->nik,
                'kk' => $request->kk,
                'email_pribadi' => $request->email_pribadi,
                'no_hp' => $request->no_hp,

            ]);

            $data = internModel::where('id', '=', $intern->id)->get();

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
        $data = internModel::where('id', '=', $id)->get();

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
                'agama' => 'required',
                'nik' => 'required',
                'kk' => 'required',
                'email_pribadi' => 'required',
                'no_hp' => 'required',
            ]);

            $intern = internModel::findOrFail($id);
            $intern->update([
                'name' => $request->name,
                'tempat_lahir'  => $request->tempat_lahir,
                'tanggal_lahir'  => $request->tanggal_lahir,
                'alamat' => $request->alamat,
                'jenis_kelamin' => $request->jenis_kelamin,
                'jabatan' => $request->jabatan,
                'produk' => $request->produk,
                'domisili' => $request->domisili,
                'pendidikan' => $request->pendidikan,
                'agama' => $request->agama,
                'nik' => $request->nik,
                'kk' => $request->kk,
                'email_pribadi' => $request->email_pribadi,
                'no_hp' => $request->no_hp,

            ]);

            $data = internModel::where('id', '=', $intern->id)->get();

            if($data){
                return ApiFormater::createApi(200, 'Success update data', $data);
            }else{
                return ApiFormater::createApi(400, 'Failled',);
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
        $intern = internModel::findOrFail($id);

        $data = $intern->delete();

        if($data){
            return ApiFormater::createApi(200, 'Success delete data');
        }else{
            return ApiFormater::createApi(400, 'Failled',);
        }
    }
}
