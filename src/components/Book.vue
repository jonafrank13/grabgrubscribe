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
        </googlemaps-map>
        <!-- Places list -->
        <googlemaps-nearby-places class="results-pane" ref="results" :request="nearbyRequest" :filter="result => !result.types.includes('hotel')">
          <template scope="props">
            <q-list inset-separator class="q-mt-md">
              <q-list-header>Restaurants Nearby</q-list-header>
              <q-item v-for="result of props.results" :key="result.id">
                <q-item-side v-if="result.photos" :avatar="result.photos[0].getUrl({ maxWidth: 80, maxHeight: 80 })" />
                <q-item-side v-else avatar="~assets/place.png" />
                <q-item-main>
                  <q-item-tile label lines="1"> {{ result.name }} </q-item-tile>
                  <q-item-tile label lines="2"> {{ result.vicinity }} </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </template>
        </googlemaps-nearby-places>
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
        lat: 51.5074,
        lng: 0.1278
      },
      searchBounds: null,
      userPosition: null
    }
  },
  computed: {
    nearbyRequest () {
      if (this.searchBounds) {
        return {
          bounds: this.searchBounds
        }
      }
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
      this.$refs.results.$el.scrollTop = 0
    },
    setUserPosition (position) {
      this.userPosition = position
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
