<script>
export default {
  name: "CardListElement",
  props: ["name", "image"],
};
</script>

<template>
  <div class="col-2">
    <img :src="image" :alt="name" />
    <h4 class="text-center my-2 text-danger bg-warning-subtle">{{ name }}</h4>
  </div>
</template>

<style lang="scss" scoped></style>
