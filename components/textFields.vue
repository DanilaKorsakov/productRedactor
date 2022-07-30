<template>
    <div class="text-field">
        <label class="text-field__label" for="product-input"> {{inputOptions.label}}</label>
        <input :type="inputOptions.type" class="text-field__input" id="product-input"
               :placeholder="inputOptions.placeholder"
               :value="text"
               @input="$emit('update:text',$event.target.value)"
        >
    </div>
</template>

<script>

    export default {

        props:{
            inputOptions:{
                type:Object,
                required:true
            },
            text:String,
        },

        emits:['update:text'],

        setup(){

            return{

            }
        }

    }

</script>

<style scoped lang="scss">

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none; // Yeah, yeah everybody write about it
    }

    input[type='number'],
    input[type="number"]:hover,
    input[type="number"]:focus {
        appearance: none;
        -moz-appearance: textfield;
    }

    .text-field{

        margin-top:1em;

        &__label{
            margin-bottom: 0.4em ;
            font-size: 0.625em;
            display: flex;
            line-height: 1.3em;
        }

        &__label::after{
            content: '';
            display: block;
            width: 0.4em;
            height: 0.4em;
            background: #FF8484;
            border-radius: 50%;
        }

        &__input{
            box-shadow: 0px 0.17em 0.42em rgba(0, 0, 0, 0.1);
            border-radius: 0.3em;
            border: none;
            background-color: #FFFEFB;
            height: 3em;
            width: 100%;
            padding: 0 0 0 1.3em;
            box-sizing: border-box;
            outline: none;
            font-size: 0.75em;
            line-height: 1.25em;
        }

    }

</style>