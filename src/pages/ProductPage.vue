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
          @click="
            changeMainImage(
              'https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193733-800-800/21544-024_1-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133713270000'
            )
          "
        />
        <q-img
          src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193734-100-100/21544-024_2-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133852830000"
          spinner-color="white"
          style="max-height: 100px; max-width: 100px; border: 1px grey solid"
          class="col q-mb-sm"
          @click="
            changeMainImage(
              'https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193734-800-800/21544-024_2-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133852830000'
            )
          "
        />
        <q-img
          src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193735-100-100/21544-024_3-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133989300000"
          spinner-color="white"
          style="max-height: 100px; max-width: 100px; border: 1px grey solid"
          class="col q-mb-sm"
          @click="
            changeMainImage(
              'https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193735-800-800/21544-024_3-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133989300000'
            )
          "
        />
        <q-img
          src="https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193736-100-100/21544-024_4-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302134181070000"
          spinner-color="white"
          style="max-height: 100px; max-width: 100px; border: 1px grey solid"
          class="col q-mb-sm"
          @click="
            changeMainImage(
              'https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193736-800-800/21544-024_4-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302134181070000'
            )
          "
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
        >
          <!-- Imagem principal -->
          <q-img
            :src="mainImage"
            style="width: 100%; height: 100%; object-fit: contain"
          />
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
      mainImage:
        "https://inspiringfans4takes.vteximg.com.br/arquivos/ids/193733-800-800/21544-024_1-Bone-Oficial-Equipe-2022-F1-Mercedes-Benz-Branco.jpg?v=638302133713270000", // Imagem principal inicial
    };
  },
  methods: {
    // Função que altera a imagem principal ao clicar nas miniaturas
    changeMainImage(imageUrl) {
      this.mainImage = imageUrl; // Altera a URL da imagem principal para a URL da miniatura clicada
    },
  },
};
</script>

<style scoped>
/* Nenhum estilo específico para o zoom, já que agora o foco é na troca de imagem */
</style>
