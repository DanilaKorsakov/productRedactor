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

<style scoped lang="scss">

    @import "assets/mixins/index";

    .form-btn{
        height: rem(36);
        width: 100%;
        background-color: #7BAE73;
        border-radius: rem(10);
        border: none;
        margin-top: rem(24);
        font-size: rem(12);
        line-height: rem(15);
        cursor: pointer;
        color: #FFFFFF;
    }

    .disabled{
        background-color: #EEEEEE;
        color:#B4B4B4;
    }

    @media only screen and (min-width: 320px) {

        .form-btn{
            height: rem(30);
            width: 100%;
            background-color: #7BAE73;
            border-radius: rem(10);
            border: none;
            margin-top: rem(20);
            font-size: rem(10);
            line-height: rem(15);
            cursor: pointer;
            color: #FFFFFF;
        }

        .disabled{
            background-color: #EEEEEE;
            color:#B4B4B4;
        }

    }

    @media only screen and (min-width: 600px) {

        .form-btn{
            height: rem(36);
            margin-top: rem(24);
            font-size: rem(12);
        }

    }

    @media only screen and (min-width: 1024px) {

    }

</style>