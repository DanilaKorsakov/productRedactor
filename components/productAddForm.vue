<template>
    <form class="add-product-form" action="">
        <textFields :style="{marginTop:'0'}" :inputOptions="{label:'Наименование товара',placeholder:'Введите наименование товара'}"/>
        <textFields :inputOptions="{label:'Ссылка на изображение товара',placeholder:'Введите ссылку'}"/>
        <textFields :inputOptions="{label:'Цена товара',placeholder:'Введите цену'}"/>
    </form>
</template>

<script>

    export default {

        setup(){

            return{

            }

        }
    }
</script>

<style scoped>

    .add-product-form {
        width: 332px;
        background-color: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        padding: 24px 0;
    }

</style>