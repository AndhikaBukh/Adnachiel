import Home from "../components/pages/Home.vue";
import Karyawan from "../components/pages/Karyawan.vue";
import Magang from "../components/pages/Magang.vue";
import Cuti from "../components/pages/Cuti.vue";
import Gaji from "../components/pages/Gaji.vue";
import Resign from "../components/pages/Resign.vue";
import ExampleComponent from "../components/ExampleComponent.vue";
export default {
    mode: "history",

    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/karyawan",
            name: "karyawan",
            component: Karyawan,
        },
        {
            path: "/karyawan/TambahDataKaryawan",
            name: "tambahdatakaryawan",
            component: () =>
                import("../components/karyawan/TambahDataKaryawan.vue"),
        },
        {
            path: "/magang",
            name: "magang",
            component: Magang,
        },
        {
            path: "/magang/TambahDataMagang",
            name: "tambahdatamagang",
            component: () =>
                import("../components/magang/TambahDataMagang.vue"),
        },
        {
            path: "/cuti",
            name: "cuti",
            component: Cuti,
        },
        {
            path: "/cuti/TambahDataCuti",
            name: "tambahdatacuti",
            component: () => import("../components/cuti/TambahDataCuti.vue"),
        },
        {
            path: "/gaji",
            name: "gaji",
            component: Gaji,
        },
        {
            path: "/resign",
            name: "resign",
            component: Resign,
        },
        {
            path: "/login",
            name: "login",
            component: ExampleComponent,
        },
    ],
};
