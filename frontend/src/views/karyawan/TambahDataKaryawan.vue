<template>
    <div class="container" style="margin-top:100px">
        <form style="margin-top:80px">

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nama</label>
                <input class="form-control" type="text" placeholder="Nama Lengkap">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Tempat Lahir</label>
                <input class="form-control" type="text" placeholder="Tempat Lahir">
            </div>
            <div class="mb-3">
                <label for="date">Tanggal Lahir</label>
                <input class="form-control" type="date" id="date">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Alamat</label>
                <input class="form-control" type="text" placeholder="Alamat">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Jenis kelamin</label>
                <input class="form-control" type="text" placeholder="Jenis Kelamin">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Jabatan</label>
                <input class="form-control" type="text" placeholder="Jabatan">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Produk</label>
                <input class="form-control" type="text" placeholder="Produk">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Domisili</label>
                <input class="form-control" type="text" placeholder="Domisili">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Pendidikan Terakhir</label>
                <select class="form-select form-select mb-3">
                    <option selected>Pilih Salah Satu</option>
                    <option value="1">Sma</option>
                    <option value="2">Sarjana</option>
                    <option value="3">Magister</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Status</label>
                <input class="form-control" type="text" placeholder="Status">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Agama</label>
                <input class="form-control" type="text" placeholder="Agama">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Gaji Awal</label>
                <input class="form-control" type="text" placeholder="Gaji Awal">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Gaji Sekarang</label>
                <input class="form-control" type="text" placeholder="Gaji Sekarang">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Bank</label>
                <input class="form-control" type="text" placeholder="Bank">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Bpjs Kesehatan</label>
                <input class="form-control" type="text" placeholder="BPJS Kesehatan">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Bpjs Ketenagakerjaan</label>
                <input class="form-control" type="text" placeholder="Bpjs Ketenagakerjaan">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nik</label>
                <input class="form-control" type="text" placeholder="Nik">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">NPWP</label>
                <input class="form-control" type="text" placeholder="NPWP">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">KK</label>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02">
                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email Inosoft</label>
                <input type="email" class="form-control" id="exampleInputEmail1">

            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email Pribadi</label>
                <input type="email" class="form-control" id="exampleInputEmail1">

            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">No. HP</label>
                <input class="form-control" type="text" placeholder="NO. HP">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Status Kepegawaian</label>
                <input class="form-control" type="text" placeholder="Status Kepegawaian">
            </div>
            <div class="mb-3">
                <label for="date">Tanggal Awal Pengangkatan</label>
                <input class="form-control" type="date" id="date">
            </div>
            <div class="mb-3">
                <label for="date">Tanggal Kontrak Berakhir</label>
                <input class="form-control" type="date" id="date">
            </div>


            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Apakah Data Yang Saya isi Sudah Benar?</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>