<template>
  <div class="container">

    <header class="header">
      <div class="header__logo">Добавление товара</div>
      <selectFilter/>
    </header>

    <main class="main-content">
      <productAddForm
        @createProduct="createProduct"
      />
      <div class="main-content__products">
        <productCard v-for="(product,index) in cards" :card="product" />
      </div>
    </main>
  </div>
</template>

<script>

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

      const createProduct = (product) =>{
         cards.value.push(product);
      }

      return{
        cards,
        createProduct
      }
    }

  }

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

  html{
    font-size: 16px;
  }

  body{
    font-family: 'Source Sans Pro', sans-serif;
    color: #3F3F3F;
  }

  .container{
    margin: 0 2em;
  }

  .header{

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2em  0 1em 0;


    &__logo{
      font-weight: 600;
      font-size: 1.75em;
      line-height: 2.1875em;
    }

  }

  .main-content{
    display: flex;

    &__products{
      display: flex;
      flex-wrap: wrap;
      margin: -1em 0 0 -1em;
    }

  }
  
  @media (max-width: 1444px) {
      html{
        font-size: 14px;
      }
  }

  @media (max-width: 1250px) {
    html{
      font-size: 12px;
    }
  }

  @media (max-width: 1060px) {
    .header{
      font-size: 1.2em;
    }
    .main-content{
      display: flex;
      justify-content: center;
      font-size: 1.2em;

      &__products{
          width: 65%;
      }

    }
  }

  @media (max-width: 1006px){
    .header{
      font-size: 1em;
    }
    .main-content{
      font-size: 1em;
    }

  }


  @media (max-width: 845px){
    .header{
      justify-content: space-around;
      font-size: 1.2em;
    }
    .main-content {
      display: flex;
      justify-content: center;
      font-size: 1.2em;

      &__products {
        flex-direction: column;
        width: 40%;
      }

    }
  }

  @media (max-width: 680px){
    .header{
      font-size: 1em;
    }
    .main-content{
      font-size: 1em;
    }
  }

  @media (max-width: 590px){
    .main-content{
      display: block;

      &__products{
        display: block;
        width: 100%;
        margin: 0;

      }
    }
  }
</style>
