<template>
<div>
    <v-data-table :headers="headers" :items="clientes" :items-per-page="5" item-key="name" class="elevation-1"
        :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus'
        }"
    >
    <template v-slot:[`item.correo`]="{item}">
        <strong style="color: green;">{{ item.correo }}</strong>
    </template>
    </v-data-table>
</div>
</template>
<script>
import axios from 'axios';
export default{
    components:{},
    data(){
        return{
            headers: [
                {
                    text: 'Nombre',
                    align: 'start',
                    value: 'nombre_user',
                },
                { 
                    text: 'Apellido paterno', 
                    value: 'ap_paterno_user' 
                },
                {
                    text:'Apellido materno',
                    value: 'ap_materno_user'
                },
                {
                    text:'Correo',
                    value:'correo'
                }

            ],
            clientes: []
        }
    },
    mounted(){
        this.fetchClientes();
    },
    methods: {
        fetchClientes(){
            axios
        .get('http://127.0.0.1:8000/api/users')
        .then(response => {
          this.clientes = response.data;
        })
        .catch(error => {
          console.error(error);
        });
        }
    }
}

</script>