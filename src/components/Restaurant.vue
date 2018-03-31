<template>
  <q-layout ref="layout">
    <q-toolbar color="primary" slot="header">
      <q-btn flat>
        <router-link :to="'/'">
          <img class="logo" src="~assets/logo.jpeg">
        </router-link>
      </q-btn>
      <q-toolbar-title>
        Eat As You Go
      </q-toolbar-title>
      <q-btn flat>
        <router-link :to="'book'">
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
    <div v-if="restaurant">
        <div class="banner">
            <div class="left-side">
                <img :src="restaurant.image" >
            </div>
            <div class="right-side">
                <q-btn fab round color="primary" icon="place" class="absolute" style="bottom: -10px; right: 8px; transform: translateY(-50%);" />
                <div class="ellipsis">{{restaurant.name}}</div>
                <q-rating slot="subtitle" v-model="restaurant.stars" :max="5" />
            </div>
        </div>
        <q-list>
          <q-collapsible v-for="dish in restaurant.menu" :opened="true" icon="local_dining" :label="dish.label" :sublabel="dish.cost">
            <div style="padding: 10px 0px;">{{dish.desc}}</div>
            <q-btn color="secondary" :outline="true" @click="$router.push('/payment')" icon-right="shopping_cart">Order</q-btn>
          </q-collapsible>
        </q-list>
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
  QCollapsible
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
    QCollapsible
  },
  data () {
    return {
      restaurant: {}
    }
  },
  beforeMount: function () {
    if (!this.$route.params.restaurant) {
      this.$router.push({path: '/'})
    }
    this.restaurant = this.$route.params.restaurant
  }
}
</script>
<style scoped>
.logo {
  width: 50px;
  height: 50px;
}
.banner {
  width: 100%;
  display: flex;
  flex-flow: row;
  padding: 10px;
  background: #011427;
  position: relative;
}
.right-side {
  padding: 10px;
}
.ellipsis {
  color: white;
}
.left-side {
  max-height: 200px;
  max-width: 350px;
  overflow: hidden;
}
@media (max-width: 600px) {
  .left-side {
    width: 50%;
  }
}
</style>