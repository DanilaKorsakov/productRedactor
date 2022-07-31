<template>
    <div class="select-filter" @click="openFilter">
        <div class="select-filter__header">
            <span class="select-filter__current">{{selected}}</span>
            <div class="select-filter__icon">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
                </svg>
            </div>
        </div>
        <div class="select-filter__body" @click="changeHeader" :class="{active:isActive}">
            <div class="select-filter__item" v-for="item in filterItem">{{item}}</div>
        </div>
    </div>
</template>

<script>

    export default {

        setup(){

            const selected=ref('По умолчанию');
            const isActive=ref(false);
            const filterItem=ref(
                [
                    'От меньшего к большему',
                    'От большего к меньшему',
                    'По наименованию'
                ]
            )

            const openFilter = ()=>{
                isActive.value=!isActive.value;
            }


            const changeHeader=(e)=>{
               selected.value=e.target.textContent;
            }

            return{
                selected,
                isActive,
                filterItem,
                openFilter,
                changeHeader
            }
        }

    }

</script>

<style scoped lang="scss">

    @import "assets/mixins/index";


    @media only screen and (min-width: 320px) {

        .select-filter{
            font-size: rem(8);
            line-height: rem(10);
            color: #B4B4B4;
            position: relative;
            cursor: pointer;
            width: rem(120);
            z-index: 2;

            &__header{
                display: flex;
                height: rem(20);
                background-color: #FFFEFB;
                box-shadow: 0 rem(2) rem(5) rgba(0, 0, 0, 0.1);
                text-align: center;
                align-items: center;
                padding: 0 rem(8);
                justify-content: center;
            }

            &__body{
                position: absolute;
                background-color: #FFFEFB;
                box-shadow: 0 rem(2) rem(5) rgba(0, 0, 0, 0.1);
                border-top: none;
                width: inherit;
                box-sizing: border-box;
                display: none;
            }

            &__item{
                transition: 0.2s ease-in-out;
                padding: rem(2) 0 rem(3) rem(8);
            }

            &__item:hover{
                opacity: 0.7;
            }

            &__icon{
                margin-left: rem(5);
            }

            .active{
                display: block;
            }
        }

    }

    @media only screen and (min-width: 600px) {

        .select-filter{
            font-size: rem(12);
            line-height: rem(15);
            width: rem(180);

            &__header{
                height: rem(36);
                padding: 0 rem(16);
            }

            &__item{
                transition: 0.2s ease-in-out;
                padding: rem(4) 0 rem(5) rem(8);
            }

        }


    }


</style>