<template>
    <div class="corpo-form">
        <div class="campo-botao">
            <router-link to="/">
                <button type="button">Voltar</button>
            </router-link>
        </div>
        <div class="campo-form-maior">
            <input type="text" v-model="descricaoItem">
        </div>
        <div class="campo-botao">
            <button type="button" @click="incluir">Incluir</button>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    data(){
        return{
            descricaoItem:""
        }
    }
    ,methods:{
        ...mapActions(['incluirItem'])
        ,incluir: function(){
            this.incluirItem(this.descricaoItem);
            this.descricaoItem = "";
            this.$router.replace('/');
        }
    }
}
</script>
<style scoped>
    .corpo-form{
        background-color:lightslategray;
        width:97%;
        padding: 4px;
        margin:0;
        height:24px;
    }
    .campo-botao{
        width:20%;
        float: left;
        margin:0;
        padding:0;
    }
    .campo-botao>a{
        width:100%;
        display:block;
    }
    .campo-botao>a>button{
        width:100%;
    }
    .campo-botao>button{
        width:100%;
    }
    .campo-form-maior{
        width:60%;
        float:left;
    }
</style>