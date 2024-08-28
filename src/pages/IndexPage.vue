<template>
  <q-page class="">
    <div class="">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        infinite
        v-if="$q.platform.is.desktop"
      >
        <q-carousel-slide :name="1" img-src="carousel/carousel-1.jpg" />
        <q-carousel-slide :name="2" img-src="carousel/carousel-2.jpg" />
        <q-carousel-slide :name="3" img-src="carousel/carousel-3.jpg" />
        <q-carousel-slide :name="4" img-src="carousel/carousel-4.jpg" />

        <template v-slot:control>
          <q-carousel-control
            position="bottom-left"
            :offset="[18, 180]"
            class="q-gutter-xs"
            v-if="$q.platform.is.desktop"
          >
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
          </q-carousel-control>
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 180]"
            class="q-gutter-xs"
            ><q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_right"
              @click="$refs.carousel.next()"
          /></q-carousel-control>
        </template>
      </q-carousel>
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        infinite
        v-else
        height="300px"
      >
        <q-carousel-slide :name="1" img-src="carousel/carousel-1.jpg" />
        <q-carousel-slide :name="2" img-src="carousel/carousel-2.jpg" />
        <q-carousel-slide :name="3" img-src="carousel/carousel-3.jpg" />
        <q-carousel-slide :name="4" img-src="carousel/carousel-4.jpg" />
      </q-carousel>
    </div>
    <q-virtual-scroll
      :items="figuresList"
      virtual-scroll-horizontal
      v-slot="{ item, index }"
      class="flex flex-center q-mt-sm"
    >
      <q-btn round color="grey-7" class="q-mx-lg q-mb-sm" :key="index">
        <q-avatar size="66px">
          <q-img :src="item.image" />
        </q-avatar>
      </q-btn>
    </q-virtual-scroll>
    <q-separator color="grey-4" inset />
    <h1 class="flex flex-center text-bold text-h5 q-my-xl">
      NOVOS LANÇAMENTOS
    </h1>
    <q-virtual-scroll
      :items="heavyList"
      virtual-scroll-horizontal
      v-slot="{ index, item }"
    >
      <q-card class="q-mx-md q-mt-md" flat borderless :key="index">
        <q-img
          :src="item.image"
          style="max-height: 150px; height: 100%; width: 200px; max-width: 100%"
        />

        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{ item.name }}</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            ></div>
          </div>
          <!--
          <q-rating v-model="item.rating" :max="5" size="32px" />
          -->
        </q-card-section>

        <q-card-section class="q-pt-none">
          Por
          <div class="text-subtitle1 text-bold">
            {{ formatCurrency(item.price) }}
          </div>
          <div>
            6x de
            <span class="text-subtitle1 text-bold">
              {{ formatNotDisplayCurrency(item.part) }}
            </span>
            sem juros
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn outline="" color="amber-9"> Comprar </q-btn>
        </q-card-actions>
      </q-card>
    </q-virtual-scroll>
    <q-page-sticky position="bottom-right" :offset="[18, 65]">
      <q-btn fab icon="mdi-whatsapp" color="green" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { formatCurrency, formatNotDisplayCurrency } from "src/utils/format";

const figuresList = [
  {
    image: "bone-logo.jpg",
  },
  {
    image: "camisa-logo.jpg",
  },
  {
    image: "calca-logo.jpg",
  },
  {
    image: "bota-logo.jpg",
  },
];

const heavyList = [
  {
    image:
      "https://images.tcdn.com.br/img/img_prod/868639/bone_baseball_3_1_20201022155839.jpg",
    name: "Boné de Beiseball",
    rating: 5,
    price: 214.59,
    part: 35.77,
  },
  {
    image:
      "https://images.tcdn.com.br/img/img_prod/868639/bone_trucker_islandia_465_1_efa334c05f05d5e1b9fdd74883363227.jpg",
    name: "Boné Truck",
    rating: 4.5,
    price: 259.99,
    part: 43.33,
  },
  {
    image: "https://oreimomo.com/wp-content/uploads/2023/06/183.png",
    name: "Boné da AUDI",
    rating: 4,
    price: 239.5,
    part: 39.91,
  },
  {
    image: "https://oreimomo.com/wp-content/uploads/2023/06/4-3.png",
    name: "Boné da BMW",
    rating: 3.8,
    price: 239.5,
    part: 39.91,
  },
  {
    image:
      "https://inspiringfans4takes.vteximg.com.br/arquivos/ids/181128-800-800/00213_075_1.jpg?v=638121670672000000",
    name: "Boné da Mercedes",
    rating: 4.2,
    price: 239.5,
    part: 39.91,
  },

  {
    image:
      "https://shop.scania.com.br/wp-content/uploads/2024/01/2742088_1.jpg",
    name: "Boné Scania",
    rating: 5,
    price: 239.5,
    part: 39.91,
  },
  {
    image:
      "https://thumbor.cartpanda.com/_7jTQ3FTBV7sA8eSyQz9KTM51lM=/1024x0/https://assets.mycartpanda.com/static/products_images/aHpIFpUhmvvrx3VhskTATeRSjyjq6a.jpg?v=13252247658",
    name: "Boné Volvo",
    rating: 4.4,
    price: 239.5,
    part: 39.91,
  },
  {
    image:
      "https://images.tcdn.com.br/img/img_prod/914261/bone_victor_varrens_851_1_a4fec9f8a4feeacbcb926e0ece2ed8fe.jpg",
    name: "Boné Azul",
    rating: 3.6,
    price: 239.5,
    part: 39.91,
  },
  {
    image:
      "https://cdn.awsli.com.br/600x1000/919/919631/produto/1543398710e2e48d5a9.jpg",
    name: "Boné Verde",
    rating: 4.8,
    price: 239.5,
    part: 39.91,
  },
  {
    image:
      "https://3494.cdn.simplo7.net/static/3494/sku/quinzentenaconcentraco-bone-branco-da-marinha-1479269588632.jpg",
    name: "Boné Branco",
    rating: 4.9,
    price: 239.5,
    part: 39.91,
  },
  {
    image:
      "https://cdn.awsli.com.br/600x450/287/287385/produto/217382470/mcd-6504-udf4nhypkj.jpg",
    name: "Boné Vinho",
    rating: 5,
    price: 239.5,
    part: 39.91,
  },
];

export default {
  setup() {
    return {
      slide: ref(1),
      figuresList,

      heavyList,
      formatCurrency,
      formatNotDisplayCurrency,
    };
  },
};
</script>
