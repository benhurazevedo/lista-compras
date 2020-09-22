<template>
    <div>
        <ul>
            <item-lista v-for="item in getLista" :item="item"></item-lista>
        </ul>
    </div>
</template>
<script>
import itemLista from './itemLista.vue'
import { mapGetters } from 'vuex'

export default {
    components: {itemLista}
    ,computed: {
        ...mapGetters(['getLista'])
        }
    }
</script>
<style scoped>
    ul{
        list-style: none;
        background-color: white;
        padding-left:0;
    }
</style>