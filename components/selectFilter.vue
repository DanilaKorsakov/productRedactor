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
    .select-filter{

        font-size: 0.75em;
        line-height: 1.25em;
        color: #B4B4B4;
        position: relative;
        cursor: pointer;
        width: 15em;
        z-index: 2;

        &__header{
            display: flex;
            height: 3em;
            background-color: #FFFEFB;
            box-shadow: 0px 0.17em 0.42em rgba(0, 0, 0, 0.1);
            text-align: center;
            align-items: center;
            padding: 0 1.3em;
            justify-content: center;
        }

        &__body{
            position: absolute;
            background-color: #FFFEFB;
            box-shadow: 0px 0.17em 0.42em rgba(0, 0, 0, 0.1);
            border-top: none;
            width: inherit;
            box-sizing: border-box;
            display: none;
        }

        &__item{
            transition: 0.2s ease-in-out;
            padding: 0 0 0 1.3em;
        }

        &__item:hover{
            opacity: 0.7;
        }

        &__icon{
            margin-left: 0.42em;
        }

        .active{
            display: block;
        }
    }
</style>