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
    <div class="content">
      <div class="timing">
        <q-btn outline="true" rounded="true" @click="chooseTiming('all')">All</q-btn>
        <q-btn outline="true" rounded="true" @click="chooseTiming('morn')">Morning</q-btn>
        <q-btn outline="true" rounded="true" @click="chooseTiming('lunch')">Lunch</q-btn>
        <q-btn outline="true" rounded="true" @click="chooseTiming('postl')">Post Lunch</q-btn>
      </div>
      <div class="roww header">
          <div class="coll" v-for="col in columns" :key="col.label">{{col.label}}</div>
      </div>
      <div class="roww" v-for="item in menu" :key="item.label">
          <div class="coll">{{item.label}}</div>
          <div class="coll" v-for="n in 7">
            <q-radio v-if="time =='all' || time == 'morn'" v-model="mornOpt[n-1]" :val="item.label" label="Morning" />
            <q-radio v-if="time =='all' || time == 'lunch'" v-model="lunchOpt[n-1]" :val="item.label" color="red" label="Lunch" />
            <q-radio v-if="time =='all' || time == 'postl'" v-model="postOpt[n-1]" :val="item.label" color="light-blue" label="Post Lunch" />
          </div>
      </div>
      <div class="roww discount" v-for="item in discounts" :key="item.label">
          <div class="coll">{{item.label}}</div>
          <div class="coll" v-for="n in 7">
            <q-radio v-if="time =='all' || time == 'morn'" v-model="mornOpt[n-1]" :val="item.label" label="Morning" />
            <q-radio v-if="time =='all' || time == 'lunch'" v-model="lunchOpt[n-1]" :val="item.label" color="red" label="Lunch" />
            <q-radio v-if="time =='all' || time == 'postl'" v-model="postOpt[n-1]" :val="item.label" color="light-blue" label="Post Lunch" />
          </div>
      </div>
    </div>
    </div>
  </q-layout>
</template>
<script>
import { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QRadio } from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QRadio
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
      mornOpt: ['Hawaiian', '', '', '', '', '', ''],
      lunchOpt: ['Flat 15%', '', '', '', '', '', ''],
      postOpt: ['Flat 20%', '', '', '', '', '', '']
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
