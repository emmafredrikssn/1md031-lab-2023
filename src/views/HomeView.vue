<template>

<div>
<section class = "rubrik">
    <header>
        <h1 class="välkommen"> Välkommen till BURGIR! </h1>
        <img id= "anslagsbild" src="https://img.freepik.com/premium-photo/pattern-with-burgers-star-that-says-burgers_916191-7615.jpg?size=626&ext=jpg&ga=GA1.1.2113086557.1700244862&semt=ais">
    </header>
    </section>

    <main>
        <section class="hamburgare" id="väljhamburgare">
            
                <h1> Välj din burgir! </h1>
                Här väljer du din hamburgare:

                <div class = "wrapper">
                  <Burger v-for="burger in burgers"
                   v-bind:burger="burger" 
                   v-bind:key="burger.name"
                   v-on:orderedBurger="addToOrder($event)"/>
                
                <!-- <div class="ingredienser">
                    <h1> Veggie Bliss </h1>
                    <img src="https://images-bonnier.imgix.net/files/ifo/production/20220412084608/Kødfri-burger-1.jpg?auto=compress,format&w=1024%201024w"
                        alt="Span" title="Hamburgare 1" style="width:200px;">
                    <ul>
                        <li>Bönbaserad</li>
                        <li>Ost och grönsaker</li>
                        <li>Picklad rödlök</li>
                    </ul>

                </div>
            
            
                <div class="ingredienser">
                    <h1> Meaty Marvel </h1>
                    <img src="https://www.mathiaszachau.com/wp-content/uploads/2016/05/saftiga-hamburgare-e1463035643226.jpg"
                        alt="Span" title="Hamburgare 2" style="width:200px;">
                    <ul>
                        <li>Kött och bacon</li>
                        <li>Isbergssallad och tomat</li>
                        <li>BBQ</li>
                    </ul>
                </div>
          

            
                <div class="ingredienser">

                <h1> Chicken Charm </h1>
                <img src="https://marleyspoon.com/media/recipes/80625/main_photos/large/bbq_hahnchenburger_mit_schnittlauchcreme-900bb4cacf5b69472d32eb98b90f6da9.jpeg"
                    alt="Span" title="Hamburgare 3" style="width:200px;">
                <ul>
                    <li>Kyckling</li>
                    <li>Grillad majs</li>
                    <li>Vitlökssås</li>
                </ul>
            </div> -->
              </div>
        </section> 


        <section class = "kundinformation">
            <h1> Kund information </h1>
            Här tillhandhåller du nödvändig information:

            <p>
                <label for="full name">Fullständigt namn</label><br>
                <input type="text" id="full name" v-model="fn" required="required" placeholder="För - och efternamn">
            </p>
            <p>
                <label for="email">E - mail</label><br>
                <input type="text" id="email" v-model="em" placeholder="E - mailadress">
            </p>
       <!--  <p>
                <label for="street">Gata</label><br>
                <input type="text" id="street" v-model="st" placeholder="Gatuadress">
            </p>
            <p>
                <label for="house">Hus</label><br>
                <input type="number" id="street" v-model="hn" placeholder="Husnummer">
            </p> -->

            <p>
                <label for="payment">Betalningsalternativ</label><br>
                <select id="payment" v-model="pay">
                    <option>Kortbetalning</option>
                    <option>Swish</option>
                    <option>Klarna</option>
                    <option>Bitcoin</option>
                </select>
            </p>

            <p>
                <label for="gender">Kön </label><br>
                <input type="radio" id="male" v-model="gender" value="Man"> 
                <label for="Man">Man</label><br>
            </p>

            <p>
                <input type="radio" id="female" v-model="gender" value="Kvinna">
                <label for="Kvinna">Kvinna</label><br>
            </p>

            <p>
                <input type="radio" id="non-binary" v-model="gender" value="Icke binär">
                <label for="Icke binär">Icke - binär</label><br>
            </p>

            <p>
                <input type="radio" id="ej-ange" v-model="gender" value="Vill ej ange" checked>
                <label for="ej-ange">Vill ej ange</label><br>
            </p>

        </section>


        <button class = "skicka" v-on:click = "handleOrder" >
            Skicka beställning<br>
            <img src="https://cdn.pixabay.com/photo/2016/05/30/14/10/delivery-guy-1424808_1280.png"
                style="width:90px; height:60px;">
            
        </button>

    </main>

    <hr>
    <footer>
        &copy;
        End notes
    </footer>


    <div id="mapcontainer">

    <div id="map" v-on:click="setLocation">  <!--Klicka för leveransadress-->
      Välj din leveransadress:
      <div id="dots">
        <div v-bind:style="{ position: 'absolute', left: location.x + 'px', top: location.y + 'px' }">
            T
    </div>
  </div>
</div>
</div>
</div>

</template>


<script>
import Burger from '../components/OneBurger.vue'
import io from 'socket.io-client'
import menu from '../assets/menu.json' 

const socket = io();

//function MenuItem(nm , kc, url, gl, lac){
//this.name = nm;
// this.kcal = kc;
// this.gluten = gl;
//this.lactose = lac;
// this.URL = url;
// }

 //let allBurgers = [
 //new MenuItem('Veggie Bliss', 500, 'https://images-bonnier.imgix.net/files/ifo/production/20220412084608/Kødfri-burger-1.jpg?auto=compress,format&w=1024%201024w', false, true),
 // new MenuItem('Meaty Marvel', 800, 'https://www.mathiaszachau.com/wp-content/uploads/2016/05/saftiga-hamburgare-e1463035643226.jpg', true, true),
 // new MenuItem('Chicken Charm', 600, 'https://marleyspoon.com/media/recipes/80625/main_photos/large/bbq_hahnchenburger_mit_schnittlauchcreme-900bb4cacf5b69472d32eb98b90f6da9.jpeg', true, false),
//];
//console.log(allBurgers)


export default {
  name: 'HomeView', 
  components: {
    Burger,
  },

  data: function () {
    return {
      burgers: menu,
      fn: '',
      em:'',
      st:'',
      hn: '',
      pay: 'Kortbetalning',
      gender: '',
      orderedBurgers: {},
      location: {x:0, y:0},        
  }
  },


  methods: {
    handleOrder: function () {
    socket.emit("addOrder", { orderId: this.getOrderNumber(),  // Ser till att endast denna rätta adressen skickas vid knapptryck av "skicka beställning"
            details: { x: this.location.x,
                       y: this.location.y },
                       orderItems: this.orderedBurgers,
                       customerInformation: {  // Personlig information
                       name: this.fn,
                       email: this.em,
                       payment: this.pay,
                       Gender: this.gender,
    }
  });
},
                   





    addToOrder: function (event) {
  this.orderedBurgers[event.name] = event.amount;
},

    getOrderNumber: function () {
      return Math.floor(Math.random()*100000);
    },

    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      //socket.emit("addOrder", { orderId: this.getOrderNumber(),
       //                         details: { x: event.clientX - 10 - offset.x,
        //                                   y: event.clientY - 10 - offset.y },
          //                      orderItems: ["Beans", "Curry"]
                                       

    this.location.x = event.clientX -10 - offset.x;  //Förflyttar dot vid klick
    this.location.y = event.clientY - 25 - offset.y;
    },

    setLocation: function (event) {
      this.location.x = event.clientX - 15 - event.currentTarget.getBoundingClientRect().left;
      this.location.y = event.clientY - 15 -event.currentTarget.getBoundingClientRect().top;
      console.log("leveransadress")
    },
}
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

body {
    font-family: 'Playfair Display', serif;
}

.hamburgare {
    margin: 20px;
    border: 2px dashed #56bfdf
} 

.ingredienser > ul > li:first-child {
    color: #ff2200;
    text-transform: uppercase;
}

.ingredienser img {
    border: 2px solid #f9efef;   
}

#väljhamburgare {
    background-color: black;
    color: whitesmoke;
    padding: 20px;
   
}

button:hover { /* Blir blå när musen rör knappen, deliverykillen tutar iväg på mopeden! */
    background-color: rgb(135, 213, 240);
    cursor: pointer; /* Lägg till en markör */
}

.skicka {
    margin: 20px; /* Space runt beställningsknappen */
}


.kundinformation {  /* Rutan med kundinformation */
    padding: 30px;
    margin: 20px;
    border: 2px dashed #56bfdf
}

.rubrik { /* Både anslagsbilden och välkommen */
    margin: 20px; 
    overflow: hidden;
    width: 96vw; 
    height: 40vh; 
    position: relative; 
    margin-left: auto;
    margin-right: auto;
}

.välkommen { /* Placerar "Välkommen till Burgir!" */
    position: absolute;
    top: 35%; /* Position vid vertikalt centrum */
    left: 50%; /* Position vid horizontallt centrum */
    transform: translate(-50%, -50%); /* Centrera texten */
    color: rgb(17, 17, 17);
    font-size: 3em;
    opacity: 1;
    z-index: 1; /* Sätt ett högre z-index för att se till att texten ligger över bilden */
}

#anslagsbild { /* Skapar hemsidans anslagsbild */
   opacity: 0.73; /* Väljer transparens mellan 0 och 1 */
   width: 100%; 
   object-fit: cover; /* Behåll sidoförhållandet och täck hela bredden */
}

.wrapper {
    display: grid;
    grid-gap: 5em;
    grid-template-columns: 14em 14em 14em;
    padding-left: 30px;
    padding-bottom: 45px;
}

  #map {
    background: url("../../public/img/polacks.jpg");
    background-size: cover;
    width: 1920px;
    height: 1078px;
    
  }

  #mapcontainer {
    overflow: scroll;
    width: 100%;
    height: 650px;
  }

</style>