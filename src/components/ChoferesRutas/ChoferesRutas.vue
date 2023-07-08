<template>
    <div>{{ carro[0].marca }}</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            nombre: 'ernesto',
            carro:[{
                marca:'audi',
            }
            ]
        };
    }
}
</script>
