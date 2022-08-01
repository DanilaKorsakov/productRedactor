<template>
    <form class="add-product-form" action="">
        <UiTextField
                label="Наименование товара"
                placeholder="Введите наименование товара"
                type="text"
                v-model:text="product.name"
                @update:text="changeAccomplished"
        />
        <UiTextArea
                v-model:description="product.description"
                @update:description="changeAccomplished"
        />
        <UiTextField
                label="Ссылка на изображение товара"
                placeholder="Введите ссылку"
                type="text"
                v-model:text="product.src"
                @update:text="changeAccomplished"
        />
        <UiTextField
                label="Цена товара"
                placeholder="Введите цену"
                type="number"
                v-model:text="product.price"
                @update:text="changeAccomplished"
        />
        <UiFormBtn :isDisabled="isDisabled" @click.prevent="createNewProduct"/>

        <div class="add-product-form__accomplished" v-show="accomplished"> Товар добавлен </div>

    </form>
</template>

<script>

    export default ({

        setup: function (props, { emit }){

            const product = ref ({
                src:"",
                name:"",
                description:"",
                price:''
            });

            const isDisabled = ref (true);
            const requiredFields = ['src', 'name', 'price'];

            const accomplished = ref(false);

            const inputOptions = ref({
                    label:'',
                    placeholder:'',
                    type:''
            });

            const changeAccomplished = () =>{
                accomplished.value=false;
            };

            const createNewProduct = ()=>{
                // клонируем значение, т.к. оно реактивно
                const cloned = JSON.parse(JSON.stringify(product.value))

                cloned.priceForSort = parseFloat(cloned.price.match(/\d+/g).join(''));

                emit('createProduct', {
                    product: cloned
                });

                product.value.src='';
                product.value.name='';
                product.value.description='';
                product.value.price='';

                accomplished.value = true;
            };

            watch(product.value, () => {
                isDisabled.value = Object.entries(product.value).some((entry) => requiredFields.includes(entry[0]) && !entry[1])
            })

            return{
                isDisabled,
                product,
                inputOptions,
                accomplished,
                changeAccomplished,
                createNewProduct
            }

        }
    })
</script>

<style scoped lang="scss">

    @import "../assets/mixins/index";

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

            &__accomplished{
                text-align: center;
                color: #7BAE73;
                font-size: rem(12);
                line-height: rem(15);
                margin-top: rem(8);
            }
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

            &__accomplished{
                margin-top: rem(16);
                font-size: rem(16);
                line-height: rem(20);
            }

        }


    }


</style>
