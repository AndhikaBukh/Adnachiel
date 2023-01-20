<template>
    <div class="mediumtron">
        <div class="container-fluid" style="margin-top: 50px">
            <form class="form-inline my-2 my-lg-0" style="justify-content: center">
                <h1 style="flex: auto">Resign</h1>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button type="button" class="btn btn-primary">Add</button>
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
                                <th scope="col">Tanggal Masuk</th>
                                <th scope="col">Tanggal Resign</th>
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
                                <button type="button" class="btn btn-outline-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                                        <path
                                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z">
                                        </path>
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