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
    <div class="content">
      <h2>Add Restaurant</h2>
      <q-input v-model="text" stack-label="Restaurant Name" />
      <q-input v-model="text" stack-label="Cusine" />
      <q-input v-model="area" type="textarea" stack-label="Short Description" :max-height="50" rows="2"/>
      <q-input v-model="area" type="textarea" stack-label="Address" :max-height="50" rows="2"/>
      <q-input v-model="text" stack-label="City" />
      <q-input v-model="text" stack-label="Post code" />
      <h5>Menu List</h5>
      <div class="menu-list" v-for="item in menu" :key="item.label">
        <q-input v-model="item.label" stack-label="Dish Name" />
        <q-input v-model="item.desc" type="textarea" stack-label="Dish Description" :max-height="50" rows="2"/> 
        <q-input v-model="item.cost" stack-label="Cost" />
        <q-btn icon="add_a_photo" round small />
        <q-btn icon="add_circle" round small @click="menu.push({})"/>
        <q-btn icon="remove_circle" round small @click="menu.pop()"/>
      </div>
    </div>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QRating,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QCollapsible,
  QInput
} from 'quasar'

export default {
  name: 'restaurant',
  components: {
    QLayout,
    QToolbar,
    QRating,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QInput,
    QCollapsible
  },
  data () {
    return {
      menu: [
        {
          label: 'Biriyani',
          cost: 12,
          desc: 'Succulent lamb cooked in spices and basmati rice'
        }
      ]
    }
  }
}
</script>
<style scoped>
.logo {
  width: 50px;
  height: 50px;
}
.content {
  padding: 10px;
}
h5 {
  margin: 20px 0px;
}
.menu-list {
  margin-top: 10px;
  margin-left: 20px;
}
</style>