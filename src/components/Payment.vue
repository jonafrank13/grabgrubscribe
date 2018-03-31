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
     <q-stepper ref="stepper" color="secondary" v-model="step" vertical>
        <q-step default name="payment" icon="attach_money" title="Payment">
          <h4>Total: 7£</h4>
          <q-list highlight>
            <q-list-header>Payment Options</q-list-header>
            <q-item>
                <q-item-side>
                    <q-radio v-model="option" val="1" />
                </q-item-side>
                <q-item-side icon="assignment" inverted color="primary" />
                <q-item-main>
                    <q-item-tile label>Debit</q-item-tile>
                    <q-item-tile sublabel>Debit Card Payment</q-item-tile>
                </q-item-main>
            </q-item>
            <q-item>
                <q-item-side>
                    <q-radio v-model="option" val="2" />
                </q-item-side>
                <q-item-side icon="assignment" inverted color="primary" />
                <q-item-main>
                    <q-item-tile label>Credit</q-item-tile>
                    <q-item-tile sublabel>Credit Card Payment</q-item-tile>
                </q-item-main>
            </q-item>
            <q-item>
                <q-item-side>
                    <q-radio v-model="option" val="3" />
                </q-item-side>
                <q-item-side icon="assignment" inverted color="primary" />
                <q-item-main>
                    <q-item-tile label>Net Banking</q-item-tile>
                    <q-item-tile sublabel>Netbanking Payment</q-item-tile>
                </q-item-main>
            </q-item>
          </q-list>
          <q-stepper-navigation>
            <q-btn color="primary" @click="$refs.stepper.next()">Pay using this method</q-btn>
          </q-stepper-navigation>
        </q-step>

        <q-step name="ad_group"  title="Confirmation">
          <p>Awesome, Your order is now confirmed!</p>
          <p>Please show this code at the restaurant to collect the order</p>
          <h3>AX0145B2444</h3>
        </q-step>
      </q-stepper>
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
  QItem,
  QItemTile,
  QItemSide,
  QItemMain,
  QStepper,
  QStepperNavigation,
  QStep,
  QRadio
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
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QStepper,
    QStepperNavigation,
    QStep,
    QRadio
  },
  data () {
    return {
      amount: 7,
      step: '',
      option: 1
    }
  },
  methods: {
    pay: function () {
      console.log('paid')
    }
  }
}
</script>
<style scoped>
.logo {
  width: 50px;
  height: 50px;
}
</style>
