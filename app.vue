<template>
  <div class="container">

    <header class="header">
      <div class="header__logo">Добавление товара</div>
      <UiSelectFilter @changeSort="onChangeSort"/>
    </header>

    <main class="main-content">
      <UiProductAddForm
        @createProduct="createProduct"
      />
      <div class="main-content__products" v-if="cards.length > 0">
        <UiProductCard v-for="(product,index) in cards"
                       :key="index"
                       :card="product"
                       @product:delete="deleteProduct(index)"/>
      </div>
      <em v-else class="main-content__no-products">Список товаров пуст. Добавьте товар</em>
    </main>
  </div>
</template>

<script>

  export default {

    setup(){

      const cards = ref([]);

      const createProduct = (emitted) =>{
         cards.value.unshift(emitted.product);
      }

      const deleteProduct = (productIndex)=>{
        cards.value.splice(productIndex,1);
      }

      const onChangeSort = (type) => {
        switch (type) {
          case 'PRICE_ASC':
            cards.value.sort((a, b) => sortBy(a, b, 'priceForSort', 'asc'))
            break
          case 'PRICE_DESC':
            cards.value.sort((a, b) => sortBy(a, b, 'priceForSort', 'desc'))
            break
          case 'NAME_ASC':
            cards.value.sort((a, b) => sortBy(a, b, 'name', 'asc'))
            break
          default:
            console.warn(`Неизвестный тип сортировки: ${type}`)
        }
      }

      const sortBy = (a, b, field, direction) => {
        if (a[field] < b[field]) {
          return direction === 'asc' ? -1 : 1;
        }

        if (a[field] > b[field]) {
          return direction === 'asc' ? 1 : -1;
        }

        if (a[field] === b[field]) {
          return 0
        }
      }

      onMounted(()=>{
        cards.value = JSON.parse(localStorage.getItem("cards")) || []
      });

      watch(() => [...cards.value], () => {
        localStorage.setItem("cards", JSON.stringify(cards.value))
      })

      return{
        cards,
        createProduct,
        deleteProduct,
        onChangeSort
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
        opacity: 0.5;
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
        font-size: rem(20);
        line-height: rem(35);
        height: fit-content;
        width: 80%;
        text-align: center;
      }

    }

  }

</style>
