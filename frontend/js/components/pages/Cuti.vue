<template>
    <div class="mediumtron">
        <div class="container-fluid" style="margin-top: 50px">
            <form class="form-inline my-2 my-lg-0" style="justify-content: center">
                <h1 style="flex: auto">Cuti</h1>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button type="button" class="btn btn-primary"><router-link :to="{ name: 'tambahdatacuti' }"
                        class="nav-link">Tambah Data</router-link></button>
            </form>
            <hr class="my-4" />
        </div>
        <div class="container-fluid" style="margin-top: 50px">
            <div class="container-fluid" style="margin-top: 50px">
                <div class="row justify-content-center">
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Divisi</th>
                                <th scope="col">Jabatan</th>
                                <th scope="col">Domisili</th>
                                <th scope="col">Mulai</th>
                                <th scope="col">Selesai</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Juan</td>
                                <td>Web</td>
                                <td>Front End</td>
                                <td>Surabaya</td>
                                <td>1/3/2022</td>
                                <td>1/3/2023</td>

                                <button type="button" class="btn btn-outline-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-trash" viewBox="0 0 16 16">
                                        <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                    <span class="visually-hidden"></span>
                                </button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>

</style>