<template>
    <div class="product-card">
        <img :src="card.src" alt="" class="product-card__image">
        <div class="product-card__content">
            <h4 class="product-card__name">{{card.name}}</h4>
            <p class="product-card__description">{{card.description}}</p>
            <p class="product-card__price">{{card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}} руб. </p>
        </div>
    </div>
</template>

<script>

    export default {
        props:{
            card:{
                type:Object,
                required:true
            }
        },
        setup(props) {

        }
    }

</script>

<style lang="scss" scoped>

    .product-card{
        width: 332px;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;

        &__content{
            margin: 0 16px;
        }
        &__image{
            width: 100%;
        }
        &__name{
            margin: 16px 0 16px;
            font-size: 20px;
            line-height: 25px;
        }
        &__description{
            margin-bottom: 32px;
            font-size: 16px;
            line-height: 20px;
        }
        &__price{
            padding-bottom: 24px;
            font-size: 24px;
            line-height: 30px;
        }
    }

</style>