<template>
  <custom-form/>
</template>

<script>
import CustomForm from "@/components/Form.vue";
export default {
  name: 'App',
  components: {
    CustomForm
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>