<template>

    <div class="text-area">
        <label for="description" class="text-area__label">Описание товара</label>
        <textarea id="description" class="text-area__description" maxlength="100" placeholder="Введите описание товара"></textarea>
    </div>

</template>

<script>

    export default {

    }

</script>

<style scoped lang="scss">

    .text-area{

        margin-top:16px;

        &__label{
            margin-bottom: 4px ;
            font-size: 10px;
            display: block;
            line-height: 13px;
        }

        &__description{
            font-size: 12px;
            line-height: 15px;
            outline: none;
            background-color: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            border: none;
            width: 100%;
            height: 108px;
            padding: 10px 0 0 16px;
            box-sizing: border-box;
            resize: none;
        }

    }

</style>