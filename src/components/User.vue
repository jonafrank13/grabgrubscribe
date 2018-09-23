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
      <h2>User View</h2>
    </div>
  </q-layout>
</template>
<script>
import { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon, QInput, QDatetime, QDatetimeRange, QCheckbox } from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QInput,
    QDatetime,
    QDatetimeRange,
    QCheckbox
  },
  data () {
    return {
      range: {
        from: null,
        to: null
      }
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
  padding: 10px;
}
.newlineflex {
  display: flex;
  margin-top: 20px;
}
</style>
