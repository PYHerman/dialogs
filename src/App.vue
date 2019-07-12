<template>
  <div id="app">
    <dialog1/>
<!--    <dialog2/>-->
<!--    <dialog3/>-->
  </div>
</template>

<script>

import dialog1 from './components/dialog1'
import dialog2 from './components/dialog2'
import dialog3 from './components/dialog3'
export default {
  name: 'app',
  components: {

    dialog1,
    dialog2,
    dialog3,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
  body{
    margin: 0;
  }
</style>
