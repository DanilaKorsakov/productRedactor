<template>
    <div class="product-card">
        <img :src="card.src" alt="" class="product-card__image">
        <div class="product-card__content">
            <h4 class="product-card__name">{{card.name}}</h4>
            <p class="product-card__description">{{card.description}}</p>
            <p class="product-card__price">{{price}} руб. </p>
        </div>
        <button class="product-card__delete-btn" @click="deleteProduct">
            <svg class="product-card__delete-btn-icon" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.56294 4.76335V13.9953C1.56294 14.541 1.76303 15.0534 2.11256 15.4211C2.46048 15.7898 2.94467 15.9991 3.4514 16H10.541C11.0478 15.9991 11.532 15.7898 11.8798 15.4211C12.2293 15.0534 12.4294 14.541 12.4294 13.9953V4.76335C13.1242 4.57893 13.5745 3.90768 13.4815 3.19471C13.3884 2.48189 12.7811 1.94867 12.0622 1.94852H10.1437V1.48014C10.1459 1.08626 9.99017 0.708039 9.71134 0.42979C9.4325 0.151688 9.0537 -0.0031709 8.65982 4.92333e-05H5.33255C4.93867 -0.0031709 4.55986 0.151688 4.28103 0.42979C4.00219 0.708039 3.84646 1.08626 3.84865 1.48014V1.94852H1.93019C1.21122 1.94867 0.603931 2.48189 0.51084 3.19471C0.417896 3.90768 0.868128 4.57893 1.56294 4.76335ZM10.541 15.2506H3.4514C2.81075 15.2506 2.31236 14.7002 2.31236 13.9953V4.79629H11.68V13.9953C11.68 14.7002 11.1816 15.2506 10.541 15.2506ZM4.59806 1.48014C4.59558 1.28503 4.67227 1.09724 4.81074 0.959502C4.94906 0.821768 5.13729 0.746095 5.33255 0.749461H8.65982C8.85508 0.746095 9.04331 0.821768 9.18163 0.959502C9.32009 1.09709 9.39679 1.28503 9.3943 1.48014V1.94852H4.59806V1.48014ZM1.93019 2.69793H12.0622C12.4347 2.69793 12.7367 2.99989 12.7367 3.3724C12.7367 3.74491 12.4347 4.04688 12.0622 4.04688H1.93019C1.55768 4.04688 1.25571 3.74491 1.25571 3.3724C1.25571 2.99989 1.55768 2.69793 1.93019 2.69793Z" fill="white"/>
            </svg>
        </button>
    </div>
</template>

<script>


    export default {
        props:{
            card:{
                type:Object,
                required:true,
            }
        },
        setup(props, {emit}) {

            const price = computed (()=>{
               return props.card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            });

            const deleteProduct = ()=>{
                emit('product:delete')
            }

            return{
                price,
                deleteProduct
            }

        }
    }

</script>

<style lang="scss" scoped>

    @import "assets/mixins/index";

    @media only screen and (min-width: 320px) {

        .product-card{
            width: 100%;
            background: #FFFEFB;
            box-shadow: 0 rem(20) rem(30) rgba(0, 0, 0, 0.04), 0 rem(6) rem(10) rgba(0, 0, 0, 0.02);
            border-radius: rem(4);
            position: relative;
            height: fit-content;

            &__content{
                padding: 0 rem(8);
                box-sizing: border-box;
            }

            &__image{
                width: 100%;
                height: rem(180);
            }

            &__name{
                margin: rem(8) 0 rem(8) 0;
                font-size: rem(16);
                line-height: rem(20);

            }

            &__description{
                margin-bottom: rem(20);
                line-height: rem(18);
            }

            &__price{
                padding-bottom: rem(18);
                font-size: rem(18);
                line-height: rem(25);
                margin-bottom: 0;
                font-weight: 600;
            }

            &__delete-btn{
                background-color: #FF8484;
                box-shadow: 0 rem(2) rem(4) rgba(0, 0, 0, 0.1);
                border-radius: rem(10);
                border:none;
                width: rem(28);
                height: rem(28);
                position: absolute;
                top: rem(-8);
                right: rem(-8);
                opacity: 0;
                transition: 0.6s ease-in-out;
            }

            :hover{
                cursor: pointer;
            }
            &__delete-btn-icon{
                width: rem(12);
                height: rem(14) ;
            }
        }

        .product-card:hover{
            .product-card__delete-btn{
                opacity: 1;
            }
        }

    }

    @media only screen and (min-width: 600px) {
        .product-card{

            width: rem(200);

            &__content{
                padding: 0 rem(16);
            }

            &__image{
                height: rem(200);
            }

            &__name{
                margin: rem(16) 0 rem(16) 0;
                font-size: rem(20);
                line-height: rem(25);

            }

            &__description{
                margin-bottom: rem(32);
            }

            &__price{
                padding-bottom: rem(24);
                font-size: rem(24);
                line-height: rem(30);
            }

            &__delete-btn{
                width: rem(32);
                height: rem(32);
            }

            &__delete-btn-icon{
                width: rem(14);
                height: rem(16) ;
            }

        }
    }

    @media only screen and (min-width: 1024px) {
        .product-card{
            width: rem(322);
        }
    }

</style>