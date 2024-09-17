<template>
  <div class="scroll-container" v-if="$q.platform.is.desktop">
    <!-- Scroll Area with Horizontal Scroll -->
    <div
      class="scroll-area"
      ref="scrollArea"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <div class="scroll-content">
        <q-card
          v-for="item in heavyList"
          :key="item.id"
          class="item-card"
          flat
          borderless
        >
          <q-img :src="item.image" class="item-image" />
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">{{ item.name }}</div>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            Por
            <div class="text-subtitle1 text-bold">
              {{ formatCurrency(item.price) }}
            </div>
            <div>
              6x de
              <span class="text-subtitle1 text-bold">{{
                formatCurrency(item.part)
              }}</span>
              sem juros
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn outline color="amber-9">Comprar</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="scroll-controls">
      <q-btn
        class="scroll-control scroll-left"
        round
        dense
        flat
        color="orange"
        text-color="black"
        icon="mdi-chevron-left"
        @click="scrollLeftFunc"
      />
      <q-btn
        class="scroll-control scroll-right"
        round
        dense
        flat
        color="orange"
        text-color="black"
        icon="mdi-chevron-right"
        @click="scrollRight"
      />
    </div>
  </div>
  <div v-else>
    <q-virtual-scroll
      :items="heavyList"
      virtual-scroll-horizontal
      v-slot="{ item, index }"
    >
      <q-card :key="index" class="item-card" flat borderless>
        <q-img :src="item.image" class="item-image" />
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{ item.name }}</div>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Por
          <div class="text-subtitle1 text-bold">
            {{ formatCurrency(item.price) }}
          </div>
          <div>
            6x de
            <span class="text-subtitle1 text-bold">{{
              formatCurrency(item.part)
            }}</span>
            sem juros
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn outline color="amber-9">Comprar</q-btn>
        </q-card-actions>
      </q-card>
    </q-virtual-scroll>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { formatCurrency } from "src/utils/format";

export default {
  name: "HorizontalScroll",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const scrollArea = ref(null);
    let isDragging = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
      isDragging = true;
      startX = e.pageX - scrollArea.value.getBoundingClientRect().left;
      scrollLeft = scrollArea.value.scrollLeft;
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      const x = e.pageX - scrollArea.value.getBoundingClientRect().left;
      const walk = (x - startX) * 2; // Scroll-fast multiplier
      scrollArea.value.scrollLeft = scrollLeft - walk;
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const scrollLeftFunc = () => {
      if (scrollArea.value) {
        scrollArea.value.scrollBy({ left: -300, behavior: "smooth" });
      }
    };

    const scrollRight = () => {
      if (scrollArea.value) {
        scrollArea.value.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    const heavyList = computed(() => props.list);

    return {
      scrollArea,
      scrollLeftFunc,
      scrollRight,
      startDrag,
      onDrag,
      stopDrag,
      heavyList,
      formatCurrency,
    };
  },
};
</script>

<style scoped>
.scroll-container {
  position: relative;
  width: 100%; /* Garante que o contêiner use toda a largura disponível */
  overflow: hidden; /* Evita que o conteúdo extra seja visível fora do contêiner */
}

.scroll-area {
  display: flex; /* Garante que os itens sejam exibidos em linha */
  overflow-x: hidden; /* Permite o scroll horizontal */
  white-space: nowrap; /* Impede a quebra de linha */
  padding: 0 10px; /* Adiciona padding para evitar o corte dos itens */
}

.scroll-content {
  display: flex;
}

.item-card {
  flex: 0 0 auto; /* Garante que os itens não encolham */
  margin: 0 10px; /* Margem entre os itens */
}

.item-image {
  max-height: 200px;
  height: auto;
  width: 200px;
}

.scroll-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.scroll-control {
  pointer-events: auto;
  z-index: 1; /* Garante que os botões estejam sobre o conteúdo */
}
</style>
