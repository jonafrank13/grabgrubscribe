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

    <div>
      <q-carousel autoplay arrows dots>
        <div slot="slide" class="food food-1">
          Enjoy 
        </div>
        <div slot="slide" class="food food-2">
          Delicious Food
        </div>
        <div slot="slide" class="food food-3">
          Everyday
        </div>
      </q-carousel>
      <q-card v-for="restaurant in restaurants" :key="restaurant.name" @click="openRestaurant(restaurant)" inline class="bigger q-ma-sm">
        <q-card-media>
          <img :src="restaurant.image" >
        </q-card-media>
        <q-card-title class="relative-position">
          <q-btn fab round color="primary" icon="place" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />
          <div class="ellipsis">{{restaurant.name}}</div>
          <q-rating slot="subtitle" v-model="restaurant.stars" :max="5" />
        </q-card-title>
        <q-card-main>
          <p>{{restaurant.type}}</p>
          <p class="text-faded">{{restaurant['short-text']}}</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat>Lunch-12:30PM</q-btn>
          <q-btn flat>Dinner-7:30PM</q-btn>
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
      stars: 3,
      restaurants: [{
        'name': 'Sunny\'s olive Tree',
        'stars': 4,
        'type': 'Salads',
        'image': 'statics/food44.jpeg',
        'short-text': 'Small plates and yummy salads in an intimate setting.',
        'menu': [
          {
            'label': 'Salad Box',
            'cost': '4£',
            'desc': 'Salad box comes with half a slice of bread (Lettuce, mix cabbage, red pepper, potato salad, hummas, sundried tomatoes, 1Dolmades, couscous, mix beans, greek salad)'
          },
          {
            'label': 'Greek Salad',
            'cost': '3£',
            'desc': 'Lettuce, mix cabbage, red pepper, sundried tomatoes'
          },
          {
            'label': 'Coriander Salad',
            'cost': '3£',
            'desc': 'Tomato and Red Onion'
          }
        ]
      },
      {
        'name': 'Barbican Express',
        'stars': 4.5,
        'type': 'Pizzas',
        'image': 'statics/food1.jpg',
        'short-text': 'Best Pizzas in London',
        'menu': [
          {
            'label': 'Margherita',
            'cost': '7.95£',
            'desc': 'Cheese and Tomato Sauce'
          },
          {
            'label': 'Ham and Mushroom',
            'cost': '8.95£',
            'desc': 'Ham and Mushroom'
          },
          {
            'label': 'Hawaiian',
            'cost': '8.95£',
            'desc': 'Ham and pineapple'
          },
          {
            'label': 'American Hot',
            'cost': '9.50£',
            'desc': 'Onions, Green Peppers, Chilli And Pepperoni'
          },
          {
            'label': 'Meat Feast',
            'cost': '9.50£',
            'desc': 'Ham, Beef, Pepperoni And Bacon'
          },
          {
            'label': 'Four Season',
            'cost': '9.50£',
            'desc': 'Onions, Green Pepper, Mushrooms, Pepperoni And Spicy Beef'
          },
          {
            'label': 'Pepperoni Lover',
            'cost': '9.50£',
            'desc': 'Double Cheese And Double Pepperoni'
          },
          {
            'label': 'Bbq Chicken',
            'cost': '9.50£',
            'desc': 'Bbq Sauce, Onions, Chicken And Green Peppers'
          },
          {
            'label': 'Vegetarian',
            'cost': '9.50£',
            'desc': 'Onions, Green Peppers, Sweetcorn And Mushrooms'
          },
          {
            'label': 'Vegie Sorrento',
            'cost': '9.50£',
            'desc': 'Baby Spinach, Cherry Tomato, Black Olives, Fetta Cheese'
          }
        ]
      },
      {
        'name': 'Eat Fan',
        'stars': 4,
        'type': 'Asian Cuisine',
        'image': 'statics/food22.jpg',
        'short-text': 'Authentic asian food',
        'menu': [
          {
            'label': 'Box 1',
            'cost': '7£',
            'desc': 'Sautéed shredded pork, mu-er and bamboo shoots in spicy and sweet & sour sauce, dry-fried green beans. Served with Rice'
          },
          {
            'label': 'Box 2',
            'cost': '7£',
            'desc': 'Korean Beef Bibimbap'
          },
          {
            'label': 'Box 3',
            'cost': '7£',
            'desc': 'Authentic Taiwanese Braised Pork with Pak Choi and Marinated Egg, Served with Jasmine Rice'
          },
          {
            'label': 'Box 4',
            'cost': '7£',
            'desc': 'Braised Pork with Marinated Egg, beancurd, Fried Pak Choi in light Oyster sauce, Served with Rice'
          },
          {
            'label': 'Box 5',
            'cost': '7£',
            'desc': 'Hong Kong style Boiled Corn-fed Chicken,  Ginger and Spring Onion sauce, Thai Shallot Spicy Sauce, Garlic Infused brocolli'
          },
          {
            'label': 'Box 6',
            'cost': '7£',
            'desc': 'Stir-fried green beans with minced pork & olive, Chinese classic stir-fried tomato & eggs with rice'
          }
        ]
      },
      {
        'name': 'Lime Road',
        'stars': 2.5,
        'type': 'Chips & Fish',
        'image': 'statics/food88.jpeg',
        'short-text': 'Home made food in a cozy setting'
      },
      {
        'name': 'Yellow Pepper',
        'stars': 5,
        'type': 'Ethiopian',
        'image': 'statics/food66.jpeg',
        'short-text': 'Authentic ethiopian cuisine'
      }
      ]
    }
  },
  methods: {
    openRestaurant: function (restaurant) {
      this.$router.push({
        name: 'restaurant',
        params: {
          restaurant: restaurant
        }
      })
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
  font-size: 7em;
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
  min-height: 215px;
}
.q-card-media > img {
  height: 230px; 
}
.q-card-container {
  min-height: 120px;
}
@media (max-width: 600px) {
  .q-toolbar-title {
    font-size: 1em;
  }
  .food {
    font-size: 3em;
  }
  .q-card {
    width: calc(100% - 20px);
  }
}
@media (device-width: 768px) {
  .q-card {
    width: calc(50% - 20px);
  }
}
</style>
