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

    <div class="nearby-places demo">
      <div>
        <h2 style="flex: 1;">Search Nearby Restaurants</h2>
        <q-btn fab round color="primary" icon="place" class="absolute" style="z-index: 9999; top: 25px; right: 5px;" :disabled="!userPosition" @click="centerOnUser"/>
      </div>
      <div class="panes">
        <!-- Map -->
        <googlemaps-map class="map" :center.sync="center" :zoom="12" @idle="onIdle">
          <!-- User Position -->
          <googlemaps-user-position @update:position="setUserPosition" />
          <googlemaps-marker title="Sunny's olive tree" :position="{ lat: 51.523993, lng: -0.092951 }" />
          <googlemaps-marker title="Barbican Express" :position="{ lat: 51.523046, lng: -0.092864 }" />
          <googlemaps-marker title="Eat fan" :position="{ lat: 51.505480, lng: -0.024091 }" />
        </googlemaps-map>
        <!-- Places list -->
        <q-list inset-separator class="q-mt-md results-pane">
          <q-list-header>Restaurants Nearby</q-list-header>
          <q-item v-for="restaurant of restaurants" :key="restaurant.name" @click="openRestaurant(restaurant)">
            <q-item-side v-if="restaurant.image" :avatar="restaurant.image" />
            <q-item-side v-else avatar="~assets/place.png" />
            <q-item-main>
              <q-item-tile label lines="1"> {{ restaurant.name }} </q-item-tile>
              <q-item-tile label lines="2"> {{ restaurant.type }} </q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </div>
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
  QList,
  QListHeader,
  QItemMain,
  QItem,
  QItemSide,
  QItemTile
} from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItemMain,
    QItem,
    QItemSide,
    QItemTile
  },
  data () {
    return {
      center: {
        lat: 51.52300,
        lng: -0.092800
      },
      searchBounds: null,
      userPosition: null,
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
      }
      ]
    }
  },
  methods: {
    centerOnUser () {
      if (this.userPosition) {
        this.center = this.userPosition
      }
    },
    onIdle (map) {
      this.searchBounds = map.getBounds()
    },
    setUserPosition (position) {
      this.userPosition = position
    },
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
<style lang="stylus" scoped>
.logo {
  width: 50px;
  height: 50px;
}
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.panes {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.map {
  flex: 1;
  height: calc(100vh - 64px);
}
.results-pane {
  overflow-x: auto;
  overflow-y: auto;
  width: 400px;
  height: calc(100vh - 64px);
  position: relative;
  .photo {
    background: #eee;
  }
}
@media (max-width: 600px) {
  .q-toolbar-title {
    font-size: 1em;
  }
  h2 {
    font-size:1em;
  }
  .panes {
    flex-direction: column;
  }
  .map {
    width: 100vw;
    flex-shrink: 0;
  }
}
</style>
