<template>
  <q-layout ref="layout">
    <q-toolbar color="primary" slot="header">
      <q-btn flat>
        <router-link :to="'/'">
          <img class="logo" src="~assets/grab.png">
        </router-link>
      </q-btn>
      <q-toolbar-title>
        Grab GrubScribe
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
    <div>
        <div class="banner">
            <div class="left-side">
                <img :src="restaurant.image" >
            </div>
            <div class="right-side">
                <q-btn fab round color="primary" icon="place" class="absolute" style="top: 30px; right: 8px; transform: translateY(-50%);" />
                <div class="ellipsis">{{restaurant.name}}</div>
                <q-rating slot="subtitle" v-model="restaurant.stars" :max="5" />
            </div>
        </div>
        <q-field
            icon="cloud"
            label="Dish"
            helper="Pick the dish you want to order"
        >
        <q-option-group
          type="radio"
          v-model="dish"
          :options="[
            { label: 'Burger', value: 'burger', color: 'amber' },
            { label: 'Pasta', value: 'pasta', color: 'secondary' }
          ]"
        />
      </q-field>
    </div>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QCarousel,
  QCard,
  QCardTitle,
  QCardMedia,
  QRating,
  QCardMain,
  QCardActions,
  QCardSeparator,
  QField,
  QOptionGroup
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QCarousel,
    QCard,
    QCardTitle,
    QCardMedia,
    QRating,
    QCardMain,
    QCardActions,
    QCardSeparator,
    QField,
    QOptionGroup
  },
  data () {
    return {
      restaurant: {
        'name': 'Taste of India',
        'stars': 4,
        'type': 'Indian',
        'image': 'statics/food44.jpeg',
        'short-text': 'Spicy, mouth watering food from India'
      },
      dish: 'burger'
    }
  }
}
</script>
<style>
.logo {
  width: 50px;
  height: 50px;
}
.banner {
    width:100%;
    display: flex;
    flex-flow: row;
    padding: 10px;
    background: #011427;
}
.right-side {
    padding: 10px;
}
.ellipsis {
    color: white;
}
</style>