<template>
  <q-page>
    <div>
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
    <HorizontalScroll :list="releaseList" />
    <h1 class="flex flex-center text-bold text-h5 q-my-xl">MAIS PEDIDOS</h1>
    <HorizontalScroll :list="shirtList" />
    <q-page-sticky position="bottom-right" :offset="[18, 65]">
      <q-btn fab icon="mdi-whatsapp" color="green" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { figuresList, releaseList, shirtList } from "./assets/tables";
import HorizontalScroll from "src/components/HorizontalScroll.vue";

export default {
  name: "IndexPage",
  components: { HorizontalScroll },
  setup() {
    return {
      slide: ref(1),
      figuresList,
      releaseList,
      shirtList,
    };
  },
};
</script>
