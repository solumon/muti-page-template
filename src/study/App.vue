<template>
  <div
    id="app"
    class="a"
    data-a="4"
  >
    HELLO 学习页
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      data: 'value',
    };
  },
};
</script>

<style>
#app {
    display: none;
    flex-direction: column;
    align-items: center;
}
</style>
