<template>
  <main>
    <div>
      <router-link to="/create">+ Add a new tank station</router-link>
      <div>
        <button @click="filterTankStations('all')">All</button>
        <button @click="filterTankStations('euro95')">Euro95</button>
        <button @click="filterTankStations('diesel')">Diesel</button>
        <button @click="filterTankStations('gas')">Gas</button>
      </div>
      <ul>
        <li v-for="(tankStation, index) in selectedTankStations" :key="index">
          <h3>Name: {{ tankStation.name }}</h3>
          <div>
            <h3>Fuel Prices:</h3>
            <ul>
              <li v-if="tankStation.fuelPrices.euro95">Euro95: €{{ tankStation.fuelPrices.euro95 }}</li>
              <li v-if="tankStation.fuelPrices.diesel">Diesel: €{{ tankStation.fuelPrices.diesel }}</li>
              <li v-if="tankStation.fuelPrices.gas">Gas: €{{ tankStation.fuelPrices.gas }}</li>
            </ul>
          </div>
          <div>
            <h3>Address:</h3>
            <span>{{ tankStation.address.street }} {{ tankStation.address.unitNumber }} {{ tankStation.address.zipCode
            }}</span>
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
      tankStationStore: useTankStationStore(),
      selectedTankStations: useTankStationStore().tankStations,
    }
  },
  methods: {
    filterTankStations(fuelType) {
      if (fuelType === 'euro95') {
        this.selectedTankStations = this.tankStationStore.hasEuro95;
      } else if (fuelType === 'diesel') {
        this.selectedTankStations = this.tankStationStore.hasDiesel;
      } else if (fuelType === 'gas') {
        this.selectedTankStations = this.tankStationStore.hasGas;
      } else {
        this.selectedTankStations = this.tankStationStore.tankStations;
      }
    }
  }
}

</script>
