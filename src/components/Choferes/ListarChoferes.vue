<template>
  <v-card>
    <v-btn class="rounded-pill" @click="abrirDialogoCrear" color="primary" style="background: green;">Agregar chofer</v-btn>

    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="choferes" :search="search">
      <template v-slot:[`item.actions`]="{ item }"><!-- en la columna 'actions' poner dos botones -->

        <v-btn @click="abrirDialogo(item)" color="primary" style="background: rgb(255, 255, 60); color: black; margin-right: 10%;border-radius: 20px;">Editar</v-btn>
        <v-btn @click="eliminar(item.id_chofer, item.nombre)" color="error" style="background: rgb(156, 17, 17);border-radius: 20px;">Eliminar</v-btn>
      </template> 
       
      <template v-slot:[`item.numero_licencia`]="{ item }">
       <strong style="color: blue;"> {{ item.numero_licencia }} </strong>
      </template> 
      <template v-slot:[`header.dni`]="{header}">
        <span class="color-yellow">{{ header.text }}</span>
      </template>
    </v-data-table>

    <DialogoEdicionChoferes
      v-if="choferSeleccionado !== null"
      :chofer="choferSeleccionado"
      :dialogVisible="dialogVisible"
      @guardarCambios="guardarCambios"
      @cerrarDialogo="cerrarDialogo"
    >
      <template v-slot:activator="{ on, attrs }">
        <button v-bind="attrs" v-on="on">Editar</button>
      </template>
    </DialogoEdicionChoferes>

    <DialogoCrearChofer
      v-if="dialogCrearVisible"
      :dialogVisible="dialogCrearVisible"
      @guardarNuevoChofer="guardarNuevoChofer"
      @cerrarDialogo="cerrarDialogoCrear"
    ></DialogoCrearChofer>
  </v-card>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import DialogoEdicionChoferes from './EditDialogChofer.vue';
import DialogoCrearChofer from './DialogoCrearChofer.vue'; 

export default {
  components: {
    DialogoEdicionChoferes,
    DialogoCrearChofer
  },
  data() {
    return {
      /* para estilos */
      model: 3,
      rounded: [
        '0',
        'sm',
        'md',
        'lg',
        'xl',
        'pill',
        'circle',
      ],
      /* dialogpo */
      dialogCrearVisible: false,
      search: '',
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          value: 'nombre',
        },
        {
          text: 'Apellido Paterno',
          value: 'ap_paterno'
        },
        {
          text: 'Apellido Materno',
          value: 'ap_materno'
        },
        {
          text: 'DNI',
          value: 'dni',
          class: 'red-background '
        },
        {
          text: 'N° Licencia',
          value: 'numero_licencia'
        },
        {
          text: 'Acciones',
          value: 'actions',
          sortable: false
        }
      ],
      choferes: [],
      choferSeleccionado: null,
      dialogVisible: false
    };
  },
  computed: {
      radius () {
        let rounded = 'rounded'
        const value = this.rounded[this.model]

        if (value !== 'md') {
          rounded += `-${value}`
        }

        return rounded
      },
    },
  mounted() {/* PARECIDO AL ONLOAD DE JS.... SE CARGA AL CARGAR LA PAGINA */
    this.fetchChoferes();
    library.add(fas);
  },
  methods: {
    fetchChoferes() {
      axios
        .get('http://127.0.0.1:8000/web-api/choferes')//cambiar api por web-api
        .then(response => {
          this.choferes = response.data;
        })
        .catch(error => {
          console.error(error.response.data.message);
          //mostrar alerta en caso de errores en la carga
          Swal.fire({
          text: error.response.data.message,
          icon: 'warning',
        })
        });

    },
    abrirDialogoCrear() {
      this.dialogCrearVisible = true;
    },
    eliminar(id, nombre) {
      Swal.fire({
        title: 'Confirmar eliminación',
        text: `¿Estás seguro de eliminar al chofer ${nombre} (${id})?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/web-api/choferes/${id}`)
            .then(response => {
              if (response.data.success) {
                Swal.fire({
                  title: 'Eliminado',
                  text: 'El chofer ha sido eliminado correctamente',
                  icon: 'success',
                  timer: 2000,
                  showConfirmButton: false
                });
                this.fetchChoferes();
              } else {
                Swal.fire({
                  title: 'Error',
                  text: 'No se pudo eliminar el chofer',
                  icon: 'error',
                  timer: 2000,
                  showConfirmButton: false
                });
              }
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
    },
    abrirDialogo(chofer) {
      this.choferSeleccionado = { ...chofer };
      this.dialogVisible = true;
    },
    guardarCambios(choferEditado) {
      axios
        .put(`http://127.0.0.1:8000/web-api/choferes/${choferEditado.id_chofer}`, choferEditado)
        .then(response => {
          if (response.data.success) {
            Swal.fire({
              title: 'Guardado',
              text: 'Los cambios se han guardado correctamente',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            });
            this.fetchChoferes();
            this.choferSeleccionado = null; // Limpiar el chofer seleccionado
          } else {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo editar el chofer',
              icon: 'error',
              timer: 2000,
              showConfirmButton: false
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    cerrarDialogo() {
      this.dialogVisible = false;
      this.choferSeleccionado = null;
    },
    guardarNuevoChofer(choferNuevo) {
      axios
        .post('http://127.0.0.1:8000/web-api/choferes', choferNuevo)
        .then(response => {
          if (response.data.success) {
            Swal.fire({
              title: 'Creado',
              text: 'El nuevo chofer se ha creado correctamente',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            });
            this.fetchChoferes();
            this.cerrarDialogoCrear();
          } else {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo crear el chofer',
              icon: 'error',
              timer: 2000,
              showConfirmButton: false
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    cerrarDialogoCrear() {
      this.dialogCrearVisible = false;
    }
  }
};
</script>
<style>
.red-background{
  background: red;
}
.color-yellow{
  color: yellow;
}
</style>
