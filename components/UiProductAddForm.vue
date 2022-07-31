<template>
    <form class="add-product-form" action="">
        <UiTextField
                :label="inputOptions.label='Наименование товара'"
                :placeholder="inputOptions.placeholder='Введите наименование товара'"
                :type="inputOptions.type='text'"
                v-model:text="product.name"
        />
        <UiTextArea
                v-model:description="product.description"
        />
        <UiTextField
                :label="inputOptions.label='Ссылка на изображение товара'"
                :placeholder="inputOptions.placeholder='Введите ссылку'"
                :type="inputOptions.type='text'"
                v-model:text="product.src"
        />
        <UiTextField
                :label="inputOptions.label='Цена товара'"
                :placeholder="inputOptions.placeholder='Введите цену'"
                :type="inputOptions.type='text'"
                v-model:text="product.price"
        />
        <UiFormBtn :isDisabled="isDisabled" @click.prevent="createNewProduct"/>
    </form>
</template>

<script>

    import {ref} from "../.nuxt/imports";

    export default ({

        setup: function (props, { emit }){

            const isDisabled = ref (true);

            const inputOptions = ref({
                    label:'',
                    placeholder:'',
                    type:''
            });

            const product = ref ({
                src:"",
                name:"",
                description:"",
                price:''
            });

            const createNewProduct = ()=>{
                emit('createProduct',product.value);

                product.value.src='';
                product.value.name='';
                product.value.description='';
                product.value.price='';
            };

            const onFormInputs = ()=>{
                if(product.value.name.length>0 && product.value.src.length>0 && product.value.price>0 ){
                    isDisabled.value=false;
                }else{
                    isDisabled.value=true;
                }
            };

            watch (product.value, onFormInputs,{deep:true})

            return{
                isDisabled,
                product,
                inputOptions,
                createNewProduct
            }

        }
    })
</script>

<style scoped lang="scss">

    @import "assets/mixins/index";

    @media only screen and (min-width: 320px) {
        .add-product-form {
            color: #49485E;
            width: 100%;
            background-color: #FFFEFB;
            box-shadow: 0 rem(20) rem(30) rgba(0, 0, 0, 0.04), 0 rem(6) rem(10) rgba(0, 0, 0, 0.02);
            border-radius: rem(4);
            padding: rem(20);
            box-sizing: border-box;
            height: fit-content;
        }

        .add-product-form .text-field:not(:first-child) {
            margin-top: 1em
        }

    }

    @media only screen and (min-width: 600px) {
        .add-product-form {
            width: rem(332);
            padding: rem(24);
            margin-right: rem(16);
        }


    }


</style>