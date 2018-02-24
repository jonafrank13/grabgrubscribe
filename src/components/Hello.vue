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
        <router-link :to="'book'">
          <q-icon name="person_pin" />
        </router-link>
      </q-btn>
      <q-btn flat>
        <router-link :to="'book'">
          <q-icon name="add_shopping_cart" />
        </router-link>
      </q-btn>
    </q-toolbar>

    <div>
      <q-carousel autoplay arrows dots>
        <div slot="slide" class="food food-1">
          Enjoy 
        </div>
        <div slot="slide" class="food food-2">
          Delecious Food
        </div>
        <div slot="slide" class="food food-3">
          Everyday
        </div>
      </q-carousel>
      <q-card v-for="n in 10" inline class="bigger q-ma-sm">
        <q-card-media>
          <img src="~assets/food11.jpg">
        </q-card-media>
        <q-card-title class="relative-position">
          <q-btn fab round color="primary" icon="place" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />
          <div class="ellipsis">Cafe Basilico Cafe Basilico Cafe Basilico Cafe Basilico Cafe Basilico Cafe Basilico Cafe Basilico</div>
          <q-rating slot="subtitle" v-model="stars" :max="5" />
        </q-card-title>
        <q-card-main>
          <p>$・Italian, Cafe</p>
          <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat>5:30PM</q-btn>
          <q-btn flat>7:30PM</q-btn>
          <q-btn flat>9:00PM</q-btn>
          <q-btn flat color="primary">Reserve</q-btn>
        </q-card-actions>
      </q-card>
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
  QCardSeparator
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
    QCardSeparator
  },
  data () {
    return {
      stars: 3
    }
  }
}
</script>

<style>
.logo {
  width: 50px;
  height: 50px;
}
.food {
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  color: white;
  font-size: 10em;
  text-align: center;
}
.food-1 {
  background-image: url("../assets/food1.jpg");
}
.food-2 {
  background-image: url("../assets/food2.jpg");
}
.food-3 {
  background-image: url("../assets/food3.jpg");
}
.q-carousel {
  margin: 8px;
}
.restaurants {
  width: 100vw;
  display: flex;
  justify-content: space-between;
}
.q-card {
  width: calc(25% - 20px);
}
@media (max-width: 600px) {
  .q-toolbar-title {
    font-size: 1em;
  }
  .food {
    font-size: 5em;
  }
  .q-card {
    width: calc(100% - 20px);
  }
}
</style>
