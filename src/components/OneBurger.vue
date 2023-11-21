<template>

<div class="ingredienser">   
    <h1>{{ burger.name }}</h1>
    <img :src="burger.img" :alt="burger.alt" :title="burger.title" style="width: 200px;">
    <ul>
      <li v-for="ingredient in burger.ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>
 

  <div>
        Kalorier: {{ burger.kCal }}
      </div>

      <div class="laktos" v-if="burger.lactose"> 
        Innehåller laktos
      </div>

      <div class="gluten" v-if="burger.gluten"> 
        Innehåller gluten
      </div>

   
  </div> 
  </template>
  
  <script>
  export default {
    name: 'OneBurger',
    props: {
      burger: Object
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .ingredienser {
  margin: 5px;
  padding: 10px;
}

.burger-image {
  border: 2px solid #f9efef;
  width: 200px;
}

.gluten, .laktos  {
  color: #ff2200;
  text-transform: uppercase;
}
  
  </style>
  