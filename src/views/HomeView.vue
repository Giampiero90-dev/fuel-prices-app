<template>
  <main>
    <div>
      <h2>Tank stations and fuel prices</h2>
      <router-link to="/create">+ Add a new tank station</router-link>
      <ul>
        <li v-for="(tankStation, index) in useTankStationStore.tankStations" :key="index">
          <h3>Name: {{ tankStation.name }}</h3>
          <div>
            <h3>Fuel Prices:</h3>
            <ul>
              <li>Euro95: €{{ tankStation.fuelPrices.euro95 }}</li>
              <li>Diesel: €{{ tankStation.fuelPrices.diesel }}</li>
              <li>Gas: €{{ tankStation.fuelPrices.gas }}</li>
            </ul>
          </div>
          <div>
            <h3>Address:</h3>
            <span>{{ tankStation.address.street }} {{ tankStation.address.unitNumber }} {{ tankStation.address.zipCode }}</span>
          </div>
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
