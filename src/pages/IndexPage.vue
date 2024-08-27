<template>
  <q-page class="">
    <div class="">
      <q-carousel swipeable animated v-model="slide" ref="carousel" infinite>
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
            v-if="$q.platform.is.desktop"
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
    </div>
    <q-virtual-scroll
      :items="heavyList"
      virtual-scroll-horizontal
      v-slot="{ item, index }"
      class="flex flex-center q-mt-sm"
    >
      <q-btn round color="grey-7" class="q-mx-lg q-mb-sm" :key="index">
        <q-avatar size="90px">
          <q-img :src="item.image" />
        </q-avatar>
      </q-btn>
    </q-virtual-scroll>
    <q-separator color="grey-4" inset />
  </q-page>
</template>

<script>
import { ref } from "vue";

const heavyList = [
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

export default {
  setup() {
    return {
      slide: ref(1),
      heavyList,
    };
  },
};
</script>
