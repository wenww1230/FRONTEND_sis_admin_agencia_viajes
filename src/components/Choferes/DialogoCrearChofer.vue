<template>
    <v-row justify="center">
      <v-dialog v-model="localDialogVisible" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ titulo }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="choferNuevo.nombre"
                    label="Nombre*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="choferNuevo.ap_paterno"
                    label="Apellido paterno"
                    hint="Ejemplo de texto de ayuda solo al enfocar"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="choferNuevo.ap_materno"
                    label="Apellido materno*"
                    hint="Ejemplo de texto de ayuda persistente"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="choferNuevo.dni"
                    label="DNI*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="choferNuevo.numero_licencia"
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
      dialogVisible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        localDialogVisible: false,
        titulo: 'Crear chofer',
        choferNuevo: {
          nombre: '',
          ap_paterno: '',
          ap_materno: '',
          dni: '',
          numero_licencia: ''
        }
      };
    },
    mounted() {
      this.localDialogVisible = this.dialogVisible;
    },
    methods: {
      guardarCambios() {
        this.$emit('guardarNuevoChofer', this.choferNuevo);
      },
      cerrarDialogo() {
        this.localDialogVisible = false;
        this.$emit('cerrarDialogo');
      }
    }
  };
  </script>
  