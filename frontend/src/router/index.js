import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue";
import Karyawan from "../views/KaryawanView.vue";
import Magang from "../views/MagangView.vue";
import Cuti from "../views/CutiView.vue";
import Gaji from "../views/GajiView.vue";
import Resign from "../views/ResignView.vue";
import Login from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: () => import("../views/karyawan/TambahDataKaryawan.vue"),
    },
    {
      path: "/magang",
      name: "magang",
      component: Magang,
    },
    {
      path: "/magang/TambahDataMagang",
      name: "tambahdatamagang",
      component: () => import("../views/magang/TambahDataMagang.vue"),
    },
    {
      path: "/cuti",
      name: "cuti",
      component: Cuti,
    },
    {
      path: "/cuti/TambahDataCuti",
      name: "tambahdatacuti",
      component: () => import("../views/cuti/TambahDataCuti.vue"),
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
      component: Login,
    },
  ],
});

export default router;
