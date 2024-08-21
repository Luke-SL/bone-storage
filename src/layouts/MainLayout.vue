<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark flex flex-center">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          v-if="$q.platform.is.mobile"
        />
        <q-toolbar-title class="col-5 q-mt-md" v-if="$q.platform.is.desktop">
          <p class="text-caption">
            OLÁ! FAÇA SEU
            <a href="#" class="text-amber credential-links">LOGIN</a> OU
            <a href="#" class="text-amber credential-links">CADASTRE-SE</a>
          </p>
        </q-toolbar-title>

        <q-toolbar-title class="q-mt-md" v-else>
          <p>MENU</p>
        </q-toolbar-title>
        <div
          class="row no-wrap text-weight-light q-mt-md"
          v-if="$q.platform.is.desktop"
        >
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
                <a href="#" class="text-white credential-links">
                  CARRINHO</a
                ></q-item-label
              >
            </p>
          </div>
        </div>

        <div class="row" v-else>
          <q-btn round>
            <q-icon name="mdi-cart" />
          </q-btn>
          <q-btn round>
            <q-icon name="mdi-magnify" />
          </q-btn>
        </div>
      </q-toolbar>
      <q-toolbar class="bg-dark flex flex-center">
        <q-toolbar-title class="q-mr-xl">
          <q-img
            src="../assets/everycar-logo.png"
            style="height: 140px; max-width: 150px"
          />
        </q-toolbar-title>
        <div class="q-ml-xl">
          <q-input rounded outlined v-model="text" bg-color="grey-9">
            <template v-slot:append>
              <q-avatar>
                <q-icon name="mdi-magnify text-amber" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="text-amber text-h5 q-mt-md q-ml-lg">
          <p>(84) 9 9999-8888</p>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
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

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
