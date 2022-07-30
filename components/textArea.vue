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

        margin-top:1em;

        &__label{
            margin-bottom: 0.4em ;
            font-size: 0.625em;
            display: block;
            line-height: 1.3em;
        }

        &__description{
            font-size: 0.75em;
            line-height: 1.25em;
            outline: none;
            background-color: #FFFEFB;
            box-shadow: 0px 0.17em 0.42em rgba(0, 0, 0, 0.1);
            border-radius: 0.3em;
            border: none;
            width: 100%;
            height: 9em;
            padding: 0.83em 0 0 1.3em;
            box-sizing: border-box;
            resize: none;
        }

    }

</style>