<template>
  <div class="brands-area">
    <div class="zigzag-bottom"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="brand-wrapper">
            <div class="brand-list">
              <span v-for = "cat in categories" :key="cat.name">
               <img  :src="require('../../assets/img/'+cat.name+'.png')" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      categories: [Array]
    }
  };
</script>