<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark flex flex-center">
        <!-- Mobile Toggle Button -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="mobile-menu-btn"
        />
        <!-- Desktop Layout -->
        <q-toolbar-title class="col-5 q-mt-md title-toolbar-desktop">
          <p class="text-caption">
            OLÁ! FAÇA SEU
            <a href="#" class="text-amber credential-links">LOGIN</a> OU
            <a href="#" class="text-amber credential-links">CADASTRE-SE</a>
          </p>
        </q-toolbar-title>
        <q-toolbar-title class="title-toolbar-mobile"> MENU </q-toolbar-title>

        <div class="row no-wrap text-weight-light q-mt-md desktop-client-menu">
          <div class="col-xs-6 col-sm-4 col-md-4">
            <p>
              <q-item-label
                ><q-icon name="mdi-account text-amber" class="q-mr-xs" />
                <a href="#" class="text-white credential-links">
                  MINHA CONTA</a
                ></q-item-label
              >
            </p>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <p>
              <q-item-label
                ><q-icon name="mdi-forum-outline text-amber" class="q-mr-xs" />
                <a href="#" class="text-white credential-links">
                  ATENDIMENTO</a
                ></q-item-label
              >
            </p>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <p>
              <q-item-label
                ><q-icon
                  name="mdi-checkbox-marked-outline text-amber"
                  class="q-mr-xs"
                />
                <a href="#" class="text-white credential-links">
                  MEUS PEDIDOS</a
                ></q-item-label
              >
            </p>
          </div>
          <div class="col-xs-6 col-sm-4 col-md-4">
            <p>
              <q-item-label
                ><q-icon name="mdi-cart text-amber" class="q-mr-xs" />
                <a href="#" class="text-white credential-links"> CARRINHO </a>
              </q-item-label>
            </p>
          </div>
        </div>
        <!-- Mobile Layout -->
        <div class="row mobile-client-menu">
          <q-btn flat round>
            <q-icon name="mdi-cart" />
          </q-btn>
          <q-btn flat round>
            <q-icon name="mdi-magnify" />
            <q-menu
              transition-show="slide-down"
              transition-hide="jump-up"
              cover
              style="width: 100%"
              square
            >
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-input borderless dense>
                      <template v-slot:prepend>
                        <q-icon name="mdi-arrow-left" />
                      </template>
                      <template v-slot:append>
                        <q-icon name="mdi-magnify" />
                      </template>

                      <template v-slot:hint> Field hint </template>
                    </q-input>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
      <q-separator color="grey" />
      <!-- Desktop Layout -->
      <q-toolbar class="bg-dark flex flex-center desktop-submenu">
        <q-toolbar-title class="q-ml-lg col-4">
          <q-img
            src="../assets/everycar-logo.png"
            style="height: 140px; max-width: 150px"
          />
        </q-toolbar-title>
        <div class="q-ml-xl col-2" style="min-width: 180px">
          <q-input
            rounded
            outlined
            bg-color="grey-9"
            label="O QUE VOCÊ PROCURA?"
            label-color="amber-9"
            color="amber-9"
          >
            <template v-slot:append>
              <q-avatar>
                <q-btn round>
                  <q-icon name="mdi-magnify text-amber" />
                </q-btn>
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="text-amber text-h5 q-mt-md q-ml-lg">
          <p>(84) 9 9999-8888</p>
        </div>
      </q-toolbar>
      <q-toolbar
        class="bg-dark flex flex-center mobile-submenu"
        v-show="isAtTop"
      >
        <q-toolbar-title class="flex flex-center">
          <q-img
            src="../assets/everycar-logo.png"
            height="150px"
            width="250px"
          />
        </q-toolbar-title>
      </q-toolbar>

      <div class="bg-amber-8 flex flex-center row no-wrap desktop-menu-clouths">
        <q-btn
          color="dark"
          class="btn-menu q-mx-lg"
          flat
          label="Acessórios"
          @mouseover="btn_acessorios = true"
          @mouseleave="btn_acessorios = false"
        >
          <q-menu v-model="btn_acessorios" @mouseleave="btn_acessorios = false">
            <q-list>
              <q-item clickable>
                <q-item-section>TODOS OS ACESSÁRIOS</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>ADESIVOS</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn color="dark" class="btn-menu q-mx-sm" flat label="Bonés" />
        <q-btn color="dark" class="btn-menu q-mx-sm" flat label="Camisetas" />
        <q-btn color="dark" class="btn-menu q-mx-sm" flat label="Polos" />
        <q-btn color="dark" class="btn-menu q-mx-sm" flat label="Camisas" />
        <q-btn
          color="dark"
          class="btn-menu q-mx-lg"
          flat
          label="Calçados"
          @mouseover="btn_calcados = true"
          @mouseleave="btn_calcados = false"
        >
          <q-menu v-model="btn_calcados" @mouseleave="btn_calcados = false">
            <q-list>
              <q-item clickable>
                <q-item-section>ADVENTURE</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>BOTAS COM C.A.</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>BOTINAS COUNTRY.</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>BOTAS ULTRALEVE</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Femininas" />
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Outlet" />
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          dropdown_acessorios
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    Olá
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

const btn_acessorios = ref(false);
const btn_calcados = ref(false);

const isAtTop = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function handleScroll() {
  isAtTop.value = window.scrollY <= 320;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="sass">
@media (min-width: $breakpoint-sm-max)
  .mobile-menu-btn
    display: none

  .title-toolbar-mobile
    display: none

  .mobile-client-menu
    display: none

  .desktop-submenu
    display: flex

  .mobile-submenu
    display: none



@media (max-width: $breakpoint-sm-max)
  .mobile-menu-btn
    display: block

  .desktop-menu-clouths
    display: none

  .title-toolbar-desktop
    display: none

  .title-toolbar-mobile
    display: block

  .desktop-client-menu
    display: none

  .mobile-client-menu
    display: block

  .desktop-submenu
    display: none

  .mobile-submenu
    display: flex
</style>
