<template>
    <div class="text-field">
        <label class="text-field__label" for="product-input"> {{inputOptions.label}}</label>
        <input type="text" class="text-field__input" :placeholder="inputOptions.placeholder" id="product-input">
    </div>
</template>

<script>

    export default {

        props:{
            inputOptions:{
                type:Object,
                required:true
            }
        }
    }

</script>

<style scoped lang="scss">

    .text-field{

        color: #49485E;
        padding: 0 24px;
        margin-top:16px;

        &__label{
            margin-bottom: 4px ;
            font-size: 10px;
            display: flex;
            line-height: 13px;
        }

        &__label::after{
            content: '';
            display: block;
            width: 4px;
            height: 4px;
            background: #FF8484;
            border-radius: 50%;
        }

        &__input{
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            border: none;
            background-color: #FFFEFB;
            height: 36px;
            width: 100%;
            padding: 0 0 0 16px;
            box-sizing: border-box;
            outline: none;
        }

    }

</style>