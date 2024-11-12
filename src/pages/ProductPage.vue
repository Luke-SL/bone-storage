<template>
  <q-page>
    <div class="q-gutter-md row items-start flex flex-center q-">
      <q-img
        src="https://images.tcdn.com.br/img/img_prod/868639/bone_trucker_islandia_465_1_efa334c05f05d5e1b9fdd74883363227.jpg"
        spinner-color="white"
        style="height: 140px; max-width: 150px; border: 1px black solid"
        class="q-mb-lg"
      />
      <q-img
        src="https://images.tcdn.com.br/img/img_prod/868639/bone_trucker_islandia_465_1_efa334c05f05d5e1b9fdd74883363227.jpg"
        style="height: 560px; max-width: 600px"
        class=""
      />
      <div class="q-ml-xl">
        <p class="text-h4 ellipsis">Boné Truck</p>
        <p class="text-weight-bold ellipsis">Código do produto: 1234</p>
        <p class="text-weight-thin ellipsis">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "ProductPage",
  setup() {},
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
</style>
