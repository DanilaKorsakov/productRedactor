<template>

    <div class="text-area">
        <label for="description" class="text-area__label">Описание товара</label>
        <textarea id="description" class="text-area__description" maxlength="100" placeholder="Введите описание товара"
                  :value="description"
                  @input="$emit('update:description',$event.target.value)"
        ></textarea>
    </div>

</template>

<script>

    export default {

        props:{
          description:String
        },

        emits:['update:description'],

    }

</script>

<style scoped lang="scss">

    @import "assets/mixins/index";

    @media only screen and (min-width: 320px) {
        .text-area{

            margin-top:rem(16);

            &__label{
                margin-bottom: rem(4) ;
                font-size: rem(8);
                line-height: rem(13);
                display: block;
            }

            &__description{
                font-size: rem(8);
                line-height: rem(15);
                outline: none;
                background-color: #FFFEFB;
                box-shadow: 0px rem(2) rem(5) rgba(0, 0, 0, 0.1);
                border-radius: rem(4);
                border: none;
                width: 100%;
                height: rem(70);
                padding: rem(8) rem(8) 0 rem(8);
                box-sizing: border-box;
                resize: none;
            }

        }

    }

    @media only screen and (min-width: 600px) {

        .text-area{

            &__label{
                font-size: rem(10);
                line-height: rem(13);
            }

            &__description{
                font-size: rem(12);
                height: rem(108);
                padding: rem(10) rem(16) 0 rem(16);
            }

        }

    }

</style>