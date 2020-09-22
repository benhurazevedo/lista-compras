<template>
    <li><input type="checkbox" v-model="item.checked"> {{ item.descricao }}</li>
</template>
<script>
export default {
    props:['item']
}
</script>
<style scoped>

</style>