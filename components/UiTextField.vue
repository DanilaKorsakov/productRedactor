<template>
    <div class="text-field">
        <label class="text-field__label" for="product-input"> {{label}}</label>
        <input :type="type" class="text-field__input" id="product-input"
               :placeholder="placeholder"
               :value="text"
               @input="onInput"
        >
    </div>
</template>

<script>

    export default {

        props:{
            label:{
                type:String,
                required:true
            },
            type:{
                type:String,
                required:true
            },
            placeholder:{
                type:String,
                required:true
            },
            text:String,
        },

        emits:['update:text'],

        setup(props, {emit}){

            const onInput = (event) => {
                emit('update:text', event.target.value)
            };

            return{
                onInput,
            }
        }

    }

</script>

<style scoped lang="scss">

    @import "../assets/mixins/index";

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


    @media only screen and (min-width: 320px) {

        .text-field{

            &__label{
                margin-bottom: rem(4) ;
                font-size: rem(8);
                line-height: rem(13);
                display: flex;
            }

            &__label::after{
                content: '';
                display: block;
                width: rem(2);
                height: rem(2);
                background: #FF8484;
                border-radius: 50%;
            }

            &__input{
                box-shadow: 0px rem(2) rem(5) rgba(0, 0, 0, 0.1);
                border-radius: rem(4);
                border: none;
                background-color: #FFFEFB;
                height: rem(20);
                width: 100%;
                padding: 0 0 0 rem(8);
                box-sizing: border-box;
                outline: none;
                font-size: rem(8);
                line-height: rem(15);
            }

        }

    }

    @media only screen and (min-width: 600px) {

        .text-field{

            &__label{
                font-size: rem(10);
            }

            &__label::after{
                width: rem(4);
                height: rem(4);
            }

            &__input{
                height: rem(36);
                width: 100%;
                padding: 0 0 0 rem(16);
                font-size: rem(12);
            }

        }

    }

    @media only screen and (min-width: 1024px) {

    }

</style>
