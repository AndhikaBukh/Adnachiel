<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{ name: 'home' }" class="navbar-brand" style="margin-left:12px">Inosoft</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <router-link :to="{ name: 'karyawan' }" class="nav-link">KARYAWAN</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'magang' }" class="nav-link">MAGANG</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'cuti' }" class="nav-link">CUTI</router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{ name: 'resign' }" class="nav-link">RESIGN</router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{ name: 'cuti' }" class="nav-link">CUTI</router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{ name: 'gaji' }" class="nav-link">GAJI</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">

                <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                    style="margin-right:25px"><router-link :to="{ name: 'login' }" class="nav-link"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                            <path fill-rule="evenodd"
                                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg></router-link></button>

            </form>
        </div>
    </nav>
</template>

<script>
export default {


}
</script>