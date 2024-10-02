<template>
  <q-page>
    <div class="q-gutter-md row items-start flex flex-center">
      <q-img src="bone-produto/1.png" style="height: 560px; max-width: 600px" />
      <div class="q-ml-xl">
        <p class="text-h4 ellipsis">Boné Bege N</p>
        <p class="text-weight-bold ellipsis">Código do produto: 1234</p>
        <p class="text-weight-thin ellipsis">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <q-card class="my-card">
          <q-card-section>
            <div class="row">
              <q-icon size="xl" name="mdi-credit-card" color="grey" />
              <p>R$ 159,00</p>
            </div>
            <q-btn color="teal">
              <q-icon left size="3em" name="mdi-cart-outline" />

              <div>COMPRAR</div>
            </q-btn>
          </q-card-section>
        </q-card>
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
