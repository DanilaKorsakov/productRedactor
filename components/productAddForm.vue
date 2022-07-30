<template>
    <form class="add-product-form" action="">
        <textFields
                :style="{marginTop:'0'}"
                :inputOptions="{label:'Наименование товара',placeholder:'Введите наименование товара',type:'text'}"
                v-model:text="name"
        />
        <textArea
                v-model:description="description"
        />
        <textFields
                :inputOptions="{label:'Ссылка на изображение товара',placeholder:'Введите ссылку',type:'text'}"
                v-model:text="link"
        />
        <textFields
                :inputOptions="{label:'Цена товара',placeholder:'Введите цену',type:'number'}"
                v-model:text="price"
        />
        <formBtn :isDisabled="isDisabled" @click.prevent="createNewProduct"/>
    </form>
</template>

<script>

    import {ref} from "../.nuxt/imports";

    export default ({

        setup: function (props, { emit }){

            const isDisabled = ref (true);

            const name = ref('');
            const description = ref ('');
            const link = ref('');
            const price = ref();

            const product = ref ({
                src:link,
                name:name,
                description:description,
                price:price
            });

            const createNewProduct = ()=>{

                const card = ref({
                    src:product.value.src,
                    name:product.value.name,
                    description:product.value.description,
                    price:product.value.price,
                })

                emit('createProduct',card.value);

                name.value='';
                link.value='';
                description.value='';
                price.value='';
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
                name,
                description,
                link,
                price,
                product,
                createNewProduct
            }

        }
    })
</script>

<style scoped>

    .add-product-form {
        color: #49485E;
        width: 20.75em;
        background-color: #FFFEFB;
        box-shadow: 0px 1.25em 1.875em rgba(0, 0, 0, 0.04), 0px 0.375em 0.625em rgba(0, 0, 0, 0.02);
        border-radius: 0.25em;
        padding: 1.5em;
        box-sizing: border-box;
        height: fit-content;
        margin-right: 1em;
    }

    @media (max-width: 590px){
        .add-product-form{
            margin: 0 auto;
        }
    }

</style>