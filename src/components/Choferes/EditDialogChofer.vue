<template>
    <v-row justify="center">
      <v-dialog v-model="localDialogVisible" persistent max-width="600px">
<!--         <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Editar
          </v-btn>
        </template> -->
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar chofer</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="choferSeleccionado.nombre"
                    label="Nombre*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="choferSeleccionado.ap_paterno"
                    label="Apellido paterno"
                    hint="Ejemplo de texto de ayuda solo al enfocar"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="choferSeleccionado.ap_materno"
                    label="Apellido materno*"
                    hint="Ejemplo de texto de ayuda persistente"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="choferSeleccionado.dni"
                    label="DNI*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="choferSeleccionado.numero_licencia"
                    label="N° Licencia*"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="cerrarDialogo">
              Cerrar
            </v-btn>
            <v-btn color="blue darken-1" text @click="guardarCambios">
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  
  <script>
  export default {
    props: {
      chofer: {
        type: Object,
        required: true,
        default: function(){return null}/* que retone null en caso no reciba el tipo esperado */
      },
      dialogVisible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        localDialogVisible: false,
        choferSeleccionado: {}
      };
    },
    mounted() {
      this.localDialogVisible = this.dialogVisible;
      this.choferSeleccionado = { ...this.chofer };
    },
    methods: {
      guardarCambios() {
        this.$emit('guardarCambios', this.choferSeleccionado);
      },
      cerrarDialogo() {
        this.localDialogVisible = false;
        this.$emit('cerrarDialogo');
      }
    }
  };
  </script>
  