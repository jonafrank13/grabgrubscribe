<template>
  <q-layout ref="layout">
    <q-toolbar color="primary" slot="header">
      <q-btn flat>
        <router-link :to="'landing'">
          <img class="logo" src="~assets/logo.png">
        </router-link>
      </q-btn>
      <q-toolbar-title>
        Eat As You Go
      </q-toolbar-title>
      <q-btn flat>
        <router-link :to="'plan'">
          <q-icon name="help" />
        </router-link>
      </q-btn>
      <q-btn flat>
        <router-link :to="'book'">
          <q-icon name="search" />
        </router-link>
      </q-btn>
      <q-btn flat>
        <router-link :to="'login'">
          <q-icon name="person_pin" />
        </router-link>
      </q-btn>
      <q-btn flat>
        <router-link :to="'login'">
          <q-icon name="add_shopping_cart" />
        </router-link>
      </q-btn>
    </q-toolbar>
    <div class="wrapper">
    
    </div>
  </q-layout>
</template>
<script>
import { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QCheckbox } from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QCheckbox
  },
  data () {
    return {
      menu: [
        {
          label: 'Margherita',
          cost: '7.95£',
          desc: 'Cheese and Tomato Sauce'
        },
        {
          label: 'Ham and Mushroom',
          cost: '8.95£',
          desc: 'Ham and Mushroom'
        },
        {
          label: 'Hawaiian',
          cost: '8.95£',
          desc: 'Ham and pineapple'
        },
        {
          label: 'American Hot',
          cost: '9.50£',
          desc: 'Onions, Green Peppers, Chilli And Pepperoni'
        }
      ],
      columns: [
        { label: '' },
        { label: 'Monday' },
        { label: 'Tuesday' },
        { label: 'Wednesday' },
        { label: 'Thursday' },
        { label: 'Friday' },
        { label: 'Saturday' },
        { label: 'Sunday' }
      ],
      discounts: [
        {
          label: 'Flat 15%',
          value: '15'
        },
        {
          label: 'Flat 20%',
          value: '20'
        }
      ],
      time: 'all',
      mornOpt: [[], [], [], [], [], [], []],
      lunchOpt: [[], [], [], [], [], [], []],
      postOpt: [[], [], [], [], [], [], []]
    }
  },
  methods: {
    test () {
      console.log('clicked')
      console.log(this.mornOpt, this.lunchOpt, this.postOpt)
    },
    chooseTiming (time) {
      this.time = time
    }
  }
}
</script>
<style scoped>
.logo {
  width: 50px;
  height: 50px;
}
.wrapper {
    width: 100vw;
    overflow-x: scroll;
    position: relative;
}
.content {
  overflow: visible;
}
.timing {
  display: flex;
  flex-flow: row;
  justify-content: center;
  max-width: 100vw;
}
.roww, .coll {
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
}
.roww {
    flex-flow: row;
    border-bottom: 1px solid #dfdfdf;
}
.roww:hover {
  background-color: #dfdfdf;
}
.coll {
    flex-flow: column;
    width: 150px;
    white-space: normal;
    padding: 20px;
}
.coll:first-child {
    margin-left: 0px;
}
.header.roww {
  background-color: #ff6f00 !important;
}
.header .coll:not(:first-child) {
  padding-left: 50px;
  font-weight: bold;
  color: white;
}
.discount {
  background-color: #ff9800;
}
.discount .coll {
  color: white;
}
.discount:hover {
  background-color: #ffc107;
}
.roww .coll:first-child {
  background-color: #ff6f00;
  color: white;
  text-align: center;
}
@media (max-width: 600px) {
  .content {
    width: 500%;
  }
}
</style>
