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
        <div class="select-filter__body"
             :class="{active:isActive}">
            <div class="select-filter__item"
                 v-for="item in filterItem"
                 :key="item.type"
                 @click="changeSort(item.type)"
            >{{item.text}}</div>
        </div>
    </div>
</template>

<script>

    export default {

        emits: ['changeSort'],
        setup(props, {emit}){

            const defaultSelected = 'По умолчанию';
            const selected=ref(defaultSelected);
            const isActive=ref(false);
            const filterItem=ref(
                [
                    {
                        type: 'PRICE_ASC',
                        text: 'От меньшего к большему'
                    },
                    {
                        type: 'PRICE_DESC',
                        text: 'От большего к меньшему'
                    },
                    {
                        type: 'NAME_ASC',
                        text: 'По наименованию'
                    }
                ]
            )

            const openFilter = ()=>{
                isActive.value=!isActive.value;
            }


            const changeSort=(type)=>{
               const candidate = filterItem.value.find(item => item.type === type);
               selected.value = candidate ? candidate.text : defaultSelected;
                emit('changeSort', type)
            }

            return{
                selected,
                isActive,
                filterItem,
                openFilter,
                changeSort
            }
        }

    }

</script>

<style scoped lang="scss">

    @import "../assets/mixins/index";


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
