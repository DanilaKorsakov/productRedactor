<template>
    <form class="add-product-form" action="">
        <textFields :style="{marginTop:'0'}" :inputOptions="{label:'Наименование товара',placeholder:'Введите наименование товара'}"/>
        <textArea/>
        <textFields :inputOptions="{label:'Ссылка на изображение товара',placeholder:'Введите ссылку'}"/>
        <textFields :inputOptions="{label:'Цена товара',placeholder:'Введите цену'}"/>
        <formBtn :isDisabled="isDisabled"/>
    </form>
</template>

<script>

    export default {

        setup(){

            const isDisabled = ref (true);

            return{
                isDisabled
            }

        }
    }
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