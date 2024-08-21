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
      <q-toolbar class="bg-dark flex flex-center" v-if="$q.platform.is.desktop">
        <q-toolbar-title class="q-ml-lg col-4">
          <q-img
            src="../assets/everycar-logo.png"
            style="height: 140px; max-width: 150px"
          />
        </q-toolbar-title>
        <div class="q-ml-xl col-2">
          <q-input
            rounded
            outlined
            v-model="text"
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
      <q-toolbar class="flex flex-center bg-dark" v-else>
        <q-toolbar-title>
          <q-img src="../assets/everycar-logo.png" />
        </q-toolbar-title>
      </q-toolbar>
      <div
        class="bg-amber-8 flex flex-center row no-wrap"
        v-if="$q.platform.is.desktop"
      >
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Lançamentos" />
        <q-btn
          color="dark"
          class="btn-menu q-mx-lg"
          flat
          label="Acessórios"
          @mouseover="hello = true"
        >
          <q-menu v-model="hello" @mouseleave="hello = false">
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
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Bonés" />
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Camisetas" />
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Polos" />
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Camisas" />
        <q-btn color="dark" class="btn-menu q-mx-lg" flat label="Calçados" />
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

const hello = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
