<template>
   <div class="full">
       <div class="center">
           <div class="icon"></div>
           <q-input class="pincode" type="number" v-model="pincode" placeholder="Enter Postcode" inverted :after="[{icon: 'forward', handler () { $router.push('/landing') }}]" />
           <h2>1.Choose</h2>
           <h2>2.Buy</h2>
           <h2>3.Get Code</h2>
           <h2>4.Collect</h2>
       </div>
   </div>
</template>

<script>
import { QInput } from 'quasar'

export default {
  components: { QInput },
  data () {
    return {
      pincode: ''
    }
  }
}
</script>
<style scoped>
.full {
 width: 100vw;
 height: 100vh;
 background: url("../assets/background.jpg") no-repeat;
 background-size: cover;   
 display: flex;
 justify-content: center;
 align-items: center;
}
.icon {
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
    background: url("../assets/logo.png") no-repeat;
    background-size: contain;
    margin: auto;
}
h2 {
  font-family: 'Alfa Slab One', cursive;
  font-weight: bolder;
  color: blueviolet;
}
</style>