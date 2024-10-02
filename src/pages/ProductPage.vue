<template>
  <q-page>
    <div class="q-gutter-md row items-start">
      <q-img
        src="https://cdn.quasar.dev/img/image-src.png"
        srcset="https://cdn.quasar.dev/img/image-1x.png 300w,
                https://cdn.quasar.dev/img/image-2x.png 2x,
                https://cdn.quasar.dev/img/image-3x.png 3x,
                https://cdn.quasar.dev/img/image-4x.png 4x"
        style="height: 280px; max-width: 300px"
      >
        <div class="absolute-bottom text-body1 text-center">With srcset</div>
      </q-img>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "ProductPage",
  setup() {},
};
</script>
