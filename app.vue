<template>
  <div class="container">

    <header class="header">
      <div class="header__logo">Добавление товара</div>
      <UiSelectFilter/>
    </header>

    <main class="main-content">
      <UiProductAddForm
        @createProduct="createProduct"
      />
      <div class="main-content__products">
        <UiProductCard v-for="(product,index) in cards" :card="product" @product:delete="deleteProduct(index)" v-if="cards.length!==0" />
        <div v-else class="main-content__no-products">Добавьте товар</div>
      </div>
    </main>
  </div>
</template>

<script>

  import UiProductCard from "./components/UiProductCard";
  import {onMounted} from ".nuxt/imports";
  export default {
    components: {UiProductCard},
    setup(){

      const cards = ref([]);

      const createProduct = (product) =>{
         cards.value.push(product);
         localStorage.setItem("cards",JSON.stringify(cards.value));
      }

      const deleteProduct = (productIndex)=>{
        cards.value.splice(productIndex,1);
        localStorage.setItem("cards",JSON.stringify(cards.value));
      }

      onMounted(()=>{
        cards.value=JSON.parse(localStorage.getItem("cards")) || []
      });

      return{
        cards,
        createProduct,
        deleteProduct
      }
    }

  }

</script>

<style lang="scss">

  @import "assets/styles/index";
  @import "assets/mixins/index";

  body{
    font-family: 'Source Sans Pro', sans-serif;
    color: #3F3F3F;
  }
  @media only screen and (min-width: 320px) {
    .container{
      margin: 0 rem(10);
    }

    .header{

      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: rem(32)  0 rem(16) 0;


      &__logo{
        font-weight: 600;
        font-size: rem(15);
        line-height: rem(22);
      }

    }

    .main-content{

      &__no-products{
        font-weight: 600;
        font-size: rem(15);
        line-height: rem(22);
        opacity: 0.8;
      }

      &__products{
        margin-top: rem(10);

         .product-card:not(:last-child){
          margin-bottom: rem(16);
        }
      }
    }

  }

  @media only screen and (min-width: 600px) {

    .container{
      margin: 0 rem(25);
    }

    .header{
      &__logo{
        font-size: rem(20);
        line-height: rem(30);
      }
    }

    .main-content {

      display: flex;

      &__products{
        display: grid;
        grid-template-columns: repeat(2,rem(200));
        gap: rem(16);
        margin-top: 0;

        .product-card:not(:last-child){
          margin-bottom: 0;
        }

      }

      &__no-products{
        font-size: rem(20);
        line-height: rem(30);
      }

    }

  }

  @media only screen and (min-width: 1024px) {

    .container{
      margin: 0 rem(32);
    }

    .header{
      &__logo{
        font-size: rem(28);
        line-height: rem(35);
      }
    }

    .main-content {

      &__products{
        grid-template-columns: repeat(4,rem(332));
      }

      &__no-products{
        font-size: rem(28);
        line-height: rem(35);
      }

    }

  }

</style>
