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
import { figuresList, heavyList } from "./assets/tables";

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
