<template>
    <button :disabled="isDisabled" :class="{disabled:isDisabled}"  class="form-btn">Добавить товар</button>
</template>

<script>

    export default {

        props:{
            isDisabled:{
                type:Boolean
            }
        },

        setup(){

            return{

            }

        }

    }

</script>

<style scoped>
    .form-btn{
        height: 3em;
        width: 100%;
        background-color: #7BAE73;
        border-radius: 0.83em;
        border: none;
        margin-top: 2em;
        font-size: 0.75em;
        line-height: 1.25em;
        cursor: pointer;
        color: #FFFFFF;
    }

    .disabled{
        background-color: #EEEEEE;
        color:#B4B4B4;
    }
</style>