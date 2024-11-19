<template>
  <q-page>
    <div class="row flex flex-center">
      <div class="column col-1 q-ml-xl">
        <!-- Miniaturas das imagens -->
        <q-img
          src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193733-100-100/21544-024_1-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133713270000"
          spinner-color="white"
          style="max-height: 100px; max-width: 100px; border: 1px grey solid"
          class="col q-mb-sm"
        />
        <q-img
          src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193734-100-100/21544-024_2-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133852830000"
          spinner-color="white"
          style="max-height: 100px; max-width: 100px; border: 1px grey solid"
          class="col q-mb-sm"
        />
        <q-img
          src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193735-100-100/21544-024_3-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133989300000"
          spinner-color="white"
          style="max-height: 100px; max-width: 100px; border: 1px grey solid"
          class="col q-mb-sm"
        />
        <q-img
          src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193736-100-100/21544-024_4-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302134181070000"
          spinner-color="white"
          style="max-height: 100px; max-width: 100px; border: 1px grey solid"
          class="col q-mb-sm"
        />
      </div>

      <div
        class="q-gutter-md row items-start flex flex-center col-5 q-ml-xl row no-wrap q-mt-lg"
        style="max-width: 800px"
      >
        <div
          class="image-container"
          style="
            position: relative;
            width: 500px;
            height: 550px;
            overflow: hidden;
          "
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @mousemove="handleMouseMove"
        >
          <!-- A imagem que será ampliada -->
          <q-img
            ref="mainImage"
            src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193733-800-800/21544-024_1-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133713270000"
            style="width: 100%; height: 100%; object-fit: contain"
          />

          <!-- Janela de zoom -->
          <div
            v-if="isZooming"
            class="zoom-window"
            :style="zoomWindowStyle"
          ></div>
        </div>

        <div class="q-ml-xl col-5">
          <p class="text-h4 ellipsis">Boné Truck</p>
          <p class="text-weight-bold ellipsis">Código do produto: 1234</p>
          <p class="text-weight-thin ellipsis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            <q-btn
              color="secondary"
              label="Comprar"
              icon="mdi-cart"
              class="q-pa-md"
            />
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      isZooming: false, // Flag para verificar se o zoom deve ser exibido
      zoomWindowStyle: {
        display: "none", // Inicialmente, o quadro de zoom está invisível
        position: "absolute",
        border: "2px solid #fff",
        background: "rgba(255, 255, 255, 0.3)",
        width: "150px", // Tamanho da janela de zoom
        height: "150px", // Tamanho da janela de zoom
        pointerEvents: "none", // Evitar interação com o quadro de zoom
        backgroundSize: "200% 200%", // A imagem será ampliada em 200%
      },
    };
  },
  methods: {
    handleMouseEnter() {
      this.isZooming = true; // Ativa o zoom quando o mouse entra na imagem
    },
    handleMouseLeave() {
      this.isZooming = false; // Desativa o zoom quando o mouse sai da imagem
      this.zoomWindowStyle.display = "none"; // Oculta o quadro de zoom
    },
    handleMouseMove(event) {
      if (this.isZooming) {
        const img = this.$refs.mainImage.$el; // Pega o elemento DOM da imagem
        const rect = img.getBoundingClientRect(); // Obtém as coordenadas da imagem na tela

        // Cálculo das posições do mouse dentro da imagem
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const zoomWidth = 150; // Largura do quadro de zoom
        const zoomHeight = 150; // Altura do quadro de zoom

        // Cálculos da posição do fundo da imagem ampliada
        let bgPosX = (mouseX / rect.width) * 100 - zoomWidth / 2;
        let bgPosY = (mouseY / rect.height) * 100 - zoomHeight / 2;

        // Limita a posição para garantir que o quadro de zoom não ultrapasse os limites da imagem
        bgPosX = Math.min(100, Math.max(0, bgPosX));
        bgPosY = Math.min(100, Math.max(0, bgPosY));

        // Atualiza o estilo da janela de zoom com base nas posições do mouse
        this.zoomWindowStyle = {
          ...this.zoomWindowStyle,
          display: "block", // Torna o quadro de zoom visível
          top: mouseY - zoomHeight / 2 + "px", // Posição vertical do quadro de zoom
          left: mouseX - zoomWidth / 2 + "px", // Posição horizontal do quadro de zoom
          backgroundImage: "url('" + img.src + "')", // Usa a imagem como fundo do quadro de zoom
          backgroundPosition: `${bgPosX}% ${bgPosY}%`, // Ajusta a área do fundo da imagem ampliada
        };
      }
    },
  },
};
</script>

<style scoped>
.zoom-window {
  z-index: 10;
  pointer-events: none;
  background-repeat: no-repeat;
}
</style>
