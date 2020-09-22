<template>
    <div id="footer">
        <div class="coluna">
            <button id="excluir" type="button" :disabled="temItemExcluir" @click="excluirItem">Excluir</button>
        </div>
        <div class="coluna">
            <router-link to="/incluir">
                <button id="incluir" type="button">Incluir</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed:{
        ...mapGetters(['getLista'])
        ,temItemExcluir: function() {
            return this.getLista.filter(item => item.checked).length ==0;
        }
    }
    ,methods:{
        ...mapActions(['excluirItem'])
    }
}
</script>
<style scoped>
    #footer{
        height: 30px;
    }
    .coluna{
        width:50%;
        float: left;
    }
    #excluir{
        width: 100%;
    }
    a{
        display: block;
        width: 100%;
    }
    #incluir{
        width: 100%;
    }
</style>