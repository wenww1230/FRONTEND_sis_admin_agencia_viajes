<template>

  <div class="d-flex flex-row flex-grow-1 mt-2">
    <!--Empty items --->
    <v-navigation-drawer
      v-model="drawer"
      :app="$vuetify.breakpoint.mdAndDown"
      :permanent="$vuetify.breakpoint.lgAndUp"
      floating
      :right="$vuetify.rtl"
      class="elevation-1 rounded flex-shrink-0"
      :class="[$vuetify.rtl ? 'ml-3' : 'mr-3']"
      width="240"
    >
      <v-list dense nav class="mt-2 pa-0">
        <div class="mx-2 mb-2">
          <v-btn 
            block 
            color="primary"
            @click="openNewAgenda()"
          >
            <v-icon small left>mdi-plus</v-icon>
            Crear agenda
          </v-btn>
        </div>

        <v-list-item
          v-for="(agenda, index) in agendas"
          :key="index"
          v-model="agendaSelected"
          :to="`/tools/agendas/${agenda.id}`"
          active-class="primary--text"
          link
        >
          <!-- :to="{name: 'contactos-agenda', params: {agendaId: agenda.id, agenda: agenda}}" -->
          <v-list-item-icon>
            <v-icon small>mdi-book-open-blank-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ agenda.name }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action v-if="agenda.all_contacts !== 0">
            <template>
              <v-badge
                v-if="!agenda.upload"
                inline
                color="primary"
                class="font-weight-bold"
                :content="agenda.all_contacts"
              >
              </v-badge>
              <v-badge
                v-else
                inline
                color="orange"
                class="font-weight-bold"
                :content="agenda.all_contacts"
              >
              </v-badge>
            </template>
          </v-list-item-action>
          <v-list-item-action class="ml-0">
            <template>
              <v-icon @click="confirmDelete(agenda)">mdi-delete</v-icon>
            </template>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div 
      class="d-flex flex-grow-1 flex-column"
    >

      <v-toolbar class="hidden-lg-and-up flex-grow-0 mb-2">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="title font-weight-bold">Agendas</div>
      </v-toolbar>
        
      <ContactsComponent 
        :key="$route.params.agendaId" 
        :agenda-id="$route.params.agendaId"
        :agendas="agendas" 
        @onCreatedContact="refreshData"
      />
      
    </div>

    <new-agenda 
      ref="newAgenda"
      @onCreatedAgenda="onCreatedAgenda"
    />

    <template>
      <div v-if="dialogConfirm" class="text-center">
        <v-dialog
          v-model="dialogConfirm"
          persistent
          max-width="450"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              link
              v-bind="attrs"
              v-on="on"
            >
              Eliminar
            </v-list-item>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Seguro de eliminar esta agenda?
            </v-card-title>
            <v-card-text>Una vez eliminado esta agenda, no podrá recuperarla. Las campañas que se esten procesando y que hagan uso de esta agenda se enviarán con normalidad.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="secondary"
                text
                @click="dialogConfirm = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="success"
                text
                @click="deleteItem()"
              >
                Confirmo
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import newAgenda from './components/newAgenda'
import BackendApi from '@/services/backend.service'
import ContactsComponent from './components/ContactsComponent'
// import { mapState, mapActions } from 'vuex'

export default {
  components: {
    newAgenda,
    ContactsComponent
  },
  data() {
    return {
      agendas: [],
      agendaSelected: 1,
      agendaForDelete: {},
      drawer: null,
      dialogConfirm: false,
      isLoading: false,
      aux_all_contacts: 0,
      aux_cont_contacts: 0
    }
  },
  computed: {
    itemsEmpty: function () {

      return this.agendas.length === 0 ? true : false
    },
  // ...mapState(('sockets'),{
   //   pusher: 'pusher'
    //})
  },
  async mounted() {
    this.getAgendas()

    this.listenEventPusher()
  },
  methods: {

    async getAgendas() {
      this.isLoading = false
      
      const response = await BackendApi.get('/agenda')

      if (response.data.success) {
        this.agendas = response.data.data
      } else {
        this.$store.dispatch('app/showToast', response.data.message)
      }
    },
    openNewAgenda(agenda) {
      this.$refs.newAgenda.open(agenda)
    },
    confirmDelete(agenda) {
      this.dialogConfirm = true
      this.agendaForDelete = agenda
    },
    deleteItem() {
      BackendApi.delete('/agenda/' + this.agendaForDelete.id).then(async (response) => {
        if (response.data.success) {
          this.$store.dispatch(
            'app/showToast',
            'Agenda eliminada exitosamente'
          )
          this.dialogConfirm = false
          // this.$router.push({ name: 'contactos-agenda' })
          await this.getAgendas()
          this.$router.push({ path: '/tools/agendas/' + this.agendas[0].id })
        } else {
          this.$store.dispatch('app/showToast', response.data.message)
        }
      })
    },
    manage(agenda) {
      this.$router.push({
        path: '/tools/agendas/' + agenda.id + '/contacts',
        params: { agenda: agenda }
      })
    },
    refreshData() {
      this.getAgendas()
    },
    onCreatedAgenda() {
      this.getAgendas()
    },
    listenEventPusher() {
      
      //const channel = this.pusher.subscribe('NumberOfContacts' + $cookies.get('user').id)

      //channel.bind( 'NumberOfContactsInAgenda' + $cookies.get('user').id,  ( data ) => {
   /*      this.agendas.forEach((contact) => {
          if (contact.id === data.data.agenda_id) {
            if (this.aux_cont_contacts === 0) {
              this.aux_all_contacts = contact.all_contacts
              this.aux_cont_contacts ++ 
            }
            contact.all_contacts = Math.round(data.progresss) + '%'
            contact.upload = 1
            if (data.progresss === 100) {
              contact.all_contacts = this.aux_all_contacts + data.totalRows - 1 
              contact.upload = undefined
              this.aux_all_contacts = 0
              this.aux_cont_contacts = 0 
            }
          )}

    }*/
    }
  }  }

</script>