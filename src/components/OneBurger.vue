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

      Välj antal:  
      <button v-on:click="Increase(key)"> + </button>
      {{ amountOrdered }}
      <button v-on:click="Decrease(key)"> - </button>
   
  </div> 
  </template>
  
  <script>
  export default {
    name: 'OneBurger',
    props: {
      burger: Object
    },

    data: function () {
    return {
      amountOrdered: 0,
    }
  },

  methods: {  //Lägg till och ta bort antal hamburgare//
    Increase: function () {
      this.amountOrdered += 1;
    },

    Decrease: function () {
      if (this.amountOrdered != 0) {
        this.amountOrdered -= 1
      }
    }
  }
  };



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
  