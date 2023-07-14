<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="containe_principal" style="display: flex; flex-direction: row;">
        <!-- NAVIGATION DRAWER DE VUETIFY -->
        <MenuNavegacionLateral></MenuNavegacionLateral>
        <!-- FIN NAVIGATION DRAWER VUETIFY -->
        <v-app> <ListarChoferes></ListarChoferes> </v-app> 
        <v-app><DefaultLayout></DefaultLayout></v-app>
    </div>
    
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
/* menu de navegacion lateral */
import MenuNavegacionLateral from './components/elementos_dashboard/MenuLateral.vue';
import DefaultLayout from './layouts/DefaultLayout.vue'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    ListarChoferes,
    //PruebasComponent,
    //ChoferesRutas,
    ListaClientes,
    MenuNavegacionLateral,
    DefaultLayout
    
  },
  data(){
    return{
      drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
    }
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
  /* margin-top: 60px; */
}
</style>









<!-- 
  <template>
  <v-app>

    <component :is="currentLayout" v-if="isRouterLoaded">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>

    <v-snackbar v-model="toast.show" :timeout="toast.timeout" :color="toast.color" bottom>
      {{ toast.message }}
      <v-btn v-if="toast.timeout === 0" color="white" text @click="toast.show = false">{{ $t('common.close') }}</v-btn>
    </v-snackbar>

  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import config from './configs'

// Layouts
import defaultLayout from './layouts/DefaultLayout'
import landingLayout from './layouts/LandingLayout'
import simpleLayout from './layouts/SimpleLayout'
import authLayout from './layouts/AuthLayout'
import errorLayout from './layouts/ErrorLayout'

/*
|---------------------------------------------------------------------
| Main Application Component
|---------------------------------------------------------------------
|
| In charge of choosing the layout according to the router metadata
|
*/
export default {
  components: {
    defaultLayout,
    landingLayout,
    simpleLayout,
    authLayout,
    errorLayout
  },
  computed: {
    ...mapState('app', ['toast']),
    isRouterLoaded: function() {
      if (this.$route.name !== null) return true

      return false
    },
    currentLayout: function() {
      const layout = this.$route.meta.layout || 'default'

      return layout + 'Layout'
    }
  },
  head: {
    link: [
      // adds config/icons into the html head tag
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  }
}
</script>

<style scoped>
/**
 * Transition animation between pages
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

 -->