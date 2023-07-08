<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
     <v-app> <ListarChoferes></ListarChoferes> </v-app> 
    <!-- <v-app> <PruebasComponent></PruebasComponent> </v-app> -->
    <!-- <choferesRutas></choferesRutas> -->
    <v-app><ListaClientes></ListaClientes></v-app>
    
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import ListarChoferes from './components/Choferes/ListarChoferes.vue';
/* import ChoferesRutas from './components/ChoferesRutas/ChoferesRutas.vue' */
/* import PruebasComponent from './components/PruebasComponent.vue'; */
import ListaClientes from './components/Clientes/ListaClientes.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    ListarChoferes,
    //PruebasComponent,
    //ChoferesRutas,
    ListaClientes
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
