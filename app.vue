<template>
  <div>
    <productCard v-for="product in cards" :card="product" />
  </div>
</template>

<script>

  import {ref} from ".nuxt/imports";

  export default {

    setup(){

      const cards = ref([
        {
          src:'https://kickgoods.ru/upload/iblock/4eb/1031708_mrp_in_l332.jpg',
          name:'Наименование товара',
          description:'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price:10000,
        },
      ]);


      return{
        cards,
      }
    }

  }

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

  body{
    font-family: 'Source Sans Pro', sans-serif;
    color: #3F3F3F;
  }


</style>
