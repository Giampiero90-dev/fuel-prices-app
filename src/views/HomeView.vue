<template>
  <main>
    <div>
      <h2>Tank stations and fuel prices</h2>
      <router-link to="/">+ Add a new tank station</router-link>
      <ul>
        <li v-for="(tankStation, index) in useTankStationStore.tankStations" :key="index">
          <h3>Name: {{ tankStation.name }}</h3>
          <div>
            <ul>
              <li>Euro95: €{{ tankStation.fuelPrices.euro95 }}</li>
              <li>Diesel: €{{ tankStation.fuelPrices.diesel }}</li>
              <li>Gas: €{{ tankStation.fuelPrices.gas }}</li>
            </ul>
          </div>
          <div>Address: {{ tankStation.address }}</div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { useTankStationStore } from '../stores/tankStationStore';

export default {
  data() {
    return {
      useTankStationStore: useTankStationStore(),
    }
  }
}

</script>
