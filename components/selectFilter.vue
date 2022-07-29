<template>
    <div class="select-filter" @click="isActive=!isActive">
        <div class="select-filter__header">
            <span class="select-filter__current">{{selected}}</span>
            <div class="select-filter__icon">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
                </svg>
            </div>
        </div>
        <div class="select-filter__body" @click="changeHeader" :class="{active:isActive}">
            <div class="select-filter__item">От меньшего к большему</div>
            <div class="select-filter__item">От большего к меньшему</div>
            <div class="select-filter__item">По наименованию</div>
        </div>
    </div>
</template>

<script>

    export default {

        setup(){

            const selected=ref('По умолчанию');
            const isActive=ref(false);

            const changeHeader=(e)=>{
               selected.value=e.target.textContent;
            }

            return{
                selected,
                isActive,
                changeHeader
            }
        }

    }

</script>

<style scoped lang="scss">
    .select-filter{

        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
        position: relative;
        cursor: pointer;
        width: 180px;

        &__header{
            display: flex;
            height: 36px;
            background-color: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            text-align: center;
            align-items: center;
            padding: 0 16px;
            justify-content: center;
        }

        &__body{
            padding: 0 16px;
            position: absolute;
            background-color: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-top: none;
            border-radius: 4px;
            width: inherit;
            box-sizing: border-box;
            display: none;
        }

        &__item{
            transition: 0.2s ease-in-out;
        }

        &__item:hover{
            opacity: 0.7;
        }

        &__icon{
            margin-left: 5px;
        }

        .active{
            display: block;
        }
    }
</style>